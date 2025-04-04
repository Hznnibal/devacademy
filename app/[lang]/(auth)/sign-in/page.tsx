"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { handleSignIn } from "@/lib/authentication/authActions";
import GoogleSignInButton from "@/lib/authentication/providers/google";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { } from "next/router";
import { useState } from "react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const t = useTranslations();
    const pathname = usePathname();
    const lang = pathname.split('/')[1];
    const router = useRouter();

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className=" bg-card p-8 space-y-6 rounded-lg shadow-lg">

                <div className="space-y-2 text-center">
                    <h1 className="text-2xl font-bold">{t("login.title")}</h1>
                    <p className="text-muted-foreground">{t("login.subtitle")}</p>
                </div>

                <form
                    className="space-y-4"
                    onSubmit={async (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        try {
                            await handleSignIn(formData, lang);
                            router.refresh(); // Force le rechargement de la session
                        } catch (error) {
                            console.error("Erreur lors de la connexion :", error);
                        }
                    }}
                >
                    <div className="space-y-2">
                        <Input
                            name="email"
                            type="email"
                            placeholder={t("login.emailPlaceholder")}
                            required
                            autoComplete="email"
                            className="bg-background"
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="relative">
                            <Input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder={t("login.passwordPlaceholder")}
                                required
                                autoComplete="current-password"
                                className="bg-background pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {showPassword ? (
                                    <EyeOffIcon className="h-5 w-5" />
                                ) : (
                                    <EyeIcon className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    <Button className="w-full" type="submit">
                        {t("login.submit")}
                    </Button>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-border"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                or
                            </span>
                        </div>
                    </div>
                    <GoogleSignInButton lang={lang} />

                </form>


                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-border"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            {t("login.noAccount")}
                        </span>
                    </div>
                </div>



                <div className="mt-4">
                    <Button asChild variant="outline" className="w-full">
                        <Link href={`/${lang}/sign-up`}>
                            {t("login.createAccount")}
                        </Link>
                    </Button>
                </div>
            </div>
        </div >
    );
}
