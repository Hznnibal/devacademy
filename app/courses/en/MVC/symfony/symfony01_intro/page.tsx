import Link from 'next/link';
import React from 'react';

const MvcWithSymfony: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">MVC Architecture with Symfony (PHP Framework)</h1>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Objectives:</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                By the end of this session, you will be able to define the principles of MVC architecture and implement them in a web project.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Progression:</h2>
            <div className="border-b border-gray-300 mb-6" />
            <h3 className="text-xl font-bold mt-3 mb-2">Phase 1:</h3>
            <p className="text-base mb-4">
                Start by reading this introduction to{" "}
                <Link href="/courses/en/MVC/symfony/symfony01_intro/mvcarchitecture" className="text-blue-500">
                    MVC architecture.
                </Link>
            </p>

            <h3 className="text-xl font-bold mt-3 mb-2">Phase 2:</h3>
            <h4 className="text-lg font-medium mt-3 mb-2">Discovering Symfony:</h4>
            <p className="text-base mb-4">
                The open-source framework Symfony was created in 2005 by the French web agency SensioLabs, co-founded by Fabien Potencier and Grégory Pascal.
                Symfony's success was immediate, especially when Yahoo! announced its intention to migrate some tools to this PHP framework.
                Since then, Symfony has become one of the leading PHP frameworks worldwide, alongside Zend.
            </p>

            <p className="text-base mb-4">
                Many companies use Symfony, including Dailymotion, Joomla, Drupal, Magento, PrestaShop, Le Parisien, FranceTV, BBC, and Auchan.fr.
            </p>

            <p className="text-base mb-4">
                Symfony provides a foundational architecture for developing web projects in PHP, following the principles of MVC architecture.
                In a Symfony project, you will find Models (called Entities), Views (developed in HTML/TWIG), and Controllers.
            </p>

            <p className="text-base mb-4">
                As an object-oriented framework, Symfony is composed of base classes that can be extended and customized through inheritance, depending on specific application needs.
            </p>

            <p className="text-base mb-4">
                Using Symfony allows developers to focus on the business logic of the application rather than implementation details. Additional modules can be added as the project grows.
            </p>

            <h4 className="text-lg font-medium mt-3 mb-2">Current Versions:</h4>
            <p className="text-base mb-4">
                The current Long-Term Support (LTS) version is 6.4, and the latest stable version is 7.2. However, these versions change frequently.
                For the latest updates, check the Symfony releases page.
            </p>

            <h4 className="text-lg font-medium mt-3 mb-2">Prerequisites:</h4>
            <ul className="list-disc list-inside mb-4">
                <li className="text-base mb-2">A recent version of PHP (and required dependencies).</li>
                <li className="text-base mb-2">Check PHP version with: <code className="bg-gray-200 text-red-600 px-1 rounded">php -v</code></li>
                <li className="text-base mb-2">Composer (dependency manager).</li>
                <li className="text-base mb-2">Check Composer version with: <code className="bg-gray-200 text-red-600 px-1 rounded">composer -v</code></li>
                <li className="text-base mb-2">Symfony CLI.</li>
                <li className="text-base mb-2">Check Symfony CLI version with: <code className="bg-gray-200 text-red-600 px-1 rounded">symfony -v</code></li>
            </ul>

            <p className="text-base mb-4">
                To install Symfony follow the installation guide <a className="text-blue-500" href='https://symfony.com/download'>Symfony documentation.</a>
            </p>

            {/* <h2 className="text-2xl font-semibold mt-4 mb-2">Project Creation</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                Once the necessary tools are installed, we can finally initialize our Symfony project.
                Follow the steps in this tutorial to set up your first Symfony project.
                Once your Symfony project is set up, we can create our first view!
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Displaying a Page with Symfony</h2><div className="border-b border-gray-300 mb-6" />

            <p className="text-base mb-4">
                The controller is a PHP class responsible for building the page.
                A controller has several methods, each associated with a route.
                A method processes the incoming Request and uses it to create a Symfony Response object that can contain HTML, a JSON string, or even a binary file like an image or a PDF.
            </p>

            <p className="text-base mb-4">
                A route connects the URL (e.g., /about) to a controller method.
                If the page needs to display HTML, the method uses a template. This template is the view that the controller will render for the user.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Database and Doctrine</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                To access and manipulate a database with Symfony, we will use an ORM (Object-Relational Mapping), Doctrine.
            </p>

            <p className="text-base mb-4">
                An ORM is a program that acts as an interface between an application (like our site) and a relational database.
            </p>

            <p className="text-base mb-4">
                This program defines the mappings between the database schema and your application's classes. The object-to-table association is called mapping. Classes are associated with a table, and each property of the class is associated with a field in the table. With Doctrine, this operation is done using annotations.
            </p>

            <p className="text-base mb-4">
                Before diving into Doctrine, read this resource to understand how it works and the best practices for using Doctrine.
            </p>

            <p className="text-base mb-4">
                This section is very important and delicate, so don't hesitate to ask your instructor for a presentation.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Adding Fixtures</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                Now, we will learn how to add test data (fixtures in Symfony) to your new database. Follow the instructions in this guide to create your first fixtures.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Manipulating Entities</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                Now that you've set up Doctrine in your project, let's see how to manipulate entities from our controllers. You will be able to create, read, update, and delete records in your database using Doctrine’s powerful entity manager.
            </p>

            <p className="text-base mb-4">
                Symfony provides tools to easily manage these operations within the controller. You will be working with entities, which are the objects that represent database tables in your application. By mapping entities to the appropriate tables, you can perform operations like querying, inserting, and updating records.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Conclusion</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                Congratulations! You've now learned how to set up a Symfony project, create your first controller and view, connect to a database using Doctrine, and manipulate entities within your project. Continue practicing and exploring Symfony's capabilities to build robust, maintainable applications.
            </p>

            <p className="text-base mb-4">
                For further learning, check out the official Symfony documentation and other resources that dive deeper into advanced features and tools offered by Symfony.
            </p> */}


        </div>
    );
};

export default MvcWithSymfony;
