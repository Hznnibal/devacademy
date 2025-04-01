import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const OOPVisibility: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">الرؤية (Visibility) في OOP</h1>

            <p className="mb-4 leading-relaxed">
                يمكن تعريف رؤية الخاصية أو الطريقة أو الثابت (من PHP 7.1.0 وما بعده) عن طريق إضافة الكلمة المفتاحية قبل تعريفها: <code>public</code> أو <code>protected</code> أو <code>private</code>.
                العناصر العامة (<code>public</code>) يمكن الوصول إليها من أي مكان.
            </p>

            <p className="mb-4 leading-relaxed">
                الوصول إلى العناصر المحمية (<code>protected</code>) مقتصر على الفئة نفسها، وأي فئة ترث أو تمتد منها. العناصر الخاصة (<code>private</code>) يمكن الوصول إليها فقط ضمن الفئة التي تعرفها.
            </p>

            {/* Properties Visibility Section */}
            <h2 className="text-2xl font-semibold mb-4">رؤية الخصائص</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                يجب تعريف خصائص الفئة كـ <code>public</code> أو <code>protected</code> أو <code>private</code>.
            </p>
            <p className="mb-4 leading-relaxed">
                إذا تم تعريف خاصية باستخدام <code>var</code>، فإنها ستكون عامة (public) بشكل افتراضي.
            </p>

            <ul className="list-disc pl-6 mb-4">
                <li><code>public</code>: الخاصية أو الطريقة مرئية وقابلة للاستخدام في كل مكان.</li>
                <li><code>protected</code>: الخاصية مرئية فقط من الفئة المعرفّة أو أي فئة فرعية (الفئات التي ترث منها).</li>
                <li><code>private</code>: الخاصية مرئية وقابلة للاستخدام فقط ضمن الفئة التي تعرفها.</li>
            </ul>

            {/* Code Example */}
            <h3 className="text-xl font-semibold mb-4">مثال: رؤية الخصائص</h3>
            <CodeBlock code={`<?php
class MyClass
{
   public $public = 'Public';
   protected $protected = 'Protected';
   private $private = 'Private';

   function printHello()
   {
       echo $this->public;
       echo $this->protected;
       echo $this->private;
   }
}

// Instantiating the class
$obj = new MyClass();

echo $obj->public; // Works
echo $obj->protected; // Fatal error
echo $obj->private; // Fatal error

$obj->printHello(); // Displays Public, Protected, and Private
`} />

            <h3 className="text-xl font-semibold mb-4">مثال: الوراثة والرؤية</h3>
            <CodeBlock code={`<?php
class MyClass2 extends MyClass
{
   public $public = 'Public2';
   protected $protected = 'Protected2';

   function printHello()
   {
      echo $this->public;
      echo $this->protected;
      echo $this->private;
   }
}

// Instantiating the subclass
$obj2 = new MyClass2();

echo $obj2->public; // Works
echo $obj2->protected; // Fatal error
echo $obj2->private; // Undefined

$obj2->printHello(); // Displays Public2, Protected2, and Undefined
`} />

            <p className="mb-4 leading-relaxed">
                كما نرى في الأمثلة، يمكن الوصول إلى الخصائص العامة في أي مكان، يمكن الوصول إلى الخصائص المحمية فقط ضمن الفئة أو الفئات الفرعية لها، بينما الخصائص الخاصة مقيدة بالفئة التي تعرفها.
            </p>
        </div >
    );
};

export default OOPVisibility;
