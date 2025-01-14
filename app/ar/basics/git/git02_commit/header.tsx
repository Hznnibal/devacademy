'use client';

import { GitCommit } from "lucide-react";

export function CommitHeader() {
    return (
        <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
                <GitCommit className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-4">التزامات Git</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                فهم كيفية حفظ تغييراتك باستخدام التزامات Git
            </p>
        </div>
    );
}
