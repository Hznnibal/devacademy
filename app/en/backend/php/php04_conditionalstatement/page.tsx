import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const ConditionalStatements: React.FC = () => {
  // const a = 10;
  // const b = 20;
  // const age = 25;

  return (
    <section className="p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold mb-6 text-center">Conditional Statements in PHP</h1>

      {/* If Statement */}
      <h2 className="text-2xl font-semibold mt-4 mb-2">If Statement</h2>
      <div className="border-b border-gray-300 mb-6" />
      <p className="text-lg leading-relaxed mb-4">
        The <code>if</code> statement executes one or more instructions based on a condition.
      </p>

      <CodeBlock code={`if ($a > $b) {
  echo "$a is greater than $b";
} else {
  echo "$a is less than $b";
}`} />

      <p className="text-lg leading-relaxed mb-4">
        In this example, if <code>$a</code> is greater than <code>$b</code>, the first block executes. Otherwise, the second block executes.
      </p>

      {/* Ternary Operator */}
      <h2 className="text-2xl font-semibold mt-4 mb-2">Ternary Operator</h2>
      <div className="border-b border-gray-300 mb-6" />
      <p className="text-lg leading-relaxed mb-4">
        A ternary operator is a shorthand for an <code>if-else</code> statement. It is less readable and should be used carefully.
      </p>

      <CodeBlock code={`$message = ($age >= 18) ? "adult" : "minor";`} />

      <p className="text-lg leading-relaxed mb-4">
        In this example, <code>$message</code> is set to "adult" if <code>$age</code> is 18 or older; otherwise, it is set to "minor".
      </p>

      {/* Switch Statement */}
      <h2 className="text-2xl font-semibold mt-4 mb-2">Switch Statement</h2>
      <div className="border-b border-gray-300 mb-6" />
      <p className="text-lg leading-relaxed mb-4">
        The <code>switch</code> statement tests a variable against multiple values. It is more concise than multiple <code>if</code> statements.
      </p>

      <CodeBlock code={`$a = 2;

switch ($a) {
  case 0:
    echo "$a = 0";
    break;
  case 1:
    echo "$a = 1";
    break;
  case 2:
    echo "$a = 2";
    break;
  default:
    echo "$a is not 0, 1, or 2";
}`} />

      <p className="text-lg leading-relaxed mb-4">
        In this example, <code>$a</code> is checked against several cases. The <code>break</code> statement prevents further execution after a match is found.
      </p>
    </section >
  );
};

export default ConditionalStatements;
