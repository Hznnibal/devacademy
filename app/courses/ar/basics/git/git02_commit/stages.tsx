'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitBranchPlus, GitCommit, GitCompare } from "lucide-react";

export function CommitStages() {
    const stages = [
        {
            icon: <GitCompare className="h-6 w-6" />,
            title: "الحالة",
            description: "تحقق من حالة دليل العمل الخاص بك",
            command: "git status",
            details: "تحقق من الملفات التي تم تعديلها والتي تحتاج إلى الالتزام"
        },
        {
            icon: <GitBranchPlus className="h-6 w-6" />,
            title: "إضافة",
            description: "إعداد تغييراتك",
            command: "git add <file>",
            details: "نقل الملفات إلى منطقة الإعداد لتحضيرها للالتزام"
        },
        {
            icon: <GitCommit className="h-6 w-6" />,
            title: "الالتزام",
            description: "حفظ تغييراتك",
            command: 'git commit -m "message"',
            details: "إنشاء لقطة للتغييرات المُعدة مع رسالة وصفية"
        }
    ];

    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>المراحل الثلاث للالتزام</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                    {stages.map((stage, index) => (
                        <div key={index} className="flex flex-col items-center p-6 bg-muted rounded-lg">
                            {stage.icon}
                            <h3 className="mt-4 font-semibold text-lg">{stage.title}</h3>
                            <p className="text-sm text-muted-foreground text-center mt-2">{stage.description}</p>
                            <code className="mt-4 px-3 py-1 bg-background rounded">{stage.command}</code>
                            <p className="text-sm text-muted-foreground text-center mt-4">{stage.details}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
