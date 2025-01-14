'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SystemCommands() {
    const commands = [
        {
            command: "ps",
            description: "عرض العمليات الجارية",
            example: "ps aux | grep node"
        },
        {
            command: "kill",
            description: "إنهاء العمليات",
            example: "kill -9 <process-id>"
        },
        {
            command: "df",
            description: "عرض استخدام مساحة القرص",
            example: "df -h"
        },
        {
            command: "du",
            description: "عرض استخدام مساحة الدليل",
            example: "du -sh *"
        },
        {
            command: "top",
            description: "مراقبة عمليات النظام",
            example: "top"
        }
    ];

    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>أوامر إدارة النظام</CardTitle>
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
