import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
    return (
        <section className="relative overflow-hidden py-24">
            <div className="absolute inset-0 bg-blue-950/20 backdrop-blur-sm"></div>
            <div className="container relative mx-auto px-4 text-center">
                <h2 className="mb-6 text-3xl font-bold text-white">
                    Prêt à commencer votre voyage ?
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100/80">
                    Rejoignez notre communauté de développeurs et commencez votre
                    apprentissage dès aujourd'hui.
                </p>
                <Button
                    size="lg"
                    className="bg-blue-500 text-lg text-white hover:bg-blue-600"
                    asChild
                >
                    <Link href="/inscription">S'inscrire maintenant</Link>
                </Button>
            </div>
        </section>
    );
}