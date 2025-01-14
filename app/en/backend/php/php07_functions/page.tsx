import { CodeBlock } from "@/components/CodeBlock/code-block";

const FunctionsPage = () => {
    return (
        <div className="container mx-auto p-6">

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Functions</h2>
                <p className="text-lg mt-2">
                    A function is a block of code in PHP that can perform any task. This code can include any valid PHP statement. A function is designed to perform a predefined specific task.
                </p>

                <h3 className="text-xl font-semibold mt-4">Types of Functions</h3>
                <p className="text-lg mt-2">
                    There are two types of functions:
                </p>
                <ul className="list-disc pl-6">
                    <li><strong>Native functions:</strong> These are provided by the language by default. PHP has hundreds of them.</li>
                    <li><strong>User-defined functions:</strong> These are written by the developer and can of course include native functions.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Using a Native Function</h3>
                <p className="text-lg mt-2">
                    In the example below, we use the `ucfirst()` function. This function capitalizes the first character of a string:
                </p>
                <CodeBlock code={`<?php
$texte = ucfirst("Hello World");

echo $texte; // Output: Hello world
?>`} language="php" />

                <p className="mt-4">
                    The variable `$texte` will contain the value: `Hello world`, with the first character capitalized. Using functions has many advantages, including avoiding repeating a sequence of code, which often causes major issues.
                </p>
                <p className="mt-4">
                    Functions also improve the readability of the source code, increase productivity, and facilitate maintenance.
                </p>

                <h3 className="text-xl font-semibold mt-4">Defining a Function</h3>
                <p className="text-lg mt-2">
                    To define a function, we use the `function` keyword followed by the function name (you get to choose the name), and parentheses (which are required, even if empty) to hold any potential parameters. Example of a simple function:
                </p>
                <CodeBlock code={`<?php
function hello() {
    echo "Hello";
}

hello(); // Output: Hello
?>`} language="php" />


                <h3 className="text-xl font-semibold mt-4">Using Parameters in Functions</h3>
                <p className="text-lg mt-2">
                    We can also pass a parameter to the function. Here's an example:
                </p>
                <CodeBlock code={`<?php
function hello($firstName) {
    echo "Hello " . $firstName;
}

hello("Dave"); // Output: Hello Dave
?>`} language="php" />


                <h3 className="text-xl font-semibold mt-4">Using Multiple Parameters</h3>
                <p className="text-lg mt-2">
                    You can also use multiple parameters within the parentheses. Here's an example:
                </p>
                <CodeBlock code={`<?php
function hello($firstName, $lastName) {
    echo "Hello " . $firstName . " " . $lastName;
}

hello("Dave", "LOPER"); // Output: Hello Dave LOPER
?>`} language="php" />

                <p className="mt-4">
                    The function will display `Hello Dave LOPER`. In practice, the values within the parentheses are the function's arguments.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Variable Scope</h2>
                <p className="text-lg mt-2">
                    A variable defined within a function is not accessible outside of it. Similarly, a variable defined outside of a function is not accessible inside the function. This concept is called variable scope.
                </p>

                <h3 className="text-xl font-semibold mt-4">Global and Static Variables</h3>
                <p className="text-lg mt-2">
                    PHP provides two declarations to access variables outside their local scope: `global` and `static`.
                </p>

                <h4 className="text-lg font-semibold mt-4">Example 1: Global Variables</h4>
                <CodeBlock code={`<?php
$a = $b = 2;

function sum() {
$c = $a + $b;
echo "$c";
}

sum(); // Output will be 0, because $a and $b are not recognized inside the function.
?>`} language="php" />


                <p className="mt-4">
                    In the above example, the output will be 0 because the variables `$a` and `$b` are not known inside the `sum()` function.
                </p>
                <p className="mt-4">
                    To use these variables within the function, we need to declare them as global variables:
                </p>

                <CodeBlock code={`<?php
$a = $b = 2;

function sum() {
global $a, $b;
$b = $a + $b;
}

sum();

echo $b . "<br>"; // Output will be 4
?>`} language="php" />


                <p className="mt-4">
                    This time, the function can access the global variables `$a` and `$b`, and the output will be `4`.
                </p>

                <h4 className="text-lg font-semibold mt-4">Example 2: Static Variables</h4>
                <p className="text-lg mt-2">
                    The `static` keyword is used within a function to retain the value of a variable across multiple function calls.
                </p>
                <CodeBlock code={`<?php
function Test() {
$a = 0;
echo $a . "<br>";
$a++;
}

Test(); // Output: 0
Test(); // Output: 0, because $a is reinitialized to 0 on each call
?>`} language="php" />

                <p className="mt-4">
                    In the example above, each time the function is called, the variable `$a` is reinitialized to 0, so the output will always be 0.
                </p>

                <p className="mt-4">
                    To retain the value of the variable between calls, we use the `static` keyword:
                </p>

                <CodeBlock code={`<?php
function Test1() {
static $a = 0;
echo "$a<br />";
$a++;
}

Test1(); // Output: 0
Test1(); // Output: 1
Test1(); // Output: 2
?>`} language="php" />

                <p className="mt-4">
                    This time, the variable `$a` will retain its value between calls, resulting in the output: `0`, `1`, `2`, etc.
                </p>

                <h3 className="text-xl font-semibold mt-4">Function Libraries</h3>
                <p className="text-lg mt-2">
                    A function library is a collection of functions grouped together in a single file. By default, the functions we create are only available in the file where they are defined. To use them in another program, you would need to copy them. However, there is a way to make functions available across all your programs by grouping them in an external file and referencing that file in your main script.
                </p>
                <h4 className="text-lg font-semibold mt-4">Creating a Function Library</h4>
                <p className="text-lg mt-2">
                    Here's how you can create a function library:
                </p>
                <CodeBlock code={`<?php
function function1() {
// code
}

function function2() {
// code
}
?>`} language="php" />

                <p className="mt-4">
                    Save this file with a name, for example, `myFunctions.php`. You can add as many functions as needed for your applications.
                </p>

                <h4 className="text-lg font-semibold mt-4">Using the Function Library</h4>
                <p className="text-lg mt-2">
                    To use the functions from this library in your main script, use the `require` or `include` statement:
                </p>
                <CodeBlock code={`<?php
require('myFunctions.php');

// Now you can use the functions from myFunctions.php
?>`} language="php" />

                <p className="mt-4">
                    By including `myFunctions.php`, all the functions defined in it will be available for use in your script.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Major PHP Function Groups</h2>

                <h3 className="text-xl font-semibold mt-4">Arithmetic Functions</h3>
                <p className="text-lg mt-2">
                    PHP provides a comprehensive set of mathematical functions that cover most of the needs for creating applications. These functions include:
                </p>
                <ul className="list-disc pl-6 text-lg mt-2">
                    <li>Mathematical operators (addition, subtraction, multiplication, division, exponentiation...)</li>
                    <li>Rounding, absolute value, minimum, maximum...</li>
                    <li>Trigonometric functions (cosine, sine, tangent), logarithms...</li>
                    <li>Generating random numbers</li>
                    <li>Conversions (binary, decimal, hexadecimal...)</li>
                    <li>Number formatting (as strings, etc.)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">String Management Functions</h3>
                <p className="text-lg mt-2">
                    PHP provides a full set of functions for handling strings. These include:
                </p>
                <ul className="list-disc pl-6 text-lg mt-2">
                    <li>Comparing strings</li>
                    <li>Determining the length of a string</li>
                    <li>Splitting a string, extracting parts</li>
                    <li>Encrypting strings/data</li>
                    <li>Replacing parts of strings</li>
                    <li>Searching for components in a string</li>
                    <li>Converting specific characters into HTML codes</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">File and Directory Management Functions</h3>
                <p className="text-lg mt-2">
                    The file and directory management functions provided by PHP allow you to:
                </p>
                <ul className="list-disc pl-6 text-lg mt-2">
                    <li>Create, modify, delete, rename, and move files of any type (text, CSV, images, PDFs...)</li>
                    <li>Create, rename, delete, and move directories</li>
                    <li>Read, add, modify, and delete file content</li>
                    <li>Read and modify file or directory metadata (creation/modification/access dates, name, type, size, permissions...)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Dynamic Image Generation Functions</h3>
                <p className="text-lg mt-2">
                    PHP includes a library of functions for creating and manipulating images, called GD (for "Gif Draw"). GD provides many features:
                </p>
                <ul className="list-disc pl-6 text-lg mt-2">
                    <li>Generating dynamic images (geometric shapes, thumbnails, graphs...)</li>
                    <li>Managing colors within an image</li>
                    <li>Passing information about an image (width x height)</li>
                    <li>Cropping and rotating images (rotation at a precise angle)</li>
                    <li>Adding text, overlaying/merging images (e.g., adding a logo to an image to show it came from a site)</li>
                    <li>Handling different image formats (GIF, PNG, JPEG, TIFF, RAW...)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Internet-Specific Functions</h3>
                <p className="text-lg mt-2">
                    PHP, designed for the web, offers a set of functions specifically for internet usage, including:
                </p>
                <ul className="list-disc pl-6 text-lg mt-2">
                    <li>URL processing functions</li>
                    <li>Reading HTML pages (with the CURL library, for example)</li>
                    <li>Access protection for web pages: sessions, password encryption (which we will cover later in the course)</li>
                    <li>Sending emails (complete sequence)</li>
                    <li>Cookie management functions</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Some Useful Functions</h2>
                <table className="min-w-full mt-4 border-collapse">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2 text-left">Function</th>
                            <th className="border px-4 py-2 text-left">Description</th>
                            <th className="border px-4 py-2 text-left">PHP Code</th>
                            <th className="border px-4 py-2 text-left">Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">substr()</td>
                            <td className="border px-4 py-2">Returns a segment of a string</td>
                            <td className="border px-4 py-2">$s = substr("QOTSA", 2, 3);</td>
                            <td className="border px-4 py-2">TSA</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">addslashes()</td>
                            <td className="border px-4 py-2">Adds backslashes before special characters</td>
                            <td className="border px-4 py-2">$s = addslashes("L'a");</td>
                            <td className="border px-4 py-2">L\'a</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">stripslashes()</td>
                            <td className="border px-4 py-2">Removes backslashes before special characters</td>
                            <td className="border px-4 py-2">$s = stripslashes("L\'a");</td>
                            <td className="border px-4 py-2">L'a</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">ceil()</td>
                            <td className="border px-4 py-2">Returns the next highest integer (e.g., for 12.1)</td>
                            <td className="border px-4 py-2">$s = ceil("12.1");</td>
                            <td className="border px-4 py-2">13</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">htmlentities()</td>
                            <td className="border px-4 py-2">Replaces characters with their HTML equivalents (if they exist)</td>
                            <td className="border px-4 py-2">$s = htmlentities("{`<`}");</td>
                            <td className="border px-4 py-2">&lt;</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">strstr()</td>
                            <td className="border px-4 py-2">Searches for the first 'p' in the string and displays the rest of the string, including the 'p'</td>
                            <td className="border px-4 py-2">$s = strstr ("webmas-ter@php.cdsi.fr.st", "p");</td>
                            <td className="border px-4 py-2">php.cdsi.fr.st</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">strlen()</td>
                            <td className="border px-4 py-2">Returns the length of a string</td>
                            <td className="border px-4 py-2">$s = strlen("lachainedecaracteres");</td>
                            <td className="border px-4 py-2">20</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">strtolower()</td>
                            <td className="border px-4 py-2">Converts all characters to lowercase</td>
                            <td className="border px-4 py-2">$s = strtolower("LA CHAINE dE caRActERes");</td>
                            <td className="border px-4 py-2">la chaine de caracteres</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">strtoupper()</td>
                            <td className="border px-4 py-2">Converts all characters to uppercase</td>
                            <td className="border px-4 py-2">$s = strtoupper("LA CHAINE dE caRActERes")</td>
                            <td className="border px-4 py-2">LA CHAINE DE CARACTERES</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">str_replace()</td>
                            <td className="border px-4 py-2">Replaces a character with another in a string (case-sensitive)</td>
                            <td className="border px-4 py-2">$s = str_replace("a","o","Lalala");</td>
                            <td className="border px-4 py-2">Lololo</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">trim()</td>
                            <td className="border px-4 py-2">Removes white spaces (spaces, new lines, carriage returns) from the beginning and end of a string</td>
                            <td className="border px-4 py-2">$s = trim(" Hello world ");</td>
                            <td className="border px-4 py-2">Hello world</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">ucfirst()</td>
                            <td className="border px-4 py-2">Capitalizes the first letter of a string</td>
                            <td className="border px-4 py-2">$s = ucfirst("Hello world");</td>
                            <td className="border px-4 py-2">Hello world</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">ucwords()</td>
                            <td className="border px-4 py-2">Capitalizes the first letter of each word in a string</td>
                            <td className="border px-4 py-2">$s = ucwords("Hello world");</td>
                            <td className="border px-4 py-2">Hello world</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">strpos()</td>
                            <td className="border px-4 py-2">Finds the position of the first occurrence of a character. Returns the number of characters before it (here 4)</td>
                            <td className="border px-4 py-2">$s = strpos("abcdef","e");</td>
                            <td className="border px-4 py-2">4</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">join()</td>
                            <td className="border px-4 py-2">Joins elements of an array into a string</td>
                            <td className="border px-4 py-2">$arr = array("john", "paul", "georges", "ringo"); echo join(",",$arr);</td>
                            <td className="border px-4 py-2">"john,paul,georges,ringo"</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">preg_match()</td>
                            <td className="border px-4 py-2">Checks if a string is contained in another (e.g., checks if "ABCDE" contains "BCD"). Can search using regular expressions</td>
                            <td className="border px-4 py-2">preg_match ("BCD","ABCDEF")</td>
                            <td className="border px-4 py-2">Returns 1 (TRUE) if found, 0 (FALSE) otherwise</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Exercises</h2>

                <h3 className="text-xl font-medium mt-4">1. Generate a link function</h3>
                <p className="text-lg leading-relaxed mb-4">Write a function that generates a link.</p>
                <p className="text-lg leading-relaxed mb-4">The function should take two parameters: the link and the title.</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {`function lien(url, title) {
            return \`<a href="\${url}">\${title}</a>\`;
        }

        // Example
        lien("https://www.reddit.com/", "Reddit Hug");`}
                </pre>
                <p className="text-lg leading-relaxed mb-4">When called this way, the function should generate:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"<a href=\"https://www.reddit.com/\">Reddit Hug</a>"}
                </pre>

                <h3 className="text-xl font-medium mt-4">2. Sum of values in an array</h3>
                <p className="text-lg leading-relaxed mb-4">Write a function that calculates the sum of values in an array.</p>
                <p className="text-lg leading-relaxed mb-4">The function should take an array parameter.</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {`function somme(tab) {
            return tab.reduce((acc, val) => acc + val, 0);
        }

        // Example
        const tab = [4, 3, 8, 2];
        const resultat = somme(tab);`}
                </pre>
                <p className="text-lg leading-relaxed mb-4">The result should be:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"17"}
                </pre>

                <h3 className="text-xl font-medium mt-4">3. Password complexity check</h3>
                <p className="text-lg leading-relaxed mb-4">Write a function that checks the complexity of a password.</p>
                <p className="text-lg leading-relaxed mb-4">The function should take a string parameter. It will return a boolean value that is true if the password meets the following rules:</p>
                <ul className="list-disc ml-6">
                    <li>At least 8 characters long</li>
                    <li>Contains at least 1 digit</li>
                    <li>Contains at least one uppercase and one lowercase letter</li>
                </ul>
                <pre className="bg-gray-200 p-4 rounded">
                    {`function complex_password(password) {
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
            return regex.test(password);
        }

        // Example
        const resultat = complex_password("TopSecret42");`}
                </pre>
                <p className="text-lg leading-relaxed mb-4">The result should be:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"true"}
                </pre>
            </section>

        </div>
    );
};


export default FunctionsPage;
