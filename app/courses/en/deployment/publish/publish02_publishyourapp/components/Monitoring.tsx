import { CodeBlock } from "@/components/CodeBlock/code-block";

export function Monitoring() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Post-Deployment Monitoring</h2>

            <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-medium mb-3">Available Tools</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Platform.sh Web Console</li>
                        <li>Application Logs</li>
                        <li>Database Metrics</li>
                        <li>Performance Monitoring</li>
                    </ul>
                </div>

                <div className="bg-card p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Useful Commands</h3>
                    <div className="space-y-3">
                        <div>
                            <CodeBlock code={`platform ssh`} />
                            <p className="text-sm ">SSH into your environment</p>
                        </div>
                        <div>
                            <CodeBlock code={`platform log app`} />
                            <p className="text-sm ">View application logs</p>
                        </div>
                        <div>
                            <CodeBlock code={`platform db:sql`} />
                            <p className="text-sm ">Access the database CLI</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}