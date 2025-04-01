import Link from 'next/link';
import React from 'react';

const SymfonyProject: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Creating a Symfony Project</h1>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Project Initialization</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                After installing the required tools, you can initialize your Symfony project by following the steps in this <a className="text-blue-500" href='https://symfony.com/doc/current/setup.html'>tutorial.</a>
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Symfony Project Structure</h2>
            <ul className="list-disc list-inside mb-4">
                <li><strong>[bin]</strong> - Contains command-line tools for cache clearing and database updates.</li>
                <li><strong>[config]</strong> - Stores configurations for packages, services, and routes.</li>
                <li><strong>[src]</strong> - Core of the project (Model & Controller parts of MVC).</li>
                <li><strong>[templates]</strong> - Contains views (View part of MVC).</li>
                <li><strong>[public]</strong> - Entry point of the application with the front controller (index.php).</li>
            </ul>

            <h3 className="text-xl font-medium mt-3 mb-2">Note:</h3>
            <p className="text-base mb-4">
                Configuration files use the <strong>.yaml</strong> format, which is simple and key-value based.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Displaying a Page with Symfony</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                Controllers are PHP classes responsible for building pages. Each method in a controller is associated with a route. Methods handle incoming requests and return Symfony Response objects containing HTML, JSON, or files.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Routing</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                Routes link URLs to controller methods. Routes can be defined using:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>XML files</li>
                <li>PHP classes</li>
                <li>.yaml configuration files</li>
                <li>Annotations (most common for visibility)</li>
            </ul>

            <div className="text-center mt-8">
                <Link href="symfony02_createproject/controller" className="text-blue-600 underline text-lg">
                    Let's create our controller
                </Link>
            </div>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Templates</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                Symfony uses Twig, a template engine, for views. Twig templates support variable passing and inheritance. Templates have the extension <strong>.html.twig</strong>.
            </p>

            <div className="text-center mt-8">
                <Link href="symfony02_createproject/templates" className="text-blue-600 underline text-lg">
                    Let's create our view
                </Link>
            </div>
            <p className="text-base mb-4">
                By following this resource, you will learn how to link different views and controllers in your Symfony application, as well as how to pass data from the controller to a view.
            </p>
            <div className="text-center mt-8">
                <Link href="symfony02_createproject/secondpage" className="text-blue-600 underline text-lg">
                    Second page
                </Link>
            </div>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Database and Doctrine</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                Symfony uses Doctrine, an Object-Relational Mapping (ORM) tool, to interact with databases. Doctrine maps database schemas to application classes, enabling developers to work with objects instead of SQL.
            </p>
            <div className="text-center mt-8">
                <Link href="symfony02_createproject/orm" className="text-blue-600 underline text-lg">
                    ORM
                </Link>
            </div>

            <p className="text-base mb-4">
                Fixtures allow inserting test data into the database. Refer to the documentation to create your first fixtures.
            </p>
            <div className="text-center mt-8">
                <Link href="symfony02_createproject/fixtures" className="text-blue-600 underline text-lg">
                    Fixtures
                </Link>
            </div>

            <h3 className="text-xl font-medium mt-3 mb-2">Note:</h3>
            <p className="text-base mb-4">
                Symfony also supports features like form creation, authentication, permissions, and API integrations with API Platform, which you will explore later.
            </p>
        </div>
    );
};

export default SymfonyProject;
