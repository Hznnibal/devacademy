import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const ControllerCreation: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">إنشاء وحدة تحكم في Symfony</h1>

            <h2 className="text-2xl font-semibold mt-4 mb-2">إنشاء وحدة تحكم</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                أفضل طريقة لإنشاء وحدة تحكم هي باستخدام الأداة Maker:
            </p>

            <CodeBlock code={`php bin/console make:controller Test`} />

            <p className="text-base mb-4">
                ستقوم هذه التعليمة بإنشاء <code className="bg-gray-200 text-red-600 px-1 rounded">TestController</code>. في الواقع، سيتم إنشاء ملفين:
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">فئة `TestController` التي تحتوي على الطريقة `index`:</h3>
            <CodeBlock code={`<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TestController extends AbstractController
{
    #[Route('/test', name: 'app_test')]
    public function index(): Response
    {
        return $this->render('test/index.html.twig', [
            'controller_name' => 'TestController',
        ]);
    }
}`} />

            <p className="text-base mb-4">
                لاحظ أن التعليق التوضيحي الذي يحدد المسار يستخدم تنسيق PHP 8.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">العرض:</h3>
            <CodeBlock code={`{% extends 'base.html.twig' %}

{% block title %}Hello TestController!{% endblock %}

{% block body %}
<style>
    .example-wrapper { margin: 1em auto; max-width: 800px; width: 95%; font: 18px/1.5 sans-serif; }
    .example-wrapper code { background: #F5F5F5; padding: 2px 6px; }
</style>

<div class="example-wrapper">
    <h1>Hello {{ controller_name }}! ✅</h1>

    This friendly message is coming from:
    <ul>
        <li>Your controller at <code><a href="{{ '/path/to/TestController.php'|file_link(0) }}">src/Controller/TestController.php</a></code></li>
        <li>Your template at <code><a href="{{ '/path/to/templates/test/index.html.twig'|file_link(0) }}">templates/test/index.html.twig</a></code></li>
    </ul>
</div>
{% endblock %}`} />

            <p className="text-base mb-4">
                يمكنك التحقق من صحة هذا المثال من خلال كتابة <code>https://localhost:8000/test</code> في متصفحك.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">الخاتمة</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                لقد تعلمت الآن كيفية إنشاء وحدة تحكم وعرض في Symfony. الخطوات التالية تشمل الاتصال بقاعدة بيانات، وإنشاء نماذج، واستخدام Doctrine لعمليات قاعدة البيانات. استمر في استكشاف وثائق Symfony للحصول على ميزات أكثر تقدمًا.
            </p>
        </div>
    );
};

export default ControllerCreation;
