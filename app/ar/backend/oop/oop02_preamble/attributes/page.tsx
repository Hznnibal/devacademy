import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const OOPAttributesAndProperties: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">الخصائص (أو السمات) في OOP</h1>

            <p className="mb-4 leading-relaxed">
                تتكون الفئة في PHP من نوعين مميزين من المعلومات:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>الخصائص</li>
                <li>الطرق</li>
            </ul>

            <p className="mb-4 leading-relaxed">
                الخصائص هي البيانات التي تميز كائنًا عن الآخر. يمكنها تعريف المظهر، والحالة، والخصائص الأخرى لكائن ينتمي إلى فئة معينة. في الفئة، يتم تعريف الخصائص بواسطة المتغيرات، التي يمكن أن تأخذ قيمًا مختلفة لكل كائن وتتطور مع مرور الوقت.
            </p>

            {/* خصائص الكائن */}
            <h2 className="text-2xl font-semibold mb-4">خصائص الكائن</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                في OOP، نشير إلى هذه الخصائص بـ "الخصائص"، ويتم تمثيلها بواسطة المتغيرات (مصطلح "الخاصية" يساعد في التمييز بينها وبين المتغيرات العادية التي لا تنتمي إلى أي فئة).
            </p>
            <p className="mb-4 leading-relaxed">
                دعونا نضيف بعض الخصائص إلى فئة <code>Animal</code>:
            </p>

            <CodeBlock code={`class Animal
{
    public $_species;
    public $_dietFood;
    public $_height;
    public $_weight;
}`} />
            <p className="mb-4 leading-relaxed">
                إعلان خاصية مشابه جدًا لإعلان متغير عادي. لاحظ الكلمة الرئيسية <code>public</code> في بداية كل إعلان. هذا يحدد نطاق الخاصية. في هذه الحالة، يعني أن الخاصية يمكن استخدامها داخل الفئة (ضمن الأقواس المعقوفة التي تحدد الفئة) وخارج الفئة أيضًا.
            </p>

            <h3 className="text-xl font-semibold mt-4">تهيئة الخصائص</h3>
            <p className="mb-4 leading-relaxed">
                الآن، دعونا نخلق حيوانًا:
            </p>

            <CodeBlock code={`$odog = new Animal();`} />
            <p className="mb-4 leading-relaxed">
                الكائن <code>dog</code> الذي أنشأناه للتو يحتوي الآن على الخصائص التالية:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>$_species</li>
                <li>$_dietFood</li>
                <li>$_height</li>
                <li>$_weight</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">تعيين قيم الخصائص</h3>
            <p className="mb-4 leading-relaxed">
                الآن، دعونا نهيئ هذه الخصائص:
            </p>

            <CodeBlock code={`$dog->_species = "dog";
$dog->_dietFood = "Carnivore";
$dog->_height = 110;
$dog->_weight = 16000;`} />
            <p className="mb-4 leading-relaxed">
                للوصول إلى خاصية من خصائص كائن، تستخدم الرمز <code>-{`>`}</code> (المشغل الخاص بالكائن)، يليه اسم الخاصية.
            </p>

            {/* خصائص الفئة */}
            <h2 className="text-2xl font-semibold mb-4">خصائص الفئة</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                خصائص الفئة تختلف عن خصائص الكائنات في أنها موجودة مرة واحدة فقط، ويتم مشاركتها بين جميع كائنات الفئة.
                بالنسبة لخصائص الكائنات، كل كائن لديه نسخته الخاصة من الخصائص والطرق المعرفة في الفئة، مما يعني أن هذه الخصائص لها قيم مختلفة لكل كائن.
                أما بالنسبة لخصائص الفئة، فالقيمة مشتركة بين جميع كائنات نفس الفئة.
            </p>

            <p className="mb-4 leading-relaxed">
                من المهم أن تضع في اعتبارك بعض العادات التي يتبعها المطورون لجعل الشيفرة أكثر وضوحًا.
            </p>
        </div>
    );
};

export default OOPAttributesAndProperties;
