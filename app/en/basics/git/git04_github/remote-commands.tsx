'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RemoteCommands() {
    const commands = [
        {
            command: "git remote add origin <url>",
            description: "Link your local repository to a remote GitHub repository",
            example: "git remote add origin https://github.com/username/repo.git"
        },
        {
            command: "git push -u origin main",
            description: "Push your code to GitHub and set up tracking",
            example: "Uploads your commits to the remote repository"
        },
        {
            command: "git pull origin main",
            description: "Download changes from GitHub",
            example: "Updates your local repository with remote changes"
        },
        {
            command: "git clone <url>",
            description: "Copy a remote repository to your local machine",
            example: "git clone https://github.com/username/repo.git"
        }
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle>Working with Remote Repositories</CardTitle>
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