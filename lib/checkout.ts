"use server";

import { auth } from "@/lib/authentication/auth";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";

const PRICE_IDS = {
  BASIC: "price_1R9QOxKaMuKwxZvFPtkSEuZd",
  INTERMEDIATE: "price_1R9QOtKaMuKwxZvFny7LpDGU",
  ADVANCED: "price_1R9QOmKaMuKwxZvFWZfU4dFR",
};

export async function createCheckoutSession(priceId: string, lang: string) {
  if (!lang) {
    return { error: "Lang parameter is missing" };
  }

  const session = await auth();

  if (!session?.user) {
    return { redirect: `/${lang}/sign-in` };
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
    select: {
      stripeCustomerId: true,
      emailVerified: true,
      plan: true,
    },
  });

  if (!user?.emailVerified) {
    return {
      redirect: `/${lang}/verifymail?email=${encodeURIComponent(
        session.user.email!
      )}`,
    };
  }

  const userPlan = user?.plan;

  if (userPlan === "ADVANCED") {
    return { error: "You already have the highest plan." };
  }

  if (userPlan === "INTERMEDIATE") {
    if (priceId !== PRICE_IDS.ADVANCED) {
      return {
        error: "You can only upgrade to the ADVANCED plan.",
      };
    }
  }

  if (userPlan === "BASIC") {
    if (![PRICE_IDS.INTERMEDIATE, PRICE_IDS.ADVANCED].includes(priceId)) {
      return {
        error: "You can only upgrade to the INTERMEDIATE or ADVANCED plan.",
      };
    }
  }

  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const baseUrl = `${protocol}://${host}/${lang}`;

  const checkoutSession = await stripe.checkout.sessions.create({
    customer: user?.stripeCustomerId as string,
    customer_email: !user?.stripeCustomerId ? session.user.email! : undefined,
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/pricing`,
  });

  if (!checkoutSession.url) {
    return { error: "Échec de la création de la session de paiement." };
  }

  return { url: checkoutSession.url };
}
