import { sendVerificationEmail } from "@/lib/authentication/email";
import db from "@/lib/db/db";
import { executeAction } from "@/lib/executeAction";
import { stripe } from "@/lib/stripe";
import { schema } from "@/lib/zod";
import { randomBytes } from "crypto";

const signUp = async (formData: FormData) => {
  return executeAction({
    actionFn: async () => {
      const email = formData.get("email");
      const password = formData.get("password");
      const firstName = formData.get("firstName");
      const lastName = formData.get("lastName");

      const validatedData = schema.parse({ email, password });
      const emailLower = validatedData.email.toLowerCase();

      const stripeCustomer = await stripe.customers.create({
        email: emailLower,
        name: `${firstName} ${lastName}`.trim(),
      });

      await db.user.create({
        data: {
          email: emailLower,
          password: validatedData.password,
          name: `${firstName} ${lastName}`.trim(),
          stripeCustomerId: stripeCustomer.id,
        },
      });

      const token = randomBytes(32).toString("hex");

      await db.verificationToken.create({
        data: {
          identifier: emailLower,
          token,
          expires: new Date(Date.now() + 60 * 60 * 1000),
        },
      });

      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
      const verifyUrl = `${baseUrl}/api/auth/verify-email?token=${token}&identifier=${emailLower}`;

      await sendVerificationEmail(emailLower, verifyUrl);

      // 👇 Retourne l'email ici
      return { email: emailLower };
    },

    successMessage: "Account created. Please check your email to verify.",
  });
};

export { signUp };
