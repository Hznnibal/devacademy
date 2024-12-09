import React from 'react';

const JS09FunctionsPage: React.FC = () => {
  return (
    <div className="px-6 py-8 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-10">JS 09: Functions</h1>

      {/* Définition */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Definition</h2>
        <p className="text-lg leading-relaxed">
          A function is a group of lines of code (a "subprogram") designed to perform one or more tasks, which can be reused multiple times (code factorization).
        </p>
        <p className="text-lg leading-relaxed">
          Using functions greatly improves the readability of your script.
        </p>
        <p className="text-lg leading-relaxed">
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

      {/* Déclaration des fonctions */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Declaring Functions</h2>
        <p className="text-lg leading-relaxed">
          To declare or define a function, we use the <code>function</code> statement. The syntax for declaring a function is as follows:
        </p>
        <pre className="bg-gray-100 p-4">
          function nom_de_la_fonction(arguments) &#123;<br />
          &#160;&#160;... code des instructions ...<br />
          &#125;
        </pre>
        <p className="text-lg leading-relaxed">
          The function's name follows the same rules as variable names (indefinite number of characters, starts with a letter, can include numbers, etc.). JavaScript is case-sensitive, so <code>mafonction()</code> is not the same as <code>maFonction()</code>. Additionally, all function names in a script must be unique.
        </p>
        <p className="text-lg leading-relaxed">
          The argument section is optional, but in that case, the parentheses must remain. This is how JavaScript distinguishes between variables and functions.
        </p>
        <p className="text-lg leading-relaxed">
          Make sure to always close the braces, as leaving them open will result in an error. Get into the habit of closing the braces immediately after opening them and writing your code inside them.
        </p>
      </section>

      {/* Appel d'une fonction */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Calling a Function</h2>
        <p className="text-lg leading-relaxed">
          To call a function, you simply use the function's name followed by parentheses. For example: <code>nom_de_la_fonction()</code>.
        </p>
        <p className="text-lg leading-relaxed">
          Make sure the function is defined before it is called (since the interpreter reads your script from top to bottom).
        </p>
      </section>

      {/* Passer une valeur à une fonction */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Passing a Value to a Function</h2>
        <p className="text-lg leading-relaxed">
          You can pass values (also called parameters or arguments) to functions. The passed value is used by the function.
        </p>
        <pre className="bg-gray-100 p-4">
          function exemple(texte) &#123;<br />
          &#160;&#160;alert(texte);<br />
          &#125;<br />
          <br />
          exemple("Salut à tous");
        </pre>
        <p className="text-lg leading-relaxed">
          In this example, the function <code>exemple()</code> is called with the argument "Salut à tous", and the message is displayed via the <code>alert()</code> method.
        </p>
      </section>

      {/* Arguments multiples */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Multiple Arguments</h2>
        <p className="text-lg leading-relaxed">
          You can pass one or more arguments to a function, separated by commas. The types of arguments can differ.
        </p>
        <pre className="bg-gray-100 p-4">
          function maFonction(arg1, arg2, arg3) &#123;<br />
          &#160;&#160;... code des instructions ...<br />
          &#125;<br />
          <br />
          maFonction(arg1, arg2, arg3);
        </pre>
        <p className="text-lg leading-relaxed">
          In this example, three arguments are passed to the function <code>maFonction()</code>.
        </p>
      </section>

      {/* Arguments facultatifs et affectation par défaut */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Optional Arguments and Default Assignment</h2>
        <p className="text-lg leading-relaxed">
          In JavaScript, all function arguments are optional.
        </p>
        <pre className="bg-gray-100 p-4">
          function maFonction(obligatoire, facultatif) &#123;<br />
          &#160;&#160;console.log('Argument 1 : '+obligatoire);<br />
          &#160;&#160;console.log('Argument 2 (facultatif) : '+facultatif);<br />
          &#125;<br />
          <br />
          maFonction('Paul'); // 1er appel<br />
          maFonction('Paul', 'Anne'); // 2ème appel
        </pre>
        <p className="text-lg leading-relaxed">
          In the example above, the second argument is optional. If not passed, it will be <code>undefined</code>. You can provide a default value to avoid errors:
        </p>
        <pre className="bg-gray-100 p-4">
          function maFonction(obligatoire, facultatif) &#123;<br />
          &#160;&#160;if (typeof facultatif == 'undefined') &#123;<br />
          &#160;&#160;&#160;&#160;facultatif = 'Anne';<br />
          &#160;&#160;&#125;<br />
          &#160;&#160;console.log('Argument 1 : '+obligatoire);<br />
          &#160;&#160;console.log('Argument 2 (facultatif) : '+facultatif);<br />
          &#125;<br />
          <br />
          maFonction('Paul'); // 1er appel<br />
          maFonction('Paul', 'Anne'); // 2ème appel
        </pre>
        <p className="text-lg leading-relaxed">
          In this modified version, if the second argument is not provided, it defaults to 'Anne'.
        </p>
      </section>
      {/* Retourner une valeur */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Returning a Value</h2>
        <p className="text-lg leading-relaxed">
          The principle is simple (the practice can sometimes be more complex). To return a result, just write the <code>return</code> statement followed by the expression to return. Note that you don't need to wrap the expression in parentheses.
        </p>
        <pre className="bg-gray-100 p-4">
          function carre(nombre) &#123;<br />
          &#160;&#160;var resultat = nombre*nombre;<br />
          &#160;&#160;return resultat;<br />
          &#125;
        </pre>
        <p className="text-lg leading-relaxed">
          In this case, you call the function and assign it to a variable that will store the result returned by the function:
        </p>
        <pre className="bg-gray-100 p-4">
          var resultat2 = carre(5); // Returns 25
        </pre>
        <p className="text-lg leading-relaxed">
          The variable storing the return does not need to have the same name as the variable following the <code>return</code> statement. The <code>return</code> statement is optional, and you can have multiple <code>return</code> statements within the same function, for example, in a conditional block where each case returns something.
        </p>
      </section>

      {/* Portée des variables */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Variable Scope</h2>
        <p className="text-lg leading-relaxed">
          With functions, the correct use of local and global variables becomes very important. A variable declared within a function using the <code>var</code> keyword will have a scope limited to that function. It cannot be used elsewhere in the script: it is a local variable.
        </p>
        <pre className="bg-gray-100 p-4">
          function carre(nombre) &#123;<br />
          &#160;&#160;var resultat = nombre*nombre;<br />
          &#125;
        </pre>
        <p className="text-lg leading-relaxed">
          However, if the variable is declared contextually (without the <code>var</code> keyword) within a function, its scope becomes global once the function is executed, making the <code>return</code> statement optional:
        </p>
        <pre className="bg-gray-100 p-4">
          function cube(nombre) &#123;<br />
          &#160;&#160;resultat = nombre*nombre*nombre;<br />
          &#125;
        </pre>
        <p className="text-lg leading-relaxed">
          The variable <code>resultat</code> here is a global variable because it is not declared with <code>var</code>.
        </p>
      </section>

      {/* Expressions de fonctions */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Function Expressions</h2>
        <p className="text-lg leading-relaxed">
          A function can be declared with a name preceded by the <code>var</code> keyword. This is called a function expression. You can then call the function using its name:
        </p>
        <pre className="bg-gray-100 p-4">
          var carre = function(nombre) &#123;<br />
          &#160;&#160;var resultat = nombre*nombre;<br />
          &#125;
        </pre>
        <p className="text-lg leading-relaxed">
          In this case, the function <code>carre()</code> is stored in the variable <code>carre</code>. This syntax is often used for recursion or when passing a function as an argument to another function.
        </p>
      </section>

      {/* Récursivité */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Recursion</h2>
        <p className="text-lg leading-relaxed">
          A function can refer to itself and call itself. A function that calls itself is called a recursive function. Recursion is similar to a loop in some ways: both execute the same code multiple times, and both require a stopping condition to prevent infinite loops or recursions.
        </p>
        <pre className="bg-gray-100 p-4">
          function boucle(x) &#123;<br />
          &#160;&#160;if (x >= 10) &#123;<br />
          &#160;&#160;&#160;&#160;return;<br />
          &#160;&#160;&#125;<br />
          &#160;&#160;console.log("x : "+x);<br />
          &#160;&#160;boucle(x + 1); // recursive call<br />
          &#125;<br />
          boucle(0); // initial function call
        </pre>
        <p className="text-lg leading-relaxed">
          This code is an example of recursion, where the function calls itself until a stopping condition is met.
        </p>
      </section>

      {/* Exercice 1 */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Exercise 1</h2>
        <p className="text-lg leading-relaxed">
          Create the following two functions:
        </p>
        <ul className="list-disc pl-6">
          <li><code>produit(x, y)</code> which returns the product of the two variables <code>x</code> and <code>y</code> passed as parameters.</li>
          <li><code>afficheImg(image)</code> which displays the image passed as a parameter (the image path).</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Create the corresponding HTML page and use the <code>innerHTML</code> property to display the image.
        </p>
        <pre className="bg-gray-100 p-4">
          &lt;img src="img_function_pap.JPG" /&gt;
        </pre>
      </section>

      {/* Exercice 2 */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Exercise 2 - String Token</h2>
        <p className="text-lg leading-relaxed">
          Design the <code>strtok()</code> function, which takes three parameters <code>str1</code>, <code>str2</code>, and <code>n</code> as input and returns a string: <code>str1</code> is composed of a list of words separated by the <code>str2</code> character. <code>strtok()</code> is used to extract the <code>n</code>-th word from <code>str1</code>.
        </p>
        <pre className="bg-gray-100 p-4">
          var str1 = "robert ;dupont ;amiens ;80000";
          console.log(strtok(str1, ";", 3)); // amiens
        </pre>
        <p className="text-lg leading-relaxed">
          Use the <code>split()</code> method to achieve this.
        </p>
      </section>
    </div>
  );
};

export default JS09FunctionsPage;
