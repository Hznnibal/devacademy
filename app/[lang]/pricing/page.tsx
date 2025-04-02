"use client";

import { BuyButton } from "@/components/buy/BuyButton";
import { Card } from "@/components/ui/card";
import { Check, GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pricingPlans = [
    { key: "pricing.beginner", priceId: "price_1R9QOxKaMuKwxZvFPtkSEuZd" },
    { key: "pricing.intermediate", priceId: "price_1R9QOtKaMuKwxZvFny7LpDGU", popular: true },
    { key: "pricing.advanced", priceId: "price_1R9QOmKaMuKwxZvFWZfU4dFR" },
    { key: "pricing.advanced", priceId: "price_1R9QhCKaMuKwxZvF8P8cyvSA" }
];

export default function Page() {
    const t = useTranslations();
    const pathname = usePathname();
    const lang = pathname.includes('/ar') ? 'ar' : pathname.includes('/en') ? 'en' : 'fr';


    return (
        <div className="min-h-screen bg-background py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <GraduationCap className="h-6 w-6" />
                    <Link href={`/${lang}`} className="text-xl font-bold">
                        Barmajah Academy
                    </Link>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        {t("pricing.title")}
                    </h1>
                    <p className="mt-4 text-xl text-muted-foreground">{t("pricing.subtitle")}</p>
                </div>

                <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {pricingPlans.map((plan) => {
                        const features = t.raw(`${plan.key}.features`);

                        return (
                            <Card
                                key={plan.key}
                                className={`relative flex flex-col rounded-2xl p-8 shadow-lg bg-card ${plan.popular
                                    ? "border-2 border-primary scale-105 z-10"
                                    : "border border-border"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                                        <span className="inline-flex rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                                            {t("pricing.popular")}
                                        </span>
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-card-foreground">
                                        {t(`${plan.key}.name`)}
                                    </h3>
                                    <p className="mt-4 text-sm text-muted-foreground">
                                        {t(`${plan.key}.description`)}
                                    </p>
                                    <div className="mt-6 flex items-baseline">
                                        <span className="text-5xl font-bold tracking-tight text-card-foreground">
                                            {t(`${plan.key}.price`)}
                                        </span>
                                        <span className="ml-1 text-sm text-muted-foreground">
                                            {t(`${plan.key}.duration`)}
                                        </span>
                                    </div>
                                </div>

                                <ul className="mb-8 space-y-4 flex-1">
                                    {Array.isArray(features) &&
                                        features.map((feature, index) => (
                                            <li key={index} className="flex items-center gap-3">
                                                <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                                                <span className="text-sm text-card-foreground">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                </ul>

                                <BuyButton priceId={plan.priceId} label={t("pricing.cta")} />
                            </Card>
                        );
                    })}
                </div>

                <p className="mt-12 text-center text-base text-muted-foreground">
                    {t("pricing.footer")}
                </p>
            </div>
        </div >
    );
}