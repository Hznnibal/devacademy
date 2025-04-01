import { CodeBlock } from "@/components/CodeBlock/code-block";
import React from "react";

const Page: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">HTML - 05 - القوائم</h1>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">مقدمة</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    في HTML، القائمة هي مجموعة من العناصر (النقاط). يمكن أن تكون القوائم:
                </p>
                <ul className="text-lg leading-relaxed list-disc list-inside space-y-2 mb-4">
                    <li>غير مرتبة: تسبقها علامة رسومية (دائرة، مربع، إلخ.)</li>
                    <li>مرتبة: تسبقها أرقام أو حروف</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    الاستخدام الأساسي لقوائم HTML هو إنشاء قوائم التنقل.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    بشكل افتراضي، يتم عرض القوائم عموديًا، ولكن يمكن عرضها أفقيًا باستخدام ورقات الأنماط CSS.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">القائمة غير المرتبة</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    يتم إعلان القوائم غير المرتبة باستخدام وسم <code>&lt;ul&gt;</code> (قائمة غير مرتبة). كل عنصر في القائمة يتم تمثيله باستخدام وسم <code>&lt;li&gt;</code>.
                </p>
                <CodeBlock code={`<ul>
   <li>TB</li>
   <li>DWWM</li>
   <li>CDA</li>
</ul>`} />
                <p className="text-lg leading-relaxed mb-4">النتيجة:</p>
                <ul className="list-disc list-inside space-y-2 mb-2">
                    <li>TB</li>
                    <li>DWWM</li>
                    <li>CDA</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    العناصر في القوائم غير المرتبة تسبقها نقطة. بشكل افتراضي، يتم عرض نقطة دائرية.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">القائمة المرتبة</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    يتم إنشاء القوائم المرتبة باستخدام وسم <code>&lt;ol&gt;</code> (قائمة مرتبة). يتم إضافة الترقيم تلقائيًا، بشكل افتراضي مع الأرقام.
                </p>
                <CodeBlock code={`<ol>
   <li>بول</li>
   <li>فرانك</li>
   <li>ماريا</li>
</ol>`} />
                <p className="text-lg leading-relaxed mb-4">النتيجة:</p>
                <ol className="list-decimal list-inside space-y-2 mb-2">
                    <li>بول</li>
                    <li>فرانك</li>
                    <li>ماريا</li>
                </ol>
                <p className="text-lg leading-relaxed mb-4">
                    مثال مع الأرقام الرومانية:<br /></p>
                <CodeBlock code={`<ol type="i">
   <li>جون</li>
   <li>مايكل</li>
   <li>كارل</li>
</ol>`} />

                <p className="text-lg leading-relaxed mb-4">النتيجة:</p>
                <ol type="i" className="list-decimal list-inside space-y-2">
                    <li>جون</li>
                    <li>مايكل</li>
                    <li>كارل</li>
                </ol>
            </section >
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">تنسيق النقاط والترقيم</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    يمكن تخصيص ترقيم القوائم وشكل النقاط (دائرة، مربع، إلخ.) باستخدام CSS.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">المحاذاة</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    بشكل افتراضي، يتم عرض القوائم عموديًا. ومع ذلك، باستخدام CSS، يمكن عرضها أفقيًا إذا لزم الأمر.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">تمرين</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    قم بإعادة إنشاء الأمثلة أعلاه في صفحة HTML جديدة.
                </p>
            </section>
        </div>
    );
};

export default Page;
