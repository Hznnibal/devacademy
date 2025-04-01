"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SuccessPage() {
    const t = useTranslations("pricing");
    const pathname = usePathname();
    const lang = pathname.includes('/ar') ? 'ar' : pathname.includes('/en') ? 'en' : 'fr';

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white dark:bg-card rounded-2xl shadow-xl p-8 text-center">
                <div className="mb-6 flex justify-center">
                    <CheckCircle2 className="h-16 w-16 text-green-500" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    {t('success.title')}
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                    {t('success.description')}
                </p>
                <div className="space-y-4">
                    <Button asChild className="w-full">
                        <Link href={`/courses/${lang}/intro/intro/introduction`}>{t("success.button")}</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}