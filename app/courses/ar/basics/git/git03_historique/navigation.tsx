'use client';

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitBranch } from "lucide-react";

export function Navigation() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>التنقل عبر التاريخ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <Alert>
                    <GitBranch className="h-4 w-4" />
                    <AlertDescription>
                        استخدم git checkout للتنقل بين الالتزامات
                    </AlertDescription>
                </Alert>

                <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm block mb-2">git checkout &lt;commit-hash&gt;</code>
                        <p className="text-sm text-muted-foreground">
                            انتقل بـ HEAD إلى التزام محدد لعرض حالة المشروع في تلك النقطة
                        </p>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm block mb-2">git checkout master</code>
                        <p className="text-sm text-muted-foreground">
                            عد إلى آخر التزام في الفرع الرئيسي
                        </p>
                    </div>

                    <div className="p-4 border rounded-lg">
                        <p className="text-sm font-medium mb-2">ملاحظة عن HEAD:</p>
                        <p className="text-sm text-muted-foreground">
                            HEAD هو مؤشر إلى الالتزام الحالي الذي تشاهده. عادة ما يشير إلى آخر التزام في الفرع الحالي،
                            لكن يمكن تحريكه إلى أي التزام باستخدام checkout.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
