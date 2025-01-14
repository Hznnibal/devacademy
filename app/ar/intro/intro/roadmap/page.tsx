"use client";

import { techData } from "./lib/tech-data";
import { RoadmapHeader } from "./roadmap/RoadmapHeader";
import { RoadmapSection } from "./roadmap/RoadmapSection";

interface ConnectorProps {
    direction?: "vertical" | "horizontal";
    className?: string;
}

function Connector({ direction = "vertical", className = "" }: ConnectorProps) {
    if (direction === "horizontal") {
        return <div className={`h-0.5 w-4 bg-blue-500 ${className}`} />;
    }

    return (
        <svg
            className={`w-6 h-6 ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path
                d="M12 0c6 8 0 16 0 24s6 16 0 24"
                className="stroke-blue-500"
            />
        </svg>
    );
}

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:to-gray-800 py-12 px-6">
            <div className="max-w-3xl mx-auto">
                <RoadmapHeader />

                <div className="relative flex flex-col items-center">
                    {/* Section 1: HTML */}
                    <RoadmapSection tech={techData[0]} />
                    <Connector />

                    {/* Section 2: CSS */}
                    <RoadmapSection tech={techData[1]} />
                    <Connector />

                    {/* Section 3: JavaScript */}
                    <RoadmapSection tech={techData[2]} />
                    <Connector />

                    {/* Section 4: TypeScript */}
                    <RoadmapSection tech={techData[3]} />
                    <Connector />

                    {/* Section 5: React */}
                    <RoadmapSection tech={techData[4]} />
                    <Connector />

                    {/* Section 6: Next.js */}
                    <RoadmapSection tech={techData[5]} />
                    <Connector />

                    {/* Section 7: Node.js */}
                    <RoadmapSection tech={techData[6]} />
                    <Connector />

                    {/* Section 8: Terminal */}
                    <RoadmapSection tech={techData[8]} />
                    <Connector />

                    {/* Section 9: Git */}
                    <RoadmapSection tech={techData[7]} />
                    <Connector />

                    {/* Section 10: Testing */}
                    <RoadmapSection tech={techData[9]} />
                    <Connector />

                    {/* Section 11: Databases */}
                    <RoadmapSection tech={techData[10]} />
                    <Connector />

                    {/* Section 12: DevOps */}
                    <RoadmapSection tech={techData[11]} />
                </div>

                <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                    Tip: Click on each technology to see learning details
                </div>
            </div>
        </main>
    );
}
