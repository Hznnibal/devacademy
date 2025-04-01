import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const ControllerCreation: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Creating a Controller in Symfony</h1>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Controller Creation</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                The most efficient way to create a controller is by using the Maker:
            </p>

            <CodeBlock code={`php bin/console make:controller Test`} />

            <p className="text-base mb-4">
                This command will create a <code className="bg-gray-200 text-red-600 px-1 rounded">TestController</code>. In fact, two files will be created:
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">The `TestController` class containing the `index` method:</h3>
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
                Notice that the annotation specifying the route is in PHP 8 format.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">The View:</h3>
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
                You can verify the correct functionality of this example by typing <code>https://localhost:8000/test</code> in your browser.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Conclusion</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                You've now learned how to create a controller and a view in Symfony. The next steps would involve connecting to a database, creating models, and using Doctrine for database operations. Keep exploring Symfony's documentation for more advanced features.
            </p>
        </div>
    );
};

export default ControllerCreation;
