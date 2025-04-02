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
      console.error("Erreur lors de la connexion:", result?.error); // Ajoute un log pour afficher l'erreur
      throw new Error("Erreur lors de la connexion.");
    }

    // Si la connexion réussit, redirige vers la page dans la langue choisie
    redirect(`/${lang}`);
  } catch (error) {
    // Gestion des erreurs spécifiques liées à l'authentification
    if (error instanceof AuthError) {
      console.error("Erreur d'authentification:", error); // Log des erreurs d'authentification
      switch (error.type) {
        case "CredentialsSignin":
          throw new Error("Identifiants invalides.");
        default:
          throw new Error(
            "Une erreur est survenue lors de l'authentification."
          );
      }
    }

    // Gestion des autres erreurs
    console.error("Erreur inconnue:", error);
    throw new Error("Une erreur est survenue.");
  }
}

export async function handleGoogleSignIn() {
  await signIn("google");
}
