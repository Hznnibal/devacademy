'use client';

import { GitBranch, Github } from "lucide-react";

export function GitHeader() {
    return (
        <div className="text-center mb-12">
            <div className="flex justify-center gap-4 mb-6">
                <GitBranch className="h-12 w-12 text-primary" />
                <Github className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-4">Git و GitHub</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                دليل شامل لإدارة الإصدارات باستخدام Git والتعاون عبر GitHub
            </p>
        </div>
    );
}
