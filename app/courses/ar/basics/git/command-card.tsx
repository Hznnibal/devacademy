"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/copy-button";

interface CommandCardProps {
    title: string;
    command: string;
    description: string;
}

export function CommandCard({ title, command, description }: CommandCardProps) {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                    {title}
                    <CopyButton text={command} />
                </CardTitle>
            </CardHeader>
            <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{command}</code>
                </pre>
                <p className="mt-4 text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    );
}