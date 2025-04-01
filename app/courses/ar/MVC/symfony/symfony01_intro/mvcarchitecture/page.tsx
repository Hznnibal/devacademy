import React from 'react';

const MvcIntroduction: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">مقدمة في معمارية MVC</h1>

            <h2 className="text-2xl font-semibold mt-4 mb-2">ما هي MVC؟</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                MVC (النموذج-العرض-وحدة التحكم) هو نمط معماري للبرمجيات تم تقديمه لأول مرة في السبعينات كجزء من تصميم تطبيقات Smalltalk.
                أصبح شائعًا في التسعينات مع ظهور البرمجة الكائنية.
            </p>

            <p className="text-base mb-4">
                تقسّم معمارية MVC التطبيق إلى ثلاثة أجزاء متميزة: النموذج، العرض، ووحدة التحكم.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">المكونات الرئيسية:</h2>

            <h3 className="text-xl font-medium mt-3 mb-2">النموذج</h3>
            <p className="text-base mb-4">
                النموذج يمثل بيانات التطبيق، وعادة ما تكون مخزنة في قاعدة بيانات. يدير التفاعل مع البيانات، والتحقق منها، ومنطق المعالجة، والقواعد التجارية.
                يعمل كطبقة تجريدية بين التطبيق وقاعدة البيانات.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">العرض</h3>
            <p className="text-base mb-4">
                العرض يمثل واجهة المستخدم للتطبيق. يعرض البيانات ويسمح للمستخدم بالتفاعل مع التطبيق.
                عادةً ما تكون العروض HTML أو XML أو قوالب الإطار (مثل Twig) تم ملؤها بالبيانات من النموذج.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">وحدة التحكم</h3>
            <p className="text-base mb-4">
                تعمل وحدة التحكم كوسيط بين العرض والنموذج. تعالج طلبات المستخدم، وتتفاعل مع النموذج لجلب البيانات، وترسل البيانات إلى العرض لعرضها.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">لماذا نستخدم MVC؟</h2>

            <h3 className="text-xl font-medium mt-3 mb-2">فصل الاهتمامات</h3>
            <p className="text-base mb-4">
                كل مكون من مكونات معمارية MVC له مسؤولية محددة:
                - النموذج يدير البيانات والمنطق التجاري.
                - العرض يدير طبقة العرض.
                - وحدة التحكم تتعامل مع التفاعلات مع المستخدم ومعالجة الطلبات.
                هذا الفصل يجعل التطبيق أسهل في التطوير والصيانة.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">إعادة استخدام الشيفرة البرمجية</h3>
            <p className="text-base mb-4">
                يعزز MVC إعادة استخدام الشيفرة البرمجية، مما يقلل من وقت التطوير. على سبيل المثال، يمكن إعادة استخدام عرض واحد لعرض البيانات من نماذج متعددة.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">الاختبار</h3>
            <p className="text-base mb-4">
                مع المكونات المنفصلة، يجعل MVC من السهل إجراء اختبار الوحدة والاختبارات الوظيفية، حيث يمكن اختبار كل جزء بشكل مستقل.
            </p>

            <p className="text-base mb-4">
                تستخدم MVC على نطاق واسع في تطوير الويب لقدرتها على هيكلة التطبيقات، وفصل المسؤوليات، وتسهيل الصيانة وقابلية التوسع.
            </p>
        </div>
    );
};

export default MvcIntroduction;
