'use client';

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitBranch } from "lucide-react";

export function Navigation() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Navigating Through History</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <Alert>
                    <GitBranch className="h-4 w-4" />
                    <AlertDescription>
                        Use git checkout to move between commits
                    </AlertDescription>
                </Alert>

                <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm block mb-2">git checkout &lt;commit-hash&gt;</code>
                        <p className="text-sm text-muted-foreground">
                            Move HEAD to a specific commit to view the project state at that point
                        </p>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm block mb-2">git checkout master</code>
                        <p className="text-sm text-muted-foreground">
                            Return to the latest commit on the master branch
                        </p>
                    </div>

                    <div className="p-4 border rounded-lg">
                        <p className="text-sm font-medium mb-2">Note about HEAD:</p>
                        <p className="text-sm text-muted-foreground">
                            HEAD is a pointer to the current commit you're viewing. It usually points to the latest
                            commit on your current branch, but can be moved to any commit using checkout.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}