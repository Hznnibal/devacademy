'use client';

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal } from "lucide-react";

export function BasicUsage() {
    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>الاستخدام الأساسي لـ Git Log</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <Alert>
                    <Terminal className="h-4 w-4" />
                    <AlertDescription>
                        عرض سجل الالتزامات في مستودعك
                    </AlertDescription>
                </Alert>

                <div className="bg-muted p-6 rounded-lg space-y-4">
                    <code className="text-sm block">git log</code>
                    <div className="text-sm text-muted-foreground space-y-2">
                        <p className="text-lg leading-relaxed mb-4">يعرض:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>معرّف الالتزام (SHA) الفريد</li>
                            <li>اسم المؤلف والبريد الإلكتروني</li>
                            <li>تاريخ ووقت الالتزام</li>
                            <li>رسالة الالتزام</li>
                        </ul>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
