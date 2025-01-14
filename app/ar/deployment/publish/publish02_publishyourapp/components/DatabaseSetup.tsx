import { CodeBlock } from "@/components/CodeBlock/code-block";

export function DatabaseSetup() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">إعداد قاعدة البيانات</h2>

            <div className="space-y-4">
                <div className="bg-card p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">١. الاتصال بقاعدة البيانات</h3>
                    <CodeBlock code={`# config/packages/doctrine.yaml
  doctrine:
      dbal:
          url: '%env(resolve:DATABASE_URL)%'`} />
                    <p className="">تقوم Platform.sh بتوفير متغير البيئة DATABASE_URL بشكل تلقائي.</p>
                </div>

                <div className="bg-card p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">٢. إعداد الترحيل (Migration)</h3>
                    <div className="space-y-3">
                        <p className="">قم بإنشاء الترحيلات الخاصة بك:</p>
                        <CodeBlock code={`php bin/console make:migration`} />
                        <p className="">سيتم تنفيذ الترحيلات تلقائيًا أثناء عملية النشر.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
