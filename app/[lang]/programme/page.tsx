"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, CheckCircle2, GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Programme() {
    const t = useTranslations();
    const pathname = usePathname();
    const lang = pathname.includes('/ar') ? 'ar' : pathname.includes('/en') ? 'en' : 'fr';

    const modules = [
        {
            id: 1,
            title: t("programme.module1.title"),
            duration: t("programme.module1.duration"),
            description: t("programme.module1.description"),
            sections: [
                {
                    title: t("programme.module1.sections.section1.title"),
                    topics: [
                        t("programme.module1.sections.section1.topics.0"),
                        t("programme.module1.sections.section1.topics.1"),
                    ]
                },
                {
                    title: t("programme.module1.sections.section2.title"),
                    topics: [
                        t("programme.module1.sections.section2.topics.0"),
                        t("programme.module1.sections.section2.topics.1"),
                    ]
                }
            ],
            icon: BookOpen,
        },
        {
            id: 2,
            title: t("programme.module2.title"),
            duration: t("programme.module2.duration"),
            description: t("programme.module2.description"),
            sections: [
                {
                    title: t("programme.module2.sections.section1.title"),
                    topics: [
                        t("programme.module2.sections.section1.topics.0"),
                        t("programme.module2.sections.section1.topics.1"),
                        t("programme.module2.sections.section1.topics.2"),
                        t("programme.module2.sections.section1.topics.3"),
                        t("programme.module2.sections.section1.topics.4"),
                        t("programme.module2.sections.section1.topics.5"),
                        t("programme.module2.sections.section1.topics.6"),
                    ]
                },
                {
                    title: t("programme.module2.sections.section2.title"),
                    topics: [
                        t("programme.module2.sections.section2.topics.0"),
                        t("programme.module2.sections.section2.topics.1"),
                        t("programme.module2.sections.section2.topics.2"),
                        t("programme.module2.sections.section2.topics.3"),
                        t("programme.module2.sections.section2.topics.4"),
                    ]
                },
                {
                    title: t("programme.module2.sections.section3.title"),
                    topics: [
                        t("programme.module2.sections.section3.topics.0"),
                        t("programme.module2.sections.section3.topics.1"),
                        t("programme.module2.sections.section3.topics.2"),
                        t("programme.module2.sections.section3.topics.3"),
                        t("programme.module2.sections.section3.topics.4"),
                        t("programme.module2.sections.section3.topics.5"),
                        t("programme.module2.sections.section3.topics.6"),
                        t("programme.module2.sections.section3.topics.7"),
                        t("programme.module2.sections.section3.topics.8"),
                        t("programme.module2.sections.section3.topics.9"),
                        t("programme.module2.sections.section3.topics.10"),
                        t("programme.module2.sections.section3.topics.11"),
                    ]
                },
                {
                    title: t("programme.module2.sections.section4.title"),
                    topics: [
                        t("programme.module2.sections.section4.topics.0"),
                        t("programme.module2.sections.section4.topics.1"),
                        t("programme.module2.sections.section4.topics.2"),
                    ]
                }
            ],
            icon: BookOpen,
        },
        {
            id: 3,
            title: t("programme.module3.title"),
            duration: t("programme.module3.duration"),
            description: t("programme.module3.description"),
            sections: [
                {
                    title: t("programme.module3.sections.section1.title"),
                    topics: [
                        t("programme.module3.sections.section1.topics.0"),
                        t("programme.module3.sections.section1.topics.1"),
                        t("programme.module3.sections.section1.topics.2"),
                    ]
                },
                {
                    title: t("programme.module3.sections.section2.title"),
                    topics: [
                        t("programme.module3.sections.section2.topics.0"),
                        t("programme.module3.sections.section2.topics.1"),
                        t("programme.module3.sections.section2.topics.2"),
                    ]
                }
            ],
            icon: BookOpen,
        },
        {
            id: 4,
            title: t("programme.module4.title"),
            duration: t("programme.module4.duration"),
            description: t("programme.module4.description"),
            sections: [
                {
                    title: t("programme.module4.sections.section1.title"),
                    topics: [
                        t("programme.module4.sections.section1.topics.0"),
                        t("programme.module4.sections.section1.topics.1"),
                        t("programme.module4.sections.section1.topics.2"),
                    ]
                },
                {
                    title: t("programme.module4.sections.section2.title"),
                    topics: [
                        t("programme.module4.sections.section2.topics.0"),
                        t("programme.module4.sections.section2.topics.1"),
                    ]
                }
            ],
            icon: BookOpen,
        },
        {
            id: 5,
            title: t("programme.module5.title"),
            duration: t("programme.module5.duration"),
            description: t("programme.module5.description"),
            sections: [
                {
                    title: t("programme.module5.sections.section1.title"),
                    topics: [
                        t("programme.module5.sections.section1.topics.0"),
                        t("programme.module5.sections.section1.topics.1"),
                        t("programme.module5.sections.section1.topics.2"),
                        t("programme.module5.sections.section1.topics.3"),
                        t("programme.module5.sections.section1.topics.4"),
                        t("programme.module5.sections.section1.topics.5"),
                        t("programme.module5.sections.section1.topics.6"),
                    ]
                },
                {
                    title: t("programme.module5.sections.section2.title"),
                    topics: [
                        t("programme.module5.sections.section2.topics.0"),
                        t("programme.module5.sections.section2.topics.1"),
                        t("programme.module5.sections.section2.topics.2"),
                    ]
                }
            ],
            icon: BookOpen,
        },
        {
            id: 6,
            title: t("programme.module6.title"),
            duration: t("programme.module6.duration"),
            description: t("programme.module6.description"),
            sections: [
                {
                    title: t("programme.module6.sections.section1.title"),
                    topics: [
                        t("programme.module6.sections.section1.topics.0"),
                        t("programme.module6.sections.section1.topics.1"),
                    ]
                },
                {
                    title: t("programme.module6.sections.section2.title"),
                    topics: [
                        t("programme.module6.sections.section2.topics.0"),
                        t("programme.module6.sections.section2.topics.1"),
                    ]
                }
            ],
            icon: BookOpen,
        }
    ];


    return (
        <div className="min-h-screen bg-background p-6 lg:p-8 mt-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-2">
                    <GraduationCap className="h-6 w-6" />
                    <Link href={`/${lang}`} className="text-xl font-bold">
                        DevAcademy
                    </Link>
                </div>
                <Tabs defaultValue="module-1" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                        {modules.map((module) => (
                            <TabsTrigger
                                key={module.id}
                                value={`module-${module.id}`}
                                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                            >
                                Module {module.id}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {modules.map((module) => (
                        <TabsContent key={module.id} value={`module-${module.id}`}>
                            <Card className="p-6">
                                <div className="flex items-start gap-4">
                                    <module.icon className="h-8 w-8 text-primary flex-shrink-0" />
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-2xl font-bold">{module.title}</h3>
                                        </div>
                                        <p className="text-muted-foreground mb-6">{module.description}</p>

                                        <div className="space-y-8">
                                            {module.sections.map((section, index) => (
                                                <div key={index}>
                                                    <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                                                    <div className="grid gap-3 md:grid-cols-2">
                                                        {section.topics.map((topic, i) => (
                                                            <div key={i} className="flex items-center gap-2 bg-muted/50 p-3 rounded-lg">
                                                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                                                <span className="text-sm">{topic}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </div>
    );

}
