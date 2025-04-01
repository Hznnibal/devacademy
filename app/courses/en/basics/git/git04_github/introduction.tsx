'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Introduction() {
    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>What is GitHub?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                    GitHub is a web-based platform that hosts Git repositories and provides additional
                    collaboration features. With over 100 million developers worldwide, it's the largest
                    hosting service for Git repositories and a hub for open-source projects.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Key Features</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Repository hosting</li>
                            <li>• Issue tracking</li>
                            <li>• Pull requests</li>
                            <li>• Project management</li>
                            <li>• Team collaboration</li>
                        </ul>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Benefits</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Code backup</li>
                            <li>• Version control</li>
                            <li>• Collaboration tools</li>
                            <li>• Project visibility</li>
                            <li>• Community engagement</li>
                        </ul>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}