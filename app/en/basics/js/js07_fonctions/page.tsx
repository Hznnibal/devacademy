import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const JS09FunctionsPage: React.FC = () => {
  return (
    <div className="px-5 py-8 font-sans">

      <h1 className="text-3xl font-bold text-center mb-10">JS 09: Functions</h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Definition</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          A function is a group of lines of code (a "subprogram") designed to perform one or more tasks, which can be reused multiple times (code factorization).
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Using functions greatly improves the readability of your script.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          In JavaScript, like in all other languages, there are two types of functions:
        </p>
        <ul className="list-disc pl-6">
          <li>
            JavaScript's built-in functions (also called native functions), like the <code>alert()</code> method associated with the <code>window</code> object.
          </li>
          <li>
            Functions that you write for the needs of your script, which we cover in this course.
          </li>
        </ul>
      </section>

      {/* Declaring Functions */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Declaring Functions</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          To declare or define a function, we use the <code>function</code> statement. The syntax for declaring a function is as follows:
        </p>
        <CodeBlock code={`function function_name(arguments) {\n  ... code instructions ...\n}`} />
        <p className="text-lg leading-relaxed mb-4">
          The function's name follows the same rules as variable names (indefinite number of characters, starts with a letter, can include numbers, etc.). JavaScript is case-sensitive, so <code>mafonction()</code> is not the same as <code>maFonction()</code>. Additionally, all function names in a script must be unique.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The argument section is optional, but in that case, the parentheses must remain. This is how JavaScript distinguishes between variables and functions.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Make sure to always close the braces, as leaving them open will result in an error. Get into the habit of closing the braces immediately after opening them and writing your code inside them.
        </p>
      </section>

      {/* Calling a Function */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Calling a Function</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          To call a function, you simply use the function's name followed by parentheses. For example: <code>nom_de_la_fonction()</code>.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Make sure the function is defined before it is called (since the interpreter reads your script from top to bottom).
        </p>
      </section>

      {/* Passing a Value to a Function */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Passing a Value to a Function</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          You can pass values (also called parameters or arguments) to functions. The passed value is used by the function.
        </p>
        <CodeBlock code={`function example(text) {\n  alert(text);\n}\n\nexample("Hello everyone");`} />
        <p className="text-lg leading-relaxed mb-4">
          In this example, the function <code>example()</code> is called with the argument "Hello everyone", and the message is displayed via the <code>alert()</code> method.
        </p>
      </section>


      {/* Arguments multiples */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Multiple Arguments</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          You can pass one or more arguments to a function, separated by commas. The types of arguments can differ.
        </p>
        <CodeBlock code={`function myFunction(arg1, arg2, arg3) {
// ... code instructions ...
}
myFunction(arg1, arg2, arg3);`} />

        <p className="text-lg leading-relaxed mb-4">
          In this example, three arguments are passed to the function <code>myFunction()</code>.
        </p>
      </section>

      {/* Arguments facultatifs et affectation par défaut */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Optional Arguments and Default Assignment</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          In JavaScript, all function arguments are optional.
        </p>
        <CodeBlock code={`function myFunction(required, optional) {
console.log('Argument 1: ' + required);
console.log('Argument 2 (optional): ' + optional);
}
myFunction('Paul'); // 1st call
myFunction('Paul', 'Anne'); // 2nd call`} />

        <p className="text-lg leading-relaxed mb-4">
          In the example above, the second argument is optional. If not passed, it will be <code>undefined</code>. You can provide a default value to avoid errors:
        </p>
        <CodeBlock code={`function myFunction(required, optional) {
if (typeof optional === 'undefined') {
optional = 'Anne';
}
console.log('Argument 1: ' + required);
console.log('Argument 2 (optional): ' + optional);
}
myFunction('Paul'); // 1st call
myFunction('Paul', 'Anne'); // 2nd call`} />

        <p className="text-lg leading-relaxed mb-4">
          In this modified version, if the second argument is not provided, it defaults to 'Anne'.
        </p>
      </section>

      {/* Retourner une valeur */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Returning a Value</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          The principle is simple (the practice can sometimes be more complex). To return a result, just write the <code>return</code> statement followed by the expression to return. Note that you don't need to wrap the expression in parentheses.
        </p>
        <CodeBlock code={`function square(number) {
var result = number * number;
return result;}`} />
        <p className="text-lg leading-relaxed mb-4">
          In this case, you call the function and assign it to a variable that will store the result returned by the function:
        </p>
        <CodeBlock code={`var result2 = square(5); // Returns 25`} />

        <p className="text-lg leading-relaxed mb-4">
          The variable storing the return does not need to have the same name as the variable following the <code>return</code> statement. The <code>return</code> statement is optional, and you can have multiple <code>return</code> statements within the same function, for example, in a conditional block where each case returns something.
        </p>
      </section>

      {/* Portée des variables */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Variable Scope</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          With functions, the correct use of local and global variables becomes very important. A variable declared within a function using the <code>var</code> keyword will have a scope limited to that function. It cannot be used elsewhere in the script: it is a local variable.
        </p>
        <CodeBlock code={`function square(number) {
var result = number * number;
}`} />

        <p className="text-lg leading-relaxed mb-4">
          However, if the variable is declared contextually (without the <code>var</code> keyword) within a function, its scope becomes global once the function is executed, making the <code>return</code> statement optional:
        </p>
        <CodeBlock code={`function cube(number) {
result = number * number * number;
}`} />

        <p className="text-lg leading-relaxed mb-4">
          The variable <code>result</code> here is a global variable because it is not declared with <code>var</code>.
        </p>
      </section>


      {/* Expressions de fonctions */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Function Expressions</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          A function can be declared with a name preceded by the <code>var</code> keyword. This is called a function expression. You can then call the function using its name:
        </p>
        <CodeBlock code={`var square = function(number) {
var result = number * number;
};`} />
        <p className="text-lg leading-relaxed mb-4">
          In this case, the function <code>square()</code> is stored in the variable <code>square</code>. This syntax is often used for recursion or when passing a function as an argument to another function.
        </p>
      </section>

      {/* Récursivité */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Recursion</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          A function can refer to itself and call itself. A function that calls itself is called a recursive function. Recursion is similar to a loop in some ways: both execute the same code multiple times, and both require a stopping condition to prevent infinite loops or recursions.
        </p>
        <CodeBlock code={`function boucle(x) {
if (x >= 10) 
{
      return;
}
console.log("x : " + x);
boucle(x + 1); // recursive call
}
boucle(0); // initial function call
`} />

        <p className="text-lg leading-relaxed mb-4">
          This code is an example of recursion, where the function calls itself until a stopping condition is met.
        </p>
      </section>


      {/* Exercice 1 */} {/* TODO Fix this ! */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> Exercise 1</h2 > <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          Create the following two functions:
        </p>
        <ul className="list-disc pl-6">
          <li><code>produit(x, y)</code> which returns the product of the two variables <code>x</code> and <code>y</code> passed as parameters.</li>
          <li><code>afficheImg(image)</code> which displays the image passed as a parameter (the image path).</li>
        </ul>
        <p className="text-lg leading-relaxed mb-4">
          Create the corresponding HTML page and use the <code>innerHTML</code> property to display the image.
        </p>
        <CodeBlock code={`img src="img_function_pap.jpg" ;`} />
      </section >

      {/* Exercice 2 */} {/* TODO Fix this ! */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> Exercise 2 - String Token</h2 > <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          Design the <code>strtok()</code> function, which takes three parameters <code>str1</code>, <code>str2</code>, and <code>n</code> as input and returns a string: <code>str1</code> is composed of a list of words separated by the <code>str2</code> character. <code>strtok()</code> is used to extract the <code>n</code>-th word from <code>str1</code>.
        </p>
        <CodeBlock code={`var str1 = "john ;doe ;new york ;10001";
console.log(strtok(str1, ";", 2)); // new york;`} />
        <p className="text-lg leading-relaxed mb-4">
          Use the <code>split()</code> method to achieve this.
        </p>
      </section >
    </div >
  );
};

export default JS09FunctionsPage;
