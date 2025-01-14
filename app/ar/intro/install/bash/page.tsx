'use client';

import { BasicCommands } from "./components-bash/basic-commands";
import { DeveloperCommands } from "./components-bash/developer-commands";
import { FileCommands } from "./components-bash/file-commands";
import { BashHeader } from "./components-bash/header";
import { SystemCommands } from "./components-bash/system-commands";

export default function BashPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-background to-muted">
            <div className="px-5 py-8 font-sans">
                <BashHeader />
                <BasicCommands />
                <FileCommands />
                <SystemCommands />
                <DeveloperCommands />
            </div>
        </main>
    );
}