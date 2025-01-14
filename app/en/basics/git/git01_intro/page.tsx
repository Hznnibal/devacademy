'use client';

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Terminal } from "lucide-react";
import { GitHeader } from "./header";
import { InstallationGuide } from "./InstallationGuide";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 ">
        <GitHeader />

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What is Git?</CardTitle>
            <CardDescription>Understanding version control systems</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed mb-4">
              Git is a distributed version control system that helps you track changes in your code.
              It maintains a chronological history of all modifications made to your project, storing
              them in what's called a repository.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Local Repository</h3>
                <p className="text-sm text-muted-foreground">
                  A repository stored on your local machine, containing the complete history and
                  version tracking information of your project.
                </p>
              </Card>
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Remote Repository</h3>
                <p className="text-sm text-muted-foreground">
                  A repository hosted on a server or cloud service like GitHub, allowing for
                  collaboration and backup of your code.
                </p>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Installation Guide */}
        <InstallationGuide />

        {/* Basic Git Commands */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic Git Commands</CardTitle>
            <CardDescription>Essential commands to get started</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertDescription>
                Common Git commands you'll use frequently
              </AlertDescription>
            </Alert>
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <code className="text-sm">git init</code>
                <p className="text-sm text-muted-foreground mt-2">
                  Initialize a new Git repository in your current directory
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <code className="text-sm">git clone [url]</code>
                <p className="text-sm text-muted-foreground mt-2">
                  Clone a repository from GitHub to your local machine
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <code className="text-sm">git add [file]</code>
                <p className="text-sm text-muted-foreground mt-2">
                  Add files to the staging area
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <code className="text-sm">git commit -m "message"</code>
                <p className="text-sm text-muted-foreground mt-2">
                  Commit your changes with a descriptive message
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Configuration */}
        <Card>
          <CardHeader>
            <CardTitle>Configuring Git</CardTitle>
            <CardDescription>Setting up your Git identity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Settings className="h-4 w-4" />
              <AlertDescription>
                Configure your Git username and email
              </AlertDescription>
            </Alert>
            <div className="bg-muted p-4 rounded-lg space-y-4">
              <div>
                <code className="text-sm">git config --global user.name "Your Name"</code>
                <p className="text-sm text-muted-foreground mt-2">
                  Set your username for commit identification
                </p>
              </div>
              <div>
                <code className="text-sm">git config --global user.email "your.email@example.com"</code>
                <p className="text-sm text-muted-foreground mt-2">
                  Set your email address for commit identification
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}