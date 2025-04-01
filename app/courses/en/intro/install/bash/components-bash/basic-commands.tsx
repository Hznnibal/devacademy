'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BasicCommands() {
    const commands = [
        {
            command: "pwd",
            description: "Print Working Directory - Shows current directory path",
            example: "/home/user/projects"
        },
        {
            command: "ls",
            description: "List directory contents",
            example: "ls -la (show all files including hidden ones with details)"
        },
        {
            command: "cd",
            description: "Change Directory",
            example: "cd projects, cd .., cd ~"
        },
        {
            command: "clear",
            description: "Clear terminal screen",
            example: "clear"
        },
        {
            command: "history",
            description: "Show command history",
            example: "history | grep git"
        }
    ];

    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>Basic Navigation Commands</CardTitle>
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