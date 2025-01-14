import { CodeBlock } from '@/components/CodeBlock/code-block';
import Link from 'next/link';
import React from 'react';

const SymfonyFormsSetup: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Symfony Forms Setup</h1>

            <section>

                <h2 className="text-2xl font-semibold">Introduction</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    The Symfony Form component is a powerful library that simplifies the creation, manipulation, and validation of forms in a Symfony application. It provides an efficient abstraction of traditional HTML forms and allows centralized management of form data.
                </p>

                <h2 className="text-2xl font-semibold">Prerequisites</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Before starting, ensure that you have Symfony installed on your machine and have created a functional Symfony project. You can use the following command to add the Form component to your project if it's not already installed:
                </p>

                <CodeBlock code={`composer require symfony/form`} />

                <p className="text-lg leading-relaxed mb-4">
                    In this course, we will continue using the Symfony project "monProjet," where we created our first controllers, entities, and views.
                </p>

                <h2 className="text-2xl font-semibold">Associating a Form with an Entity</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Let's start by creating a "Contact" entity.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                    Next, add three properties: <code>subject</code>, <code>email</code>, and <code>message</code>.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                    Note the question mark at the end of the <code>message</code> property: Symfony suggested a string property, but we want a field that can hold more than 255 characters, similar to a <code>textarea</code> in HTML! When you're unsure about the available types, you can add a question mark and Symfony will display a list of all available types. For the <code>message</code> property, we will choose the <code>text</code> type.
                </p>

                <CodeBlock code={`// src/Entity/Contact.php
namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ContactRepository::class)]
class Contact
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $subject = null;

    #[ORM\Column(length: 255)]
    private ?string $email = null;

    #[ORM\Column(type: "text")]
    private ?string $message = null;

    // getters and setters...
}`} />


                <h3 className="text-xl font-semibold mb-4 ">Updating the Database</h3>
                <p className="text-lg leading-relaxed mb-4">
                    After creating the entity, update your database schema using the following command:
                </p>

                <CodeBlock code={`php bin/console d:s:u --force`} />

                <p className="text-lg leading-relaxed mb-4">
                    This will automatically update the database to reflect the changes made to your entity. Symfony will create the corresponding table and columns for the <code>Contact</code> entity, including the new <code>message</code> field as a <code>text</code> type.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">ContactFormType.php Explanation</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Let's now create a contact form associated with the "Contact" entity that will allow us to insert a new message into the database.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                    Let's take a look at the contents of the <code>ContactFormType.php</code> file:
                </p>

                <CodeBlock code={`// src/Form/ContactFormType.php
namespace App\Form;

use App\Entity\Contact;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('object')
            ->add('email')

            // We've added a label and made the message field optional by setting 'required' to false
            ->add('message', TextareaType::class, [
                'label' => 'Your message',
                'required' => false
            ])
            ->add('save', SubmitType::class, [
                'label' => 'Envoyer le message'
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Contact::class,
        ]);
    }
}`} />


                <h3 className="text-xl font-semibold mb-4 ">Explanation:</h3>
                <p className="text-lg leading-relaxed mb-4">
                    In this example, we are using the <code>ContactFormType</code> class to create our contact form. We add three fields: <code>object</code> (subject), <code>email</code>, and <code>message</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Each field is created using the <code>add()</code> method of the <code>FormBuilderInterface</code> object. The <code>add()</code> method takes three arguments: the name of the field, the type of the field, and an optional array of options that allow us to customize the rendering and behavior of the field. For example, we use the <code>label</code> option to specify the label associated with each field.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                    We've also made the <code>message</code> field optional by setting the <code>required</code> option to <code>false</code>.
                </p>

                <h3 className="text-xl font-semibold mb-4 ">Field Types in Symfony Forms</h3>
                <p className="text-lg leading-relaxed mb-4">
                    One of the most commonly used options in Symfony forms is <code>required</code>, which defaults to <code>true</code>, meaning all form fields are required. If you want a field to be optional, set <code>required</code> to <code>false</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    We've also added a field named <code>save</code>, with the <code>SubmitType</code> type, and specified the label for the button ('Envoyer le message'). The <code>SubmitType</code> is equivalent to an <code>&lt;input type="submit"&gt;</code> in traditional HTML.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    One of the main differences between Symfony forms and traditional HTML forms is that Symfony forms are configured using PHP classes rather than raw HTML code.
                </p>

                <h3 className="text-xl font-semibold mb-4 ">Common Field Types in Symfony</h3>
                <p className="text-lg leading-relaxed mb-4">
                    Symfony provides a wide variety of pre-built field types that correspond to different types of data you may use in a form. Here are some commonly used field types:
                </p>
                <ul>
                    <li><strong>TextType:</strong> Simple text field.</li>
                    <li><strong>TextareaType:</strong> Multiline text field.</li>
                    <li><strong>EmailType:</strong> Field for email addresses.</li>
                    <li><strong>IntegerType:</strong> Field for integer numbers.</li>
                    <li><strong>DateType:</strong> Field for dates.</li>
                    <li><strong>ChoiceType:</strong> Field for dropdowns or checkboxes.</li>
                    <li><strong>FileType:</strong> Field for file uploads.</li>
                    <li><strong>HiddenType:</strong> Hidden field.</li>
                    <li><strong>EntityType:</strong> Field to select an entity from a relation.</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    There are many other field types available in Symfony. You can also create your own custom field types by extending the <code>AbstractType</code> class and configuring them according to your specific needs.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Using these field types simplifies form creation and management in Symfony, as they handle the rendering and data conversion automatically.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    You can use Symfony's field types by referencing the corresponding classes in the Form component, such as <code>TextType::class</code>, <code>EmailType::class</code>, and so on, when constructing your form.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Configuring Form Options</h2>
                <p className="text-lg leading-relaxed mb-4">
                    The <code>configureOptions</code> method in a FormType class is used to specify additional options for your form:
                </p>

                <CodeBlock code={`// src/Form/ContactFormType.php
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        // Building the form...
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            // Default options for the form
            'data_class' => Contact::class,
        ]);
    }
}`} />


                <h3 className="text-xl font-semibold mb-4 ">Explanation:</h3>
                <p className="text-lg leading-relaxed mb-4">
                    In the <code>configureOptions</code> method, we use the <code>$resolver</code> object to define the default options for our form. In this case, we specify that the entity (the data class) associated with the form is <code>Contact::class</code>. This tells Symfony which class to use to bind the form data.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    The <code>configureOptions</code> method allows us to specify other options for the form, such as rendering options, validation options, or any custom options we want to use in the form.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Don't forget to import the <code>OptionsResolver</code> class from Symfony's Form component to use the <code>configureOptions</code> method.
                </p>

                <h2 className="text-2xl font-semibold">CSRF Token Protection</h2>
                <p className="text-lg leading-relaxed mb-4">
                    CSRF (Cross-Site Request Forgery) is a common attack where a malicious user exploits the trust of an authenticated user to perform unauthorized actions on their behalf. To prevent this, Symfony provides built-in CSRF protection, which uses a CSRF token to verify the legitimate origin of form submissions.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    When you use Symfony's Form component, by default, a CSRF token field is automatically added to your forms. This field contains a unique token generated for each form submission and is used to verify the integrity of the submitted data.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    When the form is rendered in the view, the CSRF token field is automatically generated with a specific <code>&lt;input&gt;</code> tag. When the form is submitted, Symfony checks that the CSRF token value matches the expected value, thus preventing CSRF attacks.
                </p>

                <h3 className="text-xl font-semibold mb-4 ">Generating and Verifying the CSRF Token</h3>
                <p className="text-lg leading-relaxed mb-4">
                    To generate and verify the CSRF token, Symfony uses the <code>CsrfTokenManager</code> component, which is configured by default in the Symfony framework. You don't need to worry about setting it up manually. However, if you are using a simple HTML form (like in your PHP projects), you will need to create the CSRF token manually and check its value in the controller handling the form.
                </p>

                <h4>HTML Form Example</h4>
                <CodeBlock code={`<form action="{{ url('admin_post_delete', { id: post.id }) }}" method="post">
    {# The argument passed to csrf_token() generates the token #}
    <input type="hidden" name="token" value="{{ csrf_token('delete-item') }}"/>
    <button type="submit">Delete item</button>
</form>`} />


                <h4>Controller Example</h4>
                <CodeBlock code={`use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
// ...

public function delete(Request $request): Response
{
    $submittedToken = $request->request->get('token');

    // 'delete-item' should match the value used in the view to generate the token
    if ($this->isCsrfTokenValid('delete-item', $submittedToken)) {
        // ... function body
    }
}`} />


                <h3 className="text-xl font-semibold mb-4 ">Form Display</h3>
                <p className="text-lg leading-relaxed mb-4">
                    Once our form is created, we need to render it in the view and process the data submitted by the user. Let's create a <code>ContactController</code> with an <code>index</code> method that is triggered on the <code>/contact</code> route. Here's the rendering code:
                </p>

                <CodeBlock code={`<?php

namespace App\Controller;

use App\Form\ContactFormType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{
    #[Route('/contact', name: 'app_contact')]
    public function index(Request $request): Response
    {
        $form = $this->createForm(ContactFormType::class);
        // ...
        return $this->render('contact/index.html.twig', [
            'form' => $form
        ]);
    }
}`} />


                <h3 className="text-xl font-semibold mb-4 ">Explanation:</h3>
                <p className="text-lg leading-relaxed mb-4">
                    In this controller, we use the <code>createForm()</code> method to create an instance of our <code>ContactFormType</code>. This form will be rendered using the <code>render()</code> method in the <code>index.html.twig</code> view located in the <code>contact</code> directory. We can now modify the <code>index.html.twig</code> file to display the form:
                </p>

                <CodeBlock code={`{% extends 'base.html.twig' %}

{% block body %}
<div>
    {{ form(form) }}
</div>
{% endblock %}`} />


                <h4>Form Rendering</h4>
                <p className="text-lg leading-relaxed mb-4">
                    The <code>form()</code> function in Twig is enough to display the entire form (which we passed as a parameter)!
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    The form will render with the fields defined in <code>ContactFormType</code>: a text field, an email field, a textarea, and the submit button labeled "Send your message." We can further enhance the display by using other Twig functions like <code>form_start()</code>, <code>form_end()</code>, <code>form_errors()</code>, and <code>form_row()</code> to display each part of the form individually and add additional attributes to the fields.
                </p>

                <CodeBlock code={`{% extends 'base.html.twig' %}

{% block body %}

<div class="row text-center">

    {{ form_start(form) }}
    <div class="my-custom-class-for-errors">
        {{ form_errors(form) }}
    </div>

    <div class="row">
        <div class="col-9 mx-auto mb-2 mt-4">
            {{ form_row(form.object) }}
        </div>
        <div class="col-9 mx-auto mb-2">
            {{ form_row(form.email) }}
        </div>
        <div class="col-9 mx-auto mb-2">
            {{ form_row(form.message) }}
        </div>

    </div>
    {{ form_end(form) }}
</div>
{% endblock %}`} />


                <p className="text-lg leading-relaxed mb-4">
                    Explanation :
                    Instead of using the form() function, we used other functions to display each form field individually (with form_row).
                    However, we can take it a step further. Instead of using form_row() to display the input, label, and errors in a single block,
                    we can use the form_label() function for the label, form_widget() for the input, form_help() for help messages, and form_errors()
                    for errors. This way, we can customize each part as we want!
                </p>

                <p className="text-lg leading-relaxed mb-4">Here's the structure of a Symfony form field:</p>
                <img
                    src="/form_row_widget.png"
                    alt="Form field structure"
                    className="rounded shadow-md"
                    width={560}
                />
                <p className="text-lg leading-relaxed mb-4">
                    Now, let's add a Bootstrap class to the form input for "object" and change its label:
                </p>

                <CodeBlock code={`{% extends 'base.html.twig' %}

      {% block body %}

    <div class="row text-center">

       {{ form_start(form) }}
       <div class="my-custom-class-for-errors">
           {{ form_errors(form) }}
       </div>

       <div class="row">
          ...
             {{ form_label(form.object, "Mon libellé a été modifié") }}
             {{ form_widget(form.object, {'attr': {'class': 'btn-light'} }) }}
             {{ form_errors(form.object) }}
          ...
       </div>
       {{ form_end(form) }}
    </div>
    {% endblock %}`} />
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Form Processing</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">Let's go back to our controller and take a look at the other functions:</p>

                <CodeBlock code={`use App\Entity\Contact;
use App\Form\DemoFormType;
use App\Form\ContactFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ContactController extends AbstractController
{
    #[Route('/contact', name: 'app_contact')]
    public function index(Request $request, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(ContactFormType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            //on crée une instance de Contact
            $message = new Contact();
            // Traitement des données du formulaire
            $data = $form->getData();
            //on stocke les données récupérées dans la variable $message
            $message = $data;

            $entityManager->persist($message);
            $entityManager->flush();

            // Redirection vers accueil
            return $this->redirectToRoute('app_accueil');
        }

        return $this->render('contact/index.html.twig', [
//            'form' => $form->createView(),
              'form' => $form
        ]);
    }
}`} />

                <ul>
                    <li>We use the handleRequest() method to process the current HTTP request and validate the submitted data.</li>
                    <li>{`if ($form->isSubmitted()) - If the form is submitted and`}</li>
                    <li>{`&& $form->isValid()) - If the form is valid, we can access the form data using the getData() method.`}</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    At this point, we can perform the desired actions, such as creating a new object of type Contact (`$message`). After persisting the new message in the database, we can redirect the user to another page.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    If the form is not submitted or is invalid, we render the form in our index.html.twig view, which is located in the contact directory of the templates, using the render() method. We also use the createView() method to generate a representation of the form ready to be displayed in our template.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Note: When you create a form in your controller, Symfony automatically detects the current route and uses that route as the default action for the form. This means that when the form is submitted, it will be sent to the same route where the form was displayed. If you want to specify a different action for the form, you can do so by using the action option to explicitly define a specific route:
                </p>
                <CodeBlock code={`$form = $this->createForm(ContactFormType::class, null, [
    'action' => $this->generateUrl('my_route'),
]);`} />
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Data Validation</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Symfony's Form component integrates a powerful data validation feature. It can automatically validate fields according to predefined rules (for example, checking that the email is valid). You can also define your own custom validation constraints!
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    To add validation constraints to our contact form, we can use the validation annotations provided by Symfony, such as #[Assert\Email] to validate the email address.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    For example:
                </p>
                <CodeBlock code={`
use Symfony\Component\Validator\Constraints as Assert;

class Contact
{

    #[Assert\Email(message: "Veuillez saisir une adresse e-mail valide.")]
    private $email;

    // ...
}`} />

                <p className="text-lg leading-relaxed mb-4">
                    These attributes can be used in a similar way to specify other validation constraints such as NotNull, Length, Regex, etc. You can combine and customize them according to your needs.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Important! Don’t forget to import the Assert class from Symfony’s Validator component to use these validation attributes.
                </p>

            </section>
            <section>
                <h2 className="text-2xl font-semibold">
                    What if the form is not associated with any entity?
                </h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    If the form is not associated with a specific entity, you can pass <code>null</code> as the value for the <code>data_class</code> option. This tells Symfony that the form is not linked to a particular data class.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    You can specify this in the <code>configureOptions</code> method of your form class:
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Example of a form not linked to an entity
                </p>
                <CodeBlock code={`class DemoFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('object')
            ->add('email')
            ->add('message', TextareaType::class, [
                'label' => 'Your message',
                'required' => false
                ]
            )
            ->add('save', SubmitType::class, [
                'label' => 'Send the message'])

        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Le formulaire n'est associé à aucune entité !!!
            // 'data_class' => Contact::class,
        ]);
    }
}`} />


                <p className="text-lg leading-relaxed mb-4">
                    By specifying <code>data_class {`=>`} null</code> in the default options, we tell Symfony that the form is not linked to a specific class. This means that the form data will be returned as an associative array rather than an object.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    <strong>[!Note]</strong> If you do not need to link the form to a data class or do not want to process the form data in a specific object, you can leave the <code>data_class</code> option with the default value of <code>null</code>. It is not necessary to specify it explicitly.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    By specifying <code>null</code> as the value for <code>data_class</code>, you can process the form data directly from the array returned by the <code>getData()</code> method of the form.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Example of a controller creating a form not linked to an entity
                </p>
                <CodeBlock code={`#[Route('/contactdemo', name: 'app_contactdemo')]
public function index_demo(Request $request, EntityManagerInterface $entityManager): Response
{
    // When creating the form, we can specify initial values for the fields
    $form = $this->createForm(DemoFormType::class, [
        "object" => "Enter a text !!!",
        "email" => "",
        "message" => "",
    ]);
    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {

        // We can retrieve all form data as an associative array
        $data = $form->getData();
        dump($data);

        // Or retrieve fields one by one
        $name = $form->get("object")->getData();
        dd($name);

        // Sending email, saving to database, etc.

        // Redirect to home page
        return $this->redirectToRoute('app_home');
    }

    return $this->render('contact/index.html.twig', [
          'form' => $form
    ]);
}
`} />


                <p className="text-lg leading-relaxed mb-4">
                    Symfony Form Themes
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    It is possible to specify one or more template themes for your forms. You need to configure them in the <code>config/packages/twig.yaml</code> file:
                </p>
                <CodeBlock code={`# config/packages/twig.yaml
twig:
    form_themes: ['bootstrap_5_horizontal_layout.html.twig']
    # ...`} />


                <p className="text-lg leading-relaxed mb-4">
                    You can add multiple themes in this options array, but be mindful of the order: each theme overrides the previous one! Make sure to place the most important themes at the end of the list!
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Even though most of the time you will apply form themes globally (for all forms in your project), you can apply a theme on a case-by-case basis. To do this, you can use the Twig tag <code>form_theme</code> which you integrate in the page displaying the form:
                </p>
                <CodeBlock code={`{# this form theme will be applied only to the form of this template #}
{% form_theme form 'foundation_5_layout.html.twig' %}

{{ form_start(form) }}
    {# ... #}
{{ form_end(form) }}`} />

            </section>
            <div className="text-center mt-8">
                <Link href="symfony03_form/dbandform" className="text-blue-600 underline text-lg">
                    Link forms with the database.
                </Link>
            </div>
        </div>
    );
};

export default SymfonyFormsSetup;


