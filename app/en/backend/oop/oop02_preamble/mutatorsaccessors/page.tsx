import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const OOPMutatorsAccessors: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Mutators and Accessors in OOP</h1>

            <p className="mb-4 leading-relaxed">
                Encapsulation and the principles of visibility dictate that a class's attributes should never be manipulated directly from outside the class (to avoid accidents such as deletion, invalid values, etc.).
            </p>

            <p className="mb-4 leading-relaxed">
                Therefore, attributes should always be declared as private using the <code>private</code> keyword and then manipulated using methods called accessors and mutators (getters and setters).
            </p>

            {/* Mutator Section */}
            <h2 className="text-2xl font-semibold mb-4">Mutator</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                A mutator method is used to set the value of an attribute. It takes the variable that contains the value as an argument.
            </p>
            <p className="mb-4 leading-relaxed">
                By convention, mutator methods have the <code>set</code> prefix, and it's practical to give them the name of the attribute being modified.
            </p>

            {/* Code Example for Mutator */}
            <h3 className="text-xl font-semibold mb-4">Example: Mutator Method</h3>
            <CodeBlock code={`<?php
// vehicule.class.php  

// Mutator: sets/changes the value passed as argument to the attribute 
public function setBrand($sBrand) 
{
   return $this->_brand = $sBrand;
}
`} />

            <p className="mb-4 leading-relaxed">
                You need to write a mutator method for each attribute.
            </p>

            {/* Accessor Section */}
            <h2 className="text-2xl font-semibold mb-4">Accessor</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                An accessor method is used to return the value of an attribute.
            </p>

            {/* Code Example for Accessor */}
            <h3 className="text-xl font-semibold mb-4">Example: Accessor Method</h3>
            <CodeBlock code={`<?php
// vehicule.class.php  

// Accessor: returns the value of an attribute  
public function getBrand() 
{
    return $this->_brand;
}
`} />

            <p className="mb-4 leading-relaxed">
                As with mutators, it's important to define an accessor for each attribute in your class.
            </p>
        </div >
    );
};

export default OOPMutatorsAccessors;
