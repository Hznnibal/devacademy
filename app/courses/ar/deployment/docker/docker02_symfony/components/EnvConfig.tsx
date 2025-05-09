import { CodeBlock } from "@/components/CodeBlock/code-block";

export function EnvConfig() {
    return (
        <div className="bg-card p-6 rounded-lg mb-6">
            <h3 className="font-semibold mb-4">٥. تكوين البيئة</h3>
            <CodeBlock code={`# التطبيق
  APP_ENV=dev
  APP_SECRET=your_secret_here
  
  # Nginx
  NGINX_PORT=80
  
  # قاعدة البيانات
  MYSQL_ROOT_PASSWORD=root_password
  MYSQL_DATABASE=symfony
  MYSQL_USER=symfony_user
  MYSQL_PASSWORD=symfony_password
  MYSQL_PORT=3306
  
  # Redis
  REDIS_PORT=6379`} />
        </div>
    );
}
