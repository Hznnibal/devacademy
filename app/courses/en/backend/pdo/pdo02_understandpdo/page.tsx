import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const PDOConnectionExplanation: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Working with MySQL Using PDO</h1>

            {/* Section 1: Introduction to PDO */}
            <h2 className="text-2xl font-semibold mb-4">What is PDO?</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                PDO (PHP Data Objects) is a PHP extension that provides an interface for interacting with relational databases, including MySQL.
                It acts as an abstraction layer that allows developers to interact with the database without writing database-specific queries.
                This makes the code more portable and easier to maintain.
            </p>

            <h3 className="text-xl font-semibold mb-4">PDO Benefits</h3>
            <ul className="list-disc pl-6 mb-4">
                <li>Abstracts interaction with various database types (MySQL, PostgreSQL, etc.).</li>
                <li>Provides better error handling with exceptions.</li>
                <li>Prevents SQL injection attacks through prepared statements.</li>
            </ul>

            {/* Section 2: Ensuring PDO Installation */}
            <h2 className="text-2xl font-semibold mb-4">Ensure PDO is Installed</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Before starting, ensure that PDO is installed on your PHP server and that you have a MySQL database set up and ready to use.
            </p>

            {/* Section 3: Connecting to the Database */}
            <h2 className="text-2xl font-semibold mb-4">Connecting to the MySQL Database</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                The first step is to establish a connection to the MySQL database using PDO. Here's an example:
            </p>
            <CodeBlock code={`$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Successfully connected to the database";
} catch(PDOException $e) {
    echo "Database connection error: " . $e->getMessage();
}`} />

            <h3 className="text-xl font-semibold mb-4">Using a Function to Connect</h3>
            <p className="mb-4 leading-relaxed">
                Alternatively, you can use a function to establish the connection:
            </p>
            <CodeBlock code={`function connect_database() {
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Successfully connected to the database";
        return $conn;
    } catch(PDOException $e) {
        echo "Database connection error: " . $e->getMessage();
    }
}`} />

            <p className="mb-4 leading-relaxed">
                The <code>$conn</code> variable represents the PDO instance created by passing the connection parameters to the constructor (database name, database type - MySQL in this case, username, and password).
                We've also configured PDO to throw exceptions on errors, allowing you to handle them properly instead of receiving a boolean value on failure.
            </p>

            {/* Section 4: Executing Queries */}
            <h2 className="text-2xl font-semibold mb-4">Executing SQL Queries</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Once connected to the database, you can execute SQL queries using PDO. For example, to select all dishes from the "dish" table, you can use:
            </p>
            <CodeBlock code={`$stmt = $conn->query("SELECT * FROM dish");

while ($row = $stmt->fetch()) {
    echo $row['name'] . "<br>";
}`} />

            <h3 className="text-xl font-semibold mb-4">Fetching All Results</h3>
            <p className="mb-4 leading-relaxed">
                You can fetch all results at once and loop through them like this:
            </p>
            <CodeBlock code={`$plats = $stmt->fetchAll(PDO::FETCH_OBJ);
foreach($plats as $dish) {
    echo $dish->name . "<br>";
}`} />

            {/* Section 5: Prepared Queries */}
            <h2 className="text-2xl font-semibold mb-4">Using Prepared Queries</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Prepared queries are SQL queries where parameters are replaced by placeholders, which are then substituted with actual values when executing the query.
                Prepared statements are much safer than non-prepared ones because they protect against SQL injection attacks.
            </p>
            <p className="mb-4 leading-relaxed">
                To prevent SQL injections, PDO allows you to bind variables to placeholders in the query. Here’s an example of preparing a query to select dishes from a specific category:
            </p>
            <CodeBlock code={`$id_category = 1;
$stmt = $conn->prepare("SELECT * FROM dish WHERE id_category = :id_category");
$stmt->bindValue(':id_category', $id_category);
$stmt->execute();

while ($row = $stmt->fetch()) {
    echo $row['name'] . "<br>";
}`} />

            <p className="mb-4 leading-relaxed">
                In this case, we've used <code>bindValue()</code> to bind the <code>:id_category</code> parameter to the value of <code>$id_category</code>. This ensures that the placeholder is safely replaced by the actual value when executing the query.
            </p>


            {/* Section 1: Introduction to Bind Methods */}
            <h2 className="text-2xl font-semibold mb-4">What are `bindParam()` and `bindValue()`?</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                In PDO (PHP Data Objects), the methods `bindParam()` and `bindValue()` are used to bind values to placeholders in prepared SQL queries. Both methods have similar functionality, but they differ in how they handle the values.
            </p>

            <h3 className="text-xl font-semibold mb-4">Differences Between `bindParam()` and `bindValue()`</h3>
            <p className="mb-4 leading-relaxed">
                - <strong>`bindValue()`</strong> binds a value to a parameter at the time of the method call. This value is evaluated immediately and passed to the query.
                - <strong>`bindParam()`</strong> binds a variable to a parameter, but its value is evaluated when the query is executed, not when it’s bound. This means that if the variable changes before execution, the new value will be used in the query.
            </p>

            {/* Section 2: Example of `bindValue()` */}
            <h2 className="text-2xl font-semibold mb-4">Using `bindValue()`</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Here’s an example of using `bindValue()` to bind a parameter in a query:
            </p>
            <CodeBlock code={`$name = 'pizza';
$stmt = $pdo->prepare("SELECT * FROM dish WHERE name = :name");
$stmt->bindValue(':name', $name, PDO::PARAM_STR);
$stmt->execute();`} />
            <p className="mb-4 leading-relaxed">
                In this example, the value of the variable <code>$name</code> is immediately passed to the query as a string. If the value of <code>$name</code> changes later, it won’t affect the query, as the value was passed when the method was called.
            </p>

            {/* Section 3: Example of `bindParam()` */}
            <h2 className="text-2xl font-semibold mb-4">Using `bindParam()`</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Now, let's look at an example using `bindParam()`. Here, the value of the variable is passed to the query when it is executed, not when it is bound:
            </p>
            <CodeBlock code={`$name = 'pizza';
$stmt = $pdo->prepare("SELECT * FROM dish WHERE name = :name");
$stmt->bindParam(':name', $name, PDO::PARAM_STR);
$name = 'pasta';  // Changing the variable value
$stmt->execute();`} />
            <p className="mb-4 leading-relaxed">
                In this case, since we used `bindParam()`, the query will use the updated value of <code>$name</code> (which is now 'pasta') when executed, not the original 'pizza'.
            </p>

            {/* Section 4: Choosing Between `bindParam()` and `bindValue()` */}
            <h2 className="text-2xl font-semibold mb-4">When to Use `bindParam()` vs `bindValue()`</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                - Use <strong>`bindValue()`</strong> when you know the value won’t change before execution (such as static values).
                - Use <strong>`bindParam()`</strong> when you expect the variable to change before execution, and you want to use the final value in the query.
            </p>

            {/* Section 5: Working with Different Data Types */}
            <h2 className="text-2xl font-semibold mb-4">Binding Different Data Types</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                You can specify the data type when using `bindParam()`. This can help ensure the correct data type is used in the query, especially when dealing with integers, strings, or other types:
            </p>
            <CodeBlock code={`$qty = 2;
$stmt = $pdo->prepare("SELECT * FROM order WHERE quantity > :qty");
$stmt->bindParam(':qty', $qty, PDO::PARAM_INT);
$stmt->execute();`} />
            <p className="mb-4 leading-relaxed">
                In this example, we are explicitly binding the integer value <code>$qty</code> to the placeholder <code>:qty</code>, using <code>PDO::PARAM_INT</code> to indicate that it's an integer.
            </p>

            {/* Section 6: Conclusion */}
            <h2 className="text-2xl font-semibold mb-4">Conclusion</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Both `bindValue()` and `bindParam()` are useful for preventing SQL injection and ensuring that user inputs are safely handled in your queries. The choice between them depends on whether the value will change during execution and how you wish to handle the binding.
            </p>

            {/* Section 1: Introduction to Transactions */}
            <h2 className="text-2xl font-semibold mb-4">What is a Transaction?</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                A transaction allows you to group multiple database operations into a single logical unit.
                This ensures that all operations are executed atomically, meaning all must succeed or none of them will be executed.
            </p>

            <h3 className="text-xl font-semibold mb-4">Benefits of Transactions</h3>
            <ul className="list-disc pl-6 mb-4">
                <li>Ensures data consistency in case of an error.</li>
                <li>Allows managing complex operations involving multiple queries.</li>
                <li>Prevents partial data errors in the database.</li>
            </ul>

            {/* Section 2: Example of Using Transactions */}
            <h2 className="text-2xl font-semibold mb-4">Example of Using Transactions</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Here is an example of a transaction where we add a new category and several dishes associated with that category:
            </p>

            <CodeBlock code={`try {
    // Start the transaction
    $conn->beginTransaction();

    // Add a new category
    $stmt = $conn->prepare("INSERT INTO category (name, image, active) VALUES (:name, :image, :active)");
    $stmt->bindValue(':name', 'French Cuisine');
    $stmt->bindValue(':image', 'new_cat.jpg');
    $stmt->bindValue(':active', 'Yes');
    $stmt->execute();
    $id_category = $conn->lastInsertId();

    // Add several new dishes
    $stmt = $conn->prepare("INSERT INTO dish (name, description, price, image, active, id_category) VALUES (:name, :description, :price, :image, :active, :id_category)");
    $stmt->bindValue(':name', 'Gratin Dauphinois');
    $stmt->bindValue(':description', 'A traditional winter dish made of potatoes cooked in cream, milk, and nutmeg.');
    $stmt->bindValue(':price', 13.50);
    $stmt->bindValue(':image', 'plat1.jpg');
    $stmt->bindValue(':active', 'Yes');
    $stmt->bindValue(':id_category', $id_category);
    $stmt->execute();

    $stmt = $conn->prepare("INSERT INTO dish (name, description, price, image, active, id_category) VALUES (:name, :description, :price, :image, :active, :id_category)");
    $stmt->bindValue(':name', 'Ratatouille');
    $stmt->bindValue(':description', 'A Mediterranean stew made with sun vegetables and olive oil.');
    $stmt->bindValue(':price', 10.00);
    $stmt->bindValue(':image', 'plat2.jpg');
    $stmt->bindValue(':active', 'Yes');
    $stmt->bindValue(':id_category', $id_category);
    $stmt->execute();

    // Commit the transaction
    $conn->commit();
} catch (PDOException $e) {
    // In case of an error, rollback the transaction
    $conn->rollback();
    echo "Error: " . $e->getMessage();
}`} />

            <h3 className="text-xl font-semibold mb-4">Explanation</h3>
            <p className="mb-4 leading-relaxed">
                In this example, the transaction adds a new category "French Cuisine" to the "category" table, and then adds two dishes ("Gratin Dauphinois" and "Ratatouille") to the "dish" table, associating them with that category.
                The transaction is wrapped in a try/catch block to handle PDO exceptions.
            </p>
            <p className="mb-4 leading-relaxed">
                The try block starts by calling the <code>beginTransaction()</code> method on the PDO object to initiate the transaction. All subsequent queries executed on the PDO object are part of this transaction until it is either committed or rolled back.
            </p>
            <p className="mb-4 leading-relaxed">
                The first prepared statement inserts a new category into the "category" table with the values "French Cuisine", "new_cat.jpg", and "Yes" for the columns <code>name</code>, <code>image</code>, and <code>active</code>.
                The <code>bindValue()</code> method is used to bind the parameter values to the actual data, and the <code>execute()</code> method runs the query.
                The <code>lastInsertId()</code> method retrieves the ID of the newly inserted category, which will be used as a foreign key to associate the dishes in the "dish" table.
            </p>
            <p className="mb-4 leading-relaxed">
                The next two prepared statements insert two dishes ("Gratin Dauphinois" and "Ratatouille") into the "dish" table with details like name, description, price, image, and the category ID.
                Again, <code>bindValue()</code> is used to bind the values to the named parameters, and <code>execute()</code> runs the queries.
            </p>
            <p className="mb-4 leading-relaxed">
                Finally, if no exceptions are thrown, the <code>commit()</code> method is called to commit the transaction. Otherwise, in the catch block, <code>rollback()</code> is called to undo the transaction and the error message is displayed.
            </p>

            {/* Section 3: Error Handling with PDO */}
            <h2 className="text-2xl font-semibold mb-4">Error Handling with PDO</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Using transactions and operations with PDO can generate errors. It is essential to handle these errors properly to ensure the stability and security of your application.
            </p>

            <h3 className="text-xl font-semibold mb-4">Using Try/Catch for Error Handling</h3>
            <p className="mb-4 leading-relaxed">
                Here's how you can use try/catch to handle PDO errors:
            </p>

            <CodeBlock code={`try {
    $conn = new PDO("mysql:host=localhost;dbname=the_district", "username", "password");

    // Perform a database operation
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}`} />

            <p className="mb-4 leading-relaxed">
                The above code uses a try/catch block to wrap any database operation. If a PDO exception is thrown, it is caught by the catch block, and the error message is displayed.
            </p>

            <h3 className="text-xl font-semibold mb-4">Setting Error Mode</h3>
            <p className="mb-4 leading-relaxed">
                The <code>PDO::ATTR_ERRMODE</code> constant defines the error mode for the PDO connection.
                There are three possible values for this constant: <code>PDO::ERRMODE_SILENT</code>, <code>PDO::ERRMODE_WARNING</code>, and <code>PDO::ERRMODE_EXCEPTION</code>.
            </p>
            <p className="mb-4 leading-relaxed">
                <code>PDO::ERRMODE_SILENT</code> is the default error mode and does not generate any error or warning, making it difficult to detect errors.
                <code>PDO::ERRMODE_WARNING</code> generates a PHP warning for each error, while <code>PDO::ERRMODE_EXCEPTION</code> generates an exception for each error, which allows for better structured error handling in the code.
            </p>
            <p className="mb-4 leading-relaxed">
                The line <code>$conn-{`>`}setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION)</code> ensures that exceptions are thrown for any error that occurs during database interactions.
            </p>
        </div >
    );
};

export default PDOConnectionExplanation;
