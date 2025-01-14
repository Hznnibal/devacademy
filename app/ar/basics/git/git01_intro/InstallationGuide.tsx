'use client';

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Command } from "lucide-react";

export function InstallationGuide() {
    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>تثبيت Git</CardTitle>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="windows" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="windows">ويندوز</TabsTrigger>
                        <TabsTrigger value="macos">ماك</TabsTrigger>
                        <TabsTrigger value="linux">لينكس</TabsTrigger>
                    </TabsList>

                    <TabsContent value="windows">
                        <div className="space-y-4">
                            <Alert>
                                <Command className="h-4 w-4" />
                                <AlertDescription>
                                    قم بتنزيل وتثبيت Git لنظام ويندوز
                                </AlertDescription>
                            </Alert>
                            <ol className="list-decimal list-inside space-y-2">
                                <li>قم بزيارة <a href="https://git-scm.com/download/win" className="text-primary hover:underline">git-scm.com/download/win</a></li>
                                <li>قم بتنزيل أحدث مثبت Git لنظام ويندوز</li>
                                <li>شغل المثبت واتبع معالج التثبيت</li>
                                <li>اختر الإعدادات الافتراضية ما لم يكن لديك تفضيلات محددة</li>
                            </ol>
                        </div>
                    </TabsContent>

                    <TabsContent value="macos">
                        <div className="space-y-4">
                            <Alert>
                                <Command className="h-4 w-4" />
                                <AlertDescription>
                                    قم بتثبيت Git باستخدام Homebrew أو قم بتنزيل المثبت
                                </AlertDescription>
                            </Alert>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-semibold">الخيار الأول: باستخدام Homebrew</p>
                                    <div className="bg-muted p-4 rounded-lg mt-2">
                                        <code className="text-sm">brew install git</code>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold">الخيار الثاني: باستخدام المثبت</p>
                                    <ol className="list-decimal list-inside space-y-2">
                                        <li>قم بزيارة <a href="https://git-scm.com/download/mac" className="text-primary hover:underline">git-scm.com/download/mac</a></li>
                                        <li>قم بتنزيل وتشغيل أحدث مثبت Git</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="linux">
                        <div className="space-y-4">
                            <Alert>
                                <Command className="h-4 w-4" />
                                <AlertDescription>
                                    قم بتثبيت Git باستخدام مدير الحزم الخاص بتوزيعتك
                                </AlertDescription>
                            </Alert>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-semibold">أوبونتو/ديبيان:</p>
                                    <div className="bg-muted p-4 rounded-lg mt-2">
                                        <code className="text-sm">sudo apt install git</code>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold">فيدورا:</p>
                                    <div className="bg-muted p-4 rounded-lg mt-2">
                                        <code className="text-sm">sudo dnf install git</code>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold">آرتش لينكس:</p>
                                    <div className="bg-muted p-4 rounded-lg mt-2">
                                        <code className="text-sm">sudo pacman -S git</code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
}
