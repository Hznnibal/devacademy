import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const OOPConstructorsDestructors: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">المنشئات والممحيات في OOP</h1>

            <p className="mb-4 leading-relaxed">
                المنشئ هو طريقة خاصة في الفئة يتم استدعاؤها تلقائيًا عندما يتم إنشاء كائن. يتم استخدامه لتنفيذ أي عمليات أولية ضرورية للكائن.
            </p>

            <h2 className="text-2xl font-semibold mb-4">المنشئ</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                يتم تعريف المنشئ في PHP باستخدام طريقة <code>__construct()</code> ويمكن أن تقبل معلمات لتهيئة سمات الكائن.
            </p>
            <p className="mb-4 leading-relaxed">
                في PHP، المنشئ اختياري (على الرغم من أنه إلزامي في بعض لغات البرمجة الأخرى).
            </p>

            {/* مثال على المنشئ */}
            <h3 className="text-xl font-semibold mb-4">مثال: طريقة المنشئ</h3>
            <CodeBlock code={`<?php
class Car 
{
   public $_brand;
   public $_model;
   private $_nbWheels;

   // تعريف المنشئ
   function __construct($brand, $model, $nbWheels) 
   {
        $this->_brand = $brand;
        $this->_model = $model;
        $this->_nbWheels = $nbWheels;
   }

   // [طرق أخرى]
} // -- نهاية الفئة

// إنشاء كائن وتمرير القيم للتهيئة
$oCar = new Car("Renault", "Clio", 4);
`} />

            <p className="mb-4 leading-relaxed">
                في المثال، يقوم المنشئ بتهيئة عدد العجلات للسيارة، وعند إنشاء كائن من الفئة، يتم تمرير القيم للسمات إلى المنشئ.
            </p>

            <h2 className="text-2xl font-semibold mb-4">الممحاة</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                طريقة الممحاة هي عكس المنشئ. يتم استخدامها لتنظيف أو تحرير الموارد (مثل الذاكرة أو مقابض الملفات) عندما يتم تدمير الكائن. في PHP، يتم تعريف الممحاة باستخدام طريقة <code>__destruct()</code>.
            </p>

            <p className="mb-4 leading-relaxed">
                الممحاة أيضًا اختياري في PHP ونادرًا ما يتم استخدامها، لكنها قد تكون مفيدة في الحالات التي تحتاج فيها إلى إغلاق الموارد مثل الملفات التي تم فتحها باستخدام <code>fopen()</code>.
            </p>

            <h3 className="text-xl font-semibold mb-4">مثال على الممحاة</h3>
            <CodeBlock code={`<?php
class FileHandler 
{
   private $file;

   // منشئ لفتح الملف
   function __construct($filename) 
   {
        $this->file = fopen($filename, "r");
   }

   // الممحاة لإغلاق الملف
   function __destruct() 
   {
        fclose($this->file);
        echo "تم إغلاق الملف.";
   }
} // -- نهاية الفئة

$fileHandler = new FileHandler("example.txt"); // تم فتح الملف
// سيتم استدعاء الممحاة تلقائيًا عندما يتم تدمير الكائن أو يخرج عن النطاق.
`} />

            <p className="mb-4 leading-relaxed">
                في هذا المثال، يتم استخدام الممحاة لإغلاق الملف عندما يتم تدمير الكائن.
            </p>
        </div >
    );
};

export default OOPConstructorsDestructors;
