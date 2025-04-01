import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const OOPMutatorsAccessors: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">الطرق المعدلة والوصول في OOP</h1>

            <p className="mb-4 leading-relaxed">
                تحدد التغطية (Encapsulation) ومبادئ الرؤية أن سمات الفئة يجب ألا يتم التلاعب بها مباشرة من خارج الفئة (لتجنب الحوادث مثل الحذف، القيم غير الصحيحة، وما إلى ذلك).
            </p>

            <p className="mb-4 leading-relaxed">
                لذلك، يجب دائمًا إعلان السمات على أنها خاصة باستخدام الكلمة <code>private</code> ثم التلاعب بها باستخدام طرق تُسمى مُعدلات الوصول (getters and setters).
            </p>

            {/* Mutator Section */}
            <h2 className="text-2xl font-semibold mb-4">المعدل (Mutator)</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                يتم استخدام طريقة المعدل لضبط قيمة سمة معينة. تأخذ المتغير الذي يحتوي على القيمة كوسيط.
            </p>
            <p className="mb-4 leading-relaxed">
                وفقًا للاتفاقية، تبدأ طرق المعدل بالبادئة <code>set</code>، ومن الممارسات العملية إعطاؤها اسم السمة التي يتم تعديلها.
            </p>

            {/* Code Example for Mutator */}
            <h3 className="text-xl font-semibold mb-4">مثال: طريقة المعدل</h3>
            <CodeBlock code={`<?php
// vehicule.class.php  

// Mutator: sets/changes the value passed as argument to the attribute 
public function setBrand($sBrand) 
{
   return $this->_brand = $sBrand;
}
`} />

            <p className="mb-4 leading-relaxed">
                تحتاج إلى كتابة طريقة معدلة لكل سمة.
            </p>

            {/* Accessor Section */}
            <h2 className="text-2xl font-semibold mb-4">طريقة الوصول (Accessor)</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                يتم استخدام طريقة الوصول لإرجاع قيمة سمة معينة.
            </p>

            {/* Code Example for Accessor */}
            <h3 className="text-xl font-semibold mb-4">مثال: طريقة الوصول</h3>
            <CodeBlock code={`<?php
// vehicule.class.php  

// Accessor: returns the value of an attribute  
public function getBrand() 
{
    return $this->_brand;
}
`} />

            <p className="mb-4 leading-relaxed">
                كما هو الحال مع المعدلات، من المهم تحديد طريقة للوصول لكل سمة في فئتك.
            </p>
        </div >
    );
};

export default OOPMutatorsAccessors;
