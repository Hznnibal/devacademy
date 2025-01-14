"use client";

import { TechData } from "../lib/types";
import { Connector } from "./Connector";
import { TechCard } from "./TechCard";

interface RoadmapSectionProps {
    tech: TechData;
    showConnector?: boolean;
    direction?: "right" | "left";
}

export function RoadmapSection({
    tech,
    showConnector,
    direction = "right"
}: RoadmapSectionProps) {
    return (
        <div className="flex items-center">
            <TechCard {...tech} />
            {showConnector && <Connector direction={direction} />}
        </div>
    );
}