import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      plan: string;
      isActive: boolean;
      image?: string;
      name?: string;
    };
  }
}
