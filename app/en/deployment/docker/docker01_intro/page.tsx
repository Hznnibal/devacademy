import { BasicCommands } from './components/BasicCommands';
import { CoreConcepts } from './components/CoreConcepts';
import { DockerfileExplained } from './components/DockerfileExplained';
import { WhatIsDocker } from './components/WhatIsDocker';

export default function Introduction() {
    return (
        <div className="px-5 py-8 font-sans">

            <h1 className="text-3xl font-bold mb-8">Introduction to Docker</h1>

            <div className="bg-card p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold mb-3">Getting Started with Docker</h2>
                <p className="">
                    This guide will help you understand Docker from the ground up, starting with basic concepts and moving on to practical examples. Whether you're a complete beginner or looking to refresh your knowledge, you'll find everything you need to get started with Docker.
                </p>
            </div>

            <WhatIsDocker />
            <CoreConcepts />
            <BasicCommands />
            <DockerfileExplained />
        </div>
    );
}