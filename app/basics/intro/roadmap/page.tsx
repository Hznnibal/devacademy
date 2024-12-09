"use client";

import { Card } from "@/components/ui/card";
import {
    BrainCircuit,
    Code2,
    Database,
    GitBranch,
    Globe,
    Layout,
    Library,
    Rocket,
    Server,
    Shield,
    Terminal,
    TestTube,
} from "lucide-react";

export default function Roadmap() {
    const roadmapSteps = [
        {
            phase: "Phase 1: Foundations",
            icon: Globe,
            items: [
                "HTML5 - Structure and semantics",
                "CSS3 - Styling and layouts",
                "JavaScript basics - Variables, functions, and control flow",
                "Git basics - Version control fundamentals",
            ],
        },
        {
            phase: "Phase 2: Frontend Development",
            icon: Layout,
            items: [
                "Advanced CSS - Flexbox, Grid, Animations",
                "JavaScript ES6+ features",
                "DOM manipulation",
                "Responsive design principles",
            ],
        },
        {
            phase: "Phase 3: Frontend Frameworks",
            icon: Library,
            items: [
                "React.js fundamentals",
                "State management",
                "Component lifecycle",
                "Routing and navigation",
            ],
        },
        {
            phase: "Phase 4: Backend Basics",
            icon: Server,
            items: [
                "Node.js fundamentals",
                "Express.js framework",
                "RESTful API design",
                "Authentication and authorization",
            ],
        },
        {
            phase: "Phase 5: Databases",
            icon: Database,
            items: [
                "SQL fundamentals",
                "MongoDB basics",
                "Database design principles",
                "ORM/ODM concepts",
            ],
        },
        {
            phase: "Phase 6: Advanced Concepts",
            icon: BrainCircuit,
            items: [
                "TypeScript",
                "Testing strategies",
                "CI/CD pipelines",
                "Cloud deployment",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
            <div className="container mx-auto px-4 py-16">
                <div className="space-y-8">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight">Web Developer Roadmap</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            A comprehensive guide to becoming a full-stack web developer. Follow this path to build a strong foundation and advance your skills.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        {roadmapSteps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <Card key={index} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-3">
                                        <Icon className="h-8 w-8 text-primary" />
                                        <h2 className="text-2xl font-semibold">{step.phase}</h2>
                                    </div>
                                    <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                                        {step.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </Card>
                            );
                        })}
                    </div>

                    <div className="mt-12 bg-card p-8 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                            <Rocket className="h-6 w-6 text-primary" />
                            Additional Skills to Consider
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-2">
                                <Shield className="h-5 w-5 text-primary" />
                                <span>Web Security</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Terminal className="h-5 w-5 text-primary" />
                                <span>Command Line</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <GitBranch className="h-5 w-5 text-primary" />
                                <span>Advanced Git</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <TestTube className="h-5 w-5 text-primary" />
                                <span>Testing</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Code2 className="h-5 w-5 text-primary" />
                                <span>Design Patterns</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}