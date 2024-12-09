"use client";

import { Sidebar } from "../SideNav/sidebar";
import { Navbar } from "./navbar";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="flex pt-6 px-6 w-full mt-16">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 ml-1/4 p-6 rounded-lg bg-background overflow-y-auto max-h-[calc(100vh-6rem)]">
          {children}
        </main>
      </div>
    </div>
  );
}
