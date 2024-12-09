"use client";

import { Card } from "@/components/ui/card";
import { CommandCard } from "./command-card";
import {
    basicCommands,
    branchCommands,
    configurationCommands,
    installationCommands,
    workflowCommands,
} from "./const";

export default function GitGuidePage() {

    return (
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-bold text-center mb-12">
                Git & GitHub Guide
            </h1>

            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-bold mb-6">Présentation</h2>
                    <div className="grid gap-6 md:grid-cols-1">
                        Git est un logiciel de gestion de version. Il vous permet, entre autres choses, de conserver un historique chronologique des modifications apportées à votre projet. Ces modifications sont stockées dans un dépôt. Un dépôt est l'endroit où les versions du code source d'un projet seront stockées; concrètement il s'agit d'un répertoire physique sur votre ordinateur. Un dépôt peut se trouver sur votre PC (on parle alors de dépôt local), sur un serveur ou des services cloud telles que Github, on parle alors de dépôt distant (ou remote en anglais).
                        Assistez à la présentation par votre formateur de ce document. Vous y découvrirez Git, un outil de gestion de versions.
                        Il existe de nombreux outils pour utiliser git, notamment des outils graphiques. Vous verrez ici la méthode la plus basique, la ligne de commande.
                    </div>
                </section>
                <section>
                    <h2 className="text-2xl font-bold mb-6">Installation</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {installationCommands.map((cmd, index) => (
                            <CommandCard
                                key={index}
                                title={cmd.title}
                                command={cmd.command}
                                description={cmd.description}
                            />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6">Initial Configuration</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {configurationCommands.map((cmd, index) => (
                            <CommandCard
                                key={index}
                                title={cmd.title}
                                command={cmd.command}
                                description={cmd.description}
                            />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6">Basic Commands</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {basicCommands.map((cmd, index) => (
                            <CommandCard
                                key={index}
                                title={cmd.title}
                                command={cmd.command}
                                description={cmd.description}
                            />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6">Basic Workflow</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {workflowCommands.map((cmd, index) => (
                            <CommandCard
                                key={index}
                                title={cmd.title}
                                command={cmd.command}
                                description={cmd.description}
                            />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6">Branch Management</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {branchCommands.map((cmd, index) => (
                            <CommandCard
                                key={index}
                                title={cmd.title}
                                command={cmd.command}
                                description={cmd.description}
                            />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6">Best Practices</h2>
                    <Card className="p-6">
                        <ul className="space-y-3">
                            <li>• Write clear, descriptive commit messages</li>
                            <li>• Commit early and commit often</li>
                            <li>• Create a new branch for each feature or bug fix</li>
                            <li>• Pull changes before starting new work</li>
                            <li>• Review your changes before committing</li>
                            <li>• Keep your repository clean and organized</li>
                            <li>• Use .gitignore to exclude unnecessary files</li>
                            <li>• Never commit sensitive information</li>
                        </ul>
                    </Card>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6">GitHub Workflow</h2>
                    <Card className="p-6">
                        <ol className="list-decimal pl-6 space-y-3">
                            <li>Create a GitHub account at github.com</li>
                            <li>Create a new repository on GitHub</li>
                            <li>Clone the repository to your local machine</li>
                            <li>Make changes to your code</li>
                            <li>Stage and commit your changes</li>
                            <li>Push your changes to GitHub</li>
                            <li>Create pull requests for code review</li>
                            <li>Merge approved changes into the main branch</li>
                        </ol>
                    </Card>
                </section>
            </div>
        </div>
    );
}