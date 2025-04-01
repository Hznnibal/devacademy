'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, FolderGit, GitPullRequest } from "lucide-react";

export function GitAreas() {
    const areas = [
        {
            icon: <FolderGit className="h-6 w-6" />,
            title: "دليل العمل",
            description: "الملفات الفعلية حيث تقوم بإجراء التغييرات",
        },
        {
            icon: <GitPullRequest className="h-6 w-6" />,
            title: "منطقة التهيئة (الفهرس)",
            description: "منطقة الإعداد للملفات التي ترغب في حفظها",
        },
        {
            icon: <Database className="h-6 w-6" />,
            title: "المستودع",
            description: "قاعدة البيانات لجميع التغييرات المحفوظة",
        }
    ];

    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>مناطق Git</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                    {areas.map((area, index) => (
                        <div key={index} className="flex flex-col items-center p-6 bg-muted rounded-lg">
                            {area.icon}
                            <h3 className="mt-4 font-semibold text-lg">{area.title}</h3>
                            <p className="text-sm text-muted-foreground text-center mt-2">{area.description}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
