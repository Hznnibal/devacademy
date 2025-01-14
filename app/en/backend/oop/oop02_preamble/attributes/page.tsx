import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const OOPAttributesAndProperties: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Attributes (or Properties) in OOP</h1>

            <p className="mb-4 leading-relaxed">
                A PHP class consists of two distinct types of information:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Attributes</li>
                <li>Methods</li>
            </ul>

            <p className="mb-4 leading-relaxed">
                Attributes are the data that differentiate one object from another. They can define the appearance, state, and other qualities of an object belonging to a class. In a class, attributes are defined by variables, which can take different values for each object and evolve over time.
            </p>

            {/* Instance Properties */}
            <h2 className="text-2xl font-semibold mb-4">Instance Properties</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                In OOP, we refer to these characteristics as "properties," and they are represented by variables (the term property helps distinguish them from regular variables that don’t belong to any class).
            </p>
            <p className="mb-4 leading-relaxed">
                Let's add some properties to our <code>Animal</code> class:
            </p>

            <CodeBlock code={`class Animal
{
    public $_species;
    public $_dietFood;
    public $_height;
    public $_weight;
}`} />
            <p className="mb-4 leading-relaxed">
                The declaration of a property is very similar to declaring a regular variable. Notice the <code>public</code> keyword at the start of each declaration. This defines the scope of the property. In this case, it means that the property can be used both inside the class (within the curly braces that define the class) and outside the class.
            </p>

            <h3 className="text-xl font-semibold mt-4">Initializing Properties</h3>
            <p className="mb-4 leading-relaxed">
                Now, let's create an animal:
            </p>

            <CodeBlock code={`$odog = new Animal();`} />
            <p className="mb-4 leading-relaxed">
                Our newly created <code>dog</code> object now has the following properties:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>$_species</li>
                <li>$_dietFood</li>
                <li>$_height</li>
                <li>$_weight</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">Setting Property Values</h3>
            <p className="mb-4 leading-relaxed">
                Now, let’s initialize these properties:
            </p>

            <CodeBlock code={`$dog->_species = "dog";
$dog->_dietFood = "Carnivore";
$dog->_height = 110;
$dog->_weight = 16000;`} />
            <p className="mb-4 leading-relaxed">
                To access a property of an object, you use the <code>-{`>`}</code> symbol (the object operator), followed by the name of the property.
            </p>

            {/* Class Properties */}
            <h2 className="text-2xl font-semibold mb-4">Class Properties</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Class properties are different from instance properties in that they exist only once, shared by all objects of the class.
                For instance properties, each object has its own copy of the attributes and methods defined in the class, meaning these properties have different values for each object.
                For a class property, however, the value is shared by all objects of the same class.
            </p>

            <p className="mb-4 leading-relaxed">
                It’s important to keep in mind certain conventions that developers follow to make the code clearer.
            </p>
        </div >
    );
};

export default OOPAttributesAndProperties;
