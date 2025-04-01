"use client";

import { createCheckoutSession } from "@/lib/checkout";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";

interface BuyButtonProps {
    priceId: string;
    label: string;
}

export const BuyButton = ({ priceId, label }: BuyButtonProps) => {
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();
    const lang = pathname.includes("/ar") ? "ar" : pathname.includes("/en") ? "en" : "fr";

    return (
        <form action={async () => {
            try {
                setLoading(true);
                await createCheckoutSession(priceId, lang);
            } catch (error) {
                console.error("Error during checkout:", error);
            } finally {
                setLoading(false);
            }
        }}>
            <Button
                type="submit"
                className="w-full"
                disabled={loading}
            >
                {loading ? "Loading..." : label}
            </Button>
        </form>
    );
};