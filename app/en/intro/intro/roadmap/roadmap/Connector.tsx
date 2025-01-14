"use client";

interface ConnectorProps {
    direction?: "right" | "left";
    className?: string;
}

export function Connector({ direction = "right", className = "" }: ConnectorProps) {
    return (
        <div className={`h-0.5 w-4 bg-blue-500 ${className}`} />
    );
}