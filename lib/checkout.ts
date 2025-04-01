"use server";

import { auth } from "@/lib/authentication/auth";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function createCheckoutSession(priceId: string, lang: string) {
  if (!lang) {
    throw new Error("Lang parameter is missing");
  }

  const session = await auth();

  if (!session?.user) {
    throw new Error("User not authenticated");
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
    select: {
      stripeCustomerId: true,
    },
  });

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
    throw new Error("Failed to create checkout session");
  }

  redirect(checkoutSession.url);
}
