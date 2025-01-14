import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const PDOConnectionMySQL: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Connecting to a MySQL Database with PDO</h1>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Introduction</h2><div className="border-b border-gray-300 mb-6" />

            <p className="text-xl font-bold mb-3 ml-6">- In the upcoming lessons, you will use the database
                <a
                    href="/SCRIPT/record.sql"
                    download="record.sql"
                    className="text-primary hover:underline font-medium text-blue-600"
                > record </a>
            </p>

            <p className="text-xl font-bold mb-3 ml-6">- You will likely need
                <a
                    href="/DISC_PICTURES.zip"
                    download="DISC_PICTURES.zip"
                    className="text-primary hover:underline font-medium text-blue-600"
                > pictures </a> as well.
            </p>

            {/* Section 1: Introduction to PDO */}
            <h2 className="text-2xl font-semibold mb-4 mt-6">What is PDO?</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                PDO (PHP Data Objects) is a PHP extension that allows you to interact with databases in a secure and abstract way.
                It enables you to execute SQL queries and retrieve data while providing compatibility with multiple types of databases,
                such as MySQL, Oracle, and others.
            </p>

            <h3 className="text-xl font-semibold mb-4">Benefits of PDO</h3>
            <ul className="list-disc pl-6 mb-4">
                <li>Database abstraction (works with MySQL, PostgreSQL, etc.).</li>
                <li>Improved error handling with exceptions.</li>
                <li>Support for prepared statements to prevent SQL injection.</li>
            </ul>

            {/* Section 2: Connecting to MySQL with PDO */}
            <h2 className="text-2xl font-semibold mb-4">Connecting to a MySQL Server</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                To connect to a MySQL database, simply create an instance of the <code>PDO</code> class with the DSN (Data Source Name), username, and password.
            </p>
            <CodeBlock code={`$db = new PDO('mysql:host=localhost;dbname=record;charset=utf8', 'root', '');`} />

            {/* Section 3: Handling Connection Errors */}
            < h2 className="text-2xl font-semibold mb-4" > Handling Connection Errors</h2 ><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                If there are any connection errors, a <code>PDOException</code> will be thrown. You can catch this exception to handle the error or let the global error handler manage it.
                By default, PDO operates in silent error mode, meaning it doesn't display error messages. You need to call <code>errorCode()</code> and <code>errorInfo()</code> to check for errors.
            </p>
            <CodeBlock code={`try {
    $db = new PDO('mysql:host=localhost;dbname=record;charset=utf8', 'root', '');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    echo 'Error: ' . $e->getMessage() . '<br />';
    echo 'Code: ' . $e->getCode();
    die('End of script');
}`} />

            {/* Section 4: Creating a Simple Query */}
            <h2 className="text-2xl font-semibold mb-4">Creating a Simple SQL Query</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Once connected to the database, we can create a simple query to retrieve data. In this example, we will display a list of artists from the database.
            </p>
            <CodeBlock code={`$query = $db->query("SELECT * FROM artist");
$table = $query->fetchAll(PDO::FETCH_OBJ);
$query->closeCursor();`} />
            <p className="mb-4 leading-relaxed">
                The variable <code>$table</code> will hold the result of the query, which is an array of artist objects. To access the data, we use object notation (e.g., <code>$artist-{`>`}artist_name</code>).
            </p>

            {/* Section 5: Displaying Data */}
            <h2 className="text-2xl font-semibold mb-4">Displaying Data</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Here’s how you can display the results in a basic HTML structure:
            </p>
            <CodeBlock code={`<body>
    <?php foreach ($table as $artist): ?>
        <div>
            <?= $artist->artist_name ?>
        </div>
    <?php endforeach; ?>
</body>`} />

            {/* Section 6: Query with Parameters */}
            < h2 className="text-2xl font-semibold mb-4" > Query with Parameters</h2 ><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                If you want to display the details of a specific album, you can pass a parameter (e.g., the album ID) to your query. Here's an example of how to do it using prepared statements:
            </p>
            <CodeBlock code={`$query = $db->prepare("SELECT * FROM disc WHERE disc_id = ?");
$query->execute([$_GET["disc_id"]]);
$disc = $query->fetch(PDO::FETCH_OBJ);`} />

            <h3 className="text-xl font-semibold mb-4">Displaying the Disc Details</h3>
            <p className="mb-4 leading-relaxed">
                After executing the query, you can display the album details in HTML like this:
            </p>
            <CodeBlock code={`<body>
    <p className="text-lg leading-relaxed mb-4">Disc N° <?= $disc->disc_id ?></p>
    <p className="text-lg leading-relaxed mb-4">Disc Name: <?= $disc->disc_name ?></p>
    <p className="text-lg leading-relaxed mb-4">Disc Year: <?= $disc->disc_year ?></p>
</body>`} />

            {/* Section 7: Error Handling for Non-existent Disc */}
            < h2 className="text-2xl font-semibold mb-4" > Handling Non - existent Records</h2 ><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                If the disc doesn't exist in the database, the variable <code>$disc</code> will be <code>null</code>. You should handle this case by checking if the result is null and displaying a custom message.
            </p>
        </div >
    );
};

export default PDOConnectionMySQL;
