import db from "@/lib/db/db";
import { executeAction } from "@/lib/executeAction";
import { stripe } from "@/lib/stripe";
import { schema } from "@/lib/zod";

const signUp = async (formData: FormData) => {
  return executeAction({
    actionFn: async () => {
      const email = formData.get("email");
      const password = formData.get("password");
      const firstName = formData.get("firstName");
      const lastName = formData.get("lastName");

      const validatedData = schema.parse({ email, password });

      const stripeCustomer = await stripe.customers.create({
        email: validatedData.email.toLowerCase(),
        name: `${firstName} ${lastName}`.trim(),
      });

      await db.user.create({
        data: {
          email: validatedData.email.toLowerCase(),
          password: validatedData.password,
          name: `${firstName} ${lastName}`.trim(),
          stripeCustomerId: stripeCustomer.id,
        },
      });
    },
    successMessage: "Signed up successfully",
  });
};

export { signUp };
