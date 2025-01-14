'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitBranchPlus, GitCommit, GitCompare } from "lucide-react";

export function CommitStages() {
    const stages = [
        {
            icon: <GitCompare className="h-6 w-6" />,
            title: "Status",
            description: "Check the state of your working directory",
            command: "git status",
            details: "Verify which files have been modified and need to be committed"
        },
        {
            icon: <GitBranchPlus className="h-6 w-6" />,
            title: "Add",
            description: "Stage your changes",
            command: "git add <file>",
            details: "Move files to the staging area, preparing them for commit"
        },
        {
            icon: <GitCommit className="h-6 w-6" />,
            title: "Commit",
            description: "Save your changes",
            command: 'git commit -m "message"',
            details: "Create a snapshot of your staged changes with a descriptive message"
        }
    ];

    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>The Three Stages of Committing</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                    {stages.map((stage, index) => (
                        <div key={index} className="flex flex-col items-center p-6 bg-muted rounded-lg">
                            {stage.icon}
                            <h3 className="mt-4 font-semibold text-lg">{stage.title}</h3>
                            <p className="text-sm text-muted-foreground text-center mt-2">{stage.description}</p>
                            <code className="mt-4 px-3 py-1 bg-background rounded">{stage.command}</code>
                            <p className="text-sm text-muted-foreground text-center mt-4">{stage.details}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}