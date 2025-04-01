import React from 'react';

const DeploymentGuide: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">

            <h1 className="text-3xl font-bold mb-6">دليل نشر التطبيق</h1>

            <p className=" mb-6">
                نشر التطبيق يتطلب أكثر من مجرد دفع الشيفرة إلى الخادم. يتطلب التخطيط الجيد، اعتبارات الأمان، والمراقبة لضمان الاستقرار والقابلية للتوسع. يقدم هذا الدليل نظرة عامة على الخطوات الأساسية وأفضل الممارسات لإعداد التطبيق للنشر، مع التركيز على الأداء، الأمان، وقابلية الصيانة.
            </p>

            <section className="mb-6 bg-card p-6">

                <h2 className="text-2xl font-semibold mb-4">١. قائمة التحقق قبل النشر</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>تأكد من أن الشيفرة مكتوبة بشكل جيد وتتبع أفضل الممارسات.</li>
                    <li>قم بتحسين التطبيق من حيث الأداء والقابلية للتوسع.</li>
                    <li>تحقق من صحة المتغيرات البيئية ومفاتيح API.</li>
                    <li>قم بتصغير ملفات CSS و JavaScript والموارد الأخرى.</li>
                    <li>نفذ أنظمة تسجيل الدخول والمراقبة.</li>
                </ul>
            </section>

            <section className="mb-6 bg-card p-6">
                <h2 className="text-2xl font-semibold mb-4">٢. اعتبارات الأمان</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>استخدم HTTPS لتأمين البيانات أثناء النقل.</li>
                    <li>قم بتمكين رؤوس الأمان مثل سياسة أمان المحتوى (CSP).</li>
                    <li>قم بتطهير مدخلات المستخدمين لمنع هجمات SQL injection و XSS.</li>
                    <li>قم بتخزين البيانات الحساسة (مثل كلمات المرور) بشكل آمن باستخدام خوارزميات التجزئة.</li>
                    <li>نفذ التحكم في الوصول بناءً على الأدوار (RBAC).</li>
                    <li>قم بتحديث التبعيات بانتظام لإصلاح الثغرات الأمنية.</li>
                </ul>
            </section>

            <section className="mb-6 bg-card p-6">
                <h2 className="text-2xl font-semibold mb-4">٣. استراتيجيات النشر</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>استخدم أنابيب CI/CD لبناء التطبيقات والنشر بشكل تلقائي.</li>
                    <li>فكر في استخدام النشر الأزرق-الأخضر لتجنب التوقفات.</li>
                    <li>قم بتنفيذ إصدارات Canary للنشر التدريجي.</li>
                    <li>قم بعمل نسخ احتياطية لقواعد البيانات والإعدادات المهمة قبل نشر التحديثات.</li>
                </ul>
            </section>

            <section className="mb-6 bg-card p-6">
                <h2 className="text-2xl font-semibold mb-4">٤. مراقبة ما بعد النشر</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>قم بإعداد أدوات المراقبة لتتبع صحة الخوادم والأداء.</li>
                    <li>قم بتكوين تنبيهات للأخطاء، والتوقفات، والأنشطة غير المعتادة.</li>
                    <li>نفذ اختبارات التحميل لضمان الاستقرار أثناء الزيادة المفاجئة في الحركة.</li>
                    <li>راقب السجلات للتصحيح والتدقيق.</li>
                </ul>
            </section>

            <section className="mb-6 bg-card p-6">
                <h2 className="text-2xl font-semibold mb-4">٥. التوثيق والدعم</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>وثق إجراءات النشر والإعدادات.</li>
                    <li>قدّم كتب تشغيل للتعامل مع المشكلات الشائعة.</li>
                    <li>أنشئ فريق دعم للتعامل مع المشكلات والصيانة.</li>
                </ul>
            </section>
        </div>
    );
};

export default DeploymentGuide;
