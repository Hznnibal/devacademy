import { CodeBlock } from "@/components/CodeBlock/code-block";

export function DockerCompose() {
  return (
    <div className="bg-card p-6 rounded-lg mb-6">
      <h3 className="font-semibold mb-4">٤. تكوين Docker Compose (docker-compose.yml)</h3>
      <CodeBlock code={`version: '3.8'
  
  services:
    php:
      build:
        context: .
        dockerfile: docker/php/Dockerfile
        args:
          - APP_ENV=\${APP_ENV:-prod}
      volumes:
        - ./:/var/www/symfony
        - ./docker/php/custom.ini:/usr/local/etc/php/conf.d/custom.ini:ro
      environment:
        - APP_ENV=\${APP_ENV:-prod}
        - APP_SECRET=\${APP_SECRET}
        - DATABASE_URL=mysql://\${MYSQL_USER}:\${MYSQL_PASSWORD}@database:3306/\${MYSQL_DATABASE}
      depends_on:
        - database
  
    nginx:
      image: nginx:alpine
      ports:
        - "\${NGINX_PORT:-80}:80"
      volumes:
        - ./:/var/www/symfony
        - ./docker/nginx/default.conf:/etc/nginx/conf.d/default.conf:ro
        - ./docker/nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      depends_on:
        - php
  
    database:
      image: mysql:8.0
      command: --default-authentication-plugin=mysql_native_password
      environment:
        - MYSQL_ROOT_PASSWORD=\${MYSQL_ROOT_PASSWORD}
        - MYSQL_DATABASE=\${MYSQL_DATABASE}
        - MYSQL_USER=\${MYSQL_USER}
        - MYSQL_PASSWORD=\${MYSQL_PASSWORD}
      volumes:
        - db-data:/var/lib/mysql
        - ./docker/mysql/my.cnf:/etc/mysql/conf.d/my.cnf:ro
      ports:
        - "\${MYSQL_PORT:-3306}:3306"
  
    redis:
      image: redis:alpine
      ports:
        - "\${REDIS_PORT:-6379}:6379"
      volumes:
        - redis-data:/data
  
  volumes:
    db-data:
    redis-data:`} />
    </div>
  );
}
