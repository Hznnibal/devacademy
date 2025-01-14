import { CodeBlock } from "@/components/CodeBlock/code-block";

export function PreparationSteps() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Project Preparation</h2>

            <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">1. Configure Environment Variables</h3>
                    <CodeBlock code={`# .env.platform
  APP_ENV=prod
  APP_SECRET=your-secret-here
  DATABASE_URL=\${DATABASE_URL}
  MAILER_DSN=\${MAILER_DSN}`} />
                </div>

                <div className="bg-card p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">2. Platform.sh Configuration</h3>
                    <CodeBlock code={`# .platform.app.yaml
  name: app
  type: php:8.2
  build:
      flavor: none
  
  relationships:
      database: "database:mysql"
  
  web:
      locations:
          "/":
              root: "public"
              expires: 1h
              passthru: "/index.php"
  
  disk: 512
  
  mounts:
      "/var": { source: local, source_path: var }
  
  hooks:
      build: |
          set -e
          composer install --no-dev --optimize-autoloader
          php bin/console cache:clear
          php bin/console assets:install --no-debug
      deploy: |
          set -e
          php bin/console doctrine:migrations:migrate --no-interaction`} />
                </div>

                <div className="bg-card p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">3. Services Configuration</h3>
                    <CodeBlock code={`# .platform/services.yaml
  database:
      type: mysql:10.6
      disk: 256`} />
                </div>
            </div>
        </section>
    );
}