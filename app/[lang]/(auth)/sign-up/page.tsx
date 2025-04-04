"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignUpSchema, type SignUpFormData } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Page = () => {
    const [isLoading, setIsLoading] = useState(false);
    const pathname = usePathname();
    const lang = pathname.split("/")[1];
    const t = useTranslations();
    const router = useRouter();
    const signUpSchema = SignUpSchema(t);

    const form = useForm<SignUpFormData>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            confirmEmail: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (data: SignUpFormData) => {
        setIsLoading(true);
        try {
            const formData = new FormData();
            const { ...submitData } = data;
            Object.entries(submitData).forEach(([key, value]) => {
                formData.append(key, value);
            });

            const res = await fetch("/api/auth/sign-up", {
                method: "POST",
                body: formData,
            });

            const result = await res.json();
            if (result.success) {
                router.push(`/${lang}/verifymail?email=${encodeURIComponent(data.email)}`);
            } else {
                console.error("Erreur lors de l'inscription", result.error);
            }
        } catch (error) {
            console.error("Erreur de connexion", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="w-1/4 mx-auto space-y-6">
                <h1 className="text-2xl font-bold text-center mb-6">{t("signUp.title")}</h1>
                <div className=" bg-card p-8 space-y-6 rounded-lg shadow-lg">
                    <Form {...form}>
                        <form
                            className="space-y-4"
                            onSubmit={form.handleSubmit(onSubmit)}
                        >
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t("signUp.firstName")}</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder={t("signUp.firstNamePlaceholder")}
                                                    autoComplete="given-name"
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-700" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem >
                                            <FormLabel>{t("signUp.lastName")}</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder={t("signUp.lastNamePlaceholder")}
                                                    autoComplete="family-name"
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-700" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t("signUp.email")}</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="email"
                                                    placeholder={t("signUp.emailPlaceholder")}
                                                    autoComplete="email"
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-700" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="confirmEmail"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t("signUp.confirmEmail")}</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="email"
                                                    placeholder={t("signUp.confirmEmailPlaceholder")}
                                                    autoComplete="email"
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-700" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t("signUp.password")}</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="password"
                                                    placeholder={t("signUp.passwordPlaceholder")}
                                                    autoComplete="new-password"
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-700" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t("signUp.confirmPassword")}</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="password"
                                                    placeholder={t("signUp.confirmPasswordPlaceholder")}
                                                    autoComplete="new-password"
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-700" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button className="w-full" type="submit" disabled={isLoading}>
                                {t("signUp.submit")}
                            </Button>
                        </form>
                    </Form>

                    <div className="text-center text-sm">
                        <p className="text-muted-foreground">
                            {t("signUp.termsAndConditions")}{" "}
                            <a href="#" className="text-primary hover:underline">
                                {t("signUp.termsLink")}
                            </a>{" "}
                            {t("signUp.and")}{" "}
                            <a href="#" className="text-primary hover:underline">
                                {t("signUp.privacyPolicy")}
                            </a>
                            .
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-border"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="px-2 text-muted-foreground">
                                {t("signUp.alreadyRegistered")}
                            </span>
                        </div>
                    </div>

                    <div className="mt-4">
                        <Button asChild variant="outline" className="w-full">
                            <Link href={`/${lang}/sign-in`}>
                                {t("signUp.signInLink")}
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;