import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const PHP_Sessions: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Introduction to PHP Sessions</h1>

            {/* Definition Section */}
            <h2 className="text-2xl font-semibold mb-4">Definition</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                A <strong>session</strong> is a mechanism that allows you to store data across multiple web pages.
                For example, sessions can be used to store information related to authentication, shopping cart content, etc.
            </p>

            {/* Functioning Section */}
            <h2 className="text-2xl font-semibold mb-4">Functioning</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                To store information in a session, PHP uses the <code className="px-1 rounded">$_SESSION</code> variable.
                It is a superglobal variable (like <code className="px-1 rounded">$_GET</code> or <code className="px-1 rounded">$_POST</code>) that behaves like a PHP array with key/value pairs.
            </p>
            <p className="mb-4 leading-relaxed">
                However, before using this variable, it's mandatory to call the <code className="px-1 rounded">session_start()</code> function at the beginning of each PHP file that manipulates this variable and before sending any HTTP requests, i.e., before any <code className="px-1 rounded">echo</code> or any other output.
            </p>
            <p className="mb-4 leading-relaxed">
                After that, we use <code className="px-1 rounded">$_SESSION</code> with a variable name in brackets and assign a value:
            </p>

            <CodeBlock code={`session_start();
$_SESSION["login"] = "webmaster";
echo $_SESSION["login"];`} />

            <p className="mb-4 leading-relaxed">
                At this point, the session has a variable <code className="px-1 rounded">login</code> with the value "webmaster".
                On another page, we can check if the session exists and grant or deny access to content or features.
            </p>

            {/* Session ID Section */}
            <h2 className="text-2xl font-semibold mb-4">Session ID</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                The session mechanism relies on a unique identifier: the <strong>session ID</strong>. This is provided by PHP by default.
                It’s an alphanumeric string, like: <code className="px-1 rounded">jr48dn2gqsliubpq02u0cbchk5</code>.
            </p>
            <p className="mb-4 leading-relaxed">
                The <code className="px-1 rounded">session_id()</code> function can be used to display this ID:
            </p>

            <CodeBlock code={`session_start();
$_SESSION["login"] = "webmaster";
$_SESSION["role"] = "admin";
echo "session ID: " . session_id();`} />

            <p className="mb-4 leading-relaxed">
                <code className="px-1 rounded">session_id()</code> returns an empty string if no session is active.
            </p>

            {/* Mechanism Section */}
            <h2 className="text-2xl font-semibold mb-4">Mechanism</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                When a session is created, it generates a unique identifier stored on both the client side (in a cookie on the user's machine) and on the server side.
                During exchanges, when the server receives the cookie with the session ID, it reconstructs the session variables (<code className="px-1 rounded">$_SESSION</code> array).
            </p>

            {/* Testing the Session Section */}
            <h2 className="text-2xl font-semibold mb-4">Testing the Session</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                Once a session is initialized (for instance, when a user has logged in with a username/password), you need to verify if the user is authorized to access the page.
                This can be done using simple conditions:
            </p>

            <CodeBlock code={`session_start();
if ($_SESSION["login"]) {
    echo "You are authorized to view this page.";
} else {
    echo "This page requires identification.";
}`} />

            <p className="mb-4 leading-relaxed">
                Alternatively, you can check if the session variable is set, and redirect the user if necessary:
            </p>

            <CodeBlock code={`session_start();
if (!isset($_SESSION["login"])) {
    header("Location:index.php");
    exit;
}
// Rest of the code (PHP/HTML)
echo "Hello " . $_SESSION["login"] . "<br>";`} />

            <p className="mb-4 leading-relaxed">
                If the session variable <code className="px-1 rounded">login</code> is not set, we redirect the user to <code className="px-1 rounded">index.php</code>. Otherwise, the page will display normally.
            </p>

            {/* Destroying a Session Section */}
            <h2 className="text-2xl font-semibold mb-4">Destroying a Session</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                To remove information from a session, use the <code className="px-1 rounded">unset()</code> function, passing the session variable to be destroyed.
                This is commonly used for a logout link on a website:
            </p>

            <CodeBlock code={`unset($_SESSION["login"]);
unset($_SESSION["role"]);`} />

            <p className="mb-4 leading-relaxed">
                However, this doesn’t completely and properly destroy a session. To fully destroy the session, including clearing cookies, use the following code:
            </p>

            <CodeBlock code={`unset($_SESSION["login"]);
unset($_SESSION["role"]);

if (ini_get("session.use_cookies")) {
    setcookie(session_name(), '', time()-42000);
}

session_destroy();`} />

            <p className="mb-4 leading-relaxed">
                Explanation:
            </p>
            <ul className="list-disc list-inside pl-6">
                <li>Lines 1-2: Unset the session variables.</li>
                <li>Lines 4-7: The <code className="px-1 rounded">setcookie()</code> function forces the cookie expiration.</li>
                <li>Finally, <code className="px-1 rounded">session_destroy()</code> destroys the rest of the session.</li>
            </ul>

            {/* Advanced Configuration and Security Section */}
            <h2 className="text-2xl font-semibold mb-4">Advanced Configuration and Security</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-4 leading-relaxed">
                PHP allows fine configuration of sessions (via the <code className="px-1 rounded">php.ini</code> file), such as data volume, duration, storage mode, and security.
                Security is crucial to prevent session hijacking (stealing the session ID from the cookie). A good practice is to use the <code className="px-1 rounded">session_regenerate_id()</code> function whenever session data is modified.
            </p>
        </div >
    );
};

export default PHP_Sessions;
