'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RemoteCommands() {
    const commands = [
        {
            command: "git remote add origin <url>",
            description: "ربط مستودعك المحلي بمستودع GitHub بعيد",
            example: "git remote add origin https://github.com/username/repo.git"
        },
        {
            command: "git push -u origin main",
            description: "رفع الكود إلى GitHub وضبط التتبع",
            example: "رفع التزاماتك إلى المستودع البعيد"
        },
        {
            command: "git pull origin main",
            description: "تحميل التغييرات من GitHub",
            example: "تحديث المستودع المحلي الخاص بك بالتغييرات البعيدة"
        },
        {
            command: "git clone <url>",
            description: "نسخ مستودع بعيد إلى جهازك المحلي",
            example: "git clone https://github.com/username/repo.git"
        }
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle>العمل مع المستودعات البعيدة</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
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
