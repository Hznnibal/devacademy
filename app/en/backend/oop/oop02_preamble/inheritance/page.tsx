import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const OOPInheritance: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Inheritance in OOP</h1>

            <p className="mb-4 leading-relaxed">
                Object-Oriented Programming (OOP) introduces the concept of inheritance, which allows one class to use the members of another class.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Inheritance Overview</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                In inheritance:
                <ul className="list-disc pl-5">
                    <li>A class B can inherit from class A, meaning B uses members (attributes and methods) from class A.</li>
                    <li>Class A is called the parent class (or super-class).</li>
                    <li>Class B is called the child class (or sub-class).</li>
                </ul>
                In simpler terms, class B is a "specialized" version of class A. Class B has some common characteristics with class A, but also adds or modifies certain features.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Example of Inheritance</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Consider a vehicle class with different types of vehicles such as car, truck, bus, motorcycle, and boat. All these vehicles share some common attributes (brand name, model, power, color) and methods (drive, brake), but each one also has unique attributes, like a truck having a max weight or a bus having a number of passengers.
            </p>

            <h3 className="text-xl font-semibold mb-4">Possibilities and Limitations of Inheritance</h3>
            <ul className="list-disc pl-5 mb-4">
                <li>A child class can inherit from only one parent class, but there can be many child classes.</li>
                <li>A parent class can have many child classes (e.g., the Vehicle class can have subclasses like Car, Motorcycle, Truck, Bus, etc.).</li>
                <li>Inheritance can be multi-level. For example, class C can inherit from class B, which itself inherits from class A (3 levels of inheritance).</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">How to Implement Inheritance in PHP</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                To implement inheritance in PHP, the child class must use the <code>extends</code> keyword followed by the parent class name in the class definition.
            </p>

            {/* Code Example for Inheritance */}
            <h3 className="text-xl font-semibold mb-4">Example: Inheritance in PHP</h3>
            <CodeBlock code={`<?php
class Vehicle
{
    public $brand;
    public $model;

    public function drive() {
        echo "Driving the vehicle.<br>";
    }
}

class Car extends Vehicle
{
    public $doors;

    public function honk() {
        echo "Car honking!<br>";
    }
} // -- end of classes

// Creating an object of the Car class
$car = new Car();
$car->brand = "Toyota";
$car->model = "Corolla";
$car->drive();  // Inherited method from Vehicle class
$car->honk();   // Method specific to Car class
`} />

            <p className="mb-4 leading-relaxed">
                In this example, the <code>Car</code> class extends the <code>Vehicle</code> class. This means the <code>Car</code> class inherits all public and protected attributes and methods from the <code>Vehicle</code> class, while also having its own unique method, <code>honk()</code>.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Using Parent Methods</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                To call a method from the parent class within the child class, you use the <code>parent::</code> keyword. This allows the child class to access methods and properties from the parent class.
            </p>

            <h3 className="text-xl font-semibold mb-4">Example: Using Parent Methods</h3>
            <CodeBlock code={`<?php
class Vehicle
{
    public function drive() {
        echo "Driving the vehicle.<br>";
    }
}

class Car extends Vehicle
{
    public function drive() {
        parent::drive();  // Calls the drive method from the parent class
        echo "The car is driving.<br>";
    }
} // -- end of classes

$car = new Car();
$car->drive();  // Calls both the parent method and the child method
`} />

            <p className="mb-4 leading-relaxed">
                In this case, the <code>Car</code> class overrides the <code>drive()</code> method of the <code>Vehicle</code> class, but it still calls the parent class's method using <code>parent::drive()</code>.
            </p>
        </div >
    );
};

export default OOPInheritance;
