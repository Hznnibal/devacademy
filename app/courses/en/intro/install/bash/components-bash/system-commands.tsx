'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SystemCommands() {
    const commands = [
        {
            command: "ps",
            description: "Display running processes",
            example: "ps aux | grep node"
        },
        {
            command: "kill",
            description: "Terminate processes",
            example: "kill -9 <process-id>"
        },
        {
            command: "df",
            description: "Show disk space usage",
            example: "df -h"
        },
        {
            command: "du",
            description: "Show directory space usage",
            example: "du -sh *"
        },
        {
            command: "top",
            description: "Monitor system processes",
            example: "top"
        }
    ];

    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>System Management Commands</CardTitle>
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