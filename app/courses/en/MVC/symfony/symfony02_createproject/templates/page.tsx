import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const TemplatesPage: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Templates in Symfony</h1>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Introduction to Templates</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                In a Symfony project, templates are located in the <code className="bg-gray-200 text-red-600 px-1 rounded">templates</code> directory.
                Symfony automatically creates a <code className="bg-gray-200 text-red-600 px-1 rounded">base.html.twig</code> file. Let's look at its content:
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
                The HTML structure is quite standard, but there is new syntax for template inheritance:
            </p>

            <CodeBlock code={`{% block body %}{% endblock %}`} />

            <p className="text-base mb-4">
                This syntax allows you to define blocks that will be populated in child templates. This file serves as the base for your application, and you will place all recurring elements here:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Navbar</li>
                <li>Footer</li>
                <li>CSS and JS imports</li>
                <li>'head' content for pages</li>
                <li>etc.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Using Template Inheritance</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                Each of these blocks can be overridden in another template to introduce custom content. For example, to display content in the body of your page, you will use the {`{% block body %}`} syntax. Let’s see an example:
            </p>

            <CodeBlock code={`{% extends 'base.html.twig' %}
{% block body %}
    <h1>My First Web Page with Symfony</h1>
    <p>Hello World!!!</p>
{% endblock %}`} />

            <p className="text-base mb-4">
                With this setup, the page content from <code className="bg-gray-200 text-red-600 px-1 rounded">home/index.html.twig</code> will be displayed, inheriting the structure of <code className="bg-gray-200 text-red-600 px-1 rounded">base.html.twig</code>.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Adding CSS and JS</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                Now that we have content displayed, let’s add a stylesheet and, why not, use a CSS framework like Bootstrap. First, let’s create a stylesheet by going to the <code className="bg-gray-200 text-red-600 px-1 rounded">public</code> directory and creating a <code className="bg-gray-200 text-red-600 px-1 rounded">CSS</code> folder. Inside this folder, create a <code className="bg-gray-200 text-red-600 px-1 rounded">style.css</code> file.
            </p>

            <p className="text-base mb-4">
                Next, in the <code className="bg-gray-200 text-red-600 px-1 rounded">base.html.twig</code> file, we will insert a link to our stylesheet in the <code className="bg-gray-200 text-red-600 px-1 rounded">head</code> block. The syntax for including the stylesheet is slightly different:
            </p>

            <CodeBlock code={`<head>
    <meta charset="UTF-8">
    <title>{% block title %}Welcome!{% endblock %}</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    {% block stylesheets %}{% endblock %}
</head>`} />

            <p className="text-base mb-4">
                The <code className="bg-gray-200 text-red-600 px-1 rounded">asset</code> function helps reference an application resource. This same syntax is used to import JS files or images.
            </p>

            <p className="text-base mb-4">
                Now, let’s style the page by changing the background color and the font color. Here’s an example of how to do that in the <code className="bg-gray-200 text-red-600 px-1 rounded">style.css</code> file:
            </p>

            <CodeBlock code={`body {
    background-color: #222222;
}
h1, p {
    color: #C9C9C9;
}`} />

            <h2 className="text-2xl font-semibold mt-4 mb-2">Conclusion</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                You’ve successfully created your first Symfony page with templates and added your CSS. The <code className="bg-gray-200 text-red-600 px-1 rounded">asset</code> function allows you to include resources like CSS, JS, and images easily. Keep experimenting with different blocks and resources to build your application’s structure!
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Adding a CSS Framework in Symfony (Bootstrap)</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                Similarly, you can add a CSS framework to your Symfony application. Let’s take Bootstrap as an example and include a navbar on our page. We’ll use the Bootstrap CDN directly, so there’s no need to use the <code className="bg-gray-200 text-red-600 px-1 rounded">asset()</code> method.
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
                With Bootstrap added, we can now use its predefined styles. Let’s enhance our <code className="bg-gray-200 text-red-600 px-1 rounded">index.html.twig</code> file with some Bootstrap layout:
            </p>

            <CodeBlock code={`{% extends 'base.html.twig' %}
{% block body %}
    <div class="container">
        <div class="row mt-5">
            <div class="col-sm-8 offset-sm-2">
                <h1>My First Web Page with Symfony</h1>
                <p>Hello World!!!</p>
            </div>
        </div>
    </div>
{% endblock %}`} />

            <h2 className="text-2xl font-semibold mt-4 mb-2">Result</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                The page will be displayed with a responsive layout provided by Bootstrap. The navbar will be fixed at the top, and the content inside the container will be styled as per the Bootstrap grid system.
            </p>
        </div>
    );
};

export default TemplatesPage;
