export function CoreConcepts() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">المفاهيم الأساسية</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-medium mb-3">الصور</h3>
                    <p className="">
                        صورة Docker تشبه المخطط أو القالب. تحتوي على:
                    </p>
                    <ul className="list-disc list-inside mt-2 ">
                        <li>رمز التطبيق</li>
                        <li>بيئة التشغيل</li>
                        <li>الاعتمادات</li>
                        <li>ملفات التكوين</li>
                    </ul>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-medium mb-3">الحاويات</h3>
                    <p className="">
                        الحاوية هي نسخة جارية من صورة. يمكن التفكير فيها كـ:
                    </p>
                    <ul className="list-disc list-inside mt-2 ">
                        <li>بيئة خفيفة الوزن ومعزولة</li>
                        <li>تحتوي على كل ما يلزم لتشغيل التطبيق</li>
                        <li>يمكن تشغيلها وإيقافها وحذفها</li>
                        <li>تعمل بشكل متسق عبر بيئات مختلفة</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
