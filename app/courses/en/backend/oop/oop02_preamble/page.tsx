import { CodeBlock } from '@/components/CodeBlock/code-block';
import Link from 'next/link';
import React from 'react';

const OOPConceptsIntro: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Thinking in Terms of Objects</h1>

            {/* Section 1: Introduction to OOP */}
            <p className="mb-4 leading-relaxed">
                There are several ways to conceptualize a computer program. The traditional approach considers a program as a series of sequentially executed instructions, known as "procedural programming."
            </p>
            <p className="mb-4 leading-relaxed">
                PHP, like other programming languages, is an "object-oriented" language. This is more than just a trendy concept; it is a genuine philosophy of programming. Object-Oriented Programming (OOP) is a way of developing software that reflects how real-world objects interact and are assembled. For example, a car is a complex set of components interacting with each other, but it forms a coherent whole capable of performing actions (starting, braking, etc.) and possessing its own characteristics (color, license plate number, speed, etc.).
            </p>
            <p className="mb-4 leading-relaxed">
                To represent the real world in this way, the logic of OOP is based on principles that need to be understood before they can be applied. Naturally, like any technology, OOP introduces a new vocabulary that corresponds to its underlying concepts, which you'll need to familiarize yourself with. We will cover the following topics:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Organization of programs into elements called classes, and how these classes are used to define objects that can be manipulated in programming.</li>
                <li>The definition of a class in terms of its structure: methods (behaviors) and attributes (data) that characterize it.</li>
                <li>Relationships between classes, such as inheritance, which allows one class to benefit from the functionalities of another.</li>
                <li>Various types of associations between objects.</li>
            </ul>

            {/* Section 2: A Class to Create Manipulable Objects */}
            <h2 className="text-2xl font-semibold mb-4">A Class to Create Manipulable Objects</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                An object is a coherent unit that combines data (which characterize it) and code (that manipulates it). The core concept of OOP is that "everything is an object" (or considered as such): a product, a customer, but also a file, a connection, etc.
            </p>
            <p className="mb-4 leading-relaxed">
                A class is a cohesive set of code, typically containing both variables (called attributes) and functions (called methods). A class serves as a blueprint to create objects. The purpose of a class is to generate objects that we can manipulate in one or more projects.
            </p>
            <p className="mb-4 leading-relaxed">
                A class can be thought of as a mold from which objects are created, each representing an element from the real world that the program must manage. A class describes the internal structure of an object: the data it gathers and the actions it can perform on its data.
            </p>
            <p className="mb-4 leading-relaxed">
                For example, in a website project, a <code>User</code> class would describe the data and actions that all customers can perform. On the other hand, each customer to be managed will be an instance (an exemplar) of this <code>User</code> class.
            </p>
            <p className="mb-4 leading-relaxed">
                It’s important to note: while a developer writes the class code, during execution, the code that instantiates and manipulates the objects will perform the actual operations.
            </p>
            <p className="mb-4 leading-relaxed">
                For example, in the "Gardenly" project, we might create a <code>User</code> class file, which could be integrated into the website project. When a customer creates an account, the form validation script will instantiate the <code>User</code> class by creating an object <code>$client</code>, where we store the new customer’s name, SIRET number, and address, and perform actions like hashing the password before saving it in the database.
            </p>

            {/* Section 3: Declaring a Class */}
            <h2 className="text-2xl font-semibold mb-4">Declaring a Class</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                There are a few rules to know and follow when defining a new class in PHP.
            </p>
            <h3 className="text-xl font-semibold mb-4">Naming Conventions</h3>
            <ul className="list-disc pl-6 mb-4">
                <li>A class name cannot be a reserved word in PHP (e.g., Date, Clone, etc.).</li>
                <li>The class name should start with a capital letter or an underscore (_).</li>
                <li>The class name can only contain alphanumeric characters and underscores.</li>
            </ul>
            <p className="mb-4 leading-relaxed">
                Each class must also be defined in its own file, which by convention should be named after the class followed by the extension (e.g., <code>ClassName.class.php</code>).
            </p>

            <h3 className="text-xl font-semibold mb-4">Defining a Class</h3>
            <CodeBlock code={`<?php
class Animal 
{
    // Code for the content of the class
}
?>`} language='php' />
            <p className="mb-4 leading-relaxed">
                In this example, we have defined the <code>Animal</code> class (a simple but essential definition).
            </p>

            <h3 className="text-xl font-semibold mb-4">Class Definition: Attributes and Methods</h3>
            <p className="mb-4 leading-relaxed">
                Our <code>Animal</code> class is the blueprint for creating an animal. We can define its characteristics (such as species, size, weight, diet, number of legs, etc.) as well as the actions it can perform (such as eating, sleeping, reproducing, moving, etc.).
            </p>

            <CodeBlock code={`<?php
class Animal 
{
    public $species;
    private $size;
    private $weight;
    private $numLegs;

    public function eat() {
        // Eating behavior
    }

    public function move(int $nbpas) {
        // Moving behavior
    }
}
?>`} language='php' />
            <p className="mb-4 leading-relaxed">
                In this example, we defined the attributes of the <code>Animal</code> class (such as <code>$species</code>, <code>$size</code>, <code>$weight</code>, and <code>$numLegs</code>) and two methods, <code>eat()</code> (for eating) and <code>move()</code> (for moving).
            </p>

            <h2 className="text-2xl font-semibold mb-4">Instantiating a Class</h2>

            {/* Section 1: Instantiation of a Class */}
            <p className="mb-4 leading-relaxed">
                Instantiating a class refers to the operation of creating an object from the class. This is also called creating an instance.
            </p>
            <p className="mb-4 leading-relaxed">
                This operation is performed in the scripts that need to use the class, and it is done using the <code>new</code> keyword:
            </p>
            <CodeBlock code={`$ADog = new Animal();`} />
            <p className="mb-4 leading-relaxed">
                An instance corresponds to an "exemplar" of a class. When we instantiate a class, we create an object. Instantiation is the operation that "gives life" to the object.
            </p>
            <p className="mb-4 leading-relaxed">
                To manipulate and use an object, we must store the created object in a variable (this variable will then be referred to as our object). This allows us to have as many objects as we want from the same class:
            </p>
            <CodeBlock code={`$ADog = new Animal();
$AnotherDog = new Animal();
$ACat = new Animal();
$ARabbit = new Animal();`} />
            <p className="mb-4 leading-relaxed">
                The great advantage here is that we can perform different operations on each instance of a class (an exemplar) without affecting the other instances (other objects).
            </p>
            <p className="mb-4 leading-relaxed">
                When we create animals from the <code>Animal</code> class (or instantiate this class), each instantiated animal is defined by the characteristics of its class: all animals will have a species, weight, and diet, for example. However, the values of these characteristics and actions will be specific to each animal. The species will differ from one animal to another, not all animals will have the same weight, and not all will have the same diet.
            </p>
            <p className="mb-4 leading-relaxed">
                Similarly, the actions defined for the class will be the same for all animals, but these actions will have a different impact depending on the animal (object) that performs them. For example, a larger animal will cover a greater distance when moving than a smaller animal.
            </p>

            {/* Section 2: Class Attributes and Methods */}
            <h2 className="text-2xl font-semibold mb-4">Class Attributes and Methods</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Let's now take the example of a <code>Vehicule</code> class:
            </p>

            <CodeBlock code={`class Vehicule
{
public $_brand;
public $_maxSpeed;
protected $_currentSpeed;
private $_numPassengers;

public function start() {
// Code to start the vehicle
}
public function accelerate(int $nbKm) {
// Code to accelerate
}
public function move(int $nbKm) {
// Code to move forward
}
public function addPasssenger() {
// Code to add a passenger
}
}`} />

            <p className="mb-4 leading-relaxed">
                The <code>Vehicule</code> class is characterized by 4 attributes:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li><code>$_brand</code>: The brand of the vehicle.</li>
                <li><code>$_maxSpeed</code>: The maximum speed of the vehicle.</li>
                <li><code>$_currentSpeed</code>: The current speed of the vehicle.</li>
                <li><code>$_numPassengers</code>: The number of passengers in the vehicle.</li>

            </ul>
            <p className="mb-4 leading-relaxed">
                All the data, called attributes, will be representative of a specific vehicle. In other words, each <code>Vehicule</code> object will have its own copy of these data, which are called instance attributes.
            </p>

            <h2 className="text-2xl font-semibold mb-4"></h2>
            <div className="text-center mt-8">
                <Link href="oop02_preamble/attributes" className="text-blue-600 underline text-lg">
                    Understanding Attributes in OOP
                </Link>
            </div>

            <p className="mb-4 leading-relaxed">
                The same reasoning directly applies to methods.
                Our <code>Vehicule</code> class has 4 actions:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Ability to <code>start()</code></li>
                <li>Ability to <code>accelerate()</code></li>
                <li>Ability to <code>move()</code></li>
                <li>Ability to <code>addPassenger()</code></li>
            </ul>
            <p className="mb-4 leading-relaxed">
                It is clear that the <code>start()</code> method applies individually to each vehicle. Not all the <code>Vehicule</code> objects instantiated in the project will start at the same time; we will need to specify which instance of the class we want to start.
            </p>
            <p className="mb-4 leading-relaxed">
                Furthermore, the <code>move()</code> method will clearly use or modify the instance attributes of the object it is applied to, for example, the <code>vitesseCourante</code> of the vehicle in question. These are instance methods.
            </p>

            <h2 className="text-2xl font-semibold mb-4"></h2>
            <div className="text-center mt-8">
                <Link href="oop02_preamble/methods" className="text-blue-600 underline text-lg">
                    Understanding How Instance Methods Work in OOP
                </Link>
            </div>


            {/* Section 1: Visibility and Security */}
            <h2 className="text-2xl font-semibold mb-4">Visibility and Security</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                In Object-Oriented Programming (OOP), it’s important to define the visibility of the class's methods and attributes.
                You can choose the appropriate visibility for each element: <code>public</code>, <code>protected</code>, or <code>private</code>.
            </p>

            <div className="text-center mt-8">
                <Link href="oop02_preamble/visibility" className="text-xl font-semibold text-blue-600 underline">
                    Choosing the Right Visibility
                </Link>
            </div>
            <p className="mb-4 leading-relaxed">
                <code>public</code> methods and attributes are accessible everywhere.
                <code>protected</code> elements are accessible within the class and its subclasses,
                while <code>private</code> elements are only accessible within the defining class.
            </p>

            <div className="text-center mt-8">
                <Link href="oop02_preamble/mutatorsaccessors" className="text-xl font-semibold text-blue-600 underline">
                    Declaring Accessors and Mutators
                </Link>
            </div>

            <p className="mb-4 leading-relaxed">
                Accessors (getters) and mutators (setters) are commonly used to manage access to an object's private attributes.
                They allow controlled access and modification of attributes from outside the class.
                <br />
                Example: <code>getNameAttribut()</code> for accessors, and <code>setNameAttribut()</code> for mutators.
            </p>



            {/* Section 2: Constructor */}
            <h2 className="text-2xl font-semibold mb-4">Class Constructor</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                On the server side, creating or instantiating a new object involves two main phases:
            </p>

            <ul className="list-disc pl-6 mb-4">
                <li>Allocating memory for the object and providing an execution context (handled by the class and the operating system).</li>
                <li>Initializing the object's instance attributes (handled by the object itself).</li>
            </ul>

            <p className="text-lg leading-relaxed mb-4">In PHP, these operations are managed by a special method: the constructor.
                The constructor is automatically called when you instantiate a class using the <code>new</code> keyword, and the code inside the constructor is immediately executed on the instantiated object.
            </p>

            <p className="mb-4 leading-relaxed">
                Declaring the constructor is optional in PHP (though mandatory in some languages). The constructor is declared with the <code>__construct()</code> method, and it may receive arguments to initialize the object.
            </p>

            <div className="text-center mt-8">
                <Link href="oop02_preamble/constructors" className="text-xl font-semibold text-blue-600 underline">
                    Using the Constructor
                </Link>
            </div>
            <p className="mb-4 leading-relaxed">
                In this example, we add a constructor to our <code>Vehicule</code> class to instantiate a vehicle with a mandatory brand and some default characteristics:
            </p>

            <CodeBlock code={`class Vehicule {
public $_brand;
public $_maxSpeed;
protected $_currentSpeed;
private $_numPassengers;

public function __construct($brand, $vMax = 200, $numPassengers = 0) {
$this->_brand = $brand;
$this->_speedMax = $vMax;
$this->_currentSpeed = 0;
$this->_numPassengers = $numPassengers;
}

public function start() {
// Code to start the vehicle
}

// Other methods...
}`} />
            <p className="mb-4 leading-relaxed">
                Example of instantiating a vehicle with a brand, maximum speed, and number of passengers:
            </p>
            <CodeBlock code={`// Instantiating a vehicle
$myCompanyCar = new Vehicule("Lotus", 220, 1);`} />

            {/* Section 3: Naming Conventions */}
            <h2 className="text-2xl font-semibold mb-4">Naming Conventions</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Some best practices for naming in OOP:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Prefix private method and attribute names with an underscore (<code>_name</code>) to differentiate them easily.</li>
                <li>Place attributes and methods with private or protected access if you plan to extend the class.</li>
                <li>Use naming conventions for accessors and mutators (e.g., <code>getNameAttribut()</code> and <code>setNameAttribut()</code>).</li>
            </ul>
            {/* Section 4: Encapsulation */}
            <h2 className="text-2xl font-semibold mb-4">Encapsulation</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                The first principle of OOP is encapsulation, which refers to an object being a cohesive bundle of data (attributes) and methods that act on that data.
                <br />
                Attributes and methods are encapsulated within the class: variables are visible within the class, and to access them, you must use the class itself—direct access is not allowed.
            </p>

            {/* Section 5: Inheritance */}
            <h2 className="text-2xl font-semibold mb-4">Inheritance and Class Hierarchy</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                The second principle of OOP is inheritance. It allows one class to inherit attributes and methods from another, reducing redundancy.
                <br />
                Inheritance helps define relationships between general and specialized classes. For example, <code>dog</code>, <code>Chat</code>, and <code>Canari</code> can all inherit from the general <code>Animal</code> class.
            </p>
            <p className="mb-4 leading-relaxed">
                An example of inheritance: a dog is a specific kind of animal, so the <code>dog</code> class extends or inherits from the <code>Animal</code> class. The <code>Animal</code> class is a generalization of <code>dog</code>, <code>Chat</code>, and <code>Canari</code>.
            </p>
            <p className="mb-4 leading-relaxed">
                Each specialized class will inherit common attributes and methods from the parent class. Only the unique methods, like <code>ronronner()</code> for a cat, will be added in the subclass.
            </p>

            {/* Section 6: Polymorphism */}
            <h2 className="text-2xl font-semibold mb-4">Polymorphism</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Polymorphism allows different classes to define similar methods but with different behaviors.
                For instance, both a dog and a canary may have an <code>move()</code> method, but a dog will use its paws while a canary will fly.
            </p>
            <p className="mb-4 leading-relaxed">
                Polymorphism allows us to call the same method <code>move()</code> on both objects, but the implementation will differ depending on the class.
            </p>

            <h3 className="text-xl font-semibold mt-4">Mastering Polymorphism</h3>
            <p className="mb-4 leading-relaxed">
                If a method is already declared in the parent class (e.g., <code>Animal</code>), any method with the same name declared in a subclass will override the inherited behavior.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Object-Oriented Programming Exercises</h2>

            {/* Exercise 1: Creating a Character */}
            <h2 className="text-2xl font-semibold mb-4">Exercise 1: Creating a Character</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                In this exercise, you need to create a <code>Character</code> class with the following attributes:
                name, first name, age, and gender. You should encapsulate these attributes using private properties and use accessors to allow access to them.
            </p>

            <h3 className="text-xl font-semibold mt-4">Base code to create the Character class</h3>
            <CodeBlock code={`class Character {
private $_name;
private $_firstName;
private $_age;
private $_gender;

// Getters and setters for attributes
public function setName($name) {
$this->_name = $name;
}

public function getName() {
return $this->_name;
}

public function setfirstName($firstName) {
$this->_firstName = $firstName;
}

public function getfirstName() {
return $this->_firstName;
}

// Additional getters for age and gender...
}`} />

            <p className="mb-4 leading-relaxed">
                To test your class, you can use the following code in a <code>MonPerso.php</code> file:
            </p>

            <CodeBlock code={`$p = new Character();
$p->setName("Lebowski");
$p->setfirstName("Jeff");

echo ($p->getName());`} />

            {/* Exercise 2: Managing Employees */}
            <h2 className="text-2xl font-semibold mb-4">Exercise 2: Managing Employees</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                In this exercise, you need to create an <code>Employe</code> class to manage employee information for the *Gardenly* company.
            </p>

            <h3 className="text-xl font-semibold mt-4">Attributes of the Employe Class</h3>
            <ul className="list-disc pl-6 mb-4">
                <li>Name</li>
                <li>First Name</li>
                <li>Date of hiring in the company</li>
                <li>Position in the company</li>
                <li>Salary (gross annual salary in thousands of euros)</li>
                <li>Department where the employee works (Accounting, Sales, etc.)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">Class Methods</h3>
            <p className="mb-4 leading-relaxed">
                1. Write a method to determine how many years the employee has been with the company.
            </p>
            <p className="mb-4 leading-relaxed">
                2. Each year, the employee receives a bonus based on the annual salary (5% of the gross salary) and seniority (2% of the gross salary for each year of seniority). The bonus is paid on November 30th each year. Write methods to calculate the bonus and trigger a transfer order to the bank with the amount.
            </p>

            <h3 className="text-xl font-semibold mt-4">Testing the Employee Class</h3>
            <p className="mb-4 leading-relaxed">
                Create at least 5 employee objects with different information. In the main program, display the bonus amount for each employee.
            </p>

            {/* Further Exercises */}
            <h2 className="text-2xl font-semibold mb-4">Additional Features</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>Modify the <code>Magasins</code> class to manage store-specific information (name, address, postal code, city) and associate each employee with a store.</li>
                <li>Handle the meal plans in stores. Employees in stores without a restaurant will receive meal tickets.</li>
                <li>Handle vacation vouchers and Christmas gifts for employees' children, based on their seniority and the age of their children.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>

            <p className="mb-4 leading-relaxed">
                It's important to note that in this sequence, we have only covered the basics of Object-Oriented Programming (OOP).
                OOP indeed introduces much more advanced concepts such as cloning, iterators, abstract classes, interfaces, traits,
                design patterns, introspection, multiple inheritance in some languages, and more.
            </p>

            <p className="mb-4 leading-relaxed">
                To go further, you can read more about some advanced OOP concepts:
            </p>

            <ul className="list-disc pl-6 mb-4">
                <li>Cloning objects</li>
                <li>Using iterators to traverse collections</li>
                <li>Abstract classes and interfaces</li>
                <li>Traits for code reuse</li>
                <li>Design patterns and their applications</li>
                <li>Introspection to examine classes at runtime</li>
                <li>Multiple inheritance in certain languages</li>
            </ul>

            <p className="mb-4 leading-relaxed">
                These advanced topics will provide you with a deeper understanding of OOP and how it can be applied in more complex systems.
            </p>
        </div >
    );
};

export default OOPConceptsIntro;
