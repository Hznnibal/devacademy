'use client';

import { Cloud, Github } from "lucide-react";

export function GithubHeader() {
    return (
        <div className="text-center mb-12">
            <div className="flex justify-center gap-4 mb-6">
                <Github className="h-12 w-12 text-primary" />
                <Cloud className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-4">المستودعات البعيدة</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                تعلم كيفية العمل مع GitHub والمستودعات البعيدة للتعاون في المشاريع
            </p>
        </div>
    );
}
