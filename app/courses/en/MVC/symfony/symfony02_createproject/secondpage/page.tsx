import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const CreateSecondPage: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Creating a Second Page in Symfony</h1>

            <h2 className="text-2xl font-semibold mt-4 mb-2">New View, New Controller</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                Just like the previous page, we’ll create a second page, let's call it a "Profile" page. We’ll create a new controller and method to render this view along with a new template.
            </p>

            <h3 className="text-xl font-semibold mt-4">Controller (/Controller/ProfilController.php)</h3>
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
        // Render the profile page
        return $this->render('profil/detail.html.twig');
    }
}`} />

            <h3 className="text-xl font-semibold mt-4">Template (/Template/profil/detail.html.twig)</h3>
            <CodeBlock code={`{% extends 'base.html.twig' %}

{% block body %}
    <div class="container">
        <div class="row mt-5">
            <div class="col-sm-8 offset-sm-2">
                <h1>Your Information</h1>
            </div>
        </div>
    </div>
{% endblock %}`} />

            <h2 className="text-2xl font-semibold mt-4 mb-2">Controller Changes</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                The structure of the controller and template is similar to what we’ve seen before. The main changes are:
            </p>
            <ul className="list-disc ml-6">
                <li>The controller name and class are different.</li>
                <li>A route is added to the controller to differentiate it from the "HomeController".</li>
                <li>The method name and path are different for easy identification.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Adding Navigation Links</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                To navigate between the two pages, we need to add links in the navbar. We’ll customize it as follows:
            </p>
            <CodeBlock code={`<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="{{ path('home') }}">Home</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="{{ path('profil') }}">Profile</a>
            </li>
        </ul>
    </div>
</nav>`} />

            <p className="text-base mb-4">
                The <code className="bg-gray-200 text-red-600 px-1 rounded">path</code> function is used to reference the route by name (in this case, <code className="bg-gray-200 text-red-600 px-1 rounded">'profil'</code>).
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Passing Data from Controller to View</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                Now that we can navigate between two pages, let’s display data from the controller in the view. We’ll pass an array of information to the template.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Controller (ProfilController.php)</h3>
            <CodeBlock code={`/**
 * @Route("/detail", name="profil")
 */
public function detail() :Response
{
    $info = ['Loper', 'Dave', 'daveloper@code.dom', '01/01/1970'];

    // Render the profile page with data
    return $this->render('profil/detail.html.twig', [
        'informations' => $info
    ]);
}`} />

            <h3 className="text-xl font-semibold mt-4 mb-2">Template (profil/detail.html.twig)</h3>
            <CodeBlock code={`<ul>
    {% for info in informations %}
        <li>{{ info }}</li>
    {% endfor %}
</ul>`} />

            <p className="text-base mb-4">
                In this case, the controller passes the <code className="bg-gray-200 text-red-600 px-1 rounded">$info</code> array to the template, and we use a <code className="bg-gray-200 text-red-600 px-1 rounded">for</code> loop to display each item in the list.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Passing an Associative Array</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                We can also pass an associative array from the controller to the view. The process is the same, but the way we display the data changes.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Controller (ProfilController.php)</h3>
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

    // Render the profile page with associative array
    return $this->render('profil/detail.html.twig', [
        'informations' => $info
    ]);
}`} />

            <h3 className="text-xl font-semibold mt-4 mb-2">Template (profil/detail.html.twig)</h3>
            <CodeBlock code={`<table class="table table-light table-hover">
    <thead>
        <tr>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
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
                In this example, we access the associative array keys (e.g., <code className="bg-gray-200 text-red-600 px-1 rounded">informations.lastname</code>) to display specific pieces of information in a table.
            </p>
        </div>
    );
};

export default CreateSecondPage;
