'use client';

import { AdvancedOptions } from "./advanced-options";
import { BasicUsage } from "./basic-usage";
import { LogHeader } from "./header";
import { Navigation } from "./navigation";

export default function LogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-12">
        <LogHeader />
        <BasicUsage />
        <AdvancedOptions />
        <Navigation />
      </div>
    </main>
  );
}