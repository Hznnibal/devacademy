import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const JS08LoopsPage: React.FC = () => {
  return (
    <div className="px-5 py-8 font-sans">

      <h1 className="text-3xl font-bold text-center mb-10">JS 08: Loops</h1>

      {/* Necessity of Repetitive Structures */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">The Necessity of Repetitive Structures</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          Iteration, or repetitive structures (also known as loops), allow you to perform an action by repeating a basic or composite action until a condition is met, or stop when a given condition is satisfied.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          There are several types of repetitive structures, each serving a different purpose.
        </p>
      </section>

      {/* Example - Multiplication Table by 5 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Example: Multiplication Table by 5</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          Using the instructions defined up to this point, the only way to write the complete table is shown in the following program:
        </p>
        <CodeBlock code={`console.log("Multiplication table by 5");
console.log("=============================");
console.log("5 * 0 = 0");
console.log("5 * 1 = 5");
console.log("5 * 2 = 10");
console.log("5 * 3 = 15");
console.log("5 * 4 = 20");
console.log("5 * 5 = 25");
console.log("5 * 6 = 30");
console.log("5 * 7 = 35");
console.log("5 * 8 = 40");
console.log("5 * 9 = 45");
console.log("5 * 10 = 50");`} />
        <p className="text-lg leading-relaxed mb-4">
          Looking at this program, we quickly realize that the same basic action is repeated several times. We replace the number 5 with a variable, such as <code>i</code>.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          To generalize, we can write the following instruction:
        </p>
        <CodeBlock code={`console.log(i+" * 0 = 0");`} />
        <p className="text-lg leading-relaxed mb-4">
          This repeats for a value of <code>i</code> ranging from 1 to 10, and the stopping condition can be expressed as:<br />
          <code>For i ranging from 1 to 10</code><br />
          or:<br />
          <code>While i {`<=`} 10</code><br />
          or:<br />
          <code>Until i {`>`} 10</code>
        </p>
      </section>

      {/* Loops with for */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Loops with <code>for</code></h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          The <code>for</code> statement allows you to execute a block of instructions a certain number of times depending on a specific criterion. Its syntax is:
        </p>
        <CodeBlock code={`for (initial value; condition; update)
{
      instructions;
};`} />
        <p className="text-lg leading-relaxed mb-4">
          - <code>initial value</code> represents the initialization of the iterators;<br />
          - <code>condition</code> represents the iteration condition;<br />
          - <code>update</code> represents the update of the iterators.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Let’s revisit the multiplication table example:
        </p>
        <CodeBlock code={`console.log("Multiplication table by 5");
console.log("=============================");

for (i = 0; i<=10; i++)
{
    result = 5 * i;

    console.log("5 * "+i+" = "+result);
}
// Instructions executed after the loop (i equals 10)
console.log("End of loop");`} />
        <p className="text-lg leading-relaxed mb-4">
          Execution breakdown:
        </p>
        <ul className="list-disc pl-8">
          <li>On the first execution of the <code>for</code> statement, <code>i</code> is initialized to 0.</li>
          <li>Each time, the iteration condition (<code>i {`<=`} 10</code>) is evaluated. If <code>i {`>`} 10</code>, the loop stops, and the instructions following the closing brace are executed.</li>
          <li>When the iteration condition is true, the instructions inside the braces are executed.</li>
          <li>On the closing brace, <code>i</code> is incremented by 1.</li>
          <li>Return to the <code>for</code> statement for the next pass, this time with <code>i</code> equal to 1.</li>
        </ul>
      </section>

      {/* Loops with while */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Loops with <code>while</code></h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          The <code>while</code> statement allows you to execute a block of instructions a certain number of times.
        </p>
        <CodeBlock code={`while (condition is true)
{
      // instructions
}`} />
        <p className="text-lg leading-relaxed mb-4">
          The <code>condition</code> is a boolean expression. The instructions will be executed repeatedly as long as the condition evaluates to true.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The condition must be evaluated on the first execution of the <code>while</code> statement, which requires the initialization of the variables involved in the condition.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          If the condition evaluates to false on the first execution of <code>while</code>, the instructions will not be executed.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Example:
        </p>
        <CodeBlock code={`var i = 0;
console.log("Multiplication table by 5");
console.log("=============================");
while (i <= 10) {
  result = 5 * i;
  console.log("The result of 5 x "+i+" is: "+result);
  i++;
}
console.log("End of loop");`} />
        <p className="text-lg leading-relaxed mb-4">
          Execution breakdown:
        </p>
        <ul className="list-disc pl-8">
          <li>Each time the <code>while</code> statement is executed, the iteration condition (<code>i {'<='} 10</code>) is evaluated.</li>
          <li>If <code>i {'>'} 10</code>, the loop stops, and the instructions following the closing brace are executed.</li>
          <li>When the condition is true, the instructions inside the braces are executed.</li>
          <li>On the closing brace, the <code>while</code> statement is re-evaluated.</li>
        </ul>
      </section >

      {/* Warnings and While Loops */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Warnings</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          The <code>while</code> statement requires careful attention. Its full syntax is:
        </p>
        <CodeBlock code={`initialization
while (condition) {
  // Instructions
  // Update
}`} />
        <p className="text-lg leading-relaxed mb-4">
          In our example:
        </p>
        <CodeBlock code={`i = 1; 
while (i <= 10) { 
  console.log("The result of 5 x " + i + " is: " + result); 
  i++; 
}`} />
        <p className="text-lg leading-relaxed mb-4">
          Be careful not to forget the initialization and update steps, as failing to do so would cause a variable not initialized error.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          A major issue with the <code>while</code> loop is the potential for an infinite loop, which can cause the browser to crash if the condition remains true forever.
        </p>
      </section >


      {/* Benefits of while */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Benefits of <code>while</code></h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          The <code>while</code> statement, compared to <code>for</code>, is useful for more complex iteration conditions, such as:
        </p>
        <CodeBlock code={`while (i <=  10 && j != 2) {
  ...
}
while (!found) {
  ...
} // where 'found' is a boolean`} />
      </section>


      {/* The break statement */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">The <code>break</code> Statement</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          The <code>break</code> statement allows you to prematurely exit a <code>for</code> or <code>while</code> loop.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          To illustrate this, let's take the following example:
        </p>
        <CodeBlock code={`var cpt = 1;
while (cpt < 5) {
  if (cpt == 4) {
    break;
  }
  console.log("line: " + cpt);
  cpt++;
}
console.log("end of loop");`} />
        <p className="text-lg leading-relaxed mb-4">
          The behavior is similar to the previous example, except when the counter equals 4. At that point, the <code>break</code> statement exits the loop, and the message "end of loop" is displayed.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The output will be:
        </p>
        <CodeBlock code={`line: 1
line: 2
line: 3
end of loop`} />
      </section>

      {/* The continue statement */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">The <code>continue</code> Statement</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          The <code>continue</code> statement allows you to skip an iteration of a <code>for</code> or <code>while</code> loop and proceed to the next iteration (without exiting the loop like <code>break</code> does).
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Let’s take the following example:
        </p>
        <CodeBlock code={`var cpt = 1;
while (cpt < 5) {
  if (cpt == 3) {
    cpt++;
    continue;
  }
  console.log("line: " + cpt);
  cpt++;
}
console.log("end of loop");`} />
        <p className="text-lg leading-relaxed mb-4">
          In this case, the loop starts as usual. When the counter equals 3, the <code>continue</code> statement skips the <code>console.log()</code> instruction (the line "line: 3" is not displayed) and moves to the next iteration.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Note that we had to add <code>cpt++</code> before <code>continue</code> to avoid an infinite loop and prevent the browser from crashing (because <code>cpt</code> would stay at 3).
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The output will be:
        </p>
        <CodeBlock code={`line: 1
line: 2
line: 4
end of loop`} />
      </section>

      {/* do...while loops */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Loops with <code>do...while</code></h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          The <code>do...while</code> loop executes the instructions until a condition is no longer satisfied. The condition is checked after the instruction is executed, meaning the instructions are always executed at least once.
        </p>
        <CodeBlock code={`do {
  instructions;
} while (condition);`} />
        <p className="text-lg leading-relaxed mb-4">
          The condition is a boolean expression (type <code>bool</code>). The instructions will be executed as long as the condition evaluates to <code>true</code>.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The <code>do</code> block is always followed by a <code>while</code> statement. It’s similar to the <code>while</code> loop, but the condition is evaluated at the end of the loop, not at the start. This means that a <code>do</code> loop will always execute at least once.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Here's an example with the multiplication table:
        </p>
        <CodeBlock code={`var i = 0;
console.log("Multiplication table by 5");
console.log("=============================");
do {
  result = 5 * i;
  console.log("5 * " + i + " = " + result);
  i++;
} while (i <= 10);
console.log("end of loop");`} />
        <p className="text-lg leading-relaxed mb-4">
          The output will be:
        </p>
        <CodeBlock code={`5 * 0 = 0
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
end of loop`} />
      </section>

      {/* Loops with for...in */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Loops with <code>for...in</code></h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          The <code>for...in</code> loop is specific to JavaScript, unlike <code>for</code>, <code>while</code>, or <code>do...while</code>, which you may encounter in other languages.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The <code>for...in</code> expression simplifies the usage of a <code>for</code> loop, particularly for retrieving elements from an array:
        </p>
        <CodeBlock code={`var tableau = ["Paul", "John", "Anna", "Sofia"];
for (var i in tableau) {
  console.log(tableau[i]);
}`} />
        <p className="text-lg leading-relaxed mb-4">
          This loop iterates through the elements of the array <code>tableau</code>, printing each element to the console.
        </p>
      </section>


      {/* Exercises */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Exercises</h2> <div className="border-b border-gray-300 mb-6" />

        {/* Exercise 1 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Exercise 1 - Input</h3>
          <p className="text-lg leading-relaxed mb-4">
            Create an HTML page that asks the user for a first name. The page should continue asking for first names until the user leaves the field empty. Finally, the page displays the number of first names and the names entered in the console.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Example result :
          </p>
          <video
            src="/Exboucle.mp4"
            width={460}
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Exercise 2 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Exercise 2 - Integers Less than N</h3>
          <p className="text-lg leading-relaxed mb-4">
            Write a program that displays the numbers less than N.
          </p>
        </div>

        {/* Exercise 3 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Exercise 3 - Average</h3>
          <p className="text-lg leading-relaxed mb-4">
            Write a program that asks the user to enter integers and displays their sum and average (stop the input when the value is 0).
          </p>
        </div>

        {/* Exercise 4 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Exercise 4 - Multiples</h3>
          <p className="text-lg leading-relaxed mb-4">
            Write a program that calculates the first N multiples of an integer X, where N and X are entered by the user.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Example for N=5 and X=7:
          </p>
          <CodeBlock code={`1 x 7 = 7
2 x 7 = 14
3 x 7 = 21
4 x 7 = 28
5 x 7 = 35`} />
          <p className="text-lg leading-relaxed mb-4">
            You need to choose the best looping structure (<code>for</code>, <code>while</code>, or <code>do...while</code>) for this problem.
          </p>
        </div >

        {/* Exercise 5 */}
        < div className="space-y-4" >
          <h3 className="text-xl font-semibold">Exercise 5 - Counting Vowels</h3>
          <p className="text-lg leading-relaxed mb-4">
            Write a program that counts the number of vowels in a word entered by the user, using the following methods:
          </p>
          <ul className="list-disc pl-6">
            <li><code>myVar.length</code>: returns the number of characters in the string <code>myVar</code></li>
            <li><code>myVar.substring(p, n)</code>: extracts a substring of <code>n</code> characters from position <code>p</code> (note that in JavaScript, the first character is at position 0)</li>
            <li><code>myVar.indexOf(chaine)</code>: returns the position of the first occurrence of the string <code>chaine</code> in the variable <code>myVar</code> (returns -1 if not found)</li>
          </ul>
        </div >
      </section >
    </div >
  );
};

export default JS08LoopsPage;
