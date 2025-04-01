import { CodeBlock } from "@/components/CodeBlock/code-block";

export function Monitoring() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">مراقبة ما بعد النشر</h2>

            <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-medium mb-3">الأدوات المتاحة</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>لوحة تحكم منصة Platform.sh</li>
                        <li>سجلات التطبيق</li>
                        <li>مقاييس قاعدة البيانات</li>
                        <li>مراقبة الأداء</li>
                    </ul>
                </div>

                <div className="bg-card p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">الأوامر المفيدة</h3>
                    <div className="space-y-3">
                        <div>
                            <CodeBlock code={`platform ssh`} />
                            <p className="text-sm ">الدخول إلى بيئتك عبر SSH</p>
                        </div>
                        <div>
                            <CodeBlock code={`platform log app`} />
                            <p className="text-sm ">عرض سجلات التطبيق</p>
                        </div>
                        <div>
                            <CodeBlock code={`platform db:sql`} />
                            <p className="text-sm ">الوصول إلى واجهة قاعدة البيانات</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
