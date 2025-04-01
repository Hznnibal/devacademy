"use client";

import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CancelPage() {
    const t = useTranslations("pricing");
    const pathname = usePathname();
    const lang = pathname.includes('/ar') ? 'ar' : pathname.includes('/en') ? 'en' : 'fr';

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-50 to-white dark:from-red-950 dark:to-background flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white dark:bg-card rounded-2xl shadow-xl p-8 text-center">
                <div className="mb-6 flex justify-center">
                    <XCircle className="h-16 w-16 text-red-500" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    {t("cancel.title")}
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                    {t("cancel.description")}
                </p>
                <div className="space-y-4">
                    <Button asChild className="w-full">
                        <Link href={`/${lang}/pricing`}>{t("cancel.tryAgain")}</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
