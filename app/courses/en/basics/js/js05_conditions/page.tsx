import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const ConditionalActionsPage: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">

            <h1 className="text-3xl font-bold text-center mb-10">JS 07: Conditional and Alternative Instructions</h1>

            {/* Introduction to Conditional Action */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2"> Conditional Action</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Conditional action is an elementary instruction or a sequence of instructions executed in sequence if the system's state allows it. The criterion(s) to meet in order to perform the action are expressed using a condition (predicate) that can be evaluated at the precise moment when the action should, if necessary, occur.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    During the program's execution, the processor is tasked with evaluating the condition. The evaluated condition then forms a statement (or proposition) that is either true or false.
                </p>
            </section>

            {/* Diagram of Conditional Action */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">Diagram</h3>
                <CodeBlock code={`If _predicate_ then
   Instruction 1
   Instruction 2
   ...
   Instruction N
End if`} />
            </section>

            {/* Examples of Conditional Action */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">Examples</h3>
                <CodeBlock code={`Example 1:
If Temperature > 38 then
   Write "The patient has a fever"
End if

Example 2:
If Temperature > 41 and Pressure > 25 then
   Write "The patient is losing patience"
End if

Example 3:
If not Patient then
   Write "Dismiss the idiot"
End if

Example 4:
If Temperature > 42 or (Pressure < 25 and Pulse > 180) then
   Write "Alert the family"
End if

Example 5:
If Temperature > 40 or Pressure >= 25 then
   Write "Hospitalize the patient"
End if

Example 6:
If Patient and Pulse = 0 then
   Write "Call the priest"
End if`} />
            </section >

            {/* Syntax Explanation */}
            < section className="mb-6" >
                <h3 className="text-xl font-semibold">JavaScript Syntax</h3>
                <p className="text-lg leading-relaxed mb-4">
                    The <code>if</code> statement allows you to execute a block of code if a specified condition is true. The basic syntax in JavaScript is as follows:
                </p>
                <CodeBlock code={`if (condition) {
   // Instruction 1
   // Instruction 2
   // ...
   // Instruction N
}`} />
            </section >

            {/* Simple Condition Example */}
            < section className="mb-6" >
                <h3 className="text-xl font-semibold">Simple Condition</h3>
                <p className="text-lg leading-relaxed mb-4">
                    The <code>if</code> expression is the most straightforward form of condition in JavaScript:
                </p>
                <CodeBlock code={`let response = "yes";

if (response == "yes") {
    console.log("Good answer!"); // Displays 'Good answer!' in the console
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    If there is only one instruction to execute, the curly braces can be omitted, but it's not recommended for code readability:
                </p>
                <CodeBlock code={`if (response == "yes")
   console.log("Good answer!");`} />
            </section >

            {/* Explanation of if-else */}
            < section className="mb-6" >
                <h3 className="text-xl font-semibold">Using if-else</h3>
                <p className="text-lg leading-relaxed mb-4">
                    You can also use an <code>else</code> clause to handle the case when the condition is false. The basic syntax is as follows:
                </p>
                <CodeBlock code={`if (condition) {
   // Execute if condition is true
} else {
   // Execute if condition is false
}`} />
            </section >

            {/* Switch Statement */}
            < section className="mb-6" >
                <h3 className="text-xl font-semibold">Switch Statement</h3>
                <p className="text-lg leading-relaxed mb-4">
                    The <code>switch</code> statement allows you to execute one of many code blocks based on different cases:
                </p>
                <CodeBlock code={`switch (expression) {
   case value1:
      // code block for value1;
      break;
   case value2:
      // code block for value2;
      break;
   default:
      // code block if no case is matched;
}`} />
            </section >

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Introduction to Logical Operators</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Logical operators <strong>AND (&&)</strong> and <strong>OR (||)</strong> are used to test combinations of conditions:
                </p>
            </section >

            {/* Using AND (&&) */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">Using AND (&&)</h3>
                <p className="text-lg leading-relaxed mb-4">
                    The <code>AND</code> operator allows you to test if both conditions are true:
                </p>
                <CodeBlock code={`// Condition with AND
if (age > 18 && permis == "Car") {
    console.log("You are over 18 AND have a car driving license, you can drive");
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    In this example, users with a motorcycle license can't drive, regardless of their age.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    <strong>Important:</strong> Notice the double equals sign (==) for comparison. This is the comparison operator, not to be confused with the single equals sign (=), which is the assignment operator.
                </p>
            </section >

            {/* Using OR (||) */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">Using OR (||)</h3>
                <p className="text-lg leading-relaxed mb-4">
                    The <code>OR</code> operator tests if at least one of the conditions is true:
                </p>
                <CodeBlock code={`// Condition with OR
if (age > 18 || permis == "Car") {
    console.log("You are over 18 OR have a car driving license, you can drive");
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    In this example, a user with any driving license (motorcycle, boat, etc.) can drive, as long as they are over 18 years old.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Be cautious when writing conditions with logical operators.
                </p>
            </section >

            {/* Other Logical Comparison Operators */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">Other Logical Comparison Operators</h3>
                <p className="text-lg leading-relaxed mb-4">
                    In the previous examples, the {`>`} operator was used to compare the age. This means the condition checks if the age is strictly greater than 18, excluding 18 itself. If you want to include 18, you can use the greater-than-or-equal-to operator {`(>=)`}.
                </p>
                <CodeBlock code={`if (age >= 18 || permis == "Car") {
    console.log("You are over 18 OR have a car driving license, you can drive");
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    Here are some additional comparison operators:
                </p>
                <table className="min-w-full p-4 rounded">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Sign</th>
                            <th className="px-4 py-2">Meaning</th>
                            <th className="px-4 py-2">Example</th>
                            <th className="px-4 py-2">Condition</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2">==</td>
                            <td className="px-4 py-2">Comparison</td>
                            <td className="px-4 py-2">x == 11</td>
                            <td className="px-4 py-2">Is x equal to 11?</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">&lt;</td>
                            <td className="px-4 py-2">Strictly less than</td>
                            <td className="px-4 py-2">x &lt; 11</td>
                            <td className="px-4 py-2">Is x strictly less than 11? Yes if x is up to 10, no if x is 11 or more.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">&lt;=</td>
                            <td className="px-4 py-2">Less than or equal to</td>
                            <td className="px-4 py-2">x &lt;= 11</td>
                            <td className="px-4 py-2">Is x less than or equal to 11? Yes if x is up to 11, no if x is more than 11.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">&gt;</td>
                            <td className="px-4 py-2">Strictly greater than</td>
                            <td className="px-4 py-2">x &gt; 11</td>
                            <td className="px-4 py-2">Is x strictly greater than 11? Yes if x is at least 12, no if x is 11 or less.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">&gt;=</td>
                            <td className="px-4 py-2">Greater than or equal to</td>
                            <td className="px-4 py-2">x &gt;= 11</td>
                            <td className="px-4 py-2">Is x greater than or equal to 11? Yes if x is at least 11, no if x is less than 11.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">!=</td>
                            <td className="px-4 py-2">Not equal to</td>
                            <td className="px-4 py-2">x != "toto"</td>
                            <td className="px-4 py-2">Is x different from the string "toto"?</td>
                        </tr>
                    </tbody>
                </table>
            </section >

            {/* Using Else and Else-If */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">Using Else and Else-If</h3>
                <p className="text-lg leading-relaxed mb-4">
                    You can simplify the code for handling two possible choices by using the <code>else</code> statement:
                </p>
                <CodeBlock code={`if (response == "yes") {
    console.log("Good answer!");
} else {
    console.log("Wrong answer!");
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    This can be further expanded to handle more cases with <code>else if</code>:
                </p>
                <CodeBlock code={`if (response == "A") {
    console.log("Good answer!");
} else if (response == "B") {
    console.log("Wrong answer!");
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    However, what if the response is neither "A" nor "B"? To handle such cases, it's advisable to use a final <code>else</code> block:
                </p>
                <CodeBlock code={`if (response == "A") {
    console.log("Good answer!");
} else if (response == "B") {
    console.log("Wrong answer!");
} else {
    console.log("Unknown answer.");
}`} />
            </section >

            {/* Using Switch*/}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">Switch Statement</h3>

                <p className="text-lg leading-relaxed mb-4">
                    The <code>switch</code> statement allows you to write a set of conditions in a different format. It's introduced by the <code>switch</code> keyword, which takes the variable to be tested as an argument. Then, within curly braces, the <code>case</code> keywords are used to specify the different values expected for that variable. For each case, you execute specific instructions. Every <code>case</code> block must end with the <code>break</code> statement to exit the switch once the condition is met. If the <code>break</code> is missing, all cases will be executed.
                </p>
            </section >

            {/* Example 1 */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">Example 1</h3>
                <p className="text-lg leading-relaxed mb-4">
                    Here's an example using a variable:
                </p>
                <CodeBlock code={`var variable = "1"; 

switch (variable) {   
  case "1" :
     console.log("Case 1");  
     break; 

  case "2" :
     console.log("Case 2");  
     break;

  case "3":
     console.log("Case 3");
     break; 
}`} />
            </section >

            {/* Example 2 */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">Example 2</h3>
                <p className="text-lg leading-relaxed mb-4">
                    Let's check a model:
                </p>
                <CodeBlock code={`var model = "Clio"; 

switch (model) {   
  case "208" :
     console.log("Model 208: Peugeot brand");  
     break; 

  case "Clio" :
     console.log("Model Clio: Renault brand"); 
     break;  

  case "C3" :
     console.log("Model C3: Citroën brand");
     break;
}`} />
            </section >

            {/* Using Default Case */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">Using Default Case</h3>
                <p className="text-lg leading-relaxed mb-4">
                    The <code>default</code> statement can be added optionally. It is placed at the end of the <code>switch</code> block, after all the <code>case</code> statements. Its role is similar to the <code>else</code> in an if statement, meaning that if none of the conditions are met in the cases (you haven't exited the switch due to a break), the instructions inside the <code>default</code> block will be executed:
                </p>
                <CodeBlock code={`var model = "A4";

switch (model) {   
  case "208" :
     console.log("Model 208: Peugeot brand");  
     break; 

  case "Clio" :
     console.log("Model Clio: Renault brand"); 
     break;  

  case "C3" :
     console.log("Model C3: Citroën brand");
     break;

  default: 
     console.log("Model "+model+": Unknown brand");
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    Notice that there's no <code>break</code> statement to end the <code>default</code> block.
                </p>
            </section >

            {/* Grouping Cases */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">Grouping Cases</h3>
                <p className="text-lg leading-relaxed mb-4">
                    It's possible to group cases together and apply the same instructions. In the example below, both the "Laguna" and "Clio" models belong to the Renault brand:
                </p>
                <CodeBlock code={`var model = "Clio";

switch (model) {   
  case "508" :
     console.log("Model 508: Peugeot brand");  
     break; 

  case "Clio" :   
  case "Laguna" :
     console.log("Model "+model+" : Renault brand"); 
     break;  

  case "C5" :
     console.log("Model C5: Citroën brand");
     break;

  default: 
     console.log("Model "+model+": Unknown brand");
}`} />
            </section >

            {/* Nested Conditions */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">Nested Conditions</h3>
                <p className="text-lg leading-relaxed mb-4">
                    A block of conditions can contain one or more other condition blocks (either <code>if</code> or <code>switch</code>):
                </p>
                <CodeBlock code={`var answer = "yes";

if (answer == "yes") {   
   console.log("Good answer!");
   score++; // Increase score by 1

   if (score == 20) {
       console.log("You won!");
   } // End of second if
} // End of first if`} />
            </section >

            {/* Ternary Condition */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold">Ternary Condition</h3>
                <p className="text-lg leading-relaxed mb-4">
                    There's another way to write conditions called the ternary condition. It's also known as the ternary operator or conditional operator.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    A ternary condition is written like this:
                </p>
                <CodeBlock code={`(condition) ? instruction1 : instruction2`} />
                <p className="text-lg leading-relaxed mb-4">
                    How it works:
                </p>
                <ul>
                    <li>If the condition inside the parentheses is true, <code>instruction1</code> is executed.</li>
                    <li>If the condition is false, <code>instruction2</code> is executed.</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    Example:
                </p>
                <CodeBlock code={`var age = 19;

(age >= 18) ? console.log("You are an adult") : console.log("You are a minor");`} />
                <p className="text-lg leading-relaxed mb-4">
                    While this form of writing is sometimes encountered, it is generally not recommended due to readability concerns.
                </p>
            </section >
            {/* Exercise 1 - Parity */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2"> Exercise 1 - Parity</h2 > <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Write a program that asks the user for a number, then tests if the number is even. The program should display whether the number is even or odd. You must use the modulo operator <code>%</code>, which gives the remainder of a division. <code>a % 2</code> gives the remainder of dividing <code>a</code> by 2. If the remainder is 0, <code>a</code> is divisible by 2.
                </p>
            </section >

            {/* Exercise 2 - Age */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2"> Exercise 2 - Age</h2 > <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Write a program that asks the user for their birth year. In response, your program should display the user's age and indicate whether the user is an adult or a minor.
                </p>
            </section >

            {/* Exercise 3 - Calculator */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2"> Exercise 3 - Calculator</h2 > <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Write a program that takes two integer numbers and then asks for an operator (+, -, *, or /).
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    If the user enters an invalid operator, the program should display an error message.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Otherwise, the program will perform the requested operation (handling division by 0 errors) and display the result.
                </p>
            </section >
        </div >
    );
};

export default ConditionalActionsPage;
