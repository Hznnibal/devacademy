'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AdvancedOptions() {
    const options = [
        {
            command: "git log --oneline",
            description: "عرض مضغوط مع التزام واحد لكل سطر",
            example: "a1b2c3d الالتزام الأولي"
        },
        {
            command: "git log --graph",
            description: "إظهار رسم ASCII البياني لتاريخ الفروع والدمج",
            example: "* التزام\n|\n* التزام"
        },
        {
            command: "git log -p",
            description: "إظهار التغييرات (patch) المُقدمة مع كل التزام",
            example: "عرض تغييرات الملفات بالتفصيل"
        },
        {
            command: "git log --stat",
            description: "عرض إحصائيات حول الملفات التي تم تعديلها في كل التزام",
            example: "عرض الملفات التي تم تغييرها والإضافات/الحذف"
        },
        {
            command: "git log --author=\"name\"",
            description: "تصفية الالتزامات حسب المؤلف",
            example: "عرض الالتزامات بواسطة مؤلف محدد"
        }
    ];

    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>خيارات السجل المتقدمة</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {options.map((option, index) => (
                        <div key={index} className="bg-muted p-4 rounded-lg">
                            <code className="text-sm block mb-2">{option.command}</code>
                            <p className="text-sm text-muted-foreground mb-2">{option.description}</p>
                            <div className="bg-background p-2 rounded text-xs font-mono">
                                {option.example}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
