"use client";

import { Card } from "@/components/ui/card";

export default function VSCodeGuidePage() {
    return (
        <div className="px-5 py-8 font-sans">

            <h1 className="text-3xl font-bold text-center mb-12">Guide: Visual Studio Code</h1>

            <div className="space-y-12">
                {/* Section: What is VSCode? */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">What is Visual Studio Code?</h2> <div className="border-b border-gray-300 mb-6" />
                    <Card className="p-6">
                        <p className="leading-relaxed">
                            Visual Studio Code (VSCode) is a source code editor developed by Microsoft.
                            It is free, open source, and compatible with multiple operating systems
                            (Windows, macOS, Linux).
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-2">
                            <li>Supports a wide range of programming languages.</li>
                            <li>Extensible through a vast variety of extensions.</li>
                            <li>Built-in Git integration for version control.</li>
                            <li>Lightweight and fast environment.</li>
                        </ul>
                    </Card>
                </section>

                {/* Section: How to install VSCode? */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">How to Install Visual Studio Code?</h2> <div className="border-b border-gray-300 mb-6" />
                    <Card className="p-6">
                        <ol className="list-decimal list-inside space-y-4">
                            <li>
                                <strong>Visit the official website:</strong>{" "}
                                <a
                                    href="https://code.visualstudio.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline"
                                >
                                    https://code.visualstudio.com/
                                </a>
                            </li>
                            <li>
                                <strong>Download the appropriate version:</strong> Choose your operating system
                                (Windows, macOS, or Linux) and download the installation file.
                            </li>
                            <li>
                                <strong>Install VSCode:</strong> Follow the steps in the installation wizard.
                                You can also choose to add VSCode to the PATH for quick access from the command line.
                            </li>
                            <li>
                                <strong>Launch VSCode:</strong> Once installed, open Visual Studio Code and explore its features.
                            </li>
                        </ol>
                    </Card>
                </section>

                {/* Section: How to use VSCode? */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">How to Use Visual Studio Code?</h2> <div className="border-b border-gray-300 mb-6" />
                    <Card className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold">Basics:</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>Open a project:</strong> Click <em>File &gt; Open Folder</em> and select
                                a folder containing your project.
                            </li>
                            <li>
                                <strong>Use the integrated terminal:</strong> Access the built-in terminal via
                                <em> View &gt; Terminal</em> to run commands without leaving VSCode.
                            </li>
                            <li>
                                <strong>Install extensions:</strong> Click the extensions icon in the sidebar
                                (on the left) to install plugins like ESLint, Prettier, or custom themes.
                            </li>
                            <li>
                                <strong>Configure Git:</strong> Connect to your Git repository directly in VSCode
                                through the source control tab (branch icon).
                            </li>
                            <li>
                                <strong>Use the command palette:</strong> Press <code>Ctrl + Shift + P</code>
                                (or <code>Cmd + Shift + P</code> on macOS) to access all available commands.
                            </li>
                        </ul>
                    </Card>
                </section>

                {/* Section: Useful Links */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">Useful Links</h2> <div className="border-b border-gray-300 mb-6" />
                    <Card className="p-6">
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <a
                                    href="https://code.visualstudio.com/docs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline"
                                >
                                    Official Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://marketplace.visualstudio.com/vscode"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline"
                                >
                                    Extensions Marketplace
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/results?search_query=visual+studio+code+tutorial"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline"
                                >
                                    YouTube Tutorials on Visual Studio Code
                                </a>
                            </li>
                        </ul>
                    </Card>
                </section>
            </div>
        </div>
    );
}
