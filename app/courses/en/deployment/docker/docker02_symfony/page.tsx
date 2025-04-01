import { CodeBlock } from '@/components/CodeBlock/code-block';
import { DockerCompose } from './components/DockerCompose';
import { EnvConfig } from './components/EnvConfig';
import { Makefile } from './components/MakeFile';
import { NginxConfig } from './components/NginxConfig';
import { PhpDockerfile } from './components/PhpDockerfile';
import { ProjectStructure } from './components/ProjectStructure';

export default function SymfonyDocker() {
    return (
        <div className="px-5 py-8 font-sans">

            <h1 className="text-3xl font-bold mb-8">Detailed Guide: Symfony Containerization</h1>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Containerization Steps</h2>
                <div className="bg-card p-4 rounded-lg mb-6">
                    <ol className="list-decimal list-inside space-y-2">
                        <li>Creating Docker project structure</li>
                        <li>PHP Dockerfile configuration</li>
                        <li>Nginx server configuration</li>
                        <li>Docker Compose configuration</li>
                        <li>Environment variables setup</li>
                        <li>Creating Makefile for common commands</li>
                    </ol>
                </div>
            </div>

            <ProjectStructure />
            <PhpDockerfile />
            <NginxConfig />
            <DockerCompose />
            <EnvConfig />
            <Makefile />

            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Project Setup</h2>
                <div className="space-y-4">
                    <div className="bg-card p-4 rounded">
                        <p className="font-medium mb-2">1. Clone the Symfony project</p>
                        <CodeBlock code={`git clone your-project && cd your-project`} />
                    </div>

                    <div className="bg-card p-4 rounded">
                        <p className="font-medium mb-2">2. Copy Docker files</p>
                        <CodeBlock code={`cp -r docker-config/* .`} />
                    </div>

                    <div className="bg-card p-4 rounded">
                        <p className="font-medium mb-2">3. Configure environment variables</p>
                        <CodeBlock code={`cp .env.example .env`} />
                    </div>

                    <div className="bg-card p-4 rounded">
                        <p className="font-medium mb-2">4. Start containers</p>
                        <CodeBlock code={`make build && make up`} />
                    </div>

                    <div className="bg-card p-4 rounded">
                        <p className="font-medium mb-2">5. Install dependencies</p>
                        <CodeBlock code={`make composer-install`} />
                    </div>

                    <div className="bg-card p-4 rounded">
                        <p className="font-medium mb-2">6. Create database</p>
                        <CodeBlock code={`make migrations`} />
                    </div>
                </div>
            </section>

        </div>
    );
}