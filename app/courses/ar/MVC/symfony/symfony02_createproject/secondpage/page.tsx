import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const CreateSecondPage: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">إنشاء صفحة ثانية في Symfony</h1>

            <h2 className="text-2xl font-semibold mt-4 mb-2">عرض جديد، تحكم جديد</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                تمامًا كما في الصفحة السابقة، سنقوم بإنشاء صفحة ثانية، دعونا نسميها صفحة "الملف الشخصي". سنقوم بإنشاء تحكم جديد وطريقة لعرض هذه الصفحة مع قالب جديد.
            </p>

            <h3 className="text-xl font-semibold mt-4">التحكم (/Controller/ProfilController.php)</h3>
            <CodeBlock code={`<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/profil")
 */
class ProfilController extends AbstractController
{
    /**
     * @Route("/detail", name="profil")
     */
    public function detail() :Response
    {
        // عرض صفحة الملف الشخصي
        return $this->render('profil/detail.html.twig');
    }
}`} />

            <h3 className="text-xl font-semibold mt-4">القالب (/Template/profil/detail.html.twig)</h3>
            <CodeBlock code={`{% extends 'base.html.twig' %}

{% block body %}
    <div class="container">
        <div class="row mt-5">
            <div class="col-sm-8 offset-sm-2">
                <h1>معلوماتك</h1>
            </div>
        </div>
    </div>
{% endblock %}`} />

            <h2 className="text-2xl font-semibold mt-4 mb-2">تغييرات التحكم</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                هيكل التحكم والقالب مشابه لما رأيناه من قبل. التغييرات الرئيسية هي:
            </p>
            <ul className="list-disc ml-6">
                <li>اسم التحكم والفئة مختلف.</li>
                <li>تم إضافة مسار للتحكم لتمييزه عن "HomeController".</li>
                <li>اسم الطريقة والمسار مختلف لسهولة التحديد.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4 mb-2">إضافة روابط التنقل</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                للتنقل بين الصفحتين، نحتاج إلى إضافة روابط في شريط التنقل. سنخصصه على النحو التالي:
            </p>
            <CodeBlock code={`<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="{{ path('home') }}">الصفحة الرئيسية</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="تبديل التنقل">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="{{ path('profil') }}">الملف الشخصي</a>
            </li>
        </ul>
    </div>
</nav>`} />

            <p className="text-base mb-4">
                يتم استخدام دالة <code className="bg-gray-200 text-red-600 px-1 rounded">path</code> للإشارة إلى المسار بالاسم (في هذه الحالة، <code className="bg-gray-200 text-red-600 px-1 rounded">'profil'</code>).
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">تمرير البيانات من التحكم إلى العرض</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                الآن بعد أن أصبح بإمكاننا التنقل بين الصفحتين، دعونا نعرض البيانات من التحكم في العرض. سنمرر مصفوفة من المعلومات إلى القالب.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">التحكم (ProfilController.php)</h3>
            <CodeBlock code={`/**
 * @Route("/detail", name="profil")
 */
public function detail() :Response
{
    $info = ['Loper', 'Dave', 'daveloper@code.dom', '01/01/1970'];

    // عرض صفحة الملف الشخصي مع البيانات
    return $this->render('profil/detail.html.twig', [
        'informations' => $info
    ]);
}`} />

            <h3 className="text-xl font-semibold mt-4 mb-2">القالب (profil/detail.html.twig)</h3>
            <CodeBlock code={`<ul>
    {% for info in informations %}
        <li>{{ info }}</li>
    {% endfor %}
</ul>`} />

            <p className="text-base mb-4">
                في هذه الحالة، يمرر التحكم مصفوفة <code className="bg-gray-200 text-red-600 px-1 rounded">$info</code> إلى القالب، ونحن نستخدم حلقة <code className="bg-gray-200 text-red-600 px-1 rounded">for</code> لعرض كل عنصر في القائمة.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">تمرير مصفوفة ترابطية</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                يمكننا أيضًا تمرير مصفوفة ترابطية من التحكم إلى العرض. العملية هي نفسها، ولكن طريقة عرض البيانات تتغير.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">التحكم (ProfilController.php)</h3>
            <CodeBlock code={`/**
 * @Route("/detail", name="profil")
 */
public function detail() :Response
{
    $info = [
        'lastname' => 'Loper',
        'firstname' => 'Dave',
        'email' => 'daveloper@code.dom',
        'birthdate' => '01/01/1970'
    ];

    // عرض صفحة الملف الشخصي مع مصفوفة ترابطية
    return $this->render('profil/detail.html.twig', [
        'informations' => $info
    ]);
}`} />

            <h3 className="text-xl font-semibold mt-4 mb-2">القالب (profil/detail.html.twig)</h3>
            <CodeBlock code={`<table class="table table-light table-hover">
    <thead>
        <tr>
            <th>اللقب</th>
            <th>الاسم الأول</th>
            <th>تاريخ الميلاد</th>
            <th>البريد الإلكتروني</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{{ informations.lastname }}</td>
            <td>{{ informations.firstname }}</td>
            <td>{{ informations.birthdate }}</td>
            <td>{{ informations.email }}</td>
        </tr>
    </tbody>
</table>`} />

            <p className="text-base mb-4">
                في هذا المثال، نصل إلى مفاتيح المصفوفة الترابطية (على سبيل المثال، <code className="bg-gray-200 text-red-600 px-1 rounded">informations.lastname</code>) لعرض معلومات محددة في جدول.
            </p>
        </div>
    );
};

export default CreateSecondPage;
