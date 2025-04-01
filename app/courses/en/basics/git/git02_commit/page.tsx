'use client';

import { GitAreas } from "./areas";
import { CommitHeader } from "./header";
import { CommitPractice } from "./practice";
import { CommitStages } from "./stages";

export default function CommitPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 ">
        <CommitHeader />
        <CommitStages />
        <GitAreas />
        <CommitPractice />
      </div>
    </main>
  );
}