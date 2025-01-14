'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BasicCommands() {
    const commands = [
        {
            command: "pwd",
            description: "طباعة الدليل العامل - يعرض مسار الدليل الحالي",
            example: "/home/user/projects"
        },
        {
            command: "ls",
            description: "قائمة محتويات الدليل",
            example: "ls -la (عرض جميع الملفات بما في ذلك الملفات المخفية مع التفاصيل)"
        },
        {
            command: "cd",
            description: "تغيير الدليل",
            example: "cd projects, cd .., cd ~"
        },
        {
            command: "clear",
            description: "مسح شاشة الطرفية",
            example: "clear"
        },
        {
            command: "history",
            description: "عرض سجل الأوامر",
            example: "history | grep git"
        }
    ];

    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>أوامر التنقل الأساسية</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {commands.map((cmd, index) => (
                        <div key={index} className="bg-muted p-4 rounded-lg">
                            <code className="text-sm block mb-2">{cmd.command}</code>
                            <p className="text-sm text-muted-foreground mb-2">{cmd.description}</p>
                            <div className="bg-background p-2 rounded text-xs font-mono">
                                {cmd.example}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
