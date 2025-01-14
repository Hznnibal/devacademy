import { CodeBlock } from "@/components/CodeBlock/code-block";

export function PhpDockerfile() {
    const XDEBUG_VERSION = '3.2.2';

    return (
        <div className="bg-card p-6 rounded-lg mb-6">
            <h3 className="font-semibold mb-4">٢. Dockerfile لـ PHP (docker/php/Dockerfile)</h3>
            <CodeBlock code={`# صورة PHP-FPM الأساسية
  FROM php:8.2-fpm
  
  # معلمات البناء
  ARG APP_ENV=prod
  ARG XDEBUG_VERSION=${XDEBUG_VERSION}
  
  # تثبيت التبعيات الأساسية للنظام
  RUN apt-get update && apt-get install -y \\
      git \\
      unzip \\
      libzip-dev \\
      libicu-dev \\
      libpng-dev \\
      libjpeg-dev \\
      libfreetype6-dev \\
      && rm -rf /var/lib/apt/lists/
  
  # تكوين وتثبيت ملحقات PHP
  RUN docker-php-ext-configure gd --with-freetype --with-jpeg \\
      && docker-php-ext-install -j$(nproc) \\
      pdo_mysql \\
      zip \\
      intl \\
      gd \\
      opcache
  
  # تثبيت Composer
  COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
  
  # تكوين PHP للإنتاج
  RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
  
  # تثبيت Xdebug في بيئة التطوير فقط
  RUN if [ "$APP_ENV" = "dev" ]; then \\
      pecl install xdebug-${XDEBUG_VERSION} \\
      && docker-php-ext-enable xdebug \\
      ; fi
  
  # تعيين دليل العمل
  WORKDIR /var/www/symfony
  
  # نسخ ملفات التكوين
  COPY docker/php/custom.ini $PHP_INI_DIR/conf.d/
  COPY docker/php/xdebug.ini $PHP_INI_DIR/conf.d/
  
  # نسخ ملفات التطبيق
  COPY composer.* ./
  RUN composer install --prefer-dist --no-dev --no-scripts --no-progress --no-interaction
  
  COPY . .
  
  # تحسينات الإنتاج
  RUN if [ "$APP_ENV" = "prod" ]; then \\
      composer dump-autoload --optimize \\
      && composer run-script post-install-cmd \\
      ; fi
  
  # تعيين الأذونات
  RUN chown -R www-data:www-data var`} />
        </div>
    );
}
