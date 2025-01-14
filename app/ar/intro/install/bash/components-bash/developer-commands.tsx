'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DeveloperCommands() {
    const commands = [
        {
            command: "npm",
            description: "أوامر مدير حزم Node",
            example: "npm install, npm start, npm run build"
        },
        {
            command: "curl",
            description: "نقل البيانات من/إلى الخوادم",
            example: "curl https://api.example.com"
        },
        {
            command: "ssh",
            description: "اتصال Shell آمن",
            example: "ssh user@hostname"
        },
        {
            command: "grep",
            description: "البحث عن أنماط النصوص",
            example: "grep -r \"TODO\" ."
        },
        {
            command: "chmod",
            description: "تغيير صلاحيات الملفات",
            example: "chmod +x script.sh"
        },
        {
            command: "wget",
            description: "تحميل الملفات من الإنترنت",
            example: "wget https://example.com/file.zip"
        }
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle>أوامر خاصة بالمطورين</CardTitle>
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
