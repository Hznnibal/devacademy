'use client';

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Command } from "lucide-react";

export function InstallationGuide() {
    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>Installing Git</CardTitle>
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
                            <Alert>
                                <Command className="h-4 w-4" />
                                <AlertDescription>
                                    Download and install Git for Windows
                                </AlertDescription>
                            </Alert>
                            <ol className="list-decimal list-inside space-y-2">
                                <li>Visit <a href="https://git-scm.com/download/win" className="text-primary hover:underline">git-scm.com/download/win</a></li>
                                <li>Download the latest Git for Windows installer</li>
                                <li>Run the installer and follow the installation wizard</li>
                                <li>Choose default settings unless you have specific preferences</li>
                            </ol>
                        </div>
                    </TabsContent>

                    <TabsContent value="macos">
                        <div className="space-y-4">
                            <Alert>
                                <Command className="h-4 w-4" />
                                <AlertDescription>
                                    Install Git using Homebrew or download the installer
                                </AlertDescription>
                            </Alert>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-semibold">Option 1: Using Homebrew</p>
                                    <div className="bg-muted p-4 rounded-lg mt-2">
                                        <code className="text-sm">brew install git</code>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold">Option 2: Using the Installer</p>
                                    <ol className="list-decimal list-inside space-y-2">
                                        <li>Visit <a href="https://git-scm.com/download/mac" className="text-primary hover:underline">git-scm.com/download/mac</a></li>
                                        <li>Download and run the latest Git installer</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="linux">
                        <div className="space-y-4">
                            <Alert>
                                <Command className="h-4 w-4" />
                                <AlertDescription>
                                    Install Git using your distribution's package manager
                                </AlertDescription>
                            </Alert>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-semibold">Ubuntu/Debian:</p>
                                    <div className="bg-muted p-4 rounded-lg mt-2">
                                        <code className="text-sm">sudo apt install git</code>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold">Fedora:</p>
                                    <div className="bg-muted p-4 rounded-lg mt-2">
                                        <code className="text-sm">sudo dnf install git</code>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold">Arch Linux:</p>
                                    <div className="bg-muted p-4 rounded-lg mt-2">
                                        <code className="text-sm">sudo pacman -S git</code>
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