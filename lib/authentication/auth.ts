import db from "@/lib/db/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
// import GitHub from "next-auth/providers/github";
import { schema } from "@/lib/zod";
import { saltAndHashPassword } from "@/utils/password";
import GitHubProvider from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { prisma } from "../prisma";
import { stripe } from "../stripe";

const adapter = PrismaAdapter(db);

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter,
  secret: process.env.AUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validatedCredentials = schema.parse(credentials);
        const user = await db.user.findFirst({
          where: {
            email: validatedCredentials.email,
          },
        });

        if (!user) {
          throw new Error("Invalid credentials.");
        }
        if (validatedCredentials.password) {
          const hashedPassword = await saltAndHashPassword(
            validatedCredentials.password
          );
          await prisma.user.update({
            where: {
              id: user.id,
            },
            data: {
              password: hashedPassword,
            },
          });
        }

        console.log("Utilisateur connecté:", user);
        return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
      }

      if (token.userId) {
        const userFromDb = await db.user.findUnique({
          where: { id: token.userId as string },
          select: {
            plan: true,
            isActive: true,
            image: true,
            name: true,
          },
        });

        if (userFromDb) {
          token.plan = userFromDb.plan || "BASIC";
          token.isActive = userFromDb.isActive;
          token.image = userFromDb.image || null;
          token.name = userFromDb.name || "Utilisateur";
        }
      }

      return token;
    },

    async session({ session }) {
      if (session?.user) {
        const userFromDb = await db.user.findFirst({
          where: {
            email: session.user.email as string,
          },
          select: {
            id: true,
            plan: true,
            isActive: true,
            image: true,
            name: true,
          },
        });

        if (userFromDb) {
          session.user.id = userFromDb.id;
          session.user.plan = userFromDb.plan || "BASIC";
          session.user.isActive = userFromDb.isActive;
          session.user.image = userFromDb.image || undefined;
          session.user.name = userFromDb.name || "Utilisateur";
        }
      }
      return session;
    },
  },
  events: {
    createUser: async (message) => {
      const userId = message.user.id;
      const email = message.user.email;
      const name = message.user.name;

      if (!userId || !email) {
        console.log("Données utilisateur manquantes", message);
        return;
      }
      const stripeCustomer = await stripe.customers.create({
        email,
        name: name ?? undefined,
      });
      await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          stripeCustomerId: stripeCustomer.id,
        },
      });
      console.log("Utilisateur créé avec Stripe", {
        userId,
        stripeCustomerId: stripeCustomer.id,
      });
    },
  },
  session: {
    strategy: "jwt",
  },
});
