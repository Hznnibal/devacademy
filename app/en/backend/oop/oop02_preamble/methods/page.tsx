import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const OOPMethods: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Methods in OOP</h1>

            <p className="mb-4 leading-relaxed">
                Instance methods in PHP work similarly to functions you have already declared. The only difference is that a method must belong to a class, which means that calling a method is different from calling a regular function.
            </p>

            <p className="mb-4 leading-relaxed">
                After declaring attributes and constants, you will find functions in a class, which are referred to as methods. These methods behave similarly to regular functions (they perform operations, receive arguments, and return variables).
            </p>

            {/* Example Section */}
            <h2 className="text-2xl font-semibold mb-4">Example</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Here's an example of a class <code>Car</code> with instance methods:
            </p>

            <CodeBlock code={`<?php
class Car
{
    public $_brand;
    public $_powerFiscal;
    public $_maxSpeed;
    protected $_currentSpeed;

    public function start()
    {
        echo "i start.";
    }

    public function move(int $nbKm)
    {
        echo "the Car advances by ".$nbKm." kilometers.";
    }
} // -- end of Car class

// Now, let's instantiate an object of the class
$oCar = new Car();

// Then, we can call the methods using the newly created object.
$oCar->start();
$oCar->move(50);
`} />
            <p className="mb-4 leading-relaxed">
                As we can see, calling an attribute of the class within a method does not require passing the attribute as an argument.
            </p>

            <p className="mb-4 leading-relaxed">
                Like attributes, methods have visibility, which can be public, private, or protected, and their behavior is the same as for attributes. In general, methods are public; otherwise, they cannot be called by the rest of the application. However, some cases may require private or protected visibility.
            </p>
        </div >
    );
};

export default OOPMethods;
