export function Platform() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Platform Selection</h2>
            <div className="space-y-4">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-medium mb-3">Platform.sh Free Tier</h3>
                    <ul className="list-disc list-inside space-y-2 ">
                        <li>Free development environment</li>
                        <li>Git-based deployment</li>
                        <li>Built-in CI/CD pipeline</li>
                        <li>SSL certificates included</li>
                        <li>MariaDB database included</li>
                    </ul>
                </div>

                <div className="bg-card p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Account Setup</h3>
                    <ol className="list-decimal list-inside space-y-2 ">
                        <li>Visit platform.sh and create a free account</li>
                        <li>Verify your email address</li>
                        <li>Set up SSH keys for deployment</li>
                        <li>Install Platform.sh CLI tool</li>
                    </ol>
                </div>
            </div>
        </section>
    );
}