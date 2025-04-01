'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DeveloperCommands() {
    const commands = [
        {
            command: "npm",
            description: "Node Package Manager commands",
            example: "npm install, npm start, npm run build"
        },
        {
            command: "curl",
            description: "Transfer data from/to servers",
            example: "curl https://api.example.com"
        },
        {
            command: "ssh",
            description: "Secure Shell connection",
            example: "ssh user@hostname"
        },
        {
            command: "grep",
            description: "Search text patterns",
            example: "grep -r \"TODO\" ."
        },
        {
            command: "chmod",
            description: "Change file permissions",
            example: "chmod +x script.sh"
        },
        {
            command: "wget",
            description: "Download files from the internet",
            example: "wget https://example.com/file.zip"
        }
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle>Developer Specific Commands</CardTitle>
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