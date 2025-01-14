"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PhaseCardProps {
    title: string;
    children: React.ReactNode;
}

export function PhaseCard({ title, children }: PhaseCardProps) {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>{children}</CardContent>
        </Card>
    );
}