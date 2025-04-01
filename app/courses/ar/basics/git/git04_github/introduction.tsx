'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Introduction() {
    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>ما هو GitHub؟</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                    GitHub هو منصة قائمة على الويب تستضيف مستودعات Git وتوفر ميزات إضافية للتعاون. مع أكثر من 100 مليون
                    مطور حول العالم، يعد أكبر خدمة استضافة لمستودعات Git ومركز للمشاريع مفتوحة المصدر.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">الميزات الرئيسية</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• استضافة المستودعات</li>
                            <li>• تتبع المشاكل</li>
                            <li>• طلبات السحب</li>
                            <li>• إدارة المشاريع</li>
                            <li>• التعاون بين الفرق</li>
                        </ul>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">الفوائد</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• نسخ احتياطي للكود</li>
                            <li>• التحكم في الإصدارات</li>
                            <li>• أدوات التعاون</li>
                            <li>• رؤية المشروع</li>
                            <li>• المشاركة المجتمعية</li>
                        </ul>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
