"use client";

import { Card } from "@/components/ui/card";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <Card className="border-blue-950/30 bg-[#000913]/40 p-6 backdrop-blur-sm transition-transform hover:scale-105">
            <div className="mb-4 text-blue-500">{icon}</div>
            <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
            <p className="text-blue-200/60">{description}</p>
        </Card>
    );
}