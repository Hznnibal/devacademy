'use client';

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal } from "lucide-react";

export function SetupGuide() {
    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>إعداد GitHub</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-4">
                    <h3 className="font-semibold">1. إنشاء حساب على GitHub</h3>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                        <li>قم بزيارة <a href="https://github.com" className="text-primary hover:underline">github.com</a></li>
                        <li>انقر على "Sign up"</li>
                        <li>اتبع عملية التسجيل</li>
                        <li>قم بالتحقق من عنوان بريدك الإلكتروني</li>
                    </ol>
                </div>

                <div className="space-y-4">
                    <h3 className="font-semibold">2. إنشاء رمز وصول شخصي</h3>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                        <li>اذهب إلى إعدادات GitHub</li>
                        <li>اختر "Developer settings"</li>
                        <li>انقر على "Personal access tokens"</li>
                        <li>أنشئ رمز وصول جديد مع الأذونات اللازمة</li>
                    </ol>
                </div>

                <Alert>
                    <Terminal className="h-4 w-4" />
                    <AlertDescription>
                        حافظ على أمان رمز الوصول الخاص بك! إنه يعمل ككلمة مرور لعمليات Git.
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>
    );
}
