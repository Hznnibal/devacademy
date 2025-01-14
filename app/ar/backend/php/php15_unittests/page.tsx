import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const UnitTestingPHP: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">اختبار الوحدة في PHP</h1>

            {/* Section 1: Introduction to Unit Testing */}
            <h2 className="text-2xl font-semibold mb-4">ما هو اختبار الوحدة؟</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                اختبار الوحدة ("T.U." أو "U.T." بالإنجليزية) هو إجراء للتحقق مما إذا كان جزء معين من البرمجيات أو البرنامج يعمل كما هو متوقع.
                يتضمن ذلك تنفيذ الشيفرة البرمجية للتطبيق الذي يتم اختباره والتحقق من أن كل شيء يعمل بشكل صحيح،
                مثل التأكد من أن القيمة المعادة كما هو متوقع أو أن بعض الطرق قد تم استدعاؤها.
            </p>

            <h3 className="text-xl font-semibold mb-4">المتطلبات الأساسية</h3>
            <ul className="list-disc pl-6 mb-4">
                <li>وجود تطبيق PHP (مشروع).</li>
                <li>وجود Composer مثبت على النظام.</li>
            </ul>
            <p className="mb-4 leading-relaxed">
                إذا لم يكن Composer مثبتًا، يمكنك تثبيته باستخدام الأمر التالي:
            </p>
            <CodeBlock code={`sudo apt install composer`} />
            <p className="mb-4 leading-relaxed">
                يمكنك التحقق من تثبيت Composer عبر تشغيل:
            </p>
            <CodeBlock code={`composer --version`} />

            {/* Section 2: Installing PHPUnit with Composer */}
            <h2 className="text-2xl font-semibold mb-4">تثبيت PHPUnit باستخدام Composer</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                في دليل المشروع الخاص بك، أنشئ ملف إعدادات Composer:
            </p>
            <CodeBlock code={`composer init`} />
            <p className="mb-4 leading-relaxed">
                بعد تهيئة إعدادات Composer، قم بتثبيت مكتبة PHPUnit:
            </p>
            <CodeBlock code={`composer require --dev phpunit/phpunit`} />
            <p className="mb-4 leading-relaxed">
                سيضيف هذا مكتبة PHPUnit كاعتماد لتطوير المشروع في ملف `composer.json`:
            </p>
            <CodeBlock code={`{
    "require-dev": {
        "phpunit/phpunit": "^10.2"
    }
}`} />

            {/* Section 3: Setting Up PHPUnit Configuration */}
            <h2 className="text-2xl font-semibold mb-4">إعداد PHPUnit</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                الآن، أنشئ مجلد `tests` في جذر مشروعك، ثم أنشئ ملف `phpunit.xml` مع المحتوى التالي:
            </p>
            <CodeBlock code={`<?xml version="1.0" encoding="UTF-8"?>
<phpunit bootstrap="vendor/autoload.php" colors="true" stopOnFailure="false">
    <testsuites>
        <testsuite name="مجموعة اختبارات التطبيق">
            <directory>tests/</directory>
        </testsuite>
    </testsuites>
</phpunit>`} />
            <p className="mb-4 leading-relaxed">
                العلامة {`<directory>`} تحدد المجلد الذي ستقوم فيه بإنشاء فئات الاختبار (بشكل افتراضي، يتم إنشاؤها في مجلد "tests").
                هذه هي التهيئة الأساسية، لكن PHPUnit يحتوي على العديد من خيارات التهيئة الأخرى.
            </p>

            {/* Section 4: Creating a Test Class */}
            <h2 className="text-2xl font-semibold mb-4">إنشاء فئة اختبار</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                قبل إنشاء أول فئة اختبار لنا، نحتاج إلى فئة PHP لاختبارها. دعونا ننشئ ملف `User.php` في مجلد `Model`:
            </p>
            <CodeBlock code={`<?php

namespace App\Model;

class User
{
    public int $age;
    public array $favorite_movie = [];
    public string $name;

    public function __construct(int $age, string $name)
    {
        $this->age = $age;
        $this->name = $name;
    }

    public function displayName(): string
    {
        return "My name is " . $this->name . ".";
    }

    public function afficherAge(): string
    {
        return "I'm " . $this->age . " years old.";
    }

    public function addFavoriteMovie(string $movie): bool
    {
        $this->favorite_movie[] = $movie;
        return true;
    }

    public function deleteFavoriteMovie(string $movie): bool
    {
        if (!in_array($movie, $this->favorite_movie)) throw new InvalidArgumentException("movie inconnu: " . $movie);
        unset($this->favorite_movie[array_search($movie, $this->favorite_movie)]);
        return true;
    }
}
`} />
            <p className="mb-4 leading-relaxed">
                أنشأنا فئة `User` مع ثلاثة سمات (الاسم، العمر، الأفلام المفضلة) وأربع طرق (عرض الاسم، عرض العمر، إضافة إلى المفضلة، إزالة من المفضلة).
                الآن، دعونا نكتب اختبارًا لطريقة `displayName()` للتحقق مما إذا كانت تعيد القيمة الصحيحة.
            </p>

            {/* Section 5: Writing a Test Method */}
            <h2 className="text-2xl font-semibold mb-4">كتابة طريقة الاختبار</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                الآن، دعونا ننشئ فئة اختبار للتحقق من طريقة `displayName()`، وهكذا قد يبدو الاختبار:
            </p>
            <CodeBlock code={`<?php
use PHPUnit\Framework\TestCase;
require 'Model/User.php';
use App\Model\User;

class UserTest extends TestCase
{
    public function testDisplayname()
    {
        $user = new User(18, 'John');
        $this->assertIsString($user->displayName());
        $this->assertStringContainsStringIgnoringCase('John', $user->displayName());
        $this->assertEquals("My name is John.", $user->displayName(), User's name is incorrect");
    }
}
`} />
            <p className="mb-4 leading-relaxed">
                يضمن هذا الاختبار أن طريقة `displayName()` تعيد سلسلة تحتوي على اسم المستخدم، وتقارن القيمة الفعلية مع النتيجة المتوقعة.
            </p>

            {/* Section 6: Running the Tests */}
            <h2 className="text-2xl font-semibold mb-4">تشغيل الاختبارات</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                لتشغيل الاختبارات، استخدم الأمر التالي:
            </p>
            <CodeBlock code={`php vendor/phpunit/phpunit/phpunit`} />

            <h3 className="text-xl font-semibold mb-4">ماذا يحدث إذا تم تعديل الشيفرة؟</h3>
            <p className="mb-4 leading-relaxed">
                إذا تم تعديل الشيفرة، على سبيل المثال، تعديل طريقة `displayName()` لتضمين عمر المستخدم، قد يفشل الاختبار إذا كانت القيمة المتوقعة لا تتطابق مع النتيجة الجديدة.
                إليك كيف يمكن تعديل الطريقة:
            </p>
            <CodeBlock code={`public function displayName(): string
{
    return "My name is " . $this->name . " and i'm " . $this->age . " years old.";
}
`} />
            <p className="mb-4 leading-relaxed">
                بعد تشغيل الاختبار مرة أخرى، يجب أن يفشل إذا لم تتطابق القيمة المعادة مع النتيجة المتوقعة.
            </p>

            <h3 className="text-xl font-semibold mb-4">الخطوات التالية</h3>
            <p className="mb-4 leading-relaxed">
                استكشف المزيد من التأكيدات في PHPUnit مثل `assertSame` و `assertNotEquals` و `assertEmpty` لتحسين تغطية اختباراتك.
                يمكنك العثور على المزيد من التأكيدات في وثائق PHPUnit.
            </p>
        </div >
    );
};

export default UnitTestingPHP;
