import { Card } from "@/components/ui/card";
import { InstallationGuideDBeaver, InstallationGuideMariaDB } from "./InstallationGuide";

export default function IntroductionPage() {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Installations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

                <Card className="p-6">
                    <h2 className="text-2xl font-semibold mb-4"> MariaDB</h2>
                    <div className="space-y-4 text-muted-foreground">
                        <p className="text-lg leading-relaxed mb-4">
                            MariaDB is an open-source relational database management system (RDBMS),
                            created by the original developers of MySQL. It is a fork of MySQL designed
                            to ensure it remains free.
                        </p>
                        <div className="space-y-2">
                            <h3 className="font-semibold text-foreground">Key Features:</h3>
                            <ul className="list-disc list-inside">
                                <li>MySQL compatible</li>
                                <li>Optimized performance</li>
                                <li>Regular new features</li>
                                <li>Support for multiple storage engines</li>
                                <li>Enhanced security</li>
                            </ul>
                        </div>
                    </div>
                </Card>

                <Card className="p-6">
                    <h2 className="text-2xl font-semibold mb-4"> DBeaver</h2>
                    <div className="space-y-4 text-muted-foreground">
                        <p className="text-lg leading-relaxed mb-4">
                            DBeaver is a free and open-source universal database management tool.
                            It allows you to manage various types of databases through a user-friendly
                            graphical interface.
                        </p>
                        <div className="space-y-2">
                            <h3 className="font-semibold text-foreground">Key Features:</h3>
                            <ul className="list-disc list-inside">
                                <li>Support for multiple databases</li>
                                <li>SQL editor with syntax highlighting</li>
                                <li>Data visualization and editing</li>
                                <li>Data import/export</li>
                                <li>ER diagram creation</li>
                            </ul>
                        </div>
                    </div>
                </Card>
            </div >

            <InstallationGuideMariaDB />
            <InstallationGuideDBeaver />
        </div >
    )
}