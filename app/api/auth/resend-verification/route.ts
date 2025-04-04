import { sendVerificationEmail } from "@/lib/authentication/email";
import { prisma } from "@/lib/prisma";
import { randomBytes } from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (user.emailVerified) {
      return NextResponse.json(
        { error: "Email is already verified" },
        { status: 400 }
      );
    }

    // Supprimer anciens tokens
    await prisma.verificationToken.deleteMany({
      where: { identifier: email },
    });

    // Nouveau token
    const token = randomBytes(32).toString("hex");

    await prisma.verificationToken.create({
      data: {
        identifier: email,
        token,
        expires: new Date(Date.now() + 60 * 60 * 1000),
      },
    });

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
    const verifyUrl = `${baseUrl}/api/auth/verify-email?token=${token}&identifier=${email}`;

    await sendVerificationEmail(email, verifyUrl);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error in resend-verification:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
