export function WhatIsDocker() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">ما هو Docker؟</h2>
            <div className="space-y-4">
                <p className="">
                    Docker هو منصة تبسط عملية إنشاء التطبيقات ونشرها وتشغيلها باستخدام الحاويات. فكر في الحاويات كحزم خفيفة الوزن ومستقلة تشمل كل شيء يحتاجه تشغيل قطعة من البرمجيات - الكود، بيئة التشغيل، الأدوات النظامية، المكتبات، والإعدادات.
                </p>

                <div className="bg-card p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">لماذا استخدام Docker؟</h3>
                    <ul className="list-disc list-inside space-y-2 ">
                        <li><span className="font-medium">الاتساق:</span> تعمل التطبيقات بنفس الطريقة في كل مكان</li>
                        <li><span className="font-medium">العزل:</span> كل حاوية تعمل بشكل مستقل</li>
                        <li><span className="font-medium">الكفاءة:</span> يستخدم موارد أقل من الآلات الافتراضية</li>
                        <li><span className="font-medium">القابلية للتوسع:</span> من السهل توسيع التطبيقات أو تقليصها</li>
                        <li><span className="font-medium">تحكم في الإصدار:</span> تتبع التغييرات في تكوين الحاوية الخاصة بك</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
