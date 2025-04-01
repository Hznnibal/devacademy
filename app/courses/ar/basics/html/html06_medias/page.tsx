import { CodeBlock } from "@/components/CodeBlock/code-block";
import Image from "next/image";
import React from "react";

const Page: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">HTML - 06 - الوسائط</h1>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">الصور</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    يمكن لصفحة HTML عرض أنواع مختلفة من الوسائط: الصور، الفيديوهات، الأصوات، الرسوم المتحركة، التطبيقات، وما إلى ذلك. وغالبًا ما يتم تجميع هذه العناصر تحت مصطلح "الكائنات". يتم عرض الصور في HTML باستخدام وسم <code className="bg-gray-200 text-red-600">&lt;img&gt;</code>.
                </p>

                <h3 className="text-xl font-semibold mb-4">وسم <code className="bg-gray-200 text-red-600">&lt;img&gt;</code></h3>
                <p className="text-lg leading-relaxed mb-4">
                    السمة الرئيسية هي <code className="bg-gray-200 text-red-600">src</code>، والتي تحدد عنوان URL للصورة. هناك عدة طرق لتحديد هذا العنوان:
                </p>
                <CodeBlock code={`<!-- ملف الصورة في نفس الدليل مع ملف HTML --> 
<img src="gardenly_logo.jpg">

<!-- ملف الصورة في دليل مختلف عن ملف HTML --> 
<img src="images/gardenly_logo.jpg"> 

<!-- ملف الصورة على خادم آخر -->
<img src="https://www.site2.fr/images/gardenly_logo.jpg">`} />

                <h3 className="text-xl font-semibold mb-4">نص البديل</h3>
                <p className="text-lg leading-relaxed mb-4">
                    سمة <code>alt</code> أساسية من أجل الوصول. فهي توفر وصفًا للصورة للمستخدمين ذوي الإعاقة البصرية ومحركات البحث.
                </p>
                <CodeBlock code={`<img src="gardenly_logo.jpg" alt="شعار Gardenly" title="شعار Gardenly">`} />

                <h3 className="text-xl font-semibold mb-4">سمة <code>title</code></h3>
                <p className="text-lg leading-relaxed mb-4">
                    سمة <code>title</code> توفر عنوانًا (وصفًا) للصورة، والذي قد يظهر عند التمرير فوقها. على الرغم من أنها اختيارية، يُوصى باستخدامها.
                </p>

                <h3 className="text-xl font-semibold mb-4">مثال صورة</h3>
                <Image src="https://www.example.com/logo_windows.jpg" alt="نص بديل للصورة" title="عنوان الصورة" className="w-full max-w-md mx-auto mb-4" />
            </section >
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">وسائط أخرى</h2> <div className="border-b border-gray-300 mb-6" />

                <h3 className="text-xl font-semibold mb-4">الفيديوهات</h3>
                <p className="text-lg leading-relaxed mb-4">
                    قدم HTML5 وسم <code className="bg-gray-200 text-red-600">&lt;video&gt;</code> لدمج الفيديوهات في الصفحة. إليك مثال لفيديو مع عدة تنسيقات:
                </p>
                <CodeBlock code={`<video width="400" height="222" controls="controls">
   <source src="videos/developer.mp4">
   <source src="videos/developer.ogg">
   <source src="videos/developer.webm">
   الفيديو لا يعمل.
</video>`} />

                <h3 className="text-xl font-semibold mb-4">الصوت</h3>
                <p className="text-lg leading-relaxed mb-4">
                    قدم HTML5 أيضًا وسم <code className="bg-gray-200 text-red-600">&lt;audio&gt;</code> لدمج ملفات الصوت. السمات مشابهة لتلك الخاصة بوسم <code className="bg-gray-200 text-red-600">&lt;video&gt;</code>.
                </p>

                <h3 className="text-xl font-semibold mb-4">وسم <code>&lt;iframe&gt;</code></h3>
                <p className="text-lg leading-relaxed mb-6">
                    يسمح وسم <code className="bg-gray-200 text-red-600">&lt;iframe&gt;</code> بإدراج صفحة HTML أخرى داخل الصفحة الحالية، مثل فيديو من يوتيوب.
                </p>

                <h3 className="text-xl font-semibold mb-4">مثال iframe</h3>
                <iframe
                    className="w-full max-w-lg mx-auto"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/FQdaUv95mR8"
                    title="مشغل فيديو يوتيوب"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section >
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">تمارين</h2> <div className="border-b border-gray-300 mb-6" />

                <h3 className="text-xl font-semibold mb-4">التمرين 1</h3>
                <p className="text-lg leading-relaxed mb-4">
                    أنشئ صفحة HTML5 وأدرج الكود التالي لعرض الصورة في المتصفح:
                </p>
                <CodeBlock code={`<img src="logo_windows.jpg" alt="نص بديل للصورة" title="عنوان الصورة"> شعار Gardenly`} />
                <p className="text-lg leading-relaxed mb-4">
                    لاحظ التأثيرات التالية:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>قم بإزالة سمة <code className="bg-gray-200 text-red-600">title</code> ولاحظ ما يحدث عند التمرير فوق الصورة.</li>
                    <li>غير اسم الصورة في سمة <code className="bg-gray-200 text-red-600">src</code> وشاهد ما يحدث في المتصفح.</li>
                    <li>قم بإزالة سمة <code className="bg-gray-200 text-red-600">alt</code> ولاحظ ما يحدث.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">التمرين 2</h3>
                <p className="text-lg leading-relaxed mb-4">
                    أنشئ صفحة HTML وادمج الفيديو من يوتيوب باستخدام وسم <code className="bg-gray-200 text-red-600">&lt;iframe&gt;</code>. استخدم الرابط التالي لاسترجاع كود التضمين:
                </p>
                <a href="https://www.youtube.com/embed/bWPMSSsVdPk" target="_blank" rel="noopener noreferrer" className="text-blue-500">https://www.youtube.com/embed/bWPMSSsVdPk</a>
            </section >
        </div >
    );
};

export default Page;
