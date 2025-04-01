"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Code2, Trophy } from "lucide-react";

export default function DashboardPage() {
    const courses = [
        {
            title: "Introduction au HTML/CSS",
            progress: 85,
            duration: "2h 30min",
            lessons: 12,
        },
        {
            title: "JavaScript Fondamentaux",
            progress: 45,
            duration: "4h 15min",
            lessons: 24,
        },
        {
            title: "React.js Débutant",
            progress: 20,
            duration: "6h 45min",
            lessons: 36,
        },
    ];

    return (
        <div className="container mx-auto p-6 space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Tableau de Bord</h1>
                <div className="flex items-center gap-4">
                    <Card className="p-4 flex items-center gap-3">
                        <Trophy className="h-5 w-5 text-yellow-500" />
                        <div>
                            <p className="text-sm text-muted-foreground">Points</p>
                            <p className="text-xl font-bold">2,450</p>
                        </div>
                    </Card>
                    <Card className="p-4 flex items-center gap-3">
                        <Clock className="h-5 w-5 text-blue-500" />
                        <div>
                            <p className="text-sm text-muted-foreground">Temps Total</p>
                            <p className="text-xl font-bold">45h</p>
                        </div>
                    </Card>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, index) => (
                    <Card key={index} className="p-6 space-y-4">
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="font-semibold">{course.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    {course.lessons} leçons • {course.duration}
                                </p>
                            </div>
                            <Code2 className="h-5 w-5 text-primary" />
                        </div>
                        <Progress value={course.progress} className="h-2" />
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Progression</span>
                            <span className="font-medium">{course.progress}%</span>
                        </div>
                    </Card>
                ))}
            </div>

            <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">Activité Récente</h2>
                    <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-4">
                    {[1, 2, 3].map((_, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Code2 className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium">Leçon {index + 1} complétée</p>
                                    <p className="text-sm text-muted-foreground">
                                        JavaScript Fondamentaux
                                    </p>
                                </div>
                            </div>
                            <span className="text-sm text-muted-foreground">Il y a 2h</span>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}