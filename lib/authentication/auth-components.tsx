"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function LoginButton() {
    const params = useParams();
    const lang = params?.lang || "fr";
    const t = useTranslations('auth');

    return (
        <DropdownMenuItem asChild>
            <Link href={`/${lang}/sign-in`} className="flex w-full cursor-pointer items-center">
                <User className="mr-2 h-4 w-4" />
                {t('signIn')}
            </Link>
        </DropdownMenuItem>
    );
}

const SignOut = () => {
    const pathname = usePathname();
    const lang = pathname.includes('/ar') ? 'ar' : pathname.includes('/en') ? 'en' : 'fr';

    const t = useTranslations();
    const handleSignOut = async () => {
        await signOut({
            callbackUrl: `/${lang}`,
        });
    };

    return (
        <DropdownMenuItem
            className="text-destructive focus:text-destructive cursor-pointer"
            onSelect={(e) => {
                e.preventDefault();
                handleSignOut();
            }}
        >        <Button variant="destructive" className="flex w-full cursor-pointer items-center" onClick={handleSignOut}>
                {t('auth.signOut')}
            </Button>
        </DropdownMenuItem>
    );
};

export { SignOut };




