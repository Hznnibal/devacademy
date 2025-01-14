import { CodeBlock } from "@/components/CodeBlock/code-block";

export function BasicCommands() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Essential Docker Commands</h2>
            <div className="space-y-4">
                <div className="bg-card p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Images</h3>
                    <div className="space-y-3">
                        <div>
                            <CodeBlock code={`docker pull nginx`} />
                            <p className="text-sm  mt-1">Download an image from Docker Hub</p>
                        </div>
                        <div>
                            <CodeBlock code={`docker images`} />
                            <p className="text-sm  mt-1">List all downloaded images</p>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Containers</h3>
                    <div className="space-y-3">
                        <div>
                            <CodeBlock code={`docker run -p 8080:80 nginx`} />
                            <p className="text-sm  mt-1">Start a new container (maps port 8080 on your computer to port 80 in the container)</p>
                        </div>
                        <div>
                            <CodeBlock code={`docker ps`} />
                            <p className="text-sm  mt-1">List running containers</p>
                        </div>
                        <div>
                            <CodeBlock code={`docker stop container_id`} />
                            <p className="text-sm  mt-1">Stop a running container</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}