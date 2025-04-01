"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MailCheck, RefreshCw } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function VerifyEmail() {
    const [isResending, setIsResending] = useState(false);
    const pathname = usePathname();
    const lang = pathname.split("/")[1];
    const t = useTranslations();
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get("email");

    const handleResendEmail = async () => {
        setIsResending(true);
        try {
            const res = await fetch("/api/auth/resend-verification", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();
            if (data.success) {
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
        } catch (error) {
            console.error("Error resending verification email:", error);
        } finally {
            setIsResending(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <Card className="w-full max-w-md p-6 space-y-6">
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="rounded-full bg-primary/10 p-3">
                        <MailCheck className="w-12 h-12 text-primary" />
                    </div>
                    <h1 className="text-2xl font-bold">{t("verifyEmail.title")}</h1>
                    <p className="text-muted-foreground">
                        {t("verifyEmail.description", { email: email || t("verifyEmail.yourEmail") })}
                    </p>
                </div>

                <div className="space-y-4">
                    <Button
                        variant="outline"
                        className="w-full"
                        onClick={handleResendEmail}
                        disabled={isResending}
                    >
                        {isResending && <RefreshCw className="mr-2 h-4 w-4 animate-spin" />}
                        {t("verifyEmail.resendButton")}
                    </Button>

                    <Button
                        variant="ghost"
                        className="w-full"
                        onClick={() => router.push(`/${lang}/sign-in`)}
                    >
                        {t("verifyEmail.backToSignIn")}
                    </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                    <p>
                        {t("verifyEmail.checkSpam")}{" "}
                        <a href="#" className="text-primary hover:underline">
                            {t("verifyEmail.contactSupport")}
                        </a>
                    </p>
                </div>
            </Card>
        </div>
    );
}