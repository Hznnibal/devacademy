import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const OOPExplanation: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Introduction to Object-Oriented Programming (OOP)</h1>

            {/* Section 1: Overview of OOP */}
            <h2 className="text-2xl font-semibold mb-4">What is Object-Oriented Programming (OOP)?</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Object-Oriented Programming (OOP) is a programming paradigm that structures code by creating objects that represent real-world entities or abstract concepts.
                An object is an instance of a class and contains attributes (properties) and behaviors (methods).
                This approach helps make code more modular, understandable, and maintainable.
            </p>

            {/* Section 2: Key Concepts of OOP */}
            <h2 className="text-2xl font-semibold mb-4">Key Concepts of OOP</h2>
            <div className="border-b border-gray-300 mb-6" />
            <h3 className="text-xl font-bold ">Classes</h3>
            <p className="mb-4 leading-relaxed">
                A class is a blueprint or template for creating objects. It defines the attributes (variables) and methods (functions) that will be shared by all objects of that class.
            </p>

            <h3 className="text-xl font-bold ">Objects</h3>
            <p className="mb-4 leading-relaxed">
                An object is an instance of a class. Each object can hold its own data in the form of attributes and can perform actions using methods defined in its class.
            </p>

            <h3 className="text-xl font-bold ">Inheritance</h3>
            <p className="mb-4 leading-relaxed">
                Inheritance allows a class to inherit properties and methods from another class. This promotes code reuse and helps in creating a hierarchy of classes.
            </p>

            <h3 className="text-xl font-bold ">Encapsulation</h3>
            <p className="mb-4 leading-relaxed">
                Encapsulation refers to the bundling of data (attributes) and methods that operate on the data into a single unit, or class. It also helps restrict access to certain components of the object, making the code safer and easier to maintain.
            </p>

            <h3 className="text-xl font-bold ">Polymorphism</h3>
            <p className="mb-4 leading-relaxed">
                Polymorphism allows objects of different classes to be treated as objects of a common superclass. It also allows for methods to be redefined in derived classes.
            </p>

            {/* Section 3: Example of OOP in Action */}
            <h2 className="text-2xl font-semibold mb-4">Example of OOP in Action</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Here’s a simple example demonstrating a class with attributes and methods:
            </p>

            <CodeBlock code={`class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(\`\${this.year} \${this.make} \${this.model}\`);
    }
}

const myCar = new Car('Toyota', 'Corolla', 2020);
myCar.displayInfo();  // Outputs: 2020 Toyota Corolla`} />

            <p className="mb-4 leading-relaxed">
                In this example, the <code>Car</code> class has three attributes: <code>make</code>, <code>model</code>, and <code>year</code>, and one method: <code>displayInfo()</code>.
                We create an instance of the <code>Car</code> class, <code>myCar</code>, and call the <code>displayInfo</code> method to display the car’s information.
            </p>

            {/* Section 4: Why Use OOP? */}
            <h2 className="text-2xl font-semibold mb-4">Why Use OOP?</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                OOP makes the code more modular and easier to maintain. It allows for code reuse through inheritance, helps keep code organized with encapsulation, and allows methods to be defined across different classes with polymorphism.
            </p>

            <p className="mb-4 leading-relaxed">
                These concepts make large applications easier to manage and scale over time.
            </p>

            {/* Section 1: Inheritance vs Aggregation */}
            <h2 className="text-2xl font-semibold mb-4">Inheritance vs Aggregation</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Inheritance and aggregation are two key concepts in Object-Oriented Programming (OOP) used to establish relationships between classes. However, they approach these relationships in different ways.
            </p>

            <h3 className="text-xl font-semibold mb-4">1. Inheritance</h3>
            <p className="mb-4 leading-relaxed">
                Inheritance represents a "is a" relationship between a parent class and a child class. The child class inherits the properties and methods from the parent class. In other words, the child class uses the structure and behavior of the parent class to create its own properties and methods. Inheritance is often used to create more specialized classes from a general class.
            </p>
            <p className="mb-4 leading-relaxed">
                For example, if we have a class <code>PlatSpecial</code> that inherits from the <code>dish</code> class, we can add additional properties and methods to <code>PlatSpecial</code>.
            </p>

            <h3 className="text-xl font-semibold mb-4">2. Aggregation</h3>
            <p className="mb-4 leading-relaxed">
                Aggregation represents a "has a" relationship between two classes, where one class contains another class as one of its properties. In other words, the container class uses the contained class to fulfill part of its functionality. Aggregation is often used to create relationships like "has a" or "has many" between classes.
            </p>
            <p className="mb-4 leading-relaxed">
                For instance, in the "The District" project, we added an attribute "category" in the "dish" class that holds an object of the "category" class. We can then access the "name" attribute of the "category" class using that object.
            </p>
            <CodeBlock code={`$calzone->display(); // Displays the dish
$calzone->category->display(); // Displays the category of the dish`} />

            {/* Section 2: Encapsulation, Getter, Setter */}
            <h2 className="text-2xl font-semibold mb-4">Encapsulation, Getter, and Setter</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Encapsulation is used to protect the implementation details of a class. Certain properties can be declared as private or protected, making them inaccessible directly. To allow access, we create getter and setter methods.
            </p>
            <p className="mb-4 leading-relaxed">
                Here's an example where the <code>name</code> property is declared as private, and we use the getter and setter methods to access and modify it.
            </p>

            <CodeBlock code={`class category {
public $id;
private $name;
public $description;

public function __construct($id=0, $name="", $description="") {
$this->id = $id;
$this->name = $name;
$this->description = $description;
}

public function getname() {
return $this->name;
}

public function setname($name) {
$this->name = $name;
return $this;
}

public function display() {
echo $this->name . " : " . $this->description;
}
}`} />
            <p className="mb-4 leading-relaxed">
                The <code>name</code> property is declared as private, and the getter <code>getname</code> and setter <code>setname</code> methods allow access and modification. The only way to use the <code>name</code> property is through these accessors.
            </p>

            <h3 className="text-xl font-semibold mb-4">Example Usage</h3>
            <CodeBlock code={`$cat = new category(2, "Pasta", "All kinds of pasta...");
echo $cat->name; // DOES NOT WORK, PROPERTY IS PRIVATE
echo $cat->getname(); // Works, uses the getter
$cat->setname("Pasta Italian");`} />

            {/* Section 3: Example with PDO */}
            <h2 className="text-2xl font-semibold mb-4">Example with PDO</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                The <code>fetch</code> and <code>fetchAll</code> methods of PDO can create instances of your classes from query results.
            </p>
            <CodeBlock code={`$db = new PDO(...);

$request = $db->query("SELECT * FROM category");
$categorys = $request->fetchAll(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, "category");

foreach ($categorys as $category) {
$category->display(); // Displays category info
}`} />
            <p className="mb-4 leading-relaxed">
                With the <code>PDO::FETCH_CLASS</code> mode, the <code>fetchAll</code> method will reconstruct objects of the <code>category</code> class from the query result. The variable <code>$categorys</code> will contain a list of <code>category</code> objects.
                Note that in the <code>category</code> class constructor, properties are initialized with default values. <code>PDO::FETCH_PROPS_LATE</code> calls the constructor before assigning column values from the table to the object's properties.
            </p>
            <CodeBlock code={`foreach ($categorys as $category) {
$category->display();
}`} />
        </div >
    );
};

export default OOPExplanation;
