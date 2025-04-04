"use client";

import { createCheckoutSession } from "@/lib/checkout";
import { usePathname } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";

interface BuyButtonProps {
    priceId: string;
    label: string;
}

export const BuyButton = ({ priceId, label }: BuyButtonProps) => {
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const lang = pathname.includes("/ar") ? "ar" : pathname.includes("/en") ? "en" : "fr";

    const handleCheckout = () => {
        startTransition(async () => {
            const res = await createCheckoutSession(priceId, lang);

            if (res?.redirect) {
                window.location.href = res.redirect;
                return;
            }

            if (res?.error) {
                toast.error(res.error);
                return;
            }

            if (res?.url) {
                window.location.href = res.url;
            } else {
                toast.error("Une erreur est survenue lors du paiement.");
            }
        });
    };

    return (
        <Button
            type="button"
            className="w-full"
            onClick={handleCheckout}
            disabled={isPending}
        >
            {isPending ? "Chargement..." : label}
        </Button>
    );
};
