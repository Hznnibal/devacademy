'use client';

import { Cloud, Github } from "lucide-react";

export function GithubHeader() {
    return (
        <div className="text-center mb-12">
            <div className="flex justify-center gap-4 mb-6">
                <Github className="h-12 w-12 text-primary" />
                <Cloud className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-4">Remote Repositories</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Learn how to work with GitHub and remote repositories to collaborate on projects
            </p>
        </div>
    );
}