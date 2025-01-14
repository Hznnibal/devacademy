export function WhatIsDocker() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">What is Docker?</h2>
            <div className="space-y-4">
                <p className="">
                    Docker is a platform that simplifies the process of creating, deploying, and running applications by using containers. Think of containers as lightweight, standalone packages that include everything needed to run a piece of software - the code, runtime environment, system tools, libraries, and settings.
                </p>

                <div className="bg-card p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">Why Use Docker?</h3>
                    <ul className="list-disc list-inside space-y-2 ">
                        <li><span className="font-medium">Consistency:</span> Applications run the same way everywhere</li>
                        <li><span className="font-medium">Isolation:</span> Each container runs independently</li>
                        <li><span className="font-medium">Efficiency:</span> Uses fewer resources than virtual machines</li>
                        <li><span className="font-medium">Scalability:</span> Easy to scale applications up or down</li>
                        <li><span className="font-medium">Version Control:</span> Track changes in your container configuration</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}