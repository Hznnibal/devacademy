import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const UnitTestingPHP: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Unit Testing in PHP</h1>

            {/* Section 1: Introduction to Unit Testing */}
            <h2 className="text-2xl font-semibold mb-4">What is Unit Testing?</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                A unit test ("T.U." or "U.T." in English) is a procedure that checks whether a specific part of a software or program works as expected.
                This involves executing code from the application being tested and verifying that everything functions correctly,
                such as ensuring the returned value is as expected or certain methods were called.
            </p>

            <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
            <ul className="list-disc pl-6 mb-4">
                <li>Have a PHP application (project).</li>
                <li>Have Composer installed on your system.</li>
            </ul>
            <p className="mb-4 leading-relaxed">
                If Composer is not installed, you can do so using the following command:
            </p>
            <CodeBlock code={`sudo apt install composer`} />
            <p className="mb-4 leading-relaxed">
                You can check that Composer is installed by running:
            </p>
            <CodeBlock code={`composer --version`} />

            {/* Section 2: Installing PHPUnit with Composer */}
            <h2 className="text-2xl font-semibold mb-4">Installing PHPUnit with Composer</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                In your project directory, create a Composer configuration file:
            </p>
            <CodeBlock code={`composer init`} />
            <p className="mb-4 leading-relaxed">
                After initializing the Composer configuration, install the PHPUnit library:
            </p>
            <CodeBlock code={`composer require --dev phpunit/phpunit`} />
            <p className="mb-4 leading-relaxed">
                This will add PHPUnit as a development dependency in your `composer.json` file:
            </p>
            <CodeBlock code={`{
    "require-dev": {
        "phpunit/phpunit": "^10.2"
    }
}`} />

            {/* Section 3: Setting Up PHPUnit Configuration */}
            < h2 className="text-2xl font-semibold mb-4" > Configuring PHPUnit</h2 ><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Now, create a `tests` directory at the root of your project, and then create a `phpunit.xml` file with the following content:
            </p>
            <CodeBlock code={`<?xml version="1.0" encoding="UTF-8"?>
<phpunit bootstrap="vendor/autoload.php" colors="true" stopOnFailure="false">
    <testsuites>
        <testsuite name="Application Test Suite">
            <directory>tests/</directory>
        </testsuite>
    </testsuites>
</phpunit>`} />
            <p className="mb-4 leading-relaxed">
                The {`<directory>`} tag specifies the directory where you will create your test classes (by default, it's in the "tests" folder).
                This is a basic configuration, but PHPUnit has many more configuration options.
            </p>

            {/* Section 4: Creating a Test Class */}
            <h2 className="text-2xl font-semibold mb-4">Creating a Test Class</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Before creating our first test class, we need a PHP class to test. Let’s create a `User.php` file in a `Model` folder:
            </p>
            <CodeBlock code={`<?php

namespace App\Model;

class User
{
    public int $age;
    public array $favorite_movie = [];
    public string $name;

    public function __construct(int $age, string $name)
    {
        $this->age = $age;
        $this->name = $name;
    }

    public function displayName(): string
    {
        return "My name is " . $this->name . ".";
    }

    public function afficherAge(): string
    {
        return "I'm " . $this->age . " years old.";
    }

    public function addFavoriteMovie(string $movie): bool
    {
        $this->favorite_movie[] = $movie;
        return true;
    }

    public function deleteFavoriteMovie(string $movie): bool
    {
        if (!in_array($movie, $this->favorite_movie)) throw new InvalidArgumentException("movie inconnu: " . $movie);
        unset($this->favorite_movie[array_search($movie, $this->favorite_movie)]);
        return true;
    }
}
`} />
            <p className="mb-4 leading-relaxed">
                We’ve created a `User` class with three attributes (name, age, favorite movies) and four methods (display name, display age, add to favorites, remove from favorites).
                Let’s write a test for the `displayName()` method to check if it returns the correct value.
            </p>

            {/* Section 5: Writing a Test Method */}
            <h2 className="text-2xl font-semibold mb-4">Writing the Test Method</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Now, let’s create a test class to verify the `displayName()` method. Here’s how the test could look:
            </p>
            <CodeBlock code={`<?php
use PHPUnit\Framework\TestCase;
require 'Model/User.php';
use App\Model\User;

class UserTest extends TestCase
{
    public function testDisplayname()
    {
        $user = new User(18, 'John');
        $this->assertIsString($user->displayName());
        $this->assertStringContainsStringIgnoringCase('John', $user->displayName());
        $this->assertEquals("My name is John.", $user->displayName(), User's name is incorrect");
    }
}
`} />
            <p className="mb-4 leading-relaxed">
                This test ensures that the `displayName()` method returns a string containing the user's name, and it compares the actual return value with the expected result.
            </p>

            {/* Section 6: Running the Tests */}
            <h2 className="text-2xl font-semibold mb-4">Running the Tests</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                To run the tests, use the following command:
            </p>
            <CodeBlock code={`php vendor/phpunit/phpunit/phpunit`} />

            <h3 className="text-xl font-semibold mb-4">What Happens if the Code Changes?</h3>
            <p className="mb-4 leading-relaxed">
                If the code changes, for example, modifying the `displayName()` method to include the user's age, the test may fail if the expected value does not match the new output.
                Here’s how the method could be modified:
            </p>
            <CodeBlock code={`public function displayName(): string
{
    return "My name is " . $this->name . " and i'm " . $this->age . " years old.";
}
`} />
            <p className="mb-4 leading-relaxed">
                After running the test again, it should fail if the return value does not match the original expected value.
            </p>

            <h3 className="text-xl font-semibold mb-4">Next Steps</h3>
            <p className="mb-4 leading-relaxed">
                Explore other PHPUnit assertions like `assertSame`, `assertNotEquals`, and `assertEmpty` to improve your testing coverage.
                You can find more assertions in the PHPUnit documentation.
            </p>
        </div >
    );
};

export default UnitTestingPHP;
