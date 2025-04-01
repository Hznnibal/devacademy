import { prisma } from "@/lib/prisma";
import { UserPlan } from "@prisma/client";
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY");
}

if (!process.env.STRIPE_WEBHOOK_SECRET) {
  throw new Error("Missing STRIPE_WEBHOOK_SECRET");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-01-27.acacia",
});

const PLAN_MAPPING: Record<string, UserPlan> = {
  price_free: "FREE",
  price_1R6YppKaMuKwxZvFi4scfXLI: "BASIC",
  price_1R6YsZKaMuKwxZvFLYXkFy9L: "INTERMEDIATE",
  price_1R6YuXKaMuKwxZvFP3OpqIkF: "ADVANCED",
};

const PLAN_HIERARCHY: Record<UserPlan, number> = {
  FREE: 0,
  BASIC: 1,
  INTERMEDIATE: 2,
  ADVANCED: 3,
};

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("Stripe-Signature");

  if (!signature) {
    return new Response("Missing Stripe signature", { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.error("Webhook signature verification failed:", error);
    return new Response(
      `Webhook Error: ${
        error instanceof Error ? error.message : "Unknown Error"
      }`,
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        await handleOneTimePayment(session);
        break;
      }
      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log("Payment succeeded:", paymentIntent.id);
        break;
      }
      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.error("Payment failed:", paymentIntent.id);
        break;
      }
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return new Response(null, { status: 200 });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return new Response(
      `Webhook Error: ${
        error instanceof Error ? error.message : "Unknown Error"
      }`,
      { status: 500 }
    );
  }
}

async function handleOneTimePayment(session: Stripe.Checkout.Session) {
  const customerId = session.customer as string;

  if (!customerId) {
    throw new Error("No customer ID found in session");
  }

  try {
    const user = await prisma.user.findUnique({
      where: { stripeCustomerId: customerId },
    });

    if (!user) {
      throw new Error(`No user found with Stripe customer ID: ${customerId}`);
    }

    const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
      expand: ["data.price"],
    });

    if (!lineItems.data.length) {
      throw new Error("No line items found in checkout session");
    }

    const priceId = lineItems.data[0].price?.id;

    if (!priceId) {
      throw new Error("No price ID found in line item");
    }

    if (!PLAN_MAPPING[priceId]) {
      throw new Error(`Invalid price ID: ${priceId}`);
    }

    const newPlan = PLAN_MAPPING[priceId];

    if (user.plan === "ADVANCED") {
      console.log(
        `User ${user.id} already has ADVANCED plan. Skipping upgrade.`
      );
      return;
    }

    if (PLAN_HIERARCHY[newPlan] <= PLAN_HIERARCHY[user.plan]) {
      console.log(
        `User ${user.id} attempted to purchase a lower or same tier plan. Current: ${user.plan}, Attempted: ${newPlan}`
      );
      return;
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        plan: newPlan,
        updatedAt: new Date(),
      },
    });

    console.log(
      `Successfully upgraded plan from ${user.plan} to ${newPlan} for user ${user.id}`
    );
  } catch (error) {
    console.error("Error in handleOneTimePayment:", error);
    throw error;
  }
}
