'use client'

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function ConfirmationPage() {
    const t = useTranslations();
    const router = useRouter();

    const handleRedirect = () => {
        router.push("/");
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <div className="bg-card p-8 rounded-lg shadow-lg">
                        <Mail className="mx-auto h-12 w-12 text-primary mb-4" />
                        <h1 className="text-2xl font-bold text-foreground mb-4">{t('confirmation.title')}</h1>
                        <p className="text-muted-foreground mb-6">{t('confirmation.subtitle')}</p>
                        <Button onClick={handleRedirect} className="w-full">
                            {t('confirmation.button')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
