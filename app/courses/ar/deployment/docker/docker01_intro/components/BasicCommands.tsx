import { CodeBlock } from "@/components/CodeBlock/code-block";

export function BasicCommands() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">أوامر Docker الأساسية</h2>
            <div className="space-y-4">
                <div className="bg-card p-4 rounded-lg">
                    <h3 className="font-medium mb-2">الصور</h3>
                    <div className="space-y-3">
                        <div>
                            <CodeBlock code={`docker pull nginx`} />
                            <p className="text-sm  mt-1">تحميل صورة من Docker Hub</p>
                        </div>
                        <div>
                            <CodeBlock code={`docker images`} />
                            <p className="text-sm  mt-1">قائمة بجميع الصور المحملة</p>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-4 rounded-lg">
                    <h3 className="font-medium mb-2">الحاويات</h3>
                    <div className="space-y-3">
                        <div>
                            <CodeBlock code={`docker run -p 8080:80 nginx`} />
                            <p className="text-sm  mt-1">تشغيل حاوية جديدة (يربط المنفذ 8080 على جهازك بالمنفذ 80 في الحاوية)</p>
                        </div>
                        <div>
                            <CodeBlock code={`docker ps`} />
                            <p className="text-sm  mt-1">قائمة بالحاويات الجارية</p>
                        </div>
                        <div>
                            <CodeBlock code={`docker stop container_id`} />
                            <p className="text-sm  mt-1">إيقاف حاوية جارية</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
