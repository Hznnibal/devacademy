import { CodeBlock } from "@/components/CodeBlock/code-block";

export function DeploymentSteps() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">عملية النشر</h2>

            <div className="space-y-4">
                <div className="bg-card p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">١. تهيئة مشروع Platform.sh</h3>
                    <CodeBlock code={`platform project:create`} />
                    <p className="text-sm ">إنشاء مشروع جديد على منصة Platform.sh</p>
                </div>

                <div className="bg-card p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">٢. دفع الكود إلى الخادم</h3>
                    <div className="space-y-3">
                        <CodeBlock code={`git add .`} />
                        <CodeBlock code={`git commit -m "النشر الأول على Platform.sh"`} />
                        <CodeBlock code={`git push platform main`} />
                    </div>
                </div>

                <div className="bg-card p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">٣. مراقبة عملية النشر</h3>
                    <CodeBlock code={`platform activity:log`} />
                    <p className="text-sm ">راقب تقدم عملية النشر</p>
                </div>
            </div>
        </section>
    );
}
