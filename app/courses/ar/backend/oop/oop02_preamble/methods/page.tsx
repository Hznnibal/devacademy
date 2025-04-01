import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const OOPMethods: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">الطرق في OOP</h1>

            <p className="mb-4 leading-relaxed">
                تعمل طرق الكائن في PHP بطريقة مشابهة للوظائف التي قمت بإعلانها بالفعل. الفرق الوحيد هو أن الطريقة يجب أن تنتمي إلى فئة، مما يعني أن استدعاء الطريقة يختلف عن استدعاء وظيفة عادية.
            </p>

            <p className="mb-4 leading-relaxed">
                بعد إعلان السمات والثوابت، ستجد الوظائف في الفئة، والتي تُسمى الطرق. هذه الطرق تتصرف بشكل مشابه للوظائف العادية (أداء العمليات، استقبال المعاملات، وإرجاع المتغيرات).
            </p>

            {/* Example Section */}
            <h2 className="text-2xl font-semibold mb-4">مثال</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                إليك مثال على فئة <code>Car</code> مع طرق الكائن:
            </p>

            <CodeBlock code={`<?php
class Car
{
    public $_brand;
    public $_powerFiscal;
    public $_maxSpeed;
    protected $_currentSpeed;

    public function start()
    {
        echo "أبدأ.";
    }

    public function move(int $nbKm)
    {
        echo "السيارة تتحرك بمقدار ".$nbKm." كيلومتر.";
    }
} // -- نهاية فئة Car

// الآن، دعنا ننشئ كائنًا من الفئة
$oCar = new Car();

// بعد ذلك، يمكننا استدعاء الطرق باستخدام الكائن الذي تم إنشاؤه حديثًا.
$oCar->start();
$oCar->move(50);
`} />

            <p className="mb-4 leading-relaxed">
                كما نرى، فإن استدعاء سمة من سمات الفئة داخل طريقة لا يتطلب تمرير السمة كمعامل.
            </p>

            <p className="mb-4 leading-relaxed">
                مثل السمات، تتمتع الطرق بمرئية، والتي يمكن أن تكون عامة أو خاصة أو محمية، وسلوكها مشابه لذلك بالنسبة للسمات. عمومًا، تكون الطرق عامة؛ وإلا فلن تتمكن بقية التطبيق من استدعائها. ومع ذلك، قد تتطلب بعض الحالات مرئية خاصة أو محمية.
            </p>
        </div >
    );
};

export default OOPMethods;
