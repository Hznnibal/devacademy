import { CodeBlock } from "@/components/CodeBlock/code-block";
import Link from "next/link";

const SymfonyApiTestingCourse = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">اختبار/استهلاك واجهة البرمجة للتطبيقات API</h1>
            <p className="text-lg mb-6">
                في هذه المرحلة، ستتعلم كيفية اختبار واستهلاك واجهة برمجة التطبيقات API. هناك العديد من الطرق للقيام بذلك:
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">الاختبار عبر واجهة Swagger</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    يمكنك اختبار واجهة برمجة التطبيقات الخاصة بك مباشرة باستخدام واجهة Swagger التي تم إنشاؤها بواسطة API Platform. ببساطة، قم بالانتقال إلى <code>http://127.0.0.1:8000/api</code> في متصفحك للوصول إلى الوثائق التفاعلية لواجهة برمجة التطبيقات.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">الاختبار باستخدام Postman أو Insomnia</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    خيار آخر هو استخدام Postman أو Insomnia، وهما أدوات شائعة لاختبار واجهات برمجة التطبيقات. يمكنك تثبيت هذه الأدوات من متجر أوبونتو.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">الاختبار باستخدام إضافة RestClient في VSCode</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    يمكنك أيضًا استخدام إضافة RestClient في Visual Studio Code. بعد تثبيت الإضافة، أنشئ ملفًا <code>.http</code> أو <code>.rest</code> وأضف السطر التالي:
                </p>
                <CodeBlock code={`GET http://api.themoviedb.org/3/search/movie?api_key=f33cd318f5135dba306176c13104506a&query=avenger`} />

                <p className="text-lg leading-relaxed mb-4">
                    بعد إضافة الطلب، انقر على <strong>إرسال الطلب</strong> لتنفيذه وعرض الاستجابة.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">تمرين</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    في هذا التمرين، سنعمل مع مشروع Symfony <code>monProjet</code> وسنقوم بالمهام التالية:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li>إضافة سياقات التسلسل (المجموعات) إلى جميع خصائص كائنات <code>Artist</code> و <code>Disc</code>.</li>
                    <li>إظهار كائن <code>Contact</code> في واجهة برمجة التطبيقات الخاصة بك. سيتعامل هذا الكائن مع نموذج الاتصال، وسيكون توثيقه مرئيًا فقط للمستخدمين الذين لديهم <code>ROLE_ADMIN</code> (يمكنك العثور على المساعدة <a className="text-blue-600" href="https://api-platform.com/docs/core/security/">هنا</a>).</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">التحقق باستخدام JWT (اختياري)</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    إذا كنت مهتمًا بتنفيذ التحقق عبر واجهة برمجة التطبيقات باستخدام معيار JWT (JSON Web Token)، يمكنك الرجوع إلى المورد التالي لتعلم كيفية إعداده.
                </p>

                <div className="text-center mt-8">
                    <Link href="/MVC/API/api03_consumingapi/JWT" className="text-xl font-semibold text-blue-600 underline">
                        التحقق باستخدام JWT
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default SymfonyApiTestingCourse;
