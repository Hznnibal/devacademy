import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const OOPInheritance: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">الوراثة في OOP</h1>

            <p className="mb-4 leading-relaxed">
                تقدم البرمجة الكائنية التوجه (OOP) مفهوم الوراثة، الذي يسمح لفئة ما باستخدام أعضاء فئة أخرى.
            </p>

            <h2 className="text-2xl font-semibold mb-4">نظرة عامة على الوراثة</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                في الوراثة:
                <ul className="list-disc pl-5">
                    <li>يمكن للفئة B أن ترث من الفئة A، مما يعني أن B تستخدم الأعضاء (السمات والطرق) من الفئة A.</li>
                    <li>الفئة A تسمى الفئة الأصلية (أو الفئة الأم).</li>
                    <li>الفئة B تسمى الفئة الفرعية (أو الفئة الابنة).</li>
                </ul>
                ببساطة، الفئة B هي نسخة "متخصصة" من الفئة A. تحتوي الفئة B على بعض السمات المشتركة مع الفئة A، لكنها تضيف أو تعدل بعض الميزات.
            </p>

            <h2 className="text-2xl font-semibold mb-4">مثال على الوراثة</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                فكر في فئة "مركبة" مع أنواع مختلفة من المركبات مثل السيارة والشاحنة والحافلة والدراجة النارية والقارب. تشترك جميع هذه المركبات في بعض السمات المشتركة (اسم العلامة التجارية، الطراز، القوة، اللون) والطرق (القيادة، الفرملة)، ولكن لكل واحدة منها أيضًا سمات فريدة، مثل أن الشاحنة لها وزن أقصى أو أن الحافلة تحتوي على عدد من الركاب.
            </p>

            <h3 className="text-xl font-semibold mb-4">إمكانيات وقيود الوراثة</h3>
            <ul className="list-disc pl-5 mb-4">
                <li>يمكن للفئة الفرعية أن ترث من فئة أم واحدة فقط، ولكن يمكن أن يكون هناك العديد من الفئات الفرعية.</li>
                <li>يمكن للفئة الأم أن تحتوي على العديد من الفئات الفرعية (على سبيل المثال، يمكن أن تحتوي فئة المركبة على فئات فرعية مثل السيارة والدراجة النارية والشاحنة والحافلة، إلخ).</li>
                <li>يمكن أن تكون الوراثة متعددة المستويات. على سبيل المثال، يمكن أن ترث الفئة C من الفئة B، التي بدورها ترث من الفئة A (3 مستويات من الوراثة).</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">كيفية تنفيذ الوراثة في PHP</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                لتنفيذ الوراثة في PHP، يجب أن تستخدم الفئة الفرعية الكلمة المفتاحية <code>extends</code> متبوعة باسم الفئة الأم في تعريف الفئة.
            </p>

            {/* مثال على الوراثة */}
            <h3 className="text-xl font-semibold mb-4">مثال: الوراثة في PHP</h3>
            <CodeBlock code={`<?php
class Vehicle
{
    public $brand;
    public $model;

    public function drive() {
        echo "Driving the vehicle.<br>";
    }
}

class Car extends Vehicle
{
    public $doors;

    public function honk() {
        echo "Car honking!<br>";
    }
} // -- نهاية الفئات

// إنشاء كائن من فئة Car
$car = new Car();
$car->brand = "Toyota";
$car->model = "Corolla";
$car->drive();  // استدعاء الطريقة الموروثة من فئة Vehicle
$car->honk();   // طريقة خاصة بفئة Car
`} />

            <p className="mb-4 leading-relaxed">
                في هذا المثال، تقوم الفئة <code>Car</code> بتمديد الفئة <code>Vehicle</code>. هذا يعني أن الفئة <code>Car</code> ترث جميع السمات والطرق العامة والمحميّة من الفئة <code>Vehicle</code>، بينما تحتوي أيضًا على طريقتها الخاصة <code>honk()</code>.
            </p>

            <h2 className="text-2xl font-semibold mb-4">استخدام طرق الفئة الأم</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                لاستدعاء طريقة من الفئة الأم داخل الفئة الفرعية، يجب أن تستخدم الكلمة المفتاحية <code>parent::</code>. هذا يسمح للفئة الفرعية بالوصول إلى الطرق والخصائص من الفئة الأم.
            </p>

            <h3 className="text-xl font-semibold mb-4">مثال: استخدام طرق الفئة الأم</h3>
            <CodeBlock code={`<?php
class Vehicle
{
    public function drive() {
        echo "Driving the vehicle.<br>";
    }
}

class Car extends Vehicle
{
    public function drive() {
        parent::drive();  // استدعاء الطريقة drive من الفئة الأم
        echo "The car is driving.<br>";
    }
} // -- نهاية الفئات

$car = new Car();
$car->drive();  // استدعاء كل من الطريقة الأم والطريقة الفرعية
`} />

            <p className="mb-4 leading-relaxed">
                في هذه الحالة، تقوم الفئة <code>Car</code> بتجاوز طريقة <code>drive()</code> في الفئة <code>Vehicle</code>، ولكنها لا تزال تستدعي طريقة الفئة الأم باستخدام <code>parent::drive()</code>.
            </p>
        </div >
    );
};

export default OOPInheritance;
