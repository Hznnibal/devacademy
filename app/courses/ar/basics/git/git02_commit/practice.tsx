'use client';

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal } from "lucide-react";

export function CommitPractice() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>إنشاء الالتزام الأول</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-4">
                    <h3 className="font-semibold">1. إنشاء ملف README</h3>
                    <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm">touch README.md</code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        قم بإنشاء ملف README.md جديد في دليل مشروعك
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="font-semibold">2. التحقق من الحالة</h3>
                    <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm">git status</code>
                    </div>
                    <Alert>
                        <Terminal className="h-4 w-4" />
                        <AlertDescription>
                            سترى README.md مدرج كملف غير متعقب
                        </AlertDescription>
                    </Alert>
                </div>

                <div className="space-y-4">
                    <h3 className="font-semibold">3. إضافة الملف</h3>
                    <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm">git add README.md</code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        قم بإضافة الملف إلى منطقة الإعداد
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="font-semibold">4. الالتزام بالملف</h3>
                    <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm">git commit -m "Initial commit: Add README file"</code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        قم بإنشاء الالتزام الأول مع رسالة وصفية
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
