'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export function InstallationGuideMariaDB() {
    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>Install MariaDB</CardTitle>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="windows" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="windows">Windows</TabsTrigger>
                        <TabsTrigger value="macos">macOS</TabsTrigger>
                        <TabsTrigger value="linux">Linux</TabsTrigger>
                    </TabsList>

                    <TabsContent value="windows">
                        <div className="space-y-4">
                            <ol className="space-y-2 list-decimal list-inside">
                                <li>Download the installer from <a href="https://mariadb.com/download/" className="text-primary hover:underline text-blue-600">the official MariaDB website</a></li>
                                <Image
                                    src="/DATABASE/Installation-MariaDB.png"
                                    alt="MariaDB installation screenshot"
                                    className="rounded shadow-md"
                                    width={560}
                                    height={360}
                                />
                                <li>Run the MSI installer</li>
                                <li>Follow the installation wizard</li>
                                <li>Set a root password during installation</li>
                                <Image
                                    src="/DATABASE/Password-MariaDB.png"
                                    alt="MariaDB root password setup screenshot"
                                    className="rounded shadow-md"
                                    width={560}
                                    height={360}
                                />
                                <li>Complete the installation</li>
                            </ol>
                        </div>
                    </TabsContent>

                    <TabsContent value="macos">
                        <div className="space-y-4">
                            <div className="space-y-4">
                                <div>
                                    <ol className="space-y-2 list-decimal list-inside">
                                        <li>Install Homebrew if it's not already installed: <code className="bg-muted px-2 py-1 rounded">/bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;</code></li>
                                        <li>Install MariaDB: <code className="bg-muted px-2 py-1 rounded">brew install mariadb</code></li>
                                        <li>Start the service: <code className="bg-muted px-2 py-1 rounded">brew services start mariadb</code></li>
                                        <li>Secure the installation: <code className="bg-muted px-2 py-1 rounded">mysql_secure_installation</code></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="linux">
                        <div className="space-y-4">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold">Ubuntu/Debian:</h4>
                                    <code className="block bg-muted p-2 rounded">
                                        sudo apt update<br />
                                        sudo apt install mariadb-server<br />
                                        sudo mysql_secure_installation
                                    </code>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Fedora:</h4>
                                    <code className="block bg-muted p-2 rounded">
                                        sudo dnf install mariadb mariadb-server<br />
                                        sudo systemctl start mariadb<br />
                                        sudo mysql_secure_installation
                                    </code>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
}


export function InstallationGuideDBeaver() {
    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>Install DBeaver</CardTitle>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="windows" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="windows">Windows</TabsTrigger>
                        <TabsTrigger value="macos">macOS</TabsTrigger>
                        <TabsTrigger value="linux">Linux</TabsTrigger>
                    </TabsList>

                    <TabsContent value="windows">
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">DBeaver</h3>
                                <ol className="space-y-2 list-decimal list-inside">
                                    <li>Download DBeaver from <a href="https://dbeaver.io/download/" className="text-primary hover:underline text-blue-600">the official website</a></li>
                                    <li>Run the installer</li>
                                    <li>Follow the installation steps</li>
                                </ol>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="macos">
                        <div className="space-y-4">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">DBeaver</h3>
                                    <ol className="space-y-2 list-decimal list-inside">
                                        <li>Install via Homebrew: <code className="bg-muted px-2 py-1 rounded">brew install --cask dbeaver-community</code></li>
                                        <li>Or download from <a href="https://dbeaver.io/download/" className="text-primary hover:underline">the official website</a></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="linux">
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">DBeaver</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold">Ubuntu/Debian:</h4>
                                        <code className="block bg-muted p-2 rounded">
                                            sudo apt update<br />
                                            sudo apt install dbeaver-ce
                                        </code>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Fedora:</h4>
                                        <code className="block bg-muted p-2 rounded">
                                            sudo dnf install dbeaver
                                        </code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
}
