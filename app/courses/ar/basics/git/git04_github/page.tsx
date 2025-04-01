'use client';

import { GithubHeader } from "./header";
import { Introduction } from "./introduction";
import { RemoteCommands } from "./remote-commands";
import { SetupGuide } from "./setup-guide";

export default function GithubPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-12">
        <GithubHeader />
        <Introduction />
        <SetupGuide />
        <RemoteCommands />
      </div>
    </main>
  );
}