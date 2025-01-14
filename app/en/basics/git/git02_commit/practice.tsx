'use client';

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal } from "lucide-react";

export function CommitPractice() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Creating Your First Commit</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-4">
                    <h3 className="font-semibold">1. Create a README file</h3>
                    <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm">touch README.md</code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Create a new README.md file in your project directory
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="font-semibold">2. Check the status</h3>
                    <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm">git status</code>
                    </div>
                    <Alert>
                        <Terminal className="h-4 w-4" />
                        <AlertDescription>
                            You'll see README.md listed as an untracked file
                        </AlertDescription>
                    </Alert>
                </div>

                <div className="space-y-4">
                    <h3 className="font-semibold">3. Stage the file</h3>
                    <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm">git add README.md</code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Add the file to the staging area
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="font-semibold">4. Commit the file</h3>
                    <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm">git commit -m "Initial commit: Add README file"</code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Create your first commit with a descriptive message
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}