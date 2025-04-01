"use server";

import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { signIn } from "./auth";

export async function handleSignIn(formData: FormData, lang: string) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    throw new Error("Email et mot de passe sont requis.");
  }

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!result || result.error) {
      throw new Error("Erreur lors de la connexion.");
    }

    redirect(`/${lang}`);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          throw new Error("Identifiants invalides.");
        default:
          throw new Error("Une erreur est survenue.");
      }
    }
    throw error;
  }
}

export async function handleGoogleSignIn() {
  await signIn("google");
}
