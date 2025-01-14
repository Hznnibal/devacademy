import { CodeBlock } from "@/components/CodeBlock/code-block";

export function PhpDockerfile() {
    const XDEBUG_VERSION = '3.2.2';

    return (
        <div className="bg-card p-6 rounded-lg mb-6">
            <h3 className="font-semibold mb-4">2. PHP Dockerfile (docker/php/Dockerfile)</h3>
            <CodeBlock code={`# Base PHP-FPM image
  FROM php:8.2-fpm
  
  # Build arguments
  ARG APP_ENV=prod
  ARG XDEBUG_VERSION=${XDEBUG_VERSION}
  
  # Install essential system dependencies
  RUN apt-get update && apt-get install -y \\
      git \\
      unzip \\
      libzip-dev \\
      libicu-dev \\
      libpng-dev \\
      libjpeg-dev \\
      libfreetype6-dev \\
      && rm -rf /var/lib/apt/lists/
  
  # Configure and install PHP extensions
  RUN docker-php-ext-configure gd --with-freetype --with-jpeg \\
      && docker-php-ext-install -j$(nproc) \\
      pdo_mysql \\
      zip \\
      intl \\
      gd \\
      opcache
  
  # Install Composer
  COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
  
  # Production PHP configuration
  RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
  
  # Install Xdebug in development only
  RUN if [ "$APP_ENV" = "dev" ]; then \\
      pecl install xdebug-${XDEBUG_VERSION} \\
      && docker-php-ext-enable xdebug \\
      ; fi
  
  # Set working directory
  WORKDIR /var/www/symfony
  
  # Copy configuration files
  COPY docker/php/custom.ini $PHP_INI_DIR/conf.d/
  COPY docker/php/xdebug.ini $PHP_INI_DIR/conf.d/
  
  # Copy application files
  COPY composer.* ./
  RUN composer install --prefer-dist --no-dev --no-scripts --no-progress --no-interaction
  
  COPY . .
  
  # Production optimization
  RUN if [ "$APP_ENV" = "prod" ]; then \\
      composer dump-autoload --optimize \\
      && composer run-script post-install-cmd \\
      ; fi
  
  # Set permissions
  RUN chown -R www-data:www-data var`} />
        </div>
    );
}