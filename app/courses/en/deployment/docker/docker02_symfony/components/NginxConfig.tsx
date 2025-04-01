import { CodeBlock } from "@/components/CodeBlock/code-block";

export function NginxConfig() {
    return (
        <div className="bg-card p-6 rounded-lg mb-6">
            <h3 className="font-semibold mb-4">3. Nginx Configuration (docker/nginx/default.conf)</h3>
            <CodeBlock code={`server {
      listen 80;
      server_name localhost;
      root /var/www/symfony/public;
  
      location / {
          try_files $uri /index.php$is_args$args;
      }
  
      location ~ ^/index\\.php(/|$) {
          fastcgi_pass php:9000;
          fastcgi_split_path_info ^(.+\\.php)(/.*)$;
          include fastcgi_params;
          
          fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
          fastcgi_param DOCUMENT_ROOT $realpath_root;
          
          fastcgi_buffer_size 128k;
          fastcgi_buffers 4 256k;
          fastcgi_busy_buffers_size 256k;
          
          internal;
      }
  
      location ~ \\.php$ {
          return 404;
      }
  
      # Cache static files
      location ~* \\.(jpg|jpeg|png|gif|ico|css|js)$ {
          expires 30d;
          add_header Cache-Control "public, no-transform";
      }
  
      # Deny access to sensitive files
      location ~ \\.(env|log|yaml|twig)$ {
          deny all;
      }
  
      error_log /var/log/nginx/project_error.log;
      access_log /var/log/nginx/project_access.log;
  }`} />
        </div>
    );
}