'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AdvancedOptions() {
    const options = [
        {
            command: "git log --oneline",
            description: "Compact view with one commit per line",
            example: "a1b2c3d Initial commit"
        },
        {
            command: "git log --graph",
            description: "Show ASCII graph of branch and merge history",
            example: "* commit\n|\n* commit"
        },
        {
            command: "git log -p",
            description: "Show the patch (changes) introduced with each commit",
            example: "Shows detailed file changes"
        },
        {
            command: "git log --stat",
            description: "Show statistics about files modified in each commit",
            example: "Shows files changed and insertions/deletions"
        },
        {
            command: "git log --author=\"name\"",
            description: "Filter commits by author",
            example: "Shows commits by specific author"
        }
    ];

    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>Advanced Log Options</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {options.map((option, index) => (
                        <div key={index} className="bg-muted p-4 rounded-lg">
                            <code className="text-sm block mb-2">{option.command}</code>
                            <p className="text-sm text-muted-foreground mb-2">{option.description}</p>
                            <div className="bg-background p-2 rounded text-xs font-mono">
                                {option.example}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}