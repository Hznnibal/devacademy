"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Bell, Globe, Lock, User } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SettingsPage() {
    const t = useTranslations("Settings");

    return (
        <div className="container mx-auto p-6 space-y-8">
            <h1 className="text-3xl font-bold">{t("title")}</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="p-6 lg:col-span-2 space-y-6">
                    <div className="flex items-center gap-2">
                        <User className="h-5 w-5" />
                        <h2 className="text-xl font-semibold">{t("profile.title")}</h2>
                    </div>

                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">{t("profile.fullName")}</Label>
                            <Input id="name" placeholder="John Doe" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">{t("profile.email")}</Label>
                            <Input id="email" type="email" placeholder="john@example.com" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="bio">{t("profile.bio")}</Label>
                            <textarea
                                id="bio"
                                className="min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                placeholder={t("profile.bioPlaceholder")}
                            />
                        </div>
                    </div>

                    <Button>{t("profile.save")}</Button>
                </Card>

                <div className="space-y-6">
                    <Card className="p-6 space-y-6">
                        <div className="flex items-center gap-2">
                            <Bell className="h-5 w-5" />
                            <h2 className="text-xl font-semibold">{t("notifications.title")}</h2>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="email-notifs">{t("notifications.email")}</Label>
                                <Switch id="email-notifs" />
                            </div>
                            <div className="flex items-center justify-between">
                                <Label htmlFor="progress-notifs">{t("notifications.progress")}</Label>
                                <Switch id="progress-notifs" />
                            </div>
                            <div className="flex items-center justify-between">
                                <Label htmlFor="news-notifs">{t("notifications.newsletter")}</Label>
                                <Switch id="news-notifs" />
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6 space-y-6">
                        <div className="flex items-center gap-2">
                            <Globe className="h-5 w-5" />
                            <h2 className="text-xl font-semibold">{t("language.title")}</h2>
                        </div>

                        <div className="space-y-4">
                            <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                <option value="fr">{t("language.french")}</option>
                                <option value="en">{t("language.english")}</option>
                                <option value="ar">{t("language.arabic")}</option>
                            </select>
                        </div>
                    </Card>

                    <Card className="p-6 space-y-6">
                        <div className="flex items-center gap-2">
                            <Lock className="h-5 w-5" />
                            <h2 className="text-xl font-semibold">{t("security.title")}</h2>
                        </div>

                        <div className="space-y-4">
                            <Button variant="outline" className="w-full">
                                {t("security.changePassword")}
                            </Button>
                            <Button variant="outline" className="w-full">
                                {t("security.enable2FA")}
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
