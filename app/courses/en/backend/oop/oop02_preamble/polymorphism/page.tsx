import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const OOPPolymorphism: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Polymorphism in OOP</h1>

            <p className="mb-4 leading-relaxed">
                Polymorphism allows a method to take on multiple "forms" in different classes. Specifically, a method in a child class can be redefined with different behavior than the method with the same name in the parent class.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Polymorphism Overview</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                The core idea is that the method in the parent class can be overridden by child classes. This allows different classes to implement the same method in their own way.
                For example, in a class hierarchy like vehicles, the `move()` method can be redefined differently in the child classes `Voiture` and `Bateau`, while it remains unchanged in others like `Bus`.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Example of Polymorphism</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                In the following example, the `move()` method in the `Vehicule` class is redefined in the `Voiture` and `Bateau` classes, but not in the `Bus` class:
            </p>

            {/* Code Example for Polymorphism */}
            <h3 className="text-xl font-semibold mb-4">Code Example</h3>
            <CodeBlock code={`<?php
class Vehicule
{
    public function move() 
    {
        echo "The vehicle moves forward.";
    }
}

class Voiture extends Vehicule
{
    public function move() 
    {
        echo "The car moves forward.";
    }
}

class Bus extends Vehicule
{
    // No redefinition of the advance method
}

class Boat extends Vehicule
{
    public function move() 
    {
        echo "The boat is moving forward.";
    }
}

$tab = [
    new Vehicule(),
    new Car(),
    new Bus(),
    new Boat()
];

foreach ($tab as $v) {
    $v->move();
}
`} />

            <p className="mb-4 leading-relaxed">
                When running this code, it will produce the following output:
                <ul className="list-disc pl-5">
                    <li>The vehicule is moving forward.</li>
                    <li>La voiture is moving forward.</li>
                    <li>The bus is moving forward. (Bus uses the parent's method)</li>
                    <li>The boat is moving forward.</li>
                </ul>
                The method `move()` is defined in the parent `Vehicule` class but is redefined in the `Voiture` and `Bateau` classes. The `Bus` class does not redefine the method, so it uses the one from the parent class.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Types of Polymorphism</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                In PHP, polymorphism is primarily achieved through method overriding (also called method overloading). This allows child classes to redefine methods of the parent class with their own specific behavior. However, polymorphism can manifest in several ways, depending on the language's implementation.
            </p>

            <p className="mb-4 leading-relaxed">
                This example illustrates a simple form of polymorphism. In real-world scenarios, polymorphism can get more complex, especially when dealing with abstract classes and interfaces.
            </p>
        </div >
    );
};

export default OOPPolymorphism;
