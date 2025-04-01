import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const PHPCRUDExplanation: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">PHP CRUD Application</h1>

            {/* Section 1: Overview of the CRUD Application */}
            <h2 className="text-2xl font-semibold mb-4">What is a CRUD Application?</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                A CRUD (Create, Read, Update, Delete) application is one of the most fundamental types of applications that interact with databases.
                It allows you to create, read, update, and delete records in a database. In this exercise, you will build an application to manage music albums.
            </p>

            {/* Section 2: The CRUD Operations */}
            <h2 className="text-2xl font-semibold mb-4">The CRUD Operations</h2>
            <div className="border-b border-gray-300 mb-6" />
            <h3 className="text-xl font-semibold mb-4">1. Display All Records (Read)</h3>
            <p className="mb-4 leading-relaxed">
                The first page, called the home page, should display a list of all records in the "disc" table. Each record will have a link to view its details, passing the record's ID as a parameter in the URL (e.g., <code>details.php?disc_id=1</code>).
                The page should also have a link to add a new record.
            </p>

            <h3 className="text-xl font-semibold mb-4">2. Add a New Record (Create)</h3>
            <p className="mb-4 leading-relaxed">
                The "Add" form allows users to create a new record. This form will be located in <code>add_form.php</code> and will include:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>A dropdown list of artists (retrieved from the "artist" table).</li>
                <li>Text fields for the album's details (e.g., title, release year, etc.).</li>
                <li>An option to upload an image for the album cover.</li>
            </ul>
            <p className="mb-4 leading-relaxed">
                When the form is submitted, it will post the data to <code>add_script.php</code> where:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>The data is retrieved from the form and inserted into the "disc" table.</li>
                <li>The uploaded file is processed (if any), and the record is created.</li>
                <li>The user is redirected back to the list page using <code>header("Location: index.php")</code>.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">3. View Details of a Record (Read)</h3>
            <p className="mb-4 leading-relaxed">
                The details page should display information about a specific album. The album ID will be passed in the URL, such as <code>details.php?disc_id=1</code>.
                This page will have links to:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>A form for editing the record (using the album's ID).</li>
                <li>A form for deleting the record (also using the album's ID).</li>
                <li>A link back to the list page.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">4. Edit an Existing Record (Update)</h3>
            <p className="mb-4 leading-relaxed">
                The update form allows you to edit the details of an existing album. The form will be in <code>update_form.php</code>, and will include:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>A dropdown list of artists, where the current artist of the album is pre-selected.</li>
                <li>Text fields for the album's details, pre-filled with the current data.</li>
                <li>An option to upload a new image for the album (if desired).</li>
            </ul>
            <p className="mb-4 leading-relaxed">When submitted, the form sends the data to <code>update_script.php</code> where:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>The form data is retrieved and an UPDATE query is executed.</li>
                <li>If a new file was uploaded, a second query is used to update the image.</li>
                <li>The user is redirected back to the list page using <code>header("Location: index.php")</code>.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">5. Delete a Record (Delete)</h3>
            <p className="mb-4 leading-relaxed">
                The delete function allows you to remove an album from the database. This action is usually performed on the details page, where there is a link to the delete form.
                When the user clicks "Delete", the <code>disc_id</code> is passed to the delete script, which then executes a DELETE query to remove the record from the "disc" table.
            </p>

            {/* Section 3: Securing SQL Queries */}
            <h2 className="text-2xl font-semibold mb-4">Securing SQL Queries</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                It's essential to validate user inputs before performing SQL operations. Use prepared statements to prevent SQL injection attacks and to ensure the integrity of your queries.
            </p>

            <h3 className="text-xl font-semibold mb-4">Using Prepared Statements</h3>
            <p className="mb-4 leading-relaxed">
                Instead of using raw SQL queries with user input directly, you should use prepared statements to bind parameters. Here's an example of a prepared statement in PHP:
            </p>

            <CodeBlock code={`$stmt = $conn->prepare("INSERT INTO disc (title, artist_id, year, cover_image) VALUES (:title, :artist_id, :year, :cover_image)");
$stmt->bindParam(':title', $title);
$stmt->bindParam(':artist_id', $artist_id);
$stmt->bindParam(':year', $year);
$stmt->bindParam(':cover_image', $cover_image);
$stmt->execute();`} />

            <p className="mb-4 leading-relaxed">
                Using <code>bindParam()</code> or <code>bindValue()</code> ensures that the inputs are safely handled by the database and prevents SQL injection attacks.
            </p>

            {/* Section 4: Function Libraries */}
            <h2 className="text-2xl font-semibold mb-4">Organizing Code with Function Libraries</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                To make your code more modular and maintainable, it's a good practice to isolate parts of your application into function libraries.
                For example, you can create separate files for:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Database connection (e.g., <code>db_connect.php</code>)</li>
                <li>Page header (e.g., <code>header.php</code>)</li>
                <li>Page footer (e.g., <code>footer.php</code>)</li>
            </ul>
            <p className="mb-4 leading-relaxed">
                This separation of concerns improves the readability and reusability of your code, allowing you to easily modify or extend the application in the future.
            </p>
        </div >
    );
};

export default PHPCRUDExplanation;
