import { CodeBlock } from "@/components/CodeBlock/code-block";

export default function Variables() {
    return (
        <div className="px-5 py-8 font-sans">

            <h1 className="text-3xl font-bold text-center mb-10">Variables</h1>

            {/* Declaring Variables */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Declaring Variables</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Variables store data that can be modified during the execution of a program. The name of your variable must begin with a letter (ASCII alphabet) or the <code>_</code> sign, and can include letters, numbers, and the characters <code>_</code> and <code>$</code> (excluding spaces).
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    <strong>JavaScript is case-sensitive</strong>, meaning <code>myVar</code> and <code>MyVar</code> are considered different variables.
                </p>

                <h3 className="text-xl font-semibold">Example</h3>
                <CodeBlock code={`var num = 1;
var name = "John";

alert(num);
alert(name);`} />
                <p className="text-lg leading-relaxed mb-4">Test this example in your JavaScript console.</p>

                <h3 className="text-xl font-semibold">Constants</h3>
                <p className="text-lg leading-relaxed mb-4">
                    There is a way to declare variables whose values cannot be modified. These are called <code>const</code> and are declared using the <code>const</code> keyword.
                </p>
                <CodeBlock code={`const age = 37;
age = 27;  // This will throw an error

alert(age);`} />
                <p className="text-lg leading-relaxed mb-4">Test this example and check the messages in the console.</p>
            </section >

            {/* Data Types */}
            < section className="mb-6" >
                <h2 className="text-2xl font-semibold mb-2">Data Types</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    JavaScript uses 5 data types:
                </p>
                <ul className="list-decimal list-inside text-lg space-y-2">
                    <li><strong>Number:</strong> Any integer or floating-point number such as 22 or 3.1416.</li>
                    <li><strong>String:</strong> Any sequence of characters enclosed in quotes such as "text" or 'text'.</li>
                    <li><strong>Boolean:</strong> The values <code>true</code> or <code>false</code>.</li>
                    <li><strong>Object:</strong> Any reference to a native JavaScript object (e.g., Array, Date, String) or a DOM object.</li>
                    <li><strong>null:</strong> A special keyword representing the absence of a value.</li>
                    <li><strong>undefined:</strong> A special keyword returned when a variable is declared but not assigned a value.</li>
                </ul>

                <h3 className="text-xl font-semibold">Examples</h3>
                <CodeBlock code={`var myVar;              // the type of myVar is undefined
myVar = 324;            // type number
myVar = "Hello";        // type string
myVar = true;           // type boolean
myVar = new Array();    // type object`} />
                <p className="text-lg leading-relaxed mb-4">Test these examples in your console.</p>

                <h3 className="text-xl font-semibold">Checking the Type of a Variable</h3>
                <p className="text-lg leading-relaxed mb-4">
                    A variable's type can change after assignment. You can check the current type of a variable using the <code>typeof</code> operator:
                </p>
                <CodeBlock code={`console.log(typeof 42);           // Displays "number"
console.log(typeof 'text');       // Displays "string"
console.log(typeof true);         // Displays "boolean"

var myVar;
console.log(typeof myVar);        // Displays "undefined"`} />
                <p className="text-lg leading-relaxed mb-4">Test this example in your console.</p>
            </section >

        </div >
    );
}
