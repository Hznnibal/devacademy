import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const OOPVisibility: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Visibility in OOP</h1>

            <p className="mb-4 leading-relaxed">
                The visibility of a property, method, or constant (from PHP 7.1.0 onward) can be defined by prefixing its declaration with a keyword: <code>public</code>, <code>protected</code>, or <code>private</code>.
                Public elements are accessible everywhere.
            </p>

            <p className="mb-4 leading-relaxed">
                Access to protected elements is restricted to the class itself, and any class that inherits or extends it. Private elements are only accessible within the class that defines them.
            </p>

            {/* Properties Visibility Section */}
            <h2 className="text-2xl font-semibold mb-4">Visibility of Properties</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Properties of a class should be defined as public, protected, or private.
            </p>
            <p className="mb-4 leading-relaxed">
                If a property is declared using <code>var</code>, it will be public by default.
            </p>

            <ul className="list-disc pl-6 mb-4">
                <li><code>public</code>: The property or method is visible and usable everywhere.</li>
                <li><code>protected</code>: The property is visible only from the defining class or any subclass (classes that inherit from it).</li>
                <li><code>private</code>: The property is visible and usable only within the defining class.</li>
            </ul>

            {/* Code Example */}
            <h3 className="text-xl font-semibold mb-4">Example: Visibility of Properties</h3>
            <CodeBlock code={`<?php
class MyClass
{
   public $public = 'Public';
   protected $protected = 'Protected';
   private $private = 'Private';

   function printHello()
   {
       echo $this->public;
       echo $this->protected;
       echo $this->private;
   }
}

// Instantiating the class
$obj = new MyClass();

echo $obj->public; // Works
echo $obj->protected; // Fatal error
echo $obj->private; // Fatal error

$obj->printHello(); // Displays Public, Protected, and Private
`} />

            <h3 className="text-xl font-semibold mb-4">Example: Inheritance and Visibility</h3>
            <CodeBlock code={`<?php
class MyClass2 extends MyClass
{
   public $public = 'Public2';
   protected $protected = 'Protected2';

   function printHello()
   {
      echo $this->public;
      echo $this->protected;
      echo $this->private;
   }
}

// Instantiating the subclass
$obj2 = new MyClass2();

echo $obj2->public; // Works
echo $obj2->protected; // Fatal error
echo $obj2->private; // Undefined

$obj2->printHello(); // Displays Public2, Protected2, and Undefined
`} />

            <p className="mb-4 leading-relaxed">
                As seen in the examples, public properties can be accessed anywhere, protected properties can be accessed only within the class or its subclasses, and private properties are restricted to the class that defines them.
            </p>
        </div >
    );
};

export default OOPVisibility;
