export default function WebDevelopmentArticle() {
    return (
        <div className="px-5 py-8 font-sans">

            <h1 className="text-3xl font-bold text-center mb-10">تطوير المواقع: نظرة عامة</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">مقدمة</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    يشير تطوير المواقع، الذي يُعرف ببساطة بتطوير الويب، إلى عملية إنشاء وتصميم وصيانة المواقع وتطبيقات الويب التي يمكن الوصول إليها عبر المتصفح. ويتضمن مجموعة واسعة من الأنشطة، بما في ذلك البرمجة، تصميم الويب، وإدارة قواعد البيانات.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                    بينما يركز مصطلح تطوير الويب بشكل أساسي على بناء هيكلية ووظائف المواقع، إلا أنه يرتبط ارتباطًا وثيقًا بتصميم الويب الذي يتعامل مع الجوانب الجمالية وتجربة المستخدم. عادة ما يتضمن التطوير التنفيذ الفني، وتحويل التصاميم إلى مواقع تعمل بشكل صحيح.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">ما هو تطوير الويب؟</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    تطوير الويب هو عملية بناء عناصر الواجهة الأمامية والخلفية للمواقع أو تطبيقات الويب. يتضمن البرمجة لتحويل التصاميم والوظائف إلى واقع. على سبيل المثال، جميع المواقع التي تفاعلت معها تم تصميمها بواسطة مطوري الويب الذين يضمنون أنها تعمل بكفاءة وتوفر تجربة سلسة للمستخدمين.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                    يحقق المطورون ذلك باستخدام لغات البرمجة المختلفة والأدوات والإطارات اعتمادًا على المنصة ومتطلبات المشروع.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">تصميم الويب مقابل تطوير الويب</h2>
                <div className="border-b border-gray-300 mb-6" />
                <h3 className="text-xl font-semibold">مصممو الويب:</h3>
                <ul className="list-disc list-inside text-lg space-y-2 mt-2">
                    <li>يركزون على العرض المرئي للمواقع، بما في ذلك التخطيط، الألوان، الخطوط، وتصميم واجهة المستخدم.</li>
                    <li>يتعاونون مع العملاء أو الفرق لتصميم مفاهيم تتماشى مع العلامة التجارية أو الرؤية.</li>
                    <li>قد يمتلكون بعض المعرفة بالبرمجة أو يستخدمون لغات برمجة مثل HTML و CSS و JavaScript.</li>
                    <li>يخلقون التصاميم الأولية والنماذج لاختبار الأفكار وتحديد التصاميم النهائية.</li>
                </ul>
                <h3 className="text-xl font-semibold mt-6">مطورون الويب:</h3>
                <ul className="list-disc list-inside text-lg space-y-2 mt-2">
                    <li>يتعاملون مع التنفيذ الفني للمواقع، ويكتبون الشيفرة التي تجعلها تعمل.</li>
                    <li>يبنون الهيكل والميزات التي يحددها المصممون أو العملاء.</li>
                    <li>يتطلبون خبرة متعمقة في لغات البرمجة مثل HTML و CSS و PHP و JavaScript.</li>
                    <li>يضمنون أن البنية التحتية الفنية للمواقع تعمل بسلاسة.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">لغات البرمجة المستخدمة عادة</h2>
                <div className="border-b border-gray-300 mb-6" />
                <ul className="list-disc list-inside text-lg space-y-2">
                    <li>HTML (لغة الترميز النصي التشعبي): تعرف هيكل الصفحة.</li>
                    <li>CSS (أوراق الأنماط المتتالية): يتعامل مع التنسيق والعرض المرئي.</li>
                    <li>JavaScript: يضيف ميزات تفاعلية وسلوكيات ديناميكية للصفحات.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">أنواع تطوير الويب</h2>
                <div className="border-b border-gray-300 mb-6" />
                <h3 className="text-xl font-semibold">تطوير الواجهة الأمامية</h3>
                <p className="text-lg leading-relaxed mt-2">
                    يتعلق هذا الجانب بإنشاء المكونات التي يواجهها المستخدمون من المواقع أو التطبيقات. يعمل مطورو الواجهة الأمامية على ما يراه المستخدمون ويتفاعلون معه، مما يجعل الموقع جذابًا بصريًا وسهل الاستخدام.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                    تشمل المهارات الرئيسية لتطوير الواجهة الأمامية المعرفة بلغات مثل HTML و CSS و JavaScript، إلى جانب إطارات العمل مثل React و Angular و Bootstrap.
                </p>
                <h3 className="text-xl font-semibold mt-6">تطوير الواجهة الخلفية</h3>
                <p className="text-lg leading-relaxed mt-2">
                    يركز تطوير الواجهة الخلفية على الوظائف الجانبية للخوادم في المواقع. يبني مطورو الواجهة الخلفية ويديرون البنية التحتية التي تدير المواقع، بما في ذلك الخوادم وقواعد البيانات وواجهات البرمجة للتطبيقات (APIs).
                </p>
                <h3 className="text-xl font-semibold mt-6">تطوير كامل الواجهة</h3>
                <p className="text-lg leading-relaxed mt-2">
                    مطور الويب الكامل هو شخص متمكن في تطوير كل من الواجهة الأمامية والخلفية. لديهم فهم شامل لجميع طبقات الموقع، من واجهة المستخدم إلى منطق الخوادم. تجعلهم هذه القدرة المتعددة مهاراتهم مرغوبة للغاية في صناعة التكنولوجيا.
                </p>
            </section>
        </div>
    );
}
