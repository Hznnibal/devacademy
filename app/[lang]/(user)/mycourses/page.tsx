"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
    BookOpen,
    Clock,
    Code2,
    Filter,
    Search,
    Star,
    Trophy,
} from "lucide-react";

export default function CoursesPage() {
    const courses = [
        {
            title: "Introduction au HTML/CSS",
            description:
                "Apprenez les bases du développement web avec HTML et CSS. Créez des sites web statiques et responsive.",
            progress: 85,
            duration: "2h 30min",
            lessons: 12,
            rating: 4.8,
            students: 1234,
            level: "Débutant",
        },
        {
            title: "JavaScript Fondamentaux",
            description:
                "Maîtrisez les concepts fondamentaux de JavaScript, le langage de programmation du web.",
            progress: 45,
            duration: "4h 15min",
            lessons: 24,
            rating: 4.9,
            students: 2345,
            level: "Intermédiaire",
        },
        {
            title: "React.js Débutant",
            description:
                "Découvrez React.js et créez des applications web modernes et interactives.",
            progress: 20,
            duration: "6h 45min",
            lessons: 36,
            rating: 4.7,
            students: 3456,
            level: "Avancé",
        },
    ];

    return (
        <div className="container mx-auto p-6 space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h1 className="text-3xl font-bold">Mes Cours</h1>
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative flex-1 md:flex-initial">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            type="search"
                            placeholder="Rechercher un cours..."
                            className="w-full md:w-[300px] pl-9 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                    </div>
                    <Button variant="outline" className="flex items-center gap-2">
                        <Filter className="h-4 w-4" />
                        Filtrer
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {courses.map((course, index) => (
                    <Card key={index} className="p-6">
                        <div className="flex items-start gap-4">
                            <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Code2 className="h-8 w-8 text-primary" />
                            </div>
                            <div className="flex-1 space-y-4">
                                <div>
                                    <div className="flex items-start justify-between">
                                        <h3 className="font-semibold">{course.title}</h3>
                                        <div className="flex items-center gap-1">
                                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                            <span className="text-sm font-medium">{course.rating}</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {course.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <BookOpen className="h-4 w-4" />
                                        {course.lessons} leçons
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        {course.duration}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Trophy className="h-4 w-4" />
                                        {course.level}
                                    </div>
                                </div>

                                <Progress value={course.progress} className="h-2" />
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">
                                        {course.students} étudiants
                                    </span>
                                    <span className="font-medium">{course.progress}% complété</span>
                                </div>

                                <Button className="w-full">Continuer</Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}