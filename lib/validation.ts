import { z } from "zod";

export const SignUpSchema = (t: any) =>
  z
    .object({
      firstName: z
        .string()
        .min(2, { message: t("signUp.firstNameMin") })
        .max(50, { message: t("signUp.firstNameMax") }),
      lastName: z
        .string()
        .min(2, { message: t("signUp.lastNameMin") })
        .max(50, { message: t("signUp.lastNameMax") }),
      email: z.string().email({ message: t("signUp.invalidEmail") }),
      confirmEmail: z.string().email({ message: t("signUp.invalidEmail") }),
      password: z
        .string()
        .min(8, { message: t("signUp.passwordMin") })
        .regex(/[A-Z]/, { message: t("signUp.passwordUppercase") })
        .regex(/[a-z]/, { message: t("signUp.passwordLowercase") })
        .regex(/[0-9]/, { message: t("signUp.passwordNumber") }),
      confirmPassword: z.string(),
    })
    .refine((data) => data.email === data.confirmEmail, {
      message: t("signUp.emailsDontMatch"),
      path: ["confirmEmail"],
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("signUp.passwordsDontMatch"),
      path: ["confirmPassword"],
    });

export type SignUpFormData = z.infer<ReturnType<typeof SignUpSchema>>;
