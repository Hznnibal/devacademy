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

const PLAN_AMOUNTS = {
  FREE: 0,
  BASIC: 9900,
  INTERMEDIATE: 24900,
  ADVANCED: 39900,
};

type PlanType = keyof typeof PLAN_AMOUNTS;
type PriceIdType = (typeof PRICE_IDS)[keyof typeof PRICE_IDS];

export async function createCheckoutSession(
  priceId: PriceIdType,
  lang: string
) {
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

  const userPlan = (user?.plan || "FREE") as PlanType;

  if (userPlan === "ADVANCED") {
    return { error: "You already have the highest plan." };
  }

  if (userPlan === "INTERMEDIATE" && priceId !== PRICE_IDS.ADVANCED) {
    return {
      error: "You can only upgrade to the ADVANCED plan.",
    };
  }

  if (
    userPlan === "BASIC" &&
    ![PRICE_IDS.INTERMEDIATE, PRICE_IDS.ADVANCED].includes(priceId)
  ) {
    return {
      error: "You can only upgrade to the INTERMEDIATE or ADVANCED plan.",
    };
  }

  const currentPlanAmount = PLAN_AMOUNTS[userPlan];
  let targetPlan: PlanType = "BASIC";

  Object.entries(PRICE_IDS).forEach(([plan, id]) => {
    if (id === priceId) {
      targetPlan = plan as PlanType;
    }
  });

  const targetPlanAmount = PLAN_AMOUNTS[targetPlan];
  const amountToCharge = targetPlanAmount - currentPlanAmount;

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
        price_data: {
          currency: "eur",
          unit_amount: amountToCharge,
          product_data: {
            name: `Upgrade from ${userPlan} to ${targetPlan}`,
            description: `${targetPlanAmount / 100}€ - ${
              currentPlanAmount / 100
            }€ = ${amountToCharge / 100}€`,
          },
        },
        quantity: 1,
      },
    ],
    success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/pricing`,
    metadata: {
      upgrade_to: targetPlan,
      previous_plan: userPlan,
      original_price: targetPlanAmount.toString(),
      discount: currentPlanAmount.toString(),
      charged_amount: amountToCharge.toString(),
    },
  });

  if (!checkoutSession.url) {
    return { error: "Échec de la création de la session de paiement." };
  }

  return { url: checkoutSession.url };
}
