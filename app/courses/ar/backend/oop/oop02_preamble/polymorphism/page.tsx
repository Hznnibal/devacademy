import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const OOPPolymorphism: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">تعدد الأشكال (Polymorphism) في OOP</h1>

            <p className="mb-4 leading-relaxed">
                يسمح تعدد الأشكال لطريقة ما أن تأخذ "أشكالًا" متعددة في فئات مختلفة. على وجه الخصوص، يمكن إعادة تعريف الطريقة في الفئة الفرعية مع سلوك مختلف عن الطريقة التي تحمل نفس الاسم في الفئة الأم.
            </p>

            <h2 className="text-2xl font-semibold mb-4">نظرة عامة على تعدد الأشكال</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                الفكرة الأساسية هي أنه يمكن إعادة تعريف الطريقة في الفئة الأم بواسطة الفئات الفرعية. يتيح ذلك للفئات المختلفة تنفيذ نفس الطريقة بطريقتها الخاصة.
                على سبيل المثال، في تسلسل هرمي للفئات مثل المركبات، يمكن إعادة تعريف طريقة <code>move()</code> بشكل مختلف في الفئات الفرعية مثل <code>Voiture</code> و<code>Bateau</code>، بينما تبقى كما هي في فئات أخرى مثل <code>Bus</code>.
            </p>

            <h2 className="text-2xl font-semibold mb-4">مثال على تعدد الأشكال</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                في المثال التالي، يتم إعادة تعريف طريقة <code>move()</code> في فئة <code>Vehicule</code> في الفئات <code>Voiture</code> و<code>Bateau</code>، ولكنها لا تُعاد في فئة <code>Bus</code>:
            </p>

            {/* Code Example for Polymorphism */}
            <h3 className="text-xl font-semibold mb-4">مثال على الكود</h3>
            <CodeBlock code={`<?php
class Vehicule
{
    public function move() 
    {
        echo "The vehicle moves forward.";
    }
}

class Voiture extends Vehicule
{
    public function move() 
    {
        echo "The car moves forward.";
    }
}

class Bus extends Vehicule
{
    // No redefinition of the advance method
}

class Boat extends Vehicule
{
    public function move() 
    {
        echo "The boat is moving forward.";
    }
}

$tab = [
    new Vehicule(),
    new Car(),
    new Bus(),
    new Boat()
];

foreach ($tab as $v) {
    $v->move();
}
`} />

            <p className="mb-4 leading-relaxed">
                عند تشغيل هذا الكود، سينتج الإخراج التالي:
                <ul className="list-disc pl-5">
                    <li>المركبة تتحرك للأمام.</li>
                    <li>السيارة تتحرك للأمام.</li>
                    <li>الحافلة تتحرك للأمام. (الحافلة تستخدم طريقة الفئة الأم)</li>
                    <li>القارب يتحرك للأمام.</li>
                </ul>
                تم تعريف طريقة <code>move()</code> في الفئة الأم <code>Vehicule</code> ولكن تم إعادة تعريفها في الفئات <code>Voiture</code> و<code>Bateau</code>. فئة <code>Bus</code> لم تعيد تعريف الطريقة، لذا تستخدم تلك الخاصة بالفئة الأم.
            </p>

            <h2 className="text-2xl font-semibold mb-4">أنواع تعدد الأشكال</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                في PHP، يتم تحقيق تعدد الأشكال أساسًا من خلال إعادة تعريف الطرق (المعروفة أيضًا بالتحميل الزائد للطرق). يسمح ذلك للفئات الفرعية بإعادة تعريف طرق الفئة الأم مع سلوكها الخاص. ومع ذلك، يمكن أن يظهر تعدد الأشكال بطرق مختلفة حسب تطبيق اللغة.
            </p>

            <p className="mb-4 leading-relaxed">
                يوضح هذا المثال شكلًا بسيطًا من تعدد الأشكال. في السيناريوهات الواقعية، قد يصبح تعدد الأشكال أكثر تعقيدًا، خاصة عند التعامل مع الفئات المجردة والواجهات.
            </p>
        </div >
    );
};

export default OOPPolymorphism;
