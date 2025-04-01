import { CodeBlock } from "@/components/CodeBlock/code-block";
import React from "react";

const LoopsPage: React.FC = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold mb-6 text-center">Loops in JavaScript</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">The for Loop</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg mt-2">
                    The <code>for</code> loop is similar to <code>while</code>, but more compact in syntax.
                </p>
                <CodeBlock code={`for (let a = 1; a < 10; a++) {
  console.log(a);
}`} />

                <p className="text-lg leading-relaxed mb-4">This loop prints numbers from 1 to 9.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">The foreach Loop</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg mt-2">
                    The <code>foreach</code> loop is used to iterate through an array.
                </p>
                <CodeBlock code={`const array = [1, 2, 3, 4];
array.forEach(element => {
  console.log(element);
});`} />

                <p className="text-lg leading-relaxed mb-4">This loop iterates over each element in the array and prints it.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">The while Loop</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg mt-2">
                    The <code>while</code> loop executes as long as the condition is true.
                </p>
                <CodeBlock code={`let a = 1;
while (a < 10) {
  console.log(a);
  a++;
}`} />

                <p className="text-lg leading-relaxed mb-4">This loop prints numbers from 1 to 9 as well.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">The do ... while Loop</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg mt-2">
                    The <code>do ... while</code> loop is similar to <code>while</code>, but the condition is checked after the loop executes.
                </p>
                <CodeBlock code={`let a = 0;
do {
  console.log(a);
} while (a > 0);`} />

                <p className="text-lg leading-relaxed mb-4">This loop would not execute since the condition is false at the start.</p>
                <p className="text-lg leading-relaxed mb-4">
                    Another use of the <code>do ... while</code> loop is creating infinite loops:
                </p>
                <CodeBlock code={`let a = 0;
do {
  if (a < 5) {
    console.log("a is less than 5");
    break;
  }
} while (true);`} />

                <p className="text-lg leading-relaxed mb-4">This loop executes until the condition breaks the loop.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Exercises</h2>
                <div className="border-b border-gray-300 mb-6" />

                <ul className="list-disc pl-5 mt-4">
                    <li>
                        Write a script that displays all odd numbers between 0 and 150 in ascending order: 1, 3, 5, 7...
                    </li>
                    <li>
                        Write a program that prints the sentence "I need to backup my files regularly" 500 times.
                    </li>
                    <li>
                        Write a script that displays the multiplication table for numbers 1 to 9 in an HTML table.
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default LoopsPage;
