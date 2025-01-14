import { CodeBlock } from "@/components/CodeBlock/code-block";

export function Makefile() {
    return (
        <div className="bg-card p-6 rounded-lg mb-6">
            <h3 className="font-semibold mb-4">6. Makefile for Common Commands</h3>
            <CodeBlock code={`# Variables
  DOCKER_COMPOSE = docker-compose
  DOCKER_EXEC = docker-compose exec php
  SYMFONY = $(DOCKER_EXEC) bin/console
  
  # Docker commands
  up:
      $(DOCKER_COMPOSE) up -d
  
  down:
      $(DOCKER_COMPOSE) down
  
  build:
      $(DOCKER_COMPOSE) build
  
  rebuild:
      $(DOCKER_COMPOSE) build --no-cache
  
  logs:
      $(DOCKER_COMPOSE) logs -f
  
  # Symfony commands
  console:
      $(DOCKER_EXEC) bash
  
  sf:
      $(SYMFONY) $(cmd)
  
  cache-clear:
      $(SYMFONY) cache:clear
  
  migrations:
      $(SYMFONY) doctrine:migrations:migrate --no-interaction
  
  fixtures:
      $(SYMFONY) doctrine:fixtures:load --no-interaction
  
  # Composer commands
  composer-install:
      $(DOCKER_EXEC) composer install
  
  composer-update:
      $(DOCKER_EXEC) composer update
  
  # Tests
  tests:
      $(DOCKER_EXEC) bin/phpunit
  
  # Code quality
  phpstan:
      $(DOCKER_EXEC) vendor/bin/phpstan analyse src tests
  
  cs-fixer:
      $(DOCKER_EXEC) vendor/bin/php-cs-fixer fix src --rules=@Symfony`} />
        </div>
    );
}