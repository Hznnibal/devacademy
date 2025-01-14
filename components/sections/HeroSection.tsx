import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden py-32">
            <div className="container relative mx-auto px-4">
                <div className="relative z-10 text-center">
                    <h1 className="mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
                        Devenez Développeur Web
                    </h1>
                    <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-200/60">
                        Formation complète et intensive pour maîtriser les technologies web modernes
                        et lancer votre carrière dans le développement.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="bg-blue-600 text-lg text-white hover:bg-blue-700">
                            Commencer la formation
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg text-blue-400 border-blue-800/50 hover:bg-blue-950/50">
                            En savoir plus
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}