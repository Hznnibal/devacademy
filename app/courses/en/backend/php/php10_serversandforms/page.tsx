import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const IntroPHP: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Forms and Server Variables</h2>

                <h3 className="text-xl font-medium mt-4">Retrieving Form Data</h3>
                <p className="text-lg leading-relaxed mb-4">In PHP, there are useful functions to retrieve data sent from an HTML form.</p>

                <h4 className="text-lg font-medium mt-4">Generalities</h4>
                <p className="text-lg leading-relaxed mb-4">When creating an HTML form, you can send it to a PHP script either by GET or POST. You specify this choice using the <code>method</code> attribute in the <code>form</code> tag. The <code>action</code> attribute lets you define which script will be triggered on the server.</p>
                <CodeBlock code={`<form action="script.php" method="GET">`} />

                <h4 className="text-lg font-medium mt-4">Retrieving Data</h4>
                <ul className="list-disc ml-6">
                    <li>If HTML data is sent with the GET method, use: <code>$_GET</code> or <code>$_REQUEST</code>.</li>
                    <li>If HTML data is sent with the POST method, use: <code>$_POST</code> or <code>$_REQUEST</code>.</li>
                    <li><code>$_REQUEST</code> can be used for both methods.</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">For example, if there is a field named <code>prenom</code>:</p>
                <CodeBlock code={`<input type="text" name="firstname" />`} />
                <p className="text-lg leading-relaxed mb-4">If sent via GET, it can be retrieved as: <code>$_GET["prenom"]</code> or <code>$_REQUEST["prenom"]</code></p>
                <p className="text-lg leading-relaxed mb-4">If sent via POST, it can be retrieved as: <code>$_POST["prenom"]</code> or <code>$_REQUEST["prenom"]</code></p>

                <h4 className="text-lg font-medium mt-4">Checking the Request Method</h4>
                <CodeBlock code={`if ($_SERVER['REQUEST_METHOD'] == "GET") { }`} />

                <h3 className="text-xl font-medium mt-4">Handling Data on the Server</h3>

                <h4 className="text-lg font-medium mt-4">In a Simple Form</h4>
                <CodeBlock code={`<form action="script.php" method="post">
Name : <input type="text" name="name" size="20" maxlength="40" /> <br />
First name: <input type="text" name="firstname" size="20" maxlength="40" />
<input type="submit" value="Send" />
</form>`} />

                <p className="text-lg leading-relaxed mb-4">In the <code>script.php</code> file, we retrieve the variables from the form directly:</p>
                <CodeBlock code={`/* Retrieves the name and surname automatically */
echo "Hello" . $_REQUEST['firstname'] . " " . $_REQUEST['name'] . "<br>";`} />

                <h4 className="text-lg font-medium mt-4">Passing Form Fields as an Array</h4>
                <CodeBlock code={`<form action="check.php" method="post">
You use internet :<br />
<input type="checkbox" name="days[]" value="Monday" />Monday<br />
<input type="checkbox" name="days[]" value="Tuesday" />Tuesday<br />
<input type="checkbox" name="days[]" value="Wednesday" />Wednesday<br />
<input type="checkbox" name="days[]" value="Thursday" />Thursday<br />
<input type="checkbox" name="days[]" value="Friday" />Friday<br />
<input type="submit" name="Envoyer" value="Send" />
</form>`} />
                <p className="text-lg leading-relaxed mb-4">In the <code>check.php</code> file, we read and display the array:</p>
                <CodeBlock code={`echo "You browse the web during the week mostly on : ";
foreach ($_REQUEST["days"] as $day) {
    echo " $day - ";
}`} />

                <h4 className="text-lg font-medium mt-4">Handling Multiple Form Actions</h4>
                <CodeBlock code={`<input type="submit" name="delete" value="Delete" />
<input type="submit" name="create" value="Create" />
<input type="submit" name="update" value="Update" />`} />
                <CodeBlock code={`if (isset($_POST['update'])) { // update
    echo "update";
} elseif (isset($_POST['delete'])) {
    echo "delete";
} elseif (isset($_POST['create'])) {
    echo "create";
}`} />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Exercise</h2>
                <p className="text-lg leading-relaxed mb-4">Modify your form to send data to a PHP script.</p>
                <CodeBlock code={`<form action="myscript.php">`} />
                <p className="text-lg leading-relaxed mb-4">Then, create a PHP script to display all the transmitted values.</p>
                <CodeBlock code={`$_REQUEST["name_of_input"]`} />
                <h3 className="text-lg font-medium mt-4">Example:</h3>
                <CodeBlock code={`<form action="myscript.php" method="post">
Name : <input type="text" name="name" />
First name : <input type="text" name="firstname" />
<input type="submit" value="Send" />
</form>`} />
                <p className="text-lg leading-relaxed mb-4">And in <code>myscript.php</code>, you can retrieve and display the form values like this:</p>
                <CodeBlock code={`echo "Name : " . $_REQUEST['name'] . "<br>";
echo "First name : " . $_REQUEST['firstname'] . "<br>";`} />
            </section>
        </div>
    );
};

export default IntroPHP;
