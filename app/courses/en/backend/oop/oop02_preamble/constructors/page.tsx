import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const OOPConstructorsDestructors: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Constructors and Destructors in OOP</h1>

            <p className="mb-4 leading-relaxed">
                A constructor is a special method in a class that is automatically called when an object is instantiated. It is used to perform any necessary initial operations for the object.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Constructor</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                The constructor in PHP is defined using the <code>__construct()</code> method and can accept parameters to initialize object attributes.
            </p>
            <p className="mb-4 leading-relaxed">
                In PHP, the constructor is optional (though it is mandatory in some other programming languages).
            </p>

            {/* Code Example for Constructor */}
            <h3 className="text-xl font-semibold mb-4">Example: Constructor Method</h3>
            <CodeBlock code={`<?php
class Car 
{
   public $_brand;
   public $_model;
   private $_nbWheels;

   // Constructor definition
   function __construct($brand, $model, $nbWheels) 
   {
        $this->_brand = $brand;
        $this->_model = $model;
        $this->_nbWheels = $nbWheels;
   }

   // [OTHER METHODS]
} // -- end of class

// Creating an object and passing values to initialize
$oCar = new Car("Renault", "Clio", 4);
`} />

            <p className="mb-4 leading-relaxed">
                In the example, the constructor method initializes the number of wheels for the car, and when an object of the class is created, values for the attributes are passed to the constructor.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Destructor</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                The destructor method is the opposite of the constructor. It is used to clean up or release resources (such as memory or file handles) when an object is destroyed. In PHP, the destructor is defined using the <code>__destruct()</code> method.
            </p>

            <p className="mb-4 leading-relaxed">
                The destructor is also optional in PHP and is rarely used, but it can be useful in situations where you need to close resources like files opened with <code>fopen()</code>.
            </p>

            <h3 className="text-xl font-semibold mb-4">Destructor Example</h3>
            <CodeBlock code={`<?php
class FileHandler 
{
   private $file;

   // Constructor to open file
   function __construct($filename) 
   {
        $this->file = fopen($filename, "r");
   }

   // Destructor to close file
   function __destruct() 
   {
        fclose($this->file);
        echo "File closed.";
   }
} // -- end of class

$fileHandler = new FileHandler("example.txt"); // file is opened
// Destructor will be called automatically when the object is destroyed or goes out of scope.
`} />

            <p className="mb-4 leading-relaxed">
                In this example, the destructor is used to close a file when the object is destroyed.
            </p>
        </div >
    );
};

export default OOPConstructorsDestructors;
