import { CodeBlock } from "@/components/CodeBlock/code-block";

export function DeploymentSteps() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Deployment Process</h2>

            <div className="space-y-4">
                <div className="bg-card p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">1. Initialize Platform.sh Project</h3>
                    <CodeBlock code={`platform project:create`} />
                    <p className="text-sm ">Creates a new Platform.sh project</p>
                </div>

                <div className="bg-card p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">2. Push Your Code</h3>
                    <div className="space-y-3">
                        <CodeBlock code={`git add .`} />
                        <CodeBlock code={`git commit -m "Initial Platform.sh deployment"`} />
                        <CodeBlock code={`git push platform main`} />
                    </div>
                </div>

                <div className="bg-card p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">3. Monitor Deployment</h3>
                    <CodeBlock code={`platform activity:log`} />
                    <p className="text-sm ">Watch the deployment progress</p>
                </div>
            </div>
        </section>
    );
}