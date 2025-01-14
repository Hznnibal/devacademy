import { CodeBlock } from '@/components/CodeBlock/code-block';
import { DockerCompose } from './components/DockerCompose';
import { EnvConfig } from './components/EnvConfig';
import { Makefile } from './components/MakeFile';
import { NginxConfig } from './components/NginxConfig';
import { PhpDockerfile } from './components/PhpDockerfile';
import { ProjectStructure } from './components/ProjectStructure';

export default function SymfonyDocker() {
    return (
        <div className="px-5 py-8 font-sans">

            <h1 className="text-3xl font-bold mb-8">دليل تفصيلي: حاوية Symfony</h1>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">خطوات الحاوية</h2>
                <div className="bg-card p-4 rounded-lg mb-6">
                    <ol className="list-decimal list-inside space-y-2">
                        <li>إنشاء هيكل مشروع Docker</li>
                        <li>تكوين Dockerfile لـ PHP</li>
                        <li>تكوين خادم Nginx</li>
                        <li>تكوين Docker Compose</li>
                        <li>إعداد المتغيرات البيئية</li>
                        <li>إنشاء Makefile للأوامر الشائعة</li>
                    </ol>
                </div>
            </div>

            <ProjectStructure />
            <PhpDockerfile />
            <NginxConfig />
            <DockerCompose />
            <EnvConfig />
            <Makefile />

            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">إعداد المشروع</h2>
                <div className="space-y-4">
                    <div className="bg-card p-4 rounded">
                        <p className="font-medium mb-2">١. استنساخ مشروع Symfony</p>
                        <CodeBlock code={`git clone your-project && cd your-project`} />
                    </div>

                    <div className="bg-card p-4 rounded">
                        <p className="font-medium mb-2">٢. نسخ ملفات Docker</p>
                        <CodeBlock code={`cp -r docker-config/* .`} />
                    </div>

                    <div className="bg-card p-4 rounded">
                        <p className="font-medium mb-2">٣. تكوين المتغيرات البيئية</p>
                        <CodeBlock code={`cp .env.example .env`} />
                    </div>

                    <div className="bg-card p-4 rounded">
                        <p className="font-medium mb-2">٤. بدء الحاويات</p>
                        <CodeBlock code={`make build && make up`} />
                    </div>

                    <div className="bg-card p-4 rounded">
                        <p className="font-medium mb-2">٥. تثبيت التبعيات</p>
                        <CodeBlock code={`make composer-install`} />
                    </div>

                    <div className="bg-card p-4 rounded">
                        <p className="font-medium mb-2">٦. إنشاء قاعدة البيانات</p>
                        <CodeBlock code={`make migrations`} />
                    </div>
                </div>
            </section>

        </div>
    );
}
