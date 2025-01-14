import { CodeBlock } from "@/components/CodeBlock/code-block";

export function DatabaseSetup() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Database Configuration</h2>

            <div className="space-y-4">
                <div className="bg-card p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">1. Database Connection</h3>
                    <CodeBlock code={`# config/packages/doctrine.yaml
  doctrine:
      dbal:
          url: '%env(resolve:DATABASE_URL)%'`} />
                    <p className="">Platform.sh automatically provides the DATABASE_URL environment variable.</p>
                </div>

                <div className="bg-card p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">2. Migration Setup</h3>
                    <div className="space-y-3">
                        <p className="">Create your migrations:</p>
                        <CodeBlock code={`php bin/console make:migration`} />
                        <p className="">Migrations will run automatically during deployment.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}