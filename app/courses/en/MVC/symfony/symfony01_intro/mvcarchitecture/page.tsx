import React from 'react';

const MvcIntroduction: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Introduction to MVC Architecture</h1>

            <h2 className="text-2xl font-semibold mt-4 mb-2">What is MVC?</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                MVC (Model-View-Controller) is a software architecture pattern first introduced in the 1970s as part of the design for Smalltalk applications.
                It gained popularity in the 1990s with the rise of object-oriented programming.
            </p>

            <p className="text-base mb-4">
                The MVC architecture divides an application into three distinct parts: the Model, the View, and the Controller.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Key Components:</h2>

            <h3 className="text-xl font-medium mt-3 mb-2">Model</h3>
            <p className="text-base mb-4">
                The Model represents the application’s data, typically stored in a database. It handles data interaction, validation, processing logic, and business rules.
                It acts as an abstraction layer between the application and the database.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">View</h3>
            <p className="text-base mb-4">
                The View represents the user interface of the application. It displays data and allows the user to interact with the application.
                Views are usually HTML, XML, or framework templates (e.g., Twig) populated with data from the Model.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">Controller</h3>
            <p className="text-base mb-4">
                The Controller acts as the intermediary between the View and the Model. It processes user requests, interacts with the Model to fetch data, and sends the data to the View for display.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Why Use MVC?</h2>

            <h3 className="text-xl font-medium mt-3 mb-2">Separation of Concerns</h3>
            <p className="text-base mb-4">
                Each component of the MVC architecture has a well-defined responsibility:
                - The Model handles data and business logic.
                - The View manages the presentation layer.
                - The Controller handles user interactions and request processing.
                This separation makes the application easier to develop and maintain.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">Code Reusability</h3>
            <p className="text-base mb-4">
                MVC promotes code reusability, reducing development time. For example, a single View can be reused to display data from multiple Models.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">Testability</h3>
            <p className="text-base mb-4">
                With separate components, MVC makes it easier to perform unit and functional testing, as each part can be tested independently.
            </p>

            <p className="text-base mb-4">
                MVC is widely used in web development for its ability to structure applications, separate responsibilities, and facilitate maintenance and scalability.
            </p>
        </div>
    );
};

export default MvcIntroduction;
