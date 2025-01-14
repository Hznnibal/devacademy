import { CodeBlock } from "@/components/CodeBlock/code-block";

export function ProjectStructure() {
    return (
        <div className="bg-card p-6 rounded-lg mb-6">
            <h3 className="font-semibold mb-4">1. Project Structure</h3>
            <CodeBlock code={`symfony-project/
  ├── docker/
  │   ├── nginx/
  │   │   ├── default.conf    # Nginx configuration
  │   │   └── nginx.conf      # Global Nginx configuration
  │   ├── php/
  │   │   ├── Dockerfile      # PHP configuration
  │   │   ├── php.ini         # PHP settings
  │   │   └── xdebug.ini      # Xdebug settings
  │   └── mysql/
  │       └── my.cnf          # MySQL configuration
  ├── docker-compose.yml      # Services configuration
  ├── docker-compose.dev.yml  # Development configuration
  ├── docker-compose.prod.yml # Production configuration
  ├── .env                    # Environment variables
  └── Makefile               # Utility commands`} />
        </div>
    );
}