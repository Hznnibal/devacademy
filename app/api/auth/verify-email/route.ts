import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");
  const identifier = url.searchParams.get("identifier");

  if (!token || !identifier) {
    return NextResponse.json(
      { message: "Token and identifier are required." },
      { status: 400 }
    );
  }

  const verificationToken = await prisma.verificationToken.findUnique({
    where: {
      identifier_token: {
        identifier,
        token,
      },
    },
  });

  if (!verificationToken || verificationToken.expires < new Date()) {
    return NextResponse.json(
      { message: "Invalid or expired token." },
      { status: 400 }
    );
  }

  await prisma.user.update({
    where: { email: verificationToken.identifier },
    data: {
      emailVerified: new Date(),
    },
  });

  await prisma.verificationToken.delete({
    where: {
      identifier_token: {
        identifier,
        token,
      },
    },
  });

  return NextResponse.redirect("http://localhost:3000/en/verifysuccess");
}
