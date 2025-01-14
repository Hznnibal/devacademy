'use client';

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal } from "lucide-react";

export function SetupGuide() {
    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>Setting Up GitHub</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-4">
                    <h3 className="font-semibold">1. Create a GitHub Account</h3>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                        <li>Visit <a href="https://github.com" className="text-primary hover:underline">github.com</a></li>
                        <li>Click "Sign up"</li>
                        <li>Follow the registration process</li>
                        <li>Verify your email address</li>
                    </ol>
                </div>

                <div className="space-y-4">
                    <h3 className="font-semibold">2. Generate a Personal Access Token</h3>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                        <li>Go to GitHub Settings</li>
                        <li>Select "Developer settings"</li>
                        <li>Click "Personal access tokens"</li>
                        <li>Generate a new token with necessary permissions</li>
                    </ol>
                </div>

                <Alert>
                    <Terminal className="h-4 w-4" />
                    <AlertDescription>
                        Keep your access token secure! It acts as your password for Git operations.
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>
    );
}