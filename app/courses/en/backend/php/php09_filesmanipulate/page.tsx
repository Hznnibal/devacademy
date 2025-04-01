import React from 'react';

const IntroPHP: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Files</h2>

                <h3 className="text-xl font-medium mt-4">Opening a File</h3>
                <p className="text-lg leading-relaxed mb-4">Before diving into file manipulation examples in PHP, let's look at the different ways to open a file.</p>

                <p className="text-lg leading-relaxed mb-4">Here are the main modes for opening a file in PHP:</p>
                <ul className="list-disc ml-6">
                    <li><strong>Read-only from the beginning of the file ("r")</strong>: $fp = fopen(string file, "r");</li>
                    <li><strong>Write-only from the beginning of the file ("w")</strong>: $fp = fopen(string file, "w");</li>
                    <li><strong>Write-only from the end of the file ("a")</strong>: $fp = fopen(string file, "a");</li>
                </ul>

                <h4 className="text-lg font-medium mt-4">Examples:</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$fp = fopen('/home/rasmus/file.txt', 'r');"}
                    {"$fp = fopen('../exemple.txt', 'a');"}
                    {"$fp = fopen('http://www.php.net/', 'r');"}
                    {"$fp = fopen('ftp://user:password@example.com/', 'w');"}
                </pre>

                <p className="text-lg leading-relaxed mb-4">Note that files can be of any type (HTML, TXT, PHP, etc.), and these commands can be used to manipulate them.</p>

                <h3 className="text-xl font-medium mt-4">Main Instructions</h3>

                <h4 className="text-lg font-medium mt-4">Writing to a File</h4>
                <p className="text-lg leading-relaxed mb-4">The <strong>fputs()</strong> function allows writing to a file. It takes 2 required arguments, and a third optional one:</p>
                <ul className="list-disc ml-6">
                    <li><strong>$fp</strong>: a variable representing the file resource returned by <strong>fopen()</strong></li>
                    <li><strong>$str</strong>: the string (content) to write to the file</li>
                    <li><strong>length</strong>: an optional argument specifying the length of the string</li>
                </ul>

                <h4 className="text-lg font-medium mt-4">Example:</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"// Declare a variable whose value will be written to the file"}
                    {"$myVar = 'Hello World';"}
                    {"// Open file for writing only"}
                    {"$fp = fopen('test.txt', 'a');"}
                    {"// Write the content of $myVar"}
                    {"fputs($fp, $myVar);"}
                    {"// Close the file"}
                    {"fclose($fp);"}
                </pre>

                <p className="text-lg leading-relaxed mb-4">Open the file <code>test.txt</code> and verify that the phrase "Hello World" has been written to it.</p>

                <h4 className="text-lg font-medium mt-4">Reading from a File</h4>
                <p className="text-lg leading-relaxed mb-4">The <strong>fgets()</strong> function allows reading from a file. It takes 2 arguments:</p>
                <ul className="list-disc ml-6">
                    <li><strong>$fp</strong>: the file resource returned by <strong>fopen()</strong></li>
                    <li><strong>length</strong>: the length of the data to read (in bytes)</li>
                </ul>

                <h4 className="text-lg font-medium mt-4">Example:</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"// Open file for reading only"}
                    {"$fp = fopen('test.txt', 'r');"}
                    {"// Loop until the end of the file"}
                    {"while (!feof($fp)) {"}
                    {"    // Read a line, assign it to the variable $line"}
                    {"    $line = fgets($fp, 4096);"}
                    {"    echo $line . '<br>'; "}
                    {"}"}
                </pre>

                <p className="text-lg leading-relaxed mb-4">In this example, <strong>fgets()</strong> reads each line until it encounters a newline character (<code>\n</code>). It's advisable to set the length parameter to 4096 bytes to ensure a full line is read. Alternatively, you can use the <strong>file()</strong> function to read the entire file at once.</p>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Other File Management Functions</h2>

                <h3 className="text-xl font-medium mt-4">The basename() Function</h3>
                <p className="text-lg leading-relaxed mb-4">This function returns the name of a file from a URL or a file path.</p>

                <h4 className="text-lg font-medium mt-4">Example:</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$path = '/home/httpd/html/index.php';"}
                    {"$file = basename($path); // $file returns 'index.php'"}
                </pre>

                <h3 className="text-xl font-medium mt-4">The copy() Function</h3>
                <p className="text-lg leading-relaxed mb-4">This function copies a file to another location.</p>

                <h4 className="text-lg font-medium mt-4">Example:</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$file = 'toto.txt';"}
                    {"// Create a backup of toto.txt as toto.txt.bak"}
                    {"copy($file, $file . '.bak');"}
                </pre>

                <h3 className="text-xl font-medium mt-4">The dirname() Function</h3>
                <p className="text-lg leading-relaxed mb-4">This function returns the directory path of a file.</p>

                <h4 className="text-lg font-medium mt-4">Example:</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$path = '/etc/passwd';"}
                    {"$dir = dirname($path); // $dir returns '/etc'"}
                </pre>

                <h3 className="text-xl font-medium mt-4">The file() Function</h3>
                <p className="text-lg leading-relaxed mb-4">The <strong>file()</strong> function reads an entire file and returns it as an array, where each element corresponds to a line in the file.</p>

                <h3 className="text-xl font-medium mt-4">The file_exists() Function</h3>
                <p className="text-lg leading-relaxed mb-4">This function returns true if the file exists.</p>

                <h3 className="text-xl font-medium mt-4">The is_dir() Function</h3>
                <p className="text-lg leading-relaxed mb-4">This function returns true if the file is a directory.</p>

                <h3 className="text-xl font-medium mt-4">The is_file() Function</h3>
                <p className="text-lg leading-relaxed mb-4">This function returns true if the file is a regular file.</p>

                <h3 className="text-xl font-medium mt-4">A Simple Visitor Counter in PHP</h3>
                <p className="text-lg leading-relaxed mb-4">If you want to have a unique visitor counter for each page of your site, here’s a simple PHP script that will do the job:</p>

                <pre className="bg-gray-200 p-4 rounded">
                    {"// Open the file moncompteur.txt"}
                    {"$file = fopen('moncompteur.txt', 'r+');"}
                    {"// Read the first line of the file, storing it in the $visitors variable"}
                    {"$visitors = fgets($file);"}
                    {"// Increment the visitor count by 1"}
                    {"$visitors++;"}
                    {"// Move the file pointer back to the beginning of the file"}
                    {"fseek($file, 0);"}
                    {"// Write the new visitor count into the file"}
                    {"fputs($file, $visitors);"}
                    {"// Close the file"}
                    {"fclose($file);"}
                    {"// Display the number of visitors"}
                    {"echo \"$visitors people have visited this page\";"}
                </pre>

                <p className="text-lg leading-relaxed mb-4">Some important notes:</p>
                <ul className="list-disc ml-6">
                    <li>You'll need to place a file named <code>moncompteur.txt</code> with the initial value of 0 on your site. You can set it to any number if you want the counter to start from a specific value (e.g., 1254).</li>
                    <li>The <strong>fopen()</strong> function opens the file with the "r+" mode for both reading and writing.</li>
                    <li><strong>fgets()</strong> reads the first line of the file.</li>
                    <li><strong>fseek()</strong> resets the file pointer to the beginning, ensuring the new visitor count overwrites the old one.</li>
                    <li><strong>fputs()</strong> writes the incremented visitor count back into the file.</li>
                    <li><strong>fclose()</strong> closes the file when you're done.</li>
                </ul>

                <p className="text-lg leading-relaxed mb-4">Here is a more concise version of the script using <strong>file_get_contents()</strong> and <strong>file_put_contents()</strong>:</p>

                <pre className="bg-gray-200 p-4 rounded">
                    {"$visitors = file_get_contents('moncompteur.txt');"}
                    {"$visitors++;"}
                    {"file_put_contents('moncompteur.txt', $visitors);"}
                    {"print(\"$visitors people have visited this page\");"}
                </pre>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Exercises</h2>

                <h3 className="text-xl font-medium mt-4">Reading a File</h3>
                <p className="text-lg leading-relaxed mb-4">Download the file that contains a list of websites essential for understanding the modern world.</p>
                <p className="text-lg leading-relaxed mb-4">Write a program that reads this file and generates a web page containing a list of hyperlinks.</p>

                <h4 className="text-lg font-medium mt-4">Instructions:</h4>
                <ul className="list-disc ml-6">
                    <li>Use the <code>file()</code> function, which reads a file and returns its contents as an array.</li>
                </ul>

                <h3 className="text-xl font-medium mt-4">Retrieving a Remote File</h3>
                <p className="text-lg leading-relaxed mb-4">A partner site provides a list of newly registered users at the following URL: <a href="https://ncode.amorce.org/customers.csv" target="_blank" rel="noopener noreferrer">https://ncode.amorce.org/customers.csv</a>.</p>
                <p className="text-lg leading-relaxed mb-4">This file is a CSV, where each line represents a new user, and the fields are: Surname, Firstname, Email, Phone, City, State, separated by commas.</p>

                <h4 className="text-lg font-medium mt-4">Instructions:</h4>
                <ul className="list-disc ml-6">
                    <li>Use the <code>file()</code> function to retrieve the content of this file.</li>
                    <li>Split each line using one of the following functions: <code>explode()</code> or <code>preg_split()</code>.</li>
                    <li>Display the result in an HTML table (using Bootstrap if possible), ensuring that the columns are correctly labeled.</li>
                </ul>
            </section>

        </div>
    );
};

export default IntroPHP;
