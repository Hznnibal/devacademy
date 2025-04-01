"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export default function GoogleSignInButton({ lang }: { lang: string }) {
    const router = useRouter();

    return (
        <Button
            className="w-full"
            onClick={async () => {
                await signIn("google", { callbackUrl: `/${lang}` });
                router.push(`/${lang}`);
            }}
        >
            <FcGoogle className="text-2xl" />
            <span className="font-medium ml-2">Login with Google</span>
        </Button>
    );
}
