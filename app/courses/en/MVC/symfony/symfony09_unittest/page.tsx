import { CodeBlock } from '@/components/CodeBlock/code-block';
import Image from 'next/image';
import React from 'react';

const UnitTestsWithPHPUnitAndSymfony: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Unit Tests with PHPUnit and Symfony</h1>

            <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                Unit tests are essential when coding. They allow you to quickly test all or part of your code without going through the graphical interface of your site or application.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                To implement them in Symfony, we need to install PHPUnit and write a small piece of code.
            </p>

            <h2 className="text-2xl font-semibold mb-2">Install PHPUnit</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                To install PHPUnit on your project, open a terminal (e.g., Git Bash) at the root of your project and run the following command:
            </p>
            <CodeBlock code={`php bin/phpunit`} />
            <p className="text-lg leading-relaxed mb-4">
                This command is the basis for launching PHPUnit. However, if PHPUnit is not yet installed in your project, it will automatically start the installation process.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                If you rerun this command, a message will appear stating that no tests have been executed. This is normal; we now need to write these tests!
            </p>

            <h3 className="text-lg font-semibold mb-4">Testing the Validation System of the Products Entity</h3>
            <p className="text-lg leading-relaxed mb-4">
                In this example, we will test the validation system of our <code className="code-word">Products</code> entity. To make this example functional and to properly understand the unit testing system, make sure to remove any validation constraints from this entity (either in the entity itself or in <code className="code-word">ProductsType.php</code>).
            </p>
            <p className="text-lg leading-relaxed mb-4">
                For writing these tests, we will place our test in the <code className="code-word">test</code> folder, at the root of our project:
            </p>
            <Image
                src="/test5.png"
                alt="Validation error screenshot"
                className="screenshot"
                width={260}
                height={260}
            />

            <p className="text-lg leading-relaxed mb-4">
                A good practice for setting up unit tests is to keep the same structure as our project (in the <code className="code-word">src</code> folder). The path to our <code className="code-word">Products</code> entity is <code className="code-word">src/Entity/Products.php</code>, and the path to its unit test will therefore be <code className="code-word">test/Entity/ProductsTest.php</code>.
            </p>

            <h3 className="text-lg font-semibold mb-4">Creating the ProductsTest.php Class</h3>
            <p className="text-lg leading-relaxed mb-4">
                Now, let's create our <code className="code-word">ProductsTest.php</code> class as follows (make sure to import the necessary classes):
            </p>
            <CodeBlock code={`<?php

namespace App\Tests\Entity;

use App\Entity\Products;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class ProductsTest extends KernelTestCase
{
    // Write your tests here
}`} />

            <p className="text-lg leading-relaxed mb-4">
                Regarding test classes, you can extend them with several other classes:
            </p>
            <ul className="list">
                <li className="list-item"><strong>TestCase</strong>: for performing basic tests.</li>
                <li className="list-item"><strong>KernelTestCase</strong>: allows you to write tests in the context of the kernel, used for functional tests, application context, etc.</li>
                <li className="list-item"><strong>WebTestCase</strong>: allows you to test controllers and the application as a whole.</li>
            </ul>

            <p className="text-lg leading-relaxed mb-4">
                When tests are performed, the environment changes. By default, when PHPUnit is launched, Symfony disables certain features (e.g., email sending, etc.). You can set up configurations for this test environment, including specifying a test database. To do this, open the <code className="code-word">.env.test</code> file and define the test database the same way you defined the main project database. In the end, the same configurations as in the <code className="code-word">.env</code> file can be set here.
            </p>

            <h2 className="text-2xl font-semibold mb-2">Testing the Products Entity</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                Let&apos;s write our first test to check the validation constraints of the <code className="code-word">Products</code> entity.
            </p>

            <h3 className="text-lg font-semibold mb-4">Creating the testValid() Method</h3>
            <p className="text-lg leading-relaxed mb-4">
                We start by creating a method called <code className="code-word">testValid()</code>. Inside, we first define the properties of the entity we want to test. Then, we trigger the validation (<code className="code-word">self::bootKernel();</code>), and we retrieve the validator from the container (<code className="code-word">{`$error = self::$container->get('validator')->validate($product);`}</code>). Finally, we expect no errors (the insertion should succeed since we&apos;re testing data consistent with our database), and we retrieve the errors.
            </p>

            <CodeBlock code={`<?php

namespace App\Tests\Entity;

use App\Entity\Products;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class ProductsTest extends KernelTestCase
{
    public function testValid()
    {
        // define the product to insert into the database
        $product = (new Products())->setProductName('Product')
            ->setCategoryId(1)
            ->setUnitPrice(183)
            ->setQuantityPerUnit(8)
            ->setUnitsInStock(56)
            ->setUnitsOnOrder(32)
            ->setRedorderLevel(5)
            ->setDiscontinued(0)
            ->setDescription('PHP unit test');
        
        // validation
        self::bootKernel();
        
        // get the validator from the container
        $error = self::$container->get('validator')->validate($product);
        
        // we expect no errors
        $this->assertCount(0, $error);
    }
}`} />

            <p className="text-lg leading-relaxed mb-4">
                Now that we&apos;ve written our first test, we can go to the terminal and run PHPUnit with the following command:
            </p>
            <CodeBlock code={`php bin/phpunit`} />

            <p className="text-lg leading-relaxed mb-4">
                We can filter tests on specific test classes. Instead of running all tests, we can run a single test like this:
            </p>
            <CodeBlock code={`php bin/phpunit --filter <testClassName>`} />


            <p className="text-lg leading-relaxed mb-4">
                If the test passes, you should see a result similar to the one below:
            </p>

            <Image
                src="/test1.png"
                alt="Validation error screenshot"
                className="screenshot"
                width={960}
                height={300}
            />

            <p className="text-lg leading-relaxed mb-4">
                Don&apos;t mind the deprecation message.
            </p>

            <h3 className="text-lg font-semibold mb-4">Creating the testInvalid() Method</h3>
            <p className="text-lg leading-relaxed mb-4">
                Similarly, we will create a method to test validation constraints when invalid data is provided:
            </p>
            <CodeBlock code={`public function testInvalid()
{
    $product = (new Products())->setProductName('Pro213duit')
        ->setCategoryId(1)
        ->setUnitPrice(183)
        ->setQuantityPerUnit(8)
        ->setUnitsInStock(56)
        ->setUnitsOnOrder(32)
        ->setRedorderLevel(5)
        ->setDiscontinued(0)
        ->setDescription('PHP unit test');
    
    // validation
    self::bootKernel();
    
    // get the validator from the container
    $error = self::$container->get('validator')->validate($product);
    
    // we expect 1 error
    $this->assertCount(1, $error);
}`} />

            <p className="text-lg leading-relaxed mb-4">
                The only difference here is that we expect one error (validation error): <code className="code-word">{`$this->assertCount(1, $error);`}</code>.
            </p>

            <p className="text-lg leading-relaxed mb-4">
                If there are no validation constraints on your entity, you should get the following result:
            </p>
            <Image
                src="/test2.png"
                alt="Validation error screenshot"
                className="screenshot"
                width={960}
                height={300}
            />

            <p className="text-lg leading-relaxed mb-4">
                An error is reported, along with the method where it occurred.
            </p>

            <p className="text-lg leading-relaxed mb-4">
                <strong>WARNING:</strong> Do not confuse the error we expect (here, the validation constraint should return an error) with the error reported by PHPUnit. The latter indicates that the test is invalid.
            </p>

            <h3 className="text-lg font-semibold mb-4">Adding Validation Constraints</h3>
            <p className="text-lg leading-relaxed mb-4">
                The test failed because there was no validation constraint defined on the <code className="code-word">$ProductName</code> property of our entity. Let&apos;s add a validation constraint to it, allowing only uppercase and lowercase letters, as well as spaces:
            </p>
            <CodeBlock code={`/**
 * @ORM\Column(type="float")
 * @Assert\Regex("/^[a-zA-Z\s]+$/")
 */
private $ProductName;`} />

            <p className="text-lg leading-relaxed mb-4">
                Now, let&apos;s rerun the test:
            </p>
            <Image
                src="/test3.png"
                alt="Validation error screenshot"
                className="screenshot"
                width={960}
                height={300}
            />

            <p className="text-lg leading-relaxed mb-4">
                The test is now successful. The validation constraint is taken into account and doesn&apos;t allow numbers. The insertion has indeed failed due to the validation error.
            </p>

            <h2 className="text-2xl font-semibold mb-2">Code Factorization in Unit Tests</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                Even within unit tests, it is important to maintain a good code structure and avoid repetition. In our case, we have two methods with almost the same code, with only a few differences. We can factorize the code as follows:
            </p>

            <h3 className="text-lg font-semibold mb-4">Creating a Method to Retrieve the Entity</h3>
            <CodeBlock code={`public function getEntity(): Products {
    return (new Products())->setProductName('test Product')
        ->setCategoryId(1)
        ->setUnitPrice(183)
        ->setQuantityPerUnit(8)
        ->setUnitsInStock(56)
        ->setUnitsOnOrder(32)
        ->setRedorderLevel(5)
        ->setDiscontinued(0)
        ->setDescription('PHP unit test');
}`} />

            <h3 className="text-lg font-semibold mb-4">Creating a Method for Validation and Error Retrieval</h3>
            <CodeBlock code={`public function assertHasError(Products $products, $number = 0)
{
    // validation
    self::bootKernel();
    
    // get the validator from the container
    $error = self::$container->get('validator')->validate($products);
    
    // we expect the given number of errors
    $this->assertCount($number, $error);
}`} />

            <h3 className="text-lg font-semibold mb-4">Calling Methods in the testValid and testInvalid Functions</h3>
            <CodeBlock code={`public function testValid()
{
    $this->assertHasError($this->getEntity(), 0);
}

public function testInvalid()
{
    $this->assertHasError($this->getEntity()->setProductName('t23est Product'), 1);
}`} />

            <h3 className="text-lg font-semibold mb-4">Testing for Empty Strings</h3>
            <p className="text-lg leading-relaxed mb-4">
                Continuing with our example, let&apos;s add a method to test for an empty string:
            </p>
            <CodeBlock code={`public function testInvalid()
{
    // test for invalid string with digits
    $this->assertHasError($this->getEntity()->setProductName('t23est Product'), 1);
    
    // test for empty string
    $this->assertHasError($this->getEntity()->setProductName(''), 1);
}`} />

            <p className="text-lg leading-relaxed mb-4">
                We encounter an error because there is no validation constraint indicating that empty strings are not accepted.
            </p>

            <h3 className="text-lg font-semibold mb-4">Adding a Validation Constraint</h3>
            <p className="text-lg leading-relaxed mb-4">
                Let&apos;s add a new validation constraint to prevent empty strings and rerun the test:
            </p>
            <CodeBlock code={`/**
 * @ORM\Column(type="string")
 * @Assert\NotBlank()
 */
private $ProductName;`} />

            <h3 className="text-lg font-semibold mb-4">Testing with Separate Methods for Each Case</h3>
            <p className="text-lg leading-relaxed mb-4">
                It&apos;s not always practical to put all tests in a single method, especially when trying to pinpoint a problem. It&apos;s better to create separate methods for each test case:
            </p>
            <CodeBlock code={`public function testValid()
{
    $this->assertHasError($this->getEntity(), 0);
}

public function testDigitInvalid()
{
    $this->assertHasError($this->getEntity()->setProductName('t23est Product'), 1);
}

public function testBlankInvalid()
{
    $this->assertHasError($this->getEntity()->setProductName(''), 1);
}`} />

            <h3 className="text-lg font-semibold mb-4">Removing the Empty String Constraint</h3>
            <p className="text-lg leading-relaxed mb-4">
                If we remove the constraint for empty strings, we will get an error from PHPUnit. It will report that we expected an error, but none was found, and it will indicate the method where the issue occurred:
            </p>
            <Image
                src="/test4.png"
                alt="Error without empty string constraint"
                className="screenshot"
                width={500}
                height={300}
                priority
            />

            <p className="text-lg leading-relaxed mb-4">
                This error shows that PHPUnit was expecting a validation error for the empty string, but it wasn't found because the constraint was missing. After adding the constraint, the test should pass successfully.
            </p>

            <h2 className="text-2xl font-semibold mb-2">Error Retrieval in PHPUnit</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                It can be useful to retrieve PHPUnit errors to gain more insights in case of issues during tests. You can do this by modifying the <code>assertHasError()</code> method as follows:
            </p>

            <h3 className="text-lg font-semibold mb-4">Modifying the assertHasError Method</h3>
            <CodeBlock code={`public function assertHasError(Products $products, $number = 0)
{
    // validation
    self::bootKernel();
    
    // get the validator from the container
    $errors = self::$container->get('validator')->validate($products);
    $messages = [];
    
    // loop through the errors and collect messages
    /**
     * @var ConstraintViolation $error
     */
    foreach ($errors as $error) {
        $messages[] = $error->getPropertyPath() + ' => ' + $error->getMessage();
    }
    
    // assert that we have the expected number of errors
    $this->assertCount($number, $errors, implode(',', $messages));
}`} />

            <h3 className="text-xl font-semibold mb-4">
                In this updated version, we collect all validation error messages and include them in the assertion failure message. This will provide more detailed feedback in case the test fails.
            </h3>

            <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">
                Unit tests are not only used for validating constraints but also for testing controllers, business logic, and specific pieces of code. They are an essential tool to ensure your application behaves as expected in different scenarios.
            </p>
        </div>
    );
};

export default UnitTestsWithPHPUnitAndSymfony;
