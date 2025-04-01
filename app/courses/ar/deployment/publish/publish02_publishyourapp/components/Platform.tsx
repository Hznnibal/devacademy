export function Platform() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">اختيار المنصة</h2>
            <div className="space-y-4">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-medium mb-3">الطبقة المجانية من منصة Platform.sh</h3>
                    <ul className="list-disc list-inside space-y-2 ">
                        <li>بيئة تطوير مجانية</li>
                        <li>النشر عبر Git</li>
                        <li>خط أنابيب CI/CD مدمج</li>
                        <li>شهادات SSL مرفقة</li>
                        <li>قاعدة بيانات MariaDB مدمجة</li>
                    </ul>
                </div>

                <div className="bg-card p-4 rounded-lg">
                    <h3 className="font-medium mb-2">إعداد الحساب</h3>
                    <ol className="list-decimal list-inside space-y-2 ">
                        <li>قم بزيارة منصة platform.sh وأنشئ حسابًا مجانيًا</li>
                        <li>تحقق من عنوان بريدك الإلكتروني</li>
                        <li>إعداد مفاتيح SSH للنشر</li>
                        <li>قم بتثبيت أداة CLI الخاصة بمنصة Platform.sh</li>
                    </ol>
                </div>
            </div>
        </section>
    );
}
