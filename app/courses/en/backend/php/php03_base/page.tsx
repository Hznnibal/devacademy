import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const PHPBasics: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Basics and Common Pitfalls</h1>

            <h2 className="text-2xl font-semibold mb-4 ">Important Note:</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Remember that a PHP statement must always (except in very specific cases) end with a semicolon.
            </p>

            <h2 className="text-2xl font-semibold mb-4 ">The echo Statement</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                The first instruction you will likely use is <code className="bg-gray-200 text-red-600 px-1 rounded">echo</code>. It outputs data (generates HTML output) between quotes.
            </p>

            <CodeBlock code={`<html>
<body>
  <?php 
    echo "Hello World"; 
  ?> 
</body>
</html>`} />

            <h3 className="text-xl font-semibold mb-4 ">Exercise</h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Create a file named <code className="bg-gray-200 text-red-600 px-1 rounded">hello.php</code></li>
                <li>Place the file in the directory: <code className="bg-gray-200 text-red-600 px-1 rounded">C:/wamp/www</code></li>
                <li>Run the file in a browser: <code className="bg-gray-200 text-red-600 px-1 rounded">http://127.0.0.1/hello.php</code></li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 ">Using Variables in echo</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Double quotes allow embedding variables and HTML tags directly:
            </p>

            <CodeBlock code={`<?php
$hello = "Hello World";
echo "<b>$hello</b>";
?>`} language="php" />


            <p className="mb-4 leading-relaxed">
                To include double quotes inside an echo statement using double quotes, escape them with a backslash:
            </p>

            <CodeBlock code={`<?php
echo "Displaying a \" ";
?>`} language="php" />


            <h2 className="text-2xl font-semibold mb-4 ">Special Characters</h2>
            <div className="border-b border-gray-300 mb-6" />
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li><code className="bg-gray-200 text-red-600 px-1 rounded">\n</code>: Newline</li>
                <li><code className="bg-gray-200 text-red-600 px-1 rounded">\r</code>: Carriage return</li>
                <li><code className="bg-gray-200 text-red-600 px-1 rounded">\t</code>: Tabulation</li>
            </ul>

            <CodeBlock code={`<?php
echo "Hello World\n";
?>`} language="php" />

            <h2 className="text-2xl font-semibold mb-4 ">Comments in PHP</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Comments in PHP are written similarly to JavaScript:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li><code className="bg-gray-200 text-red-600 px-1 rounded">{"//"}</code> for single-line comments</li>
                <li><code className="bg-gray-200 text-red-600 px-1 rounded">{"/* */"}</code> for multi-line comments</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 ">printf and sprintf Functions</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                These functions are used for formatting strings.
            </p>

            <CodeBlock code={`<?php
$euro = 6.55957;
printf("%.2f FF<br />", $euro);

$money1 = 68.75;
$money2 = 54.35;
$money = $money1 + $money2;

echo "Without printf: " . $money . "<br />";
$formatted = sprintf("%01.2f", $money);
echo "With printf: " . $formatted . "<br />";

$year = "2002";
$month = "4";
$day = "5";
$date = sprintf("%04d-%02d-%02d", $year, $month, $day);
echo "Formatted date: " . $date;
?>`} language="php" />


            <p className="mb-4 leading-relaxed">
                Use <code className="bg-gray-200 text-red-600 px-1 rounded">printf</code> and <code className="bg-gray-200 text-red-600 px-1 rounded">sprintf</code> for better formatting and readability in outputs.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-4">Data Types</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">PHP supports the following data types:</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>int (integer)</strong>: For whole numbers.</li>
                <li><strong>float, double, real</strong>: For decimal numbers.</li>
                <li><strong>string</strong>: For text or character strings.</li>
                <li><strong>boolean</strong>: For true (true) or false (false) values.</li>
                <li><strong>array</strong>: For arrays or collections of values.</li>
                <li><strong>object</strong>: For objects.</li>
            </ul>
            <p className="text-lg leading-relaxed mb-4">Variable types in PHP are determined during initialization, not declaration:</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`$a = 12;       // integer
$b = "Hello"; // string`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-4 mt-2">Operators</h2>

            <h3 className="text-xl font-semibold mt-4">Arithmetic Operators</h3>
            <ul className="list-disc list-inside space-y-2">
                <li><code>$a + $b</code>: Addition</li>
                <li><code>$a - $b</code>: Subtraction</li>
                <li><code>$a * $b</code>: Multiplication</li>
                <li><code>$a / $b</code>: Division</li>
                <li><code>$a % $b</code>: Modulo (remainder)</li>
                <li><code>$a++</code>: Increment</li>
                <li><code>$a--</code>: Decrement</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">String Operators</h3>
            <p className="text-lg leading-relaxed mb-4">The dot (<code>.</code>) operator concatenates two strings:</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`$a = "Winter";
echo $a . " is coming!";`}</code>
            </pre>
            <p className="text-lg leading-relaxed mb-4">Output: <strong>Winter is coming!</strong></p>

            <h3 className="text-xl font-semibold mt-4">Assignment Operators</h3>
            <p className="text-lg leading-relaxed mb-4">The basic assignment operator is <code>=</code>. It assigns the value on the right to the variable on the left.</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`$a = 0;        // $a equals 0
$a += 4;       // $a equals 4
$a -= 2;       // $a equals 2`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-4">Comparison Operators</h3>
            <ul className="list-disc list-inside space-y-2">
                <li><code>$a == $b</code>: True if $a is equal to $b.</li>
                <li><code>$a === $b</code>: True if $a is equal to $b and both are of the same type.</li>
                <li><code>$a != $b</code>: True if $a is not equal to $b.</li>
                <li><code>$a {`<`} $b</code>: True if $a is less than $b.</li>
                <li><code>$a {`>`} $b</code>: True if $a is greater than $b.</li>
                <li><code>$a {`<=`} $b</code>: True if $a is less than or equal to $b.</li>
                <li><code>$a {`>=`} $b</code>: True if $a is greater than or equal to $b.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">Logical Operators</h3>
            <ul className="list-disc list-inside space-y-2">
                <li><code>$a and $b</code>: True if both $a and $b are true (AND).</li>
                <li><code>$a or $b</code>: True if either $a or $b is true (OR).</li>
                <li><code>$a xor $b</code>: True if either $a or $b is true, but not both (XOR).</li>
                <li><code>$a && $b</code>: True if both $a and $b are true (AND).</li>
                <li><code>$a || $b</code>: True if either $a or $b is true (OR).</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 mt-4">Variables in PHP</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">In PHP, all variables are prefixed with a <code>$</code> sign, except for constants and metaconstants.</p>
            <p className="text-lg leading-relaxed mb-4">Variables can be of the following types:</p>
            <ul className="list-disc list-inside space-y-2">
                <li>Strings (alphanumeric variables)</li>
                <li>Integers (numeric variables)</li>
                <li>Arrays</li>
                <li>Objects</li>
                <li>Boolean</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 mt-4">String Variables</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">String values can contain letters, numbers, or symbols.</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`$variable = "Hello";
echo $variable;`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-4 mt-4">Numeric Variables</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">Numeric variables can store integers or decimals.</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`$var1 = 123;
$var2 = 14.35;`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-4 mt-4">Arrays</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">Arrays in PHP are similar to arrays in JavaScript and store a collection of values.</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`$colors[0] = "red";
$colors[1] = "blue";
$colors[2] = "white";
$colors[3] = "black";
echo $colors[2]; // Outputs "white"`}</code>
            </pre>
            <p className="text-lg leading-relaxed mb-4">Note: Array indices start at 0.</p>

            <h2 className="text-2xl font-semibold mb-4 mt-4">Boolean Variables</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">Boolean variables can only have two values: true or false.</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`$var1 = false;
$var2 = true;`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-4 mt-4">Variable Variables</h2><div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">It is possible to create variables dynamically using variable variables.</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`$var1 = "hello";
$$var1 = "world";
echo $hello; // Outputs "world"`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-4 mt-4">Superglobal Variables</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">Superglobals are predefined variables that are available in all scopes.</p>
            <ul className="list-disc list-inside space-y-2">
                <li><code>$_SERVER</code>: Information about headers, paths, and script locations.</li>
                <li><code>$_GET</code>: Data sent via HTTP GET method.</li>
                <li><code>$_POST</code>: Data sent via HTTP POST method.</li>
                <li><code>$_FILES</code>: File uploads via HTTP POST.</li>
                <li><code>$_COOKIE</code>: HTTP cookies.</li>
                <li><code>$_SESSION</code>: Session variables.</li>
                <li><code>$_REQUEST</code>: Data sent via HTTP GET or POST methods.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 mt-4">Type Casting</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">You can force the type of a variable using the <code>settype()</code> function.</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`$a = 15.125863;
settype($a, "integer");
echo $a; // Outputs 15`}</code>
            </pre>
            <p className="text-lg leading-relaxed mb-4">Other functions include:</p>
            <ul className="list-disc list-inside space-y-2">
                <li><code>intval()</code>: Convert to integer.</li>
                <li><code>strval()</code>: Convert to string.</li>
                <li><code>doubleval()</code>: Convert to double.</li>
            </ul>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`$a = 6.32172;
$b = intval($a);
$c = doubleval($a);
echo $a - $b - $c;`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-4 mt-4">Constants</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">A constant is a variable whose value cannot change during the execution of the application.</p>
            <p className="text-lg leading-relaxed mb-4">Constants are defined using the <code>define()</code> function.</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`define("EURO", 6.55957);
echo EURO; // Outputs 6.55957`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-4 mt-4">Metaconstants and Debugging Functions</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">Metaconstants provide information about the file and line currently being executed:</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`echo "File: " . __FILE__ . ", Line: " . __LINE__;`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-4">var_dump()</h3>
            <p className="text-lg leading-relaxed mb-4">Displays detailed information about a variable:</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`$myVar = "hello";
var_dump($myVar);`}</code>
            </pre>

            <h3 className="text-xl font-semibold mt-4">error_log()</h3>
            <p className="text-lg leading-relaxed mb-4">Logs custom error messages:</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`$myVar = "KO";
if ($myVar == "OK") {
    echo "It's ok<br>"
} else {
    echo "It's not ok<br>";
    $message = "It's not ok " . __FILE__ . " " . __LINE__;
    error_log($message);
}`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-4 mt-4">System Variables</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">System variables are variables whose values are defined by the server. These values cannot be modified by the user.</p>
            <p className="text-lg leading-relaxed mb-4">All system variables are contained within the <code>$_SERVER</code> superglobal.</p>

            <h2 className="text-2xl font-semibold mb-4 mt-4">Examples</h2><div className="border-b border-gray-300 mb-6" />
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`echo $_SERVER["SERVER_NAME"]; // Displays the host name, localhost in WAMP
var_dump($_SERVER); // Displays all variables in the $_SERVER array`}</code>
            </pre>

            <h2 className="text-2xl font-semibold mb-4 mt-4">Useful Variables in $_SERVER</h2>
            <div className="border-b border-gray-300 mb-6" />
            <table className="table-auto w-full text-left">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Variable</th>
                        <th className="border px-4 py-2">Description</th>
                        <th className="border px-4 py-2">Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">DOCUMENT_ROOT</td>
                        <td className="border px-4 py-2">Physical path of the root directory.</td>
                        <td className="border px-4 py-2">c:/wamp/www</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">HTTP_ACCEPT_LANGUAGE</td>
                        <td className="border px-4 py-2">Visitor's language code.</td>
                        <td className="border px-4 py-2">fr</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">HTTP_USER_AGENT</td>
                        <td className="border px-4 py-2">Browser and version used.</td>
                        <td className="border px-4 py-2">Mozilla/5.0</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">REMOTE_ADDR</td>
                        <td className="border px-4 py-2">Visitor's IP address.</td>
                        <td className="border px-4 py-2">200.10.41.214</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">SERVER_NAME</td>
                        <td className="border px-4 py-2">Server host name.</td>
                        <td className="border px-4 py-2">localhost</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">SERVER_PORT</td>
                        <td className="border px-4 py-2">Server communication port.</td>
                        <td className="border px-4 py-2">80</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">REQUEST_METHOD</td>
                        <td className="border px-4 py-2">Request method used.</td>
                        <td className="border px-4 py-2">GET, POST</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">SCRIPT_NAME</td>
                        <td className="border px-4 py-2">Name of the current script.</td>
                        <td className="border px-4 py-2">/index.php</td>
                    </tr>
                </tbody>
            </table>

            <h2 className="text-2xl font-semibold mb-4 mt-4">Debugging with $_SERVER</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-lg leading-relaxed mb-4">Use the following examples to test and debug server variables:</p>
            <pre className="bg-black text-blue-50 p-4 rounded-md shadow">
                <code>{`echo "Server Address: " . $_SERVER['SERVER_ADDR'];
echo "Request Time: " . $_SERVER['REQUEST_TIME'];`}</code>
            </pre>

            <p className="mb-4 mt-4">These values provide useful insights for debugging and tracking visitor activity on the server.</p>

            <a className="text-blue-600 text-xl ml-8" href='https://www.php.net/manual/en/reserved.variables.server.php' >Documentation</a>

        </div >
    );
};

export default PHPBasics;
