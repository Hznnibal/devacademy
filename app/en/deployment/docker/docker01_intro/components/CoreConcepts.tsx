export function CoreConcepts() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Core Concepts</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-medium mb-3">Images</h3>
                    <p className="">
                        A Docker image is like a blueprint or template. It contains:
                    </p>
                    <ul className="list-disc list-inside mt-2 ">
                        <li>The application code</li>
                        <li>Runtime environment</li>
                        <li>Dependencies</li>
                        <li>Configuration files</li>
                    </ul>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-medium mb-3">Containers</h3>
                    <p className="">
                        A container is a running instance of an image. Think of it as:
                    </p>
                    <ul className="list-disc list-inside mt-2 ">
                        <li>A lightweight, isolated environment</li>
                        <li>Contains everything needed to run the application</li>
                        <li>Can be started, stopped, and deleted</li>
                        <li>Runs consistently across different environments</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}