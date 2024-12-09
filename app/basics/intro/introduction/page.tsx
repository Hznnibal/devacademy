"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, Globe, Laptop, Layout, Server } from "lucide-react";
import Link from "next/link";

export default function WebDevelopment() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
            <div className="container mx-auto px-4 py-16">
                <div className="space-y-8">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight">Web Development for Beginners</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Discover the exciting world of web development and unlock endless possibilities for creating amazing digital experiences.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3">
                                <Globe className="h-8 w-8 text-primary" />
                                <h2 className="text-2xl font-semibold">What is Web Development?</h2>
                            </div>
                            <p className="text-muted-foreground">
                                Web development is the process of building and maintaining websites. It involves everything from creating simple static pages to complex web applications, e-commerce sites, and social media platforms.
                            </p>
                        </Card>

                        <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3">
                                <Layout className="h-8 w-8 text-primary" />
                                <h2 className="text-2xl font-semibold">Frontend Development</h2>
                            </div>
                            <p className="text-muted-foreground">
                                Frontend development focuses on what users see and interact with. It involves HTML for structure, CSS for styling, and JavaScript for interactivity.
                            </p>
                        </Card>

                        <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3">
                                <Server className="h-8 w-8 text-primary" />
                                <h2 className="text-2xl font-semibold">Backend Development</h2>
                            </div>
                            <p className="text-muted-foreground">
                                Backend development handles server-side logic, databases, and application architecture. It powers the functionality behind web applications.
                            </p>
                        </Card>

                        <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3">
                                <Code2 className="h-8 w-8 text-primary" />
                                <h2 className="text-2xl font-semibold">Why Learn Web Development?</h2>
                            </div>
                            <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                                <li>High demand and excellent career opportunities</li>
                                <li>Creative and rewarding work</li>
                                <li>Flexibility to work remotely</li>
                                <li>Continuous learning and growth</li>
                            </ul>
                        </Card>
                    </div>

                    <div className="flex justify-center mt-12">
                        <Link href="/roadmap">
                            <Button size="lg" className="gap-2">
                                <Laptop className="h-5 w-5" />
                                View Developer Roadmap
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}