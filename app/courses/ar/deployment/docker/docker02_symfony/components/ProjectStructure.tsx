import { CodeBlock } from "@/components/CodeBlock/code-block";

export function ProjectStructure() {
    return (
        <div className="bg-card p-6 rounded-lg mb-6">
            <h3 className="font-semibold mb-4">١. هيكل المشروع</h3>
            <CodeBlock code={`symfony-project/
  ├── docker/
  │   ├── nginx/
  │   │   ├── default.conf    # تكوين Nginx
  │   │   └── nginx.conf      # التكوين العام لـ Nginx
  │   ├── php/
  │   │   ├── Dockerfile      # تكوين PHP
  │   │   ├── php.ini         # إعدادات PHP
  │   │   └── xdebug.ini      # إعدادات Xdebug
  │   └── mysql/
  │       └── my.cnf          # تكوين MySQL
  ├── docker-compose.yml      # تكوين الخدمات
  ├── docker-compose.dev.yml  # تكوين التطوير
  ├── docker-compose.prod.yml # تكوين الإنتاج
  ├── .env                    # المتغيرات البيئية
  └── Makefile               # أوامر الأدوات`} />
        </div>
    );
}
