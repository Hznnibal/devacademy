import React from 'react';

const JS08LoopsPage: React.FC = () => {
  return (
    <div className="px-6 py-8 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-10">JS 08: Loops</h1>

      {/* Necessity of Repetitive Structures */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">The Necessity of Repetitive Structures</h2>
        <p className="text-lg leading-relaxed">
          Iteration, or repetitive structures (also known as loops), allow you to perform an action by repeating a basic or composite action until a condition is met, or stop when a given condition is satisfied.
        </p>
        <p className="text-lg leading-relaxed">
          There are several types of repetitive structures, each serving a different purpose.
        </p>
      </section>

      {/* Example - Multiplication Table by 5 */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Example: Multiplication Table by 5</h2>
        <p className="text-lg leading-relaxed">
          Using the instructions defined up to this point, the only way to write the complete table is shown in the following program:
        </p>
        <pre className="bg-gray-100 p-4">
          console.log("Multiplication table by 5");<br/>
          console.log("=============================");<br/>
          console.log("5 * 0 = 0");<br/>
          console.log("5 * 1 = 5");<br/>
          console.log("5 * 2 = 10");<br/>
          console.log("5 * 3 = 15");<br/>
          console.log("5 * 4 = 20");<br/>
          console.log("5 * 5 = 25");<br/>
          console.log("5 * 6 = 30");<br/>
          console.log("5 * 7 = 35");<br/>
          console.log("5 * 8 = 40");<br/>
          console.log("5 * 9 = 45");<br/>
          console.log("5 * 10 = 50");
        </pre>
        <p className="text-lg leading-relaxed">
          Looking at this program, we quickly realize that the same basic action is repeated several times. We replace the number 5 with a variable, such as <code>i</code>.
        </p>
        <p className="text-lg leading-relaxed">
          To generalize, we can write the following instruction:
        </p>
        <pre className="bg-gray-100 p-4">
          console.log(i+" * 0 = 0");
        </pre>
        <p className="text-lg leading-relaxed">
          This repeats for a value of <code>i</code> ranging from 1 to 10, and the stopping condition can be expressed as:<br/>
          <code>For i ranging from 1 to 10</code><br/>
          or:<br/>
          <code>While i <= 10</code><br/>
          or:<br/>
          <code>Until i > 10</code>
        </p>
      </section>

      {/* Loops with for */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Loops with <code>for</code></h2>
        <p className="text-lg leading-relaxed">
          The <code>for</code> statement allows you to execute a block of instructions a certain number of times depending on a specific criterion. Its syntax is:
        </p>
        <pre className="bg-gray-100 p-4">
          for (initial value; condition; update) <br/>
          &#123;<br/>
          instructions;<br/>
          &#125;
        </pre>
        <p className="text-lg leading-relaxed">
          - <code>initial value</code> represents the initialization of the iterators;<br/>
          - <code>condition</code> represents the iteration condition;<br/>
          - <code>update</code> represents the update of the iterators.
        </p>
        <p className="text-lg leading-relaxed">
          Let’s revisit the multiplication table example:
        </p>
        <pre className="bg-gray-100 p-4">
          console.log("Multiplication table by 5");<br/>
          console.log("=============================");<br/>
          <br/>
          for (i = 0; i <= 10; i++) &#123;<br/>
          &#160;&#160;result = 5 * i;<br/>
          <br/>
          &#160;&#160;console.log("5 * "+i+" = "+result);<br/>
          &#125;<br/>
          <br/>
          // Instructions executed after the loop (i equals 10)<br/>
          console.log("End of loop");
        </pre>
        <p className="text-lg leading-relaxed">
          Execution breakdown:
        </p>
        <ul className="list-disc pl-8">
          <li>On the first execution of the <code>for</code> statement, <code>i</code> is initialized to 0.</li>
          <li>Each time, the iteration condition (<code>i <= 10</code>) is evaluated. If <code>i > 10</code>, the loop stops, and the instructions following the closing brace are executed.</li>
          <li>When the iteration condition is true, the instructions inside the braces are executed.</li>
          <li>On the closing brace, <code>i</code> is incremented by 1.</li>
          <li>Return to the <code>for</code> statement for the next pass, this time with <code>i</code> equal to 1.</li>
        </ul>
      </section>

      {/* Loops with while */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Loops with <code>while</code></h2>
        <p className="text-lg leading-relaxed">
          The <code>while</code> statement allows you to execute a block of instructions a certain number of times.
        </p>
        <pre className="bg-gray-100 p-4">
          while (condition is true) <br/>
          &#123;<br/>
          &#160;&#160;// instructions<br/>
          &#125;
        </pre>
        <p className="text-lg leading-relaxed">
          The <code>condition</code> is a boolean expression. The instructions will be executed repeatedly as long as the condition evaluates to true.
        </p>
        <p className="text-lg leading-relaxed">
          The condition must be evaluated on the first execution of the <code>while</code> statement, which requires the initialization of the variables involved in the condition.
        </p>
        <p className="text-lg leading-relaxed">
          If the condition evaluates to false on the first execution of <code>while</code>, the instructions will not be executed.
        </p>
        <p className="text-lg leading-relaxed">
          Example:
        </p>
        <pre className="bg-gray-100 p-4">
          var i = 0;<br/>
          console.log("Multiplication table by 5");<br/>
          console.log("=============================");<br/>
          <br/>
          while (i <= 10) &#123;<br/>
          &#160;&#160;result = 5 * i;<br/>
          &#160;&#160;console.log("The result of 5 x "+i+" is: "+result);<br/>
          &#160;&#160;i++;<br/>
          &#125;<br/>
          <br/>
          console.log("End of loop");
        </pre>
        <p className="text-lg leading-relaxed">
          Execution breakdown:
        </p>
        <ul className="list-disc pl-8">
          <li>Each time the <code>while</code> statement is executed, the iteration condition (<code>i <= 10</code>) is evaluated.</li>
          <li>If <code>i > 10</code>, the loop stops, and the instructions following the closing brace are executed.</li>
          <li>When the condition is true, the instructions inside the braces are executed.</li>
          <li>On the closing brace, the <code>while</code> statement is re-evaluated.</li>
        </ul>
      </section>

      {/* Warnings and While Loops */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Warnings</h2>
        <p className="text-lg leading-relaxed">
          The <code>while</code> statement requires careful attention. Its full syntax is:
        </p>
        <pre className="bg-gray-100 p-4">
          initialization<br/>
          while (condition) &#123;<br/>
          &#160;&#160;// Instructions<br/>
          &#160;&#160;// Update<br/>
          &#125;
        </pre>
        <p className="text-lg leading-relaxed">
          In our example:
        </p>
        <pre className="bg-gray-100 p-4">
          i = 1;<br/>
          while (i <= 10) &#123;<br/>
          &#160;&#160;console.log("The result of 5 x "+i+" is: "+result);<br/>
          &#160;&#160;i++;<br/>
          &#125;
        </pre>
        <p className="text-lg leading-relaxed">
          Be careful not to forget the initialization and update steps, as failing to do so would cause a variable not initialized error.
        </p>
        <p className="text-lg leading-relaxed">
          A major issue with the <code>while</code> loop is the potential for an infinite loop, which can cause the browser to crash if the condition remains true forever.
        </p>
      </section>

      {/* Interest of while */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Benefits of <code>while</code></h2>
        <p className="text-lg leading-relaxed">
          The <code>while</code> statement, compared to <code>for</code>, is useful for more complex iteration conditions, such as:
        </p>
        <pre className="bg-gray-100 p-4">
          while (i <= 10 && j != 2) &#123; ... &#125;<br/>
          while (!found) &#123; ... &#125; // where 'found' is a boolean
        </pre>
      </section>

      {/* The break statement */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">The <code>break</code> Statement</h2>
        <p className="text-lg leading-relaxed">
          The <code>break</code> statement allows you to prematurely exit a <code>for</code> or <code>while</code> loop.
        </p>
        <p className="text-lg leading-relaxed">
          To illustrate this, let's take the following example:
        </p>
        <pre className="bg-gray-100 p-4">
          var cpt = 1;<br/>
          while (cpt &lt; 5) &#123;<br/>
          &#160;&#160;if (cpt == 4) &#123;<br/>
          &#160;&#160;&#160;&#160;break;<br/>
          &#160;&#160;&#125;<br/>
          <br/>
          &#160;&#160;console.log("line: "+cpt);<br/>
          &#160;&#160;cpt++;<br/>
          &#125;<br/>
          <br/>
          console.log("end of loop");
        </pre>
        <p className="text-lg leading-relaxed">
          The behavior is similar to the previous example, except when the counter equals 4. At that point, the <code>break</code> statement exits the loop, and the message "end of loop" is displayed.
        </p>
        <p className="text-lg leading-relaxed">
          The output will be:
        </p>
        <pre className="bg-gray-100 p-4">
          line: 1<br/>
          line: 2<br/>
          line: 3<br/>
          end of loop
        </pre>
      </section>

      {/* The continue statement */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">The <code>continue</code> Statement</h2>
        <p className="text-lg leading-relaxed">
          The <code>continue</code> statement allows you to skip an iteration of a <code>for</code> or <code>while</code> loop and proceed to the next iteration (without exiting the loop like <code>break</code> does).
        </p>
        <p className="text-lg leading-relaxed">
          Let’s take the following example:
        </p>
        <pre className="bg-gray-100 p-4">
          var cpt = 1;<br/>
          while (cpt &lt; 5) &#123;<br/>
          &#160;&#160;if (cpt == 3) &#123;<br/>
          &#160;&#160;&#160;&#160;cpt++;<br/>
          &#160;&#160;&#160;&#160;continue;<br/>
          &#160;&#160;&#125;<br/>
          <br/>
          &#160;&#160;console.log("line: "+cpt);<br/>
          &#160;&#160;cpt++;<br/>
          &#125;<br/>
          <br/>
          console.log("end of loop");
        </pre>
        <p className="text-lg leading-relaxed">
          In this case, the loop starts as usual. When the counter equals 3, the <code>continue</code> statement skips the <code>console.log()</code> instruction (the line "line: 3" is not displayed) and moves to the next iteration.
        </p>
        <p className="text-lg leading-relaxed">
          Note that we had to add <code>cpt++</code> before <code>continue</code> to avoid an infinite loop and prevent the browser from crashing (because <code>cpt</code> would stay at 3).
        </p>
        <p className="text-lg leading-relaxed">
          The output will be:
        </p>
        <pre className="bg-gray-100 p-4">
          line: 1<br/>
          line: 2<br/>
          line: 4<br/>
          end of loop
        </pre>
      </section>

      {/* do...while loops */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Loops with <code>do...while</code></h2>
        <p className="text-lg leading-relaxed">
          The <code>do...while</code> loop executes the instructions until a condition is no longer satisfied. The condition is checked after the instruction is executed, meaning the instructions are always executed at least once.
        </p>
        <pre className="bg-gray-100 p-4">
          do &#123;<br/>
          &#160;&#160;instructions;<br/>
          &#125; while (condition);
        </pre>
        <p className="text-lg leading-relaxed">
          The condition is a boolean expression (type <code>bool</code>). The instructions will be executed as long as the condition evaluates to <code>true</code>.
        </p>
        <p className="text-lg leading-relaxed">
          The <code>do</code> block is always followed by a <code>while</code> statement. It’s similar to the <code>while</code> loop, but the condition is evaluated at the end of the loop, not at the start. This means that a <code>do</code> loop will always execute at least once.
        </p>
        <p className="text-lg leading-relaxed">
          Here's an example with the multiplication table:
        </p>
        <pre className="bg-gray-100 p-4">
          var i = 0;<br/>
          console.log("Multiplication table by 5");<br/>
          console.log("=============================");<br/>
          <br/>
          do &#123;<br/>
          &#160;&#160;result = 5 * i;<br/>
          &#160;&#160;console.log("5 * "+i+" = "+result);<br/>
          &#160;&#160;i++;<br/>
          &#125; while (i &lt;= 10);<br/>
          <br/>
          console.log("end of loop");
        </pre>
        <p className="text-lg leading-relaxed">
          The output will be:
        </p>
        <pre className="bg-gray-100 p-4">
          5 * 0 = 0<br/>
          5 * 1 = 5<br/>
          5 * 2 = 10<br/>
          5 * 3 = 15<br/>
          5 * 4 = 20<br/>
          5 * 5 = 25<br/>
          5 * 6 = 30<br/>
          5 * 7 = 35<br/>
          5 * 8 = 40<br/>
          5 * 9 = 45<br/>
          5 * 10 = 50<br/>
          end of loop
        </pre>
      </section>

      {/* Boucles avec for...in */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Loops with <code>for...in</code></h2>
        <p className="text-lg leading-relaxed">
          The <code>for...in</code> loop is specific to JavaScript, unlike <code>for</code>, <code>while</code>, or <code>do...while</code>, which you may encounter in other languages.
        </p>
        <p className="text-lg leading-relaxed">
          The <code>for...in</code> expression simplifies the usage of a <code>for</code> loop, particularly for retrieving elements from an array:
        </p>
        <pre className="bg-gray-100 p-4">
          var tableau = ["Paul", "Pierre", "Anne", "Sophie"];<br/>
          <br/>
          for (var i in tableau) &#123;<br/>
          &#160;&#160;console.log(tableau[i]);<br/>
          &#125;
        </pre>
        <p className="text-lg leading-relaxed">
          This loop iterates through the elements of the array <code>tableau</code>, printing each element to the console.
        </p>
      </section>

      {/* Exercises */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Exercises</h2>
        
        {/* Exercise 1 */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Exercise 1 - Input</h3>
          <p className="text-lg leading-relaxed">
            Create an HTML page that asks the user for a first name. The page should continue asking for first names until the user leaves the field empty. Finally, the page displays the number of first names and the names entered in the console.
          </p>
          <p className="text-lg leading-relaxed">
            Example result (output shown in an image):
          </p>
          <img className="w-full" src="images/js_07_exercice_1.jpg" alt="Exercise 1 result" />
        </div>

        {/* Exercise 2 */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Exercise 2 - Integers Less than N</h3>
          <p className="text-lg leading-relaxed">
            Write a program that displays the numbers less than N.
          </p>
        </div>

        {/* Exercise 3 */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Exercise 3 - Average</h3>
          <p className="text-lg leading-relaxed">
            Write a program that asks the user to enter integers and displays their sum and average (stop the input when the value is 0).
          </p>
        </div>

        {/* Exercise 4 */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Exercise 4 - Multiples</h3>
          <p className="text-lg leading-relaxed">
            Write a program that calculates the first N multiples of an integer X, where N and X are entered by the user.
          </p>
          <p className="text-lg leading-relaxed">
            Example for N=5 and X=7:
          </p>
          <pre className="bg-gray-100 p-4">
            1 x 7 = 7<br/>
            2 x 7 = 14<br/>
            3 x 7 = 21<br/>
            4 x 7 = 28<br/>
            5 x 7 = 35
          </pre>
          <p className="text-lg leading-relaxed">
            You need to choose the best looping structure (<code>for</code>, <code>while</code>, or <code>do...while</code>) for this problem.
          </p>
        </div>

        {/* Exercise 5 */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Exercise 5 - Counting Vowels</h3>
          <p className="text-lg leading-relaxed">
            Write a program that counts the number of vowels in a word entered by the user, using the following methods:
          </p>
          <ul className="list-disc pl-6">
            <li><code>myVar.length</code>: returns the number of characters in the string <code>myVar</code></li>
            <li><code>myVar.substring(p, n)</code>: extracts a substring of <code>n</code> characters from position <code>p</code> (note that in JavaScript, the first character is at position 0)</li>
            <li><code>myVar.indexOf(chaine)</code>: returns the position of the first occurrence of the string <code>chaine</code> in the variable <code>myVar</code> (returns -1 if not found)</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default JS08LoopsPage;
