import { BookOpen, Code2, Laptop, Users } from "lucide-react";
import { FeatureCard } from "./features";

const features = [
    {
        icon: <Code2 className="h-8 w-8 text-primary" />,
        title: "Développement Web",
        description: "Apprenez HTML, CSS, JavaScript et les frameworks modernes",
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Projets Pratiques",
        description: "Travaillez sur des projets réels en équipe",
    },
    {
        icon: <Laptop className="h-8 w-8 text-primary" />,
        title: "Formation Interactive",
        description: "Cours en direct et exercices pratiques",
    },
    {
        icon: <BookOpen className="h-8 w-8 text-primary" />,
        title: "Ressources Complètes",
        description: "Accès à une documentation détaillée et des tutoriels",
    },
];

export function FeaturesSection() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-center text-3xl font-bold text-white">
                    Ce que vous allez apprendre
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}