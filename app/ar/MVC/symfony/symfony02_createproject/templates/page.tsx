import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const TemplatesPage: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">القوالب في Symfony</h1>

            <h2 className="text-2xl font-semibold mt-4 mb-2">مقدمة في القوالب</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                في مشروع Symfony، توجد القوالب في دليل <code className="bg-gray-200 text-red-600 px-1 rounded">templates</code>.
                يقوم Symfony بإنشاء ملف <code className="bg-gray-200 text-red-600 px-1 rounded">base.html.twig</code> تلقائيًا. دعنا نلقي نظرة على محتواه:
            </p>

            <CodeBlock code={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>{% block title %}Welcome!{% endblock %}</title>
{% block stylesheets %}{% endblock %}
</head>
<body>
{% block body %}{% endblock %}
{% block javascripts %}{% endblock %}
</body>
</html>`} />

            <p className="text-base mb-4">
                هيكل HTML قياسي للغاية، ولكن هناك صيغة جديدة لوراثة القوالب:
            </p>

            <CodeBlock code={`{% block body %}{% endblock %}`} />

            <p className="text-base mb-4">
                تتيح لك هذه الصيغة تعريف كتل سيتم ملؤها في القوالب الفرعية. هذا الملف يعمل كقاعدة لتطبيقك، وستضع جميع العناصر المتكررة هنا:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>شريط التنقل</li>
                <li>التذييل</li>
                <li>استيراد CSS و JS</li>
                <li>محتوى 'head' للصفحات</li>
                <li>إلخ.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4 mb-2">استخدام وراثة القوالب</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                يمكن تجاوز كل من هذه الكتل في قالب آخر لإدخال محتوى مخصص. على سبيل المثال، لعرض المحتوى في جسم الصفحة، ستستخدم الصيغة {`{% block body %}`} . لنرى مثالًا:
            </p>

            <CodeBlock code={`{% extends 'base.html.twig' %}
{% block body %}
<h1>صفحتي الأولى مع Symfony</h1>
<p>مرحبًا بالعالم!!!</p>
{% endblock %}`} />

            <p className="text-base mb-4">
                مع هذا الإعداد، سيتم عرض محتوى الصفحة من <code className="bg-gray-200 text-red-600 px-1 rounded">home/index.html.twig</code>، مع وراثة هيكل <code className="bg-gray-200 text-red-600 px-1 rounded">base.html.twig</code>.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">إضافة CSS و JS</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                الآن بعد عرض المحتوى، دعونا نضيف ورقة أنماط (stylesheet) وأيضًا، لماذا لا نستخدم إطار CSS مثل Bootstrap. أولاً، دعونا ننشئ ورقة الأنماط عن طريق الذهاب إلى دليل <code className="bg-gray-200 text-red-600 px-1 rounded">public</code> وإنشاء مجلد <code className="bg-gray-200 text-red-600 px-1 rounded">CSS</code>. داخل هذا المجلد، قم بإنشاء ملف <code className="bg-gray-200 text-red-600 px-1 rounded">style.css</code>.
            </p>

            <p className="text-base mb-4">
                بعد ذلك، في ملف <code className="bg-gray-200 text-red-600 px-1 rounded">base.html.twig</code>، سنقوم بإدراج رابط إلى ورقة الأنماط في كتلة <code className="bg-gray-200 text-red-600 px-1 rounded">head</code>. الصيغة لإضافة ورقة الأنماط تختلف قليلاً:
            </p>

            <CodeBlock code={`<head>
<meta charset="UTF-8">
<title>{% block title %}Welcome!{% endblock %}</title>
<link rel="stylesheet" href="{{ asset('css/style.css') }}">
{% block stylesheets %}{% endblock %}
</head>`} />

            <p className="text-base mb-4">
                تساعدك دالة <code className="bg-gray-200 text-red-600 px-1 rounded">asset</code> على الإشارة إلى مورد تطبيق. يتم استخدام نفس الصيغة لاستيراد ملفات JS أو الصور.
            </p>

            <p className="text-base mb-4">
                الآن، دعونا نزين الصفحة بتغيير لون الخلفية ولون الخط. إليك مثالًا على كيفية القيام بذلك في ملف <code className="bg-gray-200 text-red-600 px-1 rounded">style.css</code>:
            </p>

            <CodeBlock code={`body {
background-color: #222222;
}
h1, p {
color: #C9C9C9;
}`} />

            <h2 className="text-2xl font-semibold mt-4 mb-2">الخاتمة</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                لقد قمت بإنشاء صفحتك الأولى بنجاح باستخدام Symfony مع القوالب وأضفت CSS. تساعدك دالة <code className="bg-gray-200 text-red-600 px-1 rounded">asset</code> في تضمين الموارد مثل CSS و JS والصور بسهولة. استمر في تجربة الكتل والموارد المختلفة لبناء هيكل تطبيقك!
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">إضافة إطار CSS في Symfony (Bootstrap)</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                بشكل مشابه، يمكنك إضافة إطار CSS إلى تطبيق Symfony الخاص بك. دعنا نأخذ Bootstrap كمثال ونضيف شريط تنقل إلى صفحتنا. سنستخدم CDN الخاص بـ Bootstrap مباشرة، لذلك لا حاجة لاستخدام دالة <code className="bg-gray-200 text-red-600 px-1 rounded">asset()</code>.
            </p>

            <CodeBlock code={`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>{% block title %}Welcome!{% endblock %}</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" href="/public/css/style.css">
        {% block stylesheets %}{% endblock %}
    </head>
    <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
        {% block body %}{% endblock %}

        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        {% block javascripts %}{% endblock %}
    </body>
</html>`} />

            <p className="text-base mb-4">
                مع إضافة Bootstrap، يمكننا الآن استخدام أنماطها الجاهزة. دعونا نُحسن ملف <code className="bg-gray-200 text-red-600 px-1 rounded">index.html.twig</code> باستخدام تخطيط Bootstrap:
            </p>

            <CodeBlock code={`{% extends 'base.html.twig' %}
{% block body %}
    <div class="container">
        <div class="row mt-5">
            <div class="col-sm-8 offset-sm-2">
                <h1>صفحتي الأولى مع Symfony</h1>
                <p>مرحبًا بالعالم!!!</p>
            </div>
        </div>
    </div>
{% endblock %}`} />

            <h2 className="text-2xl font-semibold mt-4 mb-2">النتيجة</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                سيتم عرض الصفحة بتخطيط متجاوب توفره Bootstrap. سيكون شريط التنقل مثبتًا في الأعلى، والمحتوى داخل الحاوية سيتم تنسيقه وفقًا لنظام الشبكة في Bootstrap.
            </p>
        </div>
    );
};

export default TemplatesPage;
