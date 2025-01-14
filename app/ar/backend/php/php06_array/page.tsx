import { CodeBlock } from "@/components/CodeBlock/code-block";
import React from "react";

const ArraysPage: React.FC = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold mb-6 text-center">المصفوفات في PHP</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">مقدمة</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    المصفوفة هي متغير يحتوي على قائمة من القيم المجمعة في صفوف وأعمدة.
                </p>
                <p className="text-lg mt-2">
                    المصفوفات مهمة في البرمجة باستخدام PHP، وفي العديد من اللغات الأخرى أيضاً. على سبيل المثال، عند الوصول إلى قواعد البيانات، بعض الدوال تُرجع القيم في شكل مصفوفات.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">إعلان المصفوفات</h2>
                <div className="border-b border-gray-300 mb-6" />
                <h3 className="text-xl font-semibold mt-4">المصفوفات البسيطة</h3>
                <p className="text-lg mt-2">
                    يمكن إعلان المصفوفات البسيطة بطرق متعددة.
                </p>
                <CodeBlock code={`<?php
$array = array(); // تعليمات اختيارية
$array[0] = "تفاحة"; 
$array[1] = "كمثرى"; 
$array[2] = "موز";
?>`} language="php" />

                <p className="mt-4">
                    بدلاً من ذلك، يمكنك استخدام طريقة push:
                </p>
                <CodeBlock code={`<?php
$array = array(); // تعليمات اختيارية
$array[] = "تفاحة"; 
$array[] = "كمثرى"; 
$array[] = "موز";
?>`} language="php" />

                <p className="mt-4">
                    أو يمكنك إعلان المصفوفة مباشرة:
                </p>
                <CodeBlock code={`<?php
$array = array("تفاحة", "كمثرى", "موز");
?>`} language="php" />

                <p className="mt-4">
                    جميع الطرق الثلاثة تنتج نفس المصفوفة.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">المصفوفات متعددة الأبعاد</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    المصفوفة متعددة الأبعاد هي مصفوفة من المصفوفات، مفيدة لتمثيل الجداول أو المصفوفات.
                </p>
                <CodeBlock code={`<?php
$tab1[] = array(1, "يناير", "2016");
$tab1[] = array(2, "فبراير", "2017");
$tab1[] = array(3, "مارس", "2018");
$tab1[] = array(4, "أبريل", "2019");
?>`} language="php" />

                <p className="mt-4">
                    للوصول إلى القيم المحددة، يجب استخدام مؤشرين:
                </p>
                <CodeBlock code={`<?php
echo $tab1[2][0]." ".$tab1[2][1]." ".$tab1[2][2]; // يعرض: 3 مارس 2018
?>`} language="php" />

            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">المصفوفات الترابطية</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    المصفوفة الترابطية تتيح لك ربط مفتاح وصفي مع قيمة.
                </p>
                <p className="mt-4">
                    على سبيل المثال، إذا أردت تتبع فواتير الهاتف لكل شهر، باستخدام مصفوفة بسيطة ستقوم بفهرستها بالأرقام:
                </p>
                <CodeBlock code={`<?php
$invoice[0] = 500; // يناير
$invoice[1] = 620; // فبراير
$invoice[11] = 300; // ديسمبر
?>`} language="php" />

                <p className="mt-4">
                    باستخدام المصفوفات الترابطية، يمكنك استخدام أسماء الأشهر كمفاتيح:
                </p>
                <CodeBlock code={`<?php
$invoice["يناير"] = 500; 
$invoice["فبراير"] = 620; 
$invoice["ديسمبر"] = 300;
?>`} language="php" />

                <p className="mt-4">
                    يمكنك أيضًا إعلانها بطريقة مختصرة باستخدام عامل الربط {`=>`}:
                </p>
                <CodeBlock code={`<?php
$invoice = array(
    "يناير" => 500,
    "فبراير" => 620,
    "ديسمبر" => 300
);
?>`} language="php" />

            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">التعامل مع المصفوفات الترابطية</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    بعد إنشاء مصفوفة ترابطية، من الضروري التعامل مع القيم وترتيبها. تقدم PHP مجموعة واسعة من الدوال لهذا الغرض.
                </p>

                <h3 className="text-xl font-semibold mt-4">مثال:</h3>
                <CodeBlock code={`<?php
$invoice = array("يناير"=>500, "فبراير"=>620, "مارس"=>300, "أبريل"=>130, "مايو"=>560, "يونيو"=>350); 
$invoice_sixmonths = 0;

foreach ($invoice as $month => $value) {
    echo "الفاتورة لشهر $month: $value دولار<br />";
    $invoice_sixmonths += $value;
}

echo "إجمالي الفاتورة لستة أشهر: <b>$invoice_sixmonths دولار</b>";
?>`} language="php" />

                <p className="mt-4">
                    حلقة `foreach` تستخرج زوج (مفتاح، قيمة) في كل تكرار، مما يجعل من السهل معالجة جميع العناصر في المصفوفة الترابطية.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">ترتيب المصفوفات</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    تقدم PHP مجموعة كاملة من الدوال لترتيب المصفوفات.
                </p>

                <h3 className="text-xl font-semibold mt-4">دالة `sort()`</h3>
                <p className="text-lg mt-2">
                    دالة `sort()` ترتب المصفوفة بترتيب أبجدي أو رقمي تصاعدي.
                </p>
                <CodeBlock code={`<?php
$names = array("john", "sophia", "alexander", "maria", "emilia");   
sort($names);

for ($i = 0; $i <= count($names) - 1; $i++) {
    echo "$names[$i]<br>";
}
?>`} language="php" />

                <p className="mt-4">
                    النتيجة ستكون: `alexander`, `emilia`, `john`, `maria`, `sophia`.
                </p>

                <h3 className="text-xl font-semibold mt-4">دالة `rsort()`</h3>
                <p className="text-lg mt-2">
                    دالة `rsort()` ترتب المصفوفة بترتيب تنازلي.
                </p>
                <CodeBlock code={`<?php
$names = array("john", "sophia", "alexander", "maria", "emilia");
rsort($names);

for ($i = 0; $i <= count($names) - 1; $i++) {
    echo "$names[$i]<br>";
}
?>`} language="php" />

                <p className="mt-4">
                    النتيجة ستكون: `sophia`, `maria`, `john`, `emilia`, `alexander`.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">دالة `asort()`</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    دالة `asort()` ترتب المصفوفة الترابطية بترتيب تنازلي بناءً على القيم، مع الحفاظ على المفاتيح.
                </p>

                <h3 className="text-xl font-semibold mt-4">مثال:</h3>
                <CodeBlock code={`<?php
$array = array("a" => "الإثنين", "b" => "الثلاثاء", "c" => "الأربعاء", "d" => "الخميس", "e" => "الجمعة");

asort($array);

foreach($array as $key => $value) {
    echo "$key : $value<br />";
}
?>`} language="php" />

                <p className="mt-4">
                    هذا سيعرض الأيام بنفس الترتيب مع مفاتيحها الخاصة: `اليوم[a] = الإثنين`, `اليوم[b] = الثلاثاء`, إلخ.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">دالة `arsort()`</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    مشابهة لدالة `asort()`، دالة `arsort()` ترتب المصفوفة الترابطية بترتيب تنازلي بناءً على القيم مع الحفاظ على المفاتيح.
                </p>

                <h3 className="text-xl font-semibold mt-4">مثال:</h3>
                <CodeBlock code={`<?php
$array = array("a" => "الإثنين", "b" => "الثلاثاء", "c" => "الأربعاء", "d" => "الخميس");

arsort($array);

foreach($array as $key => $value) {
    echo "$key : $value<br />";
}
?>`} language="php" />

                <p className="mt-4">
                    هذا سيعرض الأيام بترتيب تنازلي حسب القيمة: `اليوم[c] = الأربعاء`, `اليوم[b] = الثلاثاء`, إلخ.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">دالة `count()`</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    دالة `count()` تعيد عدد العناصر في المصفوفة.
                </p>

                <h3 className="text-xl font-semibold mt-4">مثال:</h3>
                <CodeBlock code={`<?php
$array = array("الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة");
$nb = count($array);
echo "المصفوفة تحتوي على $nb عناصر.";
?>`} language="php" />

                <p className="mt-4">
                    النتيجة ستكون: `المصفوفة تحتوي على 5 عناصر.`
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">دالة `array_push()`</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    دالة `array_push()` تضيف عنصرًا أو أكثر إلى نهاية المصفوفة.
                </p>

                <h3 className="text-xl font-semibold mt-4">مثال:</h3>
                <CodeBlock code={`<?php
$array = array("الإثنين", "الثلاثاء", "الأربعاء", "الخميس");
array_push($array, "الجمعة");
print_r($array);
?>`} language="php" />

                <p className="mt-4">
                    المصفوفة الآن تحتوي على: `["الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"]`.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">دالة `array_pop()`</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    دالة `array_pop()` تقوم بإزالة آخر عنصر من المصفوفة.
                </p>

                <h3 className="text-xl font-semibold mt-4">مثال:</h3>
                <CodeBlock code={`<?php
$array = array("الإثنين", "الثلاثاء", "الأربعاء");
$day = array_pop($array);
echo "تم الإزالة: $day<br />";
print_r($array);
?>`} language="php" />

                <p className="mt-4">
                    المصفوفة الآن تحتوي على: `["الإثنين", "الثلاثاء"]`، والعنصر الذي تم إزالته هو `الأربعاء`.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">دالة `array_unshift()`</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    دالة `array_unshift()` تضيف عنصرًا أو أكثر إلى بداية المصفوفة.
                </p>

                <h3 className="text-xl font-semibold mt-4">مثال:</h3>
                <CodeBlock code={`<?php
$array = array("الخميس", "الجمعة");
array_unshift($array, "الإثنين", "الثلاثاء", "الأربعاء");
print_r($array);
?>`} language="php" />

                <p className="mt-4">
                    المصفوفة الآن تحتوي على: `["الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"]`.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">دالة `array_shift()`</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    دالة `array_shift()` تقوم بإزالة أول عنصر من المصفوفة.
                </p>

                <h3 className="text-xl font-semibold mt-4">مثال:</h3>
                <CodeBlock code={`<?php
$array = array("الخميس", "الجمعة");
$day = array_shift($array);
echo "تم الإزالة: $day<br />";
print_r($array);
?>`} language="php" />

                <p className="mt-4">
                    المصفوفة الآن تحتوي على: `["الجمعة"]`، والعنصر الذي تم إزالته هو `الخميس`.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">دوال أخرى مفيدة</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    هناك العديد من الدوال المفيدة في PHP للعمل مع المصفوفات. بعض منها تشمل:
                </p>
                <ul className="list-disc pl-6 mt-2">
                    <li>array_reverse()</li>
                    <li>array_key_exists()</li>
                    <li>array_merge()</li>
                    <li>array_diff()</li>
                    <li>array_intersect()</li>
                    <li>array_column()</li>
                    <li>array_slice()</li>
                    <li>array_splice()</li>
                    <li>array_sum()</li>
                    <li>array_unique()</li>
                    <li>in_array()</li>
                    <li>array_values()</li>
                    <li>shuffle()</li>
                </ul>
                <p className="mt-4">
                    يمكنك العثور على مزيد من التفاصيل حول هذه الدوال في الوثائق الرسمية لـ PHP.
                </p>
            </section>

            <section className="mb-4">
                <h2 className="text-2xl font-semibold">المرجع</h2>
                <div className="border-b border-gray-300 mb-6" />
                <a className="text-blue-600 text-xl ml-4" href="https://www.php.net/manual/en/ref.array.php">دوال المصفوفات</a>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">تمارين</h2>
                <div className="border-b border-gray-300 mb-6" />
                <h3 className="text-xl ml-4 my-4">1. أشهر السنة في سنة غير كبيسة</h3>

                <p className="text-lg leading-relaxed mb-4">أنشئ مصفوفة تربط كل شهر من السنة بعدد الأيام في ذلك الشهر.

                    استخدم أسماء الأشهر كمفاتيح للمصفوفة المرتبطة.

                    اعرض المصفوفة (في جدول HTML) لعرض اسم كل شهر وعدد الأيام في ذلك الشهر.

                    ثم، قم بترتيب المصفوفة باستخدام عدد الأيام كمعيار، وعرض النتيجة.</p>

                <h3 className="text-xl ml-4 my-4">2. العواصم</h3>

                <CodeBlock code={`$capitales = array(
    "Bucarest" => "Romania",
    "Bruxelles" => "Belgium",
    "Oslo" => "Norway",
    "Ottawa" => "Canada",
    "Paris" => "France",
    "Port-au-Prince" => "Haiti",
    "Port-d'Espagne" => "Trinidad and Tobago",
    "Prague" => "Czech Republic",
    "Rabat" => "Morocco",
    "Riga" => "Latvia",
    "Rome" => "Italy",
    "San José" => "Costa Rica",
    "Santiago" => "Chile",
    "Sofia" => "Bulgaria",
    "Alger" => "Algeria",
    "Amsterdam" => "Netherlands",
    "Andorre-la-Vieille" => "Andorra",
    "Asuncion" => "Paraguay",
    "Athènes" => "Greece",
    "Bagdad" => "Iraq",
    "Bamako" => "Mali",
    "Berlin" => "Germany",
    "Bogota" => "Colombia",
    "Brasilia" => "Brazil",
    "Bratislava" => "Slovakia",
    "Varsovie" => "Poland",
    "Budapest" => "Hungary",
    "Le Caire" => "Egypt",
    "Canberra" => "Australia",
    "Caracas" => "Venezuela",
    "Jakarta" => "Indonesia",
    "Kiev" => "Ukraine",
    "Kigali" => "Rwanda",
    "Kingston" => "Jamaica",
    "Lima" => "Peru",
    "Londres" => "United Kingdom",
    "Madrid" => "Spain",
    "Malé" => "Maldives",
    "Mexico" => "Mexico",
    "Minsk" => "Belarus",
    "Moscou" => "Russia",
    "Nairobi" => "Kenya",
    "New Delhi" => "India",
    "Stockholm" => "Sweden",
    "Téhéran" => "Iran",
    "Tokyo" => "Japan",
    "Tunis" => "Tunisia",
    "Copenhague" => "Denmark",
    "Dakar" => "Senegal",
    "Damas" => "Syria",
    "Dublin" => "Ireland",
    "Erevan" => "Armenia",
    "La Havane" => "Cuba",
    "Helsinki" => "Finland",
    "Islamabad" => "Pakistan",
    "Vienne" => "Austria",
    "Vilnius" => "Lithuania",
    "Zagreb" => "Croatia"
);`} language="php" />

                <h4 className="text-lg ml-2 my-2">من المصفوفة أعلاه:</h4>
                <ul className="list-decimal ml-12">
                    <li>عرض قائمة العواصم (مرتبة أبجديًا) متبوعة باسم الدولة.</li>
                    <li>عرض قائمة الدول (مرتبة أبجديًا) متبوعة باسم العاصمة.</li>
                    <li>عرض عدد الدول في المصفوفة.</li>
                    <li>إزالة جميع العواصم التي لا تبدأ بالحرف 'B'، ثم عرض المصفوفة المحدثة.</li>
                </ul>

                <h3 className="text-xl ml-4 my-4">3. الولايات والمقاطعات</h3>
                <CodeBlock code={`$departments = array(
    "California" => array("Los Angeles", "San Francisco", "San Diego", "Sacramento", "Fresno"),
    "Texas" => array("Houston", "Dallas", "Austin", "San Antonio", "El Paso"),
    "Florida" => array("Miami", "Orlando", "Tampa", "Jacksonville", "Tallahassee"),
    "New York" => array("New York City", "Buffalo", "Rochester", "Albany", "Syracuse")
);`} language="php" />

                <h4 className="text-lg ml-2 my-2">من المصفوفة أعلاه:</h4>
                <ul className="list-decimal ml-12">
                    <li>عرض قائمة الولايات (مرتبة أبجديًا) متبوعة بأسماء مقاطعاتها.</li>
                    <li>عرض قائمة الولايات متبوعة بعدد المقاطعات.</li>
                </ul>
            </section>
        </div>
    );
};

export default ArraysPage;
