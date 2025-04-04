'use client'

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MailCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function VerifySuccess() {
    const t = useTranslations();
    const pathname = usePathname();
    const lang = pathname.split("/")[1];
    const router = useRouter();

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <Card className="w-full max-w-md p-6 space-y-6">
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="rounded-full bg-primary/10 p-3">
                        <MailCheck className="w-12 h-12 text-primary" />
                    </div>
                    <h1 className="text-2xl font-bold">{t("verifyEmail.successTitle")}</h1>
                    <p className="text-muted-foreground">
                        {t("verifyEmail.successDescription")}
                    </p>
                </div>

                <div className="space-y-4">
                    <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => router.push(`/${lang}/sign-in`)}
                    >
                        {t("verifyEmail.goToSignIn")}
                    </Button>
                </div>
            </Card>
        </div>
    );
}
