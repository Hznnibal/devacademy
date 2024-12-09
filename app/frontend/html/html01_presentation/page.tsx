import React from "react";

const Page: React.FC = () => {
    return (
        <div className="container mx-auto py-12 px-6">
            <header className="mb-12">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    HTML - 01 - Présentation et structure d'un document
                </h1>
                <h2 className="text-xl font-semibold text-gray-700 text-center">
                    Introduction
                </h2>
            </header>

            <main className="space-y-12">
                {/* Section : Qu'est-ce que le World Wide Web ? */}
                <section>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                        Qu'est-ce que le World Wide Web ?
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Le World Wide Web (Web) est un réseau de ressources et d'informations.
                        Le Web repose sur trois mécanismes pour rendre disponibles ces données
                        le plus largement possible :
                    </p>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>
                            Un système de nommage uniforme pour leur localisation sur le Web
                            (par exemple les URL).
                        </li>
                        <li>
                            Des protocoles pour accéder à des ressources nommées dont on possède
                            l'adresse (par exemple HTTP).
                        </li>
                        <li>
                            L'hypertexte pour faciliter la navigation entre ces ressources
                            (par exemple HTML).
                        </li>
                    </ol>
                </section>

                {/* Section : Qu'est-ce que le HTML ? */}
                <section>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                        Qu'est-ce que le HTML ?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Publier de l'information en vue d'une distribution mondiale nécessite
                        l'usage d'un langage universellement compréhensible, d'une sorte de «
                        langue maternelle » acceptée par tous les ordinateurs. Le langage de
                        publication utilisé sur le World Wide Web est le langage de balisage
                        hypertexte HTML (Hyper Text Markup Language). HTML donne aux auteurs
                        les moyens de :
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
                        <li>
                            Publier des documents en ligne possédant des titres, du texte, des
                            tables, des listes, des photos, etc.
                        </li>
                        <li>
                            Ramener des informations en ligne via des liens hypertextes avec un
                            clic.
                        </li>
                        <li>
                            Concevoir des formulaires pour conduire des transactions avec des
                            services distants, dans le but de rechercher des informations, de
                            faire des réservations, de prendre des commandes, etc.
                        </li>
                        <li>
                            Inclure des feuilles de calculs, des séquences vidéos ou sonores et
                            d'autres applications, directement dans les documents.
                        </li>
                    </ul>

                </section>
            </main>
        </div>
    );
};

export default Page;
