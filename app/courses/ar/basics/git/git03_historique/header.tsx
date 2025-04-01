'use client';

import { GitGraph } from "lucide-react";

export function LogHeader() {
    return (
        <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
                <GitGraph className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-4">Git Log</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                استكشاف تاريخ مشروعك من خلال سجل الالتزامات في Git
            </p>
        </div>
    );
}
