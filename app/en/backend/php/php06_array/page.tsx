import { CodeBlock } from "@/components/CodeBlock/code-block";
import React from "react";

const ArraysPage: React.FC = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold mb-6 text-center">Arrays in PHP</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Introduction</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    An array is a variable that contains a list of values grouped in rows and columns.
                </p>
                <p className="text-lg mt-2">
                    Arrays are crucial in PHP scripting, and in many other languages as well. For example, when accessing databases, some functions return values in the form of arrays.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Declaring Arrays</h2>
                <div className="border-b border-gray-300 mb-6" />
                <h3 className="text-xl font-semibold mt-4">Simple Arrays</h3>
                <p className="text-lg mt-2">
                    Simple arrays can be declared in multiple ways.
                </p>
                <CodeBlock code={`<?php
$array = array(); // optional instruction
$array[0] = "Apple"; 
$array[1] = "Pear"; 
$array[2] = "Banana";
?>`} language="php" />

                <p className="mt-4">
                    Alternatively, you can use the push method:
                </p>
                <CodeBlock code={`<?php
$array = array(); // optional instruction
$array[] = "Apple"; 
$array[] = "Pear"; 
$array[] = "Banana";
?>`} language="php" />

                <p className="mt-4">
                    Or declare the array directly:
                </p>
                <CodeBlock code={`<?php
$array = array("Apple", "Pear", "Banana");
?>`} language="php" />

                <p className="mt-4">
                    All three methods result in the same array.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Multidimensional Arrays</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    A multidimensional array is an array of arrays, useful for representing tables or matrices.
                </p>
                <CodeBlock code={`<?php
$tab1[] = array(1, "January", "2016");
$tab1[] = array(2, "February", "2017");
$tab1[] = array(3, "March", "2018");
$tab1[] = array(4, "April", "2019");
?>`} language="php" />

                <p className="mt-4">
                    To access specific values, you use two indices:
                </p>
                <CodeBlock code={`<?php
echo $tab1[2][0]." ".$tab1[2][1]." ".$tab1[2][2]; // Outputs: 3 March 2018
?>`} language="php" />

            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Associative Arrays</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    An associative array allows you to associate a more descriptive key with a value.
                </p>
                <p className="mt-4">
                    For instance, if you want to track your phone bill for each month, using a simple array you would index it by numbers:
                </p>
                <CodeBlock code={`<?php
$invoice[0] = 500; // January
$invoice[1] = 620; // February
$invoice[11] = 300; // December
?>`} language="php" />

                <p className="mt-4">
                    With associative arrays, you can use month names as keys:
                </p>
                <CodeBlock code={`<?php
$invoice["January"] = 500; 
$invoice["February"] = 620; 
$invoice["December"] = 300;
?>`} language="php" />

                <p className="mt-4">
                    You can also declare it in a shorthand way using the association operator {`=>`}:
                </p>
                <CodeBlock code={`<?php
$invoice = array(
    "January" => 500,
    "February" => 620,
    "December" => 300
);
?>`} language="php" />

            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Manipulating Associative Arrays</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    After creating an associative array, it is essential to manipulate and sort the values. PHP offers a wide range of functions for this purpose.
                </p>

                <h3 className="text-xl font-semibold mt-4">Example:</h3>
                <CodeBlock code={`<?php
$invoice = array("January"=>500, "February"=>620, "March"=>300, "April"=>130, "May"=>560, "June"=>350); 
$invoice_sixmonths = 0;

foreach ($invoice as $month => $value) {
    echo "Invoice for $month: $value Dollars<br />";
    $invoice_sixmonths += $value;
}

echo "Total invoice for six months: <b>$invoice_sixmonths Dollars</b>";
?>`} language="php" />

                <p className="mt-4">
                    The `foreach` loop extracts a pair (key, value) at each iteration, making it easy to process all elements in an associative array.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Sorting Arrays</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    PHP provides a complete set of functions for sorting arrays.
                </p>

                <h3 className="text-xl font-semibold mt-4">The `sort()` Function</h3>
                <p className="text-lg mt-2">
                    The `sort()` function sorts the array in ascending alphabetical or numerical order.
                </p>
                <CodeBlock code={`<?php
$names = array("john", "sophia", "alexander", "maria", "emilia");   
sort($names);

for ($i = 0; $i <= count($names) - 1; $i++) {
    echo "$names[$i]<br>";
}
?>`} language="php" />

                <p className="mt-4">
                    The result will be: `alexander`, `emilia`, `john`, `maria`, `sophia`.
                </p>

                <h3 className="text-xl font-semibold mt-4">The `rsort()` Function</h3>
                <p className="text-lg mt-2">
                    The `rsort()` function sorts the array in descending order.
                </p>
                <CodeBlock code={`<?php
$names = array("john", "sophia", "alexander", "maria", "emilia");
rsort($names);

for ($i = 0; $i <= count($names) - 1; $i++) {
    echo "$names[$i]<br>";
}
?>`} language="php" />

                <p className="mt-4">
                    The result will be: `sophia`, `maria`, `john`, `emilia`, `alexander`.
                </p>
            </section>


            <section className="mb-6">
                <h2 className="text-2xl font-semibold">The `asort()` Function</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    The `asort()` function sorts an associative array in descending order based on the values, while preserving the keys.
                </p>

                <h3 className="text-xl font-semibold mt-4">Example:</h3>
                <CodeBlock code={`<?php
$array = array("a" => "Monday", "b" => "Tuesday", "c" => "Wednesday", "d" => "Thursday", "e" => "Friday");

asort($array);

foreach($array as $key => $value) {
    echo "$key : $value<br />";
}
?>`} language="php" />

                <p className="mt-4">
                    This will display the days in the same order with their respective keys: `day[a] = Monday`, `day[b] = Tuesday`, etc.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">The `arsort()` Function</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    Similar to `asort()`, the `arsort()` function sorts an associative array in descending order by value, while keeping the keys intact.
                </p>

                <h3 className="text-xl font-semibold mt-4">Example:</h3>
                <CodeBlock code={`<?php
$array = array("a" => "Monday", "b" => "Tuesday", "c" => "Wednesday", "d" => "Thursday");

arsort($array);

foreach($array as $key => $value) {
    echo "$key : $value<br />";
}
?>`} language="php" />

                <p className="mt-4">
                    This will display the days in descending order by value: `day[c] = Wednesday`, `day[b] = Tuesday`, etc.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">The `count()` Function</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    The `count()` function returns the number of elements in an array.
                </p>

                <h3 className="text-xl font-semibold mt-4">Example:</h3>
                <CodeBlock code={`<?php
$array = array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday");
$nb = count($array);
echo "Le tableau contient $nb éléments.";
?>`} language="php" />

                <p className="mt-4">
                    This will output: `Le tableau contient 5 éléments.`
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">The `array_push()` Function</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    The `array_push()` function adds one or more elements to the end of an array.
                </p>

                <h3 className="text-xl font-semibold mt-4">Example:</h3>
                <CodeBlock code={`<?php
$array = array("Monday", "Tuesday", "Wednesday", "Thursday");
array_push($array, "Friday");
print_r($array);
?>`} language="php" />

                <p className="mt-4">
                    The array now contains: `["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]`.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">The `array_pop()` Function</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    The `array_pop()` function removes the last element from an array.
                </p>

                <h3 className="text-xl font-semibold mt-4">Example:</h3>
                <CodeBlock code={`<?php
$array = array("Monday", "Tuesday", "Wednesday");
$day = array_pop($array);
echo "Removed: $day<br />";
print_r($array);
?>`} language="php" />

                <p className="mt-4">
                    The array now contains: `["Monday", "Tuesday"]`, and the removed element is `Wednesday`.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">The `array_unshift()` Function</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    The `array_unshift()` function adds one or more elements to the beginning of an array.
                </p>

                <h3 className="text-xl font-semibold mt-4">Example:</h3>
                <CodeBlock code={`<?php
$array = array("Thursday", "Friday");
array_unshift($array, "Monday", "Tuesday", "Wednesday");
print_r($array);
?>`} language="php" />

                <p className="mt-4">
                    The array now contains: `["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]`.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">The `array_shift()` Function</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    The `array_shift()` function removes the first element from an array.
                </p>

                <h3 className="text-xl font-semibold mt-4">Example:</h3>
                <CodeBlock code={`<?php
$array = array("Thursday", "Friday");
$day = array_shift($array);
echo "Removed: $day<br />";
print_r($array);
?>`} language="php" />

                <p className="mt-4">
                    The array now contains: `["Friday"]`, and the removed element is `Thursday`.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Other Useful Functions</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg mt-2">
                    There are many other useful functions in PHP for working with arrays. Some of them include:
                </p>
                <ul className="list-disc pl-6 mt-2">
                    <li>array_reverse()</li>
                    <li>array_key_exists()</li>
                    <li>array_merge()</li>
                    <li>array_diff()</li>
                    <li>array_intersect()</li>
                    <li>array_column()</li>
                    <li>array_slice()</li>
                    <li>array_splice()</li>
                    <li>array_sum()</li>
                    <li>array_unique()</li>
                    <li>in_array()</li>
                    <li>array_values()</li>
                    <li>shuffle()</li>
                </ul>
                <p className="mt-4">
                    You can find more details about these functions in the official PHP documentation.
                </p>
            </section>

            <section className="mb-4">
                <h2 className="text-2xl font-semibold">Reference</h2>
                <div className="border-b border-gray-300 mb-6" />
                <a className="text-blue-600 text-xl ml-4" href="https://www.php.net/manual/en/ref.array.php">Array functions</a>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Exercices</h2>
                <div className="border-b border-gray-300 mb-6" />
                <h3 className="text-xl ml-4 my-4">1. Non-Leap Year Months</h3>

                <p className="text-lg leading-relaxed mb-4">Create an array that associates each month of the year with the number of days in that month.

                    Use the names of the months as the keys of your associative array.

                    Display the array (in an HTML table) to show the name of each month and the number of days in that month.

                    Then, sort the array using the number of days as the criterion, and display the result.</p>

                <h3 className="text-xl ml-4 my-4">2. Capitales</h3>

                <CodeBlock code={`$capitales = array(
    "Bucarest" => "Romania",
    "Bruxelles" => "Belgium",
    "Oslo" => "Norway",
    "Ottawa" => "Canada",
    "Paris" => "France",
    "Port-au-Prince" => "Haiti",
    "Port-d'Espagne" => "Trinidad and Tobago",
    "Prague" => "Czech Republic",
    "Rabat" => "Morocco",
    "Riga" => "Latvia",
    "Rome" => "Italy",
    "San José" => "Costa Rica",
    "Santiago" => "Chile",
    "Sofia" => "Bulgaria",
    "Alger" => "Algeria",
    "Amsterdam" => "Netherlands",
    "Andorre-la-Vieille" => "Andorra",
    "Asuncion" => "Paraguay",
    "Athènes" => "Greece",
    "Bagdad" => "Iraq",
    "Bamako" => "Mali",
    "Berlin" => "Germany",
    "Bogota" => "Colombia",
    "Brasilia" => "Brazil",
    "Bratislava" => "Slovakia",
    "Varsovie" => "Poland",
    "Budapest" => "Hungary",
    "Le Caire" => "Egypt",
    "Canberra" => "Australia",
    "Caracas" => "Venezuela",
    "Jakarta" => "Indonesia",
    "Kiev" => "Ukraine",
    "Kigali" => "Rwanda",
    "Kingston" => "Jamaica",
    "Lima" => "Peru",
    "Londres" => "United Kingdom",
    "Madrid" => "Spain",
    "Malé" => "Maldives",
    "Mexico" => "Mexico",
    "Minsk" => "Belarus",
    "Moscou" => "Russia",
    "Nairobi" => "Kenya",
    "New Delhi" => "India",
    "Stockholm" => "Sweden",
    "Téhéran" => "Iran",
    "Tokyo" => "Japan",
    "Tunis" => "Tunisia",
    "Copenhague" => "Denmark",
    "Dakar" => "Senegal",
    "Damas" => "Syria",
    "Dublin" => "Ireland",
    "Erevan" => "Armenia",
    "La Havane" => "Cuba",
    "Helsinki" => "Finland",
    "Islamabad" => "Pakistan",
    "Vienne" => "Austria",
    "Vilnius" => "Lithuania",
    "Zagreb" => "Croatia"
);`} language="php" />


                <h4 className="text-lg ml-2 my-2">From the array above:</h4>
                <ul className="list-decimal ml-12">
                    <li>Display the list of capitals (in alphabetical order) followed by the name of the country.</li>
                    <li>Display the list of countries (in alphabetical order) followed by the name of the capital.</li>
                    <li>Display the number of countries in the array.</li>
                    <li>Remove all capitals that do not start with the letter 'B', then display the updated array.</li>
                </ul>

                <h3 className="text-xl ml-4 my-4">3. States and Counties</h3>
                <CodeBlock code={`$departments = array(
    "California" => array("Los Angeles", "San Francisco", "San Diego", "Sacramento", "Fresno"),
    "Texas" => array("Houston", "Dallas", "Austin", "San Antonio", "El Paso"),
    "Florida" => array("Miami", "Orlando", "Tampa", "Jacksonville", "Tallahassee"),
    "New York" => array("New York City", "Buffalo", "Rochester", "Albany", "Syracuse")
);`} language="php" />


                <h4 className="text-lg ml-2 my-2">From the array above:</h4>
                <ul className="list-decimal ml-12">
                    <li>Display the list of states (sorted alphabetically) followed by the names of their counties.</li>
                    <li>Display the list of states followed by the number of counties.</li>
                </ul>
            </section>
        </div>
    );
};

export default ArraysPage;
