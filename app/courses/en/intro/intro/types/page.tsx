"use client";

import { Code, Database, Monitor } from "lucide-react";
import { RoleCard } from "./role-card";

export default function DeveloperTypesPage() {
    return (
        <div className="px-5 py-8 font-sans">

            <h1 className="text-3xl font-bold text-center mb-16">
                Understanding Web Developer Roles
            </h1>

            <div className="grid gap-8 lg:grid-cols-3">
                <RoleCard
                    title="Front-end Developer"
                    description="Specializes in creating the user interface and user experience of websites and web applications."
                    technologies={[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "React",
                        "Vue",
                        "Angular",
                        "Tailwind",
                        "SASS",
                    ]}
                    responsibilities={[
                        "Build responsive user interfaces",
                        "Implement visual designs",
                        "Optimize website performance",
                        "Ensure cross-browser compatibility",
                        "Create interactive features",
                    ]}
                    icon={<Monitor className="w-6 h-6" />}
                />

                <RoleCard
                    title="Back-end Developer"
                    description="Focuses on server-side logic, databases, and application architecture."
                    technologies={[
                        "Node.js",
                        "Python",
                        "Java",
                        "SQL",
                        "MongoDB",
                        "Redis",
                        "Docker",
                        "APIs",
                    ]}
                    responsibilities={[
                        "Design database schemas",
                        "Build server-side logic",
                        "Implement security measures",
                        "Optimize server performance",
                        "Manage API integrations",
                    ]}
                    icon={<Database className="w-6 h-6" />}
                />

                <RoleCard
                    title="Full-stack Developer"
                    description="Masters both front-end and back-end development, capable of building complete web applications."
                    technologies={[
                        "All Front-end",
                        "All Back-end",
                        "DevOps",
                        "Git",
                        "Cloud Services",
                        "Testing",
                        "Security",
                    ]}
                    responsibilities={[
                        "Develop end-to-end solutions",
                        "Coordinate between layers",
                        "Design system architecture",
                        "Handle deployment processes",
                        "Full project implementation",
                    ]}
                    icon={<Code className="w-6 h-6" />}
                />
            </div>

            <div className="mt-16 bg-card p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Development Stack Visualization</h2> <div className="border-b border-gray-300 mb-6" />
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-primary/10 p-6 rounded-lg">
                            <h3 className="font-semibold mb-4">Front-end Layer</h3>
                            <div className="space-y-2 text-sm">
                                <p>• User Interface (UI)</p>
                                <p>• Client-side Logic</p>
                                <p>• Responsive Design</p>
                                <p>• User Experience (UX)</p>
                                <p>• Browser Interactions</p>
                            </div>
                        </div>

                        <div className="bg-primary/10 p-6 rounded-lg">
                            <h3 className="font-semibold mb-4">Back-end Layer</h3>
                            <div className="space-y-2 text-sm">
                                <p>• Server Logic</p>
                                <p>• Database Management</p>
                                <p>• API Development</p>
                                <p>• Authentication</p>
                                <p>• Business Logic</p>
                            </div>
                        </div>

                        <div className="bg-primary/10 p-6 rounded-lg">
                            <h3 className="font-semibold mb-4">Full-stack Coverage</h3>
                            <div className="space-y-2 text-sm">
                                <p>• Complete Architecture</p>
                                <p>• Integration</p>
                                <p>• Deployment</p>
                                <p>• Maintenance</p>
                                <p>• Optimization</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}