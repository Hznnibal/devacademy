'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FileCommands() {
    const commands = [
        {
            command: "touch",
            description: "Create a new empty file",
            example: "touch index.html"
        },
        {
            command: "mkdir",
            description: "Create a new directory",
            example: "mkdir project-name"
        },
        {
            command: "cp",
            description: "Copy files or directories",
            example: "cp file.txt backup/file.txt"
        },
        {
            command: "mv",
            description: "Move or rename files",
            example: "mv old.js new.js"
        },
        {
            command: "rm",
            description: "Remove files or directories",
            example: "rm file.txt, rm -r directory"
        },
        {
            command: "cat",
            description: "Display file contents",
            example: "cat config.json"
        }
    ];

    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>File Management Commands</CardTitle>
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