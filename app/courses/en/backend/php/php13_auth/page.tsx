import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const PHP_Passwords: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">PHP - Passwords</h1>

            {/* Introduction Section */}
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                The password is undoubtedly the first thing we think of when it comes to cybersecurity, and it’s also the weakest link in many systems.
            </p>
            <p className="mb-4 leading-relaxed">
                How long would it take to crack your password?
            </p>
            <p className="mb-4 leading-relaxed">
                <a href="https://www.cnil.fr/fr/comprendre-les-grands-principes-de-la-cryptologie-et-du-chiffrement" target="_blank" rel="noopener noreferrer">Learn more about cryptography and encryption</a>
            </p>

            {/* Storing Passwords Section */}
            <h2 className="text-2xl font-semibold mb-4">Storing Passwords</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                A password should never be stored in plaintext. It must be encrypted using a hashing algorithm so that its value cannot be read directly.
                For example, the password "vacances" would be transformed into something like <code className="px-1 rounded">$2y$10$xybwIx80qUbemOsCiobdZeK4JIg2qe8BrT83vGJF1QqyJ9bnycrx6</code>.
            </p>
            <p className="mb-4 leading-relaxed">
                While MD5 or SHA1 were once used, these algorithms have been cracked. Nowadays, PHP functions such as <code className="px-1 rounded">password_hash()</code> and <code className="px-1 rounded">password_verify()</code> are the recommended ways to handle password storage securely.
            </p>

            {/* password_hash Function Section */}
            <h2 className="text-2xl font-semibold mb-4">password_hash() Function</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                The <code className="px-1 rounded">password_hash()</code> function allows you to use secure hashing algorithms like bcrypt in PHP to generate a hash of a password.
                The syntax is:
            </p>

            <CodeBlock code={`$password_hash = password_hash("vacances", PASSWORD_DEFAULT);
echo $password_hash;`} language="php" />

            <p className="mb-4 leading-relaxed">
                This will output a string like <code className="px-1 rounded">$2y$10$xybwIx80qUbemOsCiobdZeK4JIg2qe8BrT83vGJF1QqyJ9bnycrx6</code>, which is the hashed password to store in the database.
            </p>

            {/* password_verify Function Section */}
            <h2 className="text-2xl font-semibold mb-4">password_verify() Function</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                To verify if a password entered by the user matches the stored hash, use the <code className="px-1 rounded">password_verify()</code> function.
                The syntax is:
            </p>

            <CodeBlock code={`if (password_verify($entered_password, $stored_hash)) {
    echo "Password is correct!";
} else {
    echo "Invalid password.";
}`} language="php" />

            {/* Recommendations Section */}
            <h2 className="text-2xl font-semibold mb-4">Official Recommendations</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                The French National Cybersecurity Agency (ANSSI) and the CNIL offer official recommendations for secure password handling:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li><a href="https://www.ssi.gouv.fr/guide/mot-de-passe" target="_blank" rel="noopener noreferrer">ANSSI Password Guide</a></li>
                <li><a href="https://www.cnil.fr/fr/les-conseils-de-la-cnil-pour-un-bon-mot-de-passe" target="_blank" rel="noopener noreferrer">CNIL Password Recommendations</a></li>
            </ul>

            {/* Functional Specifications Section */}
            <h2 className="text-2xl font-semibold mb-4">Functional Specifications</h2>

            <h3 className="text-xl font-semibold mb-4">Account Creation</h3>
            <p className="mb-4 leading-relaxed">
                The user fills out a form with a unique identifier, such as an email address. This identifier must be strictly unique in the database.
                The user then enters a password.
                If the user is allowed to choose their own password, they must confirm it by entering it twice. The password should be validated (checking for matching entries, strength, etc.) before being hashed.
            </p>
            <p className="mb-4 leading-relaxed">
                Once the password is validated, it must be hashed using <code className="px-1 rounded">password_hash()</code>, and the hashed password should be stored in the database. Never store passwords in plaintext, never store them in a session, and never send confirmation emails containing the password in plaintext.
            </p>

            <h3 className="text-xl font-semibold mb-4">Authentication</h3>
            <p className="mb-4 leading-relaxed">
                During login, the user enters their email and password. Limit login attempts to 3 (as per official recommendations), and block users who exceed this number (store this count in the database).
            </p>
            <p className="mb-4 leading-relaxed">
                Once the user is authenticated, store certain information (email, first name, last name) in the session but never the password.
            </p>

            <h3 className="text-xl font-semibold mb-4">Password Reset</h3>
            <p className="mb-4 leading-relaxed">
                If a user forgets their password, provide them with a way to reset it. Never send the current password in an email since it’s stored as a hash.
                For password recovery:</p>
            <ul className="list-disc pl-6">
                <li>Provide a "forgot password" link on the login page.</li>
                <li>Request the user's identifier (email address) on the password recovery form.</li>
                <li>If the user is found in the database, send them an email with a link to a form where they can enter a new password.</li>
                <li>Never send an email containing the new password.</li>
            </ul>


            {/* Exercise 1: Authentication Form */}
            <h2 className="text-2xl font-semibold mb-4">Exercise 1: Authentication Form</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                In this exercise, we will create a simple authentication form using sessions.
            </p>
            <h3 className="text-xl font-semibold mb-4">1. Creating the Login Form</h3>
            <p className="mb-4 leading-relaxed">
                Create a file called <code className="px-1 rounded">login_form.php</code> containing two fields: login (which can be the email address) and password. This form should post the data to a script called <code className="px-1 rounded">login_script.php</code>.
            </p>

            <CodeBlock code={`<!-- login_form.php -->
<form action="login_script.php" method="POST">
    <label for="login">Login (Email):</label>
    <input type="email" name="login" required>
    <label for="password">Password:</label>
    <input type="password" name="password" required>
    <button type="submit">Login</button>
</form>`} language="php" />

            <h3 className="text-xl font-semibold mb-4">2. Processing the Data with PHP</h3>
            <p className="mb-4 leading-relaxed">
                In <code className="px-1 rounded">login_script.php</code>, process the form data as follows:
                If the login and password are correct (for example, login = 'admin' and password = 'admin'), initialize a session variable <code className="px-1 rounded">auth</code> with the value <code className="px-1 rounded">ok</code>.
                Otherwise, destroy the session variable <code className="px-1 rounded">auth</code>.
            </p>

            <CodeBlock code={`<!-- login_script.php -->
<?php
session_start();

if ($_POST['login'] == 'admin' && $_POST['password'] == 'admin') {
    $_SESSION['auth'] = 'ok';
    header('Location: protected_page.php');
} else {
    unset($_SESSION['auth']);
    header('Location: login_form.php');
}
?>`} language="php" />

            <h3 className="text-xl font-semibold mb-4">3. Protecting the Page</h3>
            <p className="mb-4 leading-relaxed">
                Create a protected page (<code className="px-1 rounded">protected_page.php</code>) that is only accessible if the session is initialized. If the <code className="px-1 rounded">auth</code> session variable exists and contains the value <code className="px-1 rounded">ok</code>, grant access. Otherwise, redirect the user to the login page.
            </p>

            <CodeBlock code={`<!-- protected_page.php -->
<?php
session_start();

if (!isset($_SESSION['auth']) || $_SESSION['auth'] != 'ok') {
    header('Location: login_form.php');
    exit();
}
?>
<h1>Welcome to the protected page!</h1>`} language="php" />

            {/* Exercise 2: Password Handling */}
            < h2 className="text-2xl font-semibold mb-4" > Exercise 2: Password Handling</h2 ><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                In this exercise, we will extend the previous authentication system to handle passwords securely.
            </p>
            <h3 className="text-xl font-semibold mb-4">1. Creating the User Table</h3>
            <p className="mb-4 leading-relaxed">
                Create a table called <code className="px-1 rounded">user</code> to store the user's first name, last name, email address, and password. Use this table to store user information.
            </p>

            <CodeBlock code={`-- SQL to create the user table
CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255)
);`} language="php" />

            <h3 className="text-xl font-semibold mb-4">2. Creating the Registration Form</h3>
            <p className="mb-4 leading-relaxed">
                Create a registration form to collect and save the user's information. This form should check if the data is valid (e.g., ensuring email format, password strength) before storing it in the database.
            </p>

            <CodeBlock code={`<!-- registration_form.php -->
<form action="registration_script.php" method="POST">
    <label for="first_name">First Name:</label>
    <input type="text" name="first_name" required>
    <label for="last_name">Last Name:</label>
    <input type="text" name="last_name" required>
    <label for="email">Email:</label>
    <input type="email" name="email" required>
    <label for="password">Password:</label>
    <input type="password" name="password" required>
    <button type="submit">Register</button>
</form>`} language="php" />

            <h3 className="text-xl font-semibold mb-4">3. Modifying Authentication Script</h3>
            <p className="mb-4 leading-relaxed">
                Modify the <code className="px-1 rounded">login_script.php</code> to verify the login and password against the database. Use <code className="px-1 rounded">password_hash()</code> to hash the password during registration and <code className="px-1 rounded">password_verify()</code> to verify the password during login.
            </p>

            <CodeBlock code={`<!-- registration_script.php -->
<?php
// Connect to the database
$hashed_password = password_hash($_POST['password'], PASSWORD_DEFAULT);

$sql = "INSERT INTO user (first_name, last_name, email, password) VALUES (?, ?, ?, ?)";
$stmt = $pdo->prepare($sql);
$stmt->execute([$_POST['first_name'], $_POST['last_name'], $_POST['email'], $hashed_password]);

header('Location: login_form.php');
?>`} language="php" />

            <CodeBlock code={`<!-- login_script.php -->
<?php
session_start();
include 'database_connection.php';

$stmt = $pdo->prepare('SELECT * FROM user WHERE email = ?');
$stmt->execute([$_POST['login']]);
$user = $stmt->fetch();

if ($user && password_verify($_POST['password'], $user['password'])) {
    $_SESSION['auth'] = 'ok';
    header('Location: protected_page.php');
} else {
    unset($_SESSION['auth']);
    header('Location: login_form.php');
}
?>`} language="php" />
        </div >
    );
};

export default PHP_Passwords;
