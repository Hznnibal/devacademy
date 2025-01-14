{/*TODO Tout refaire*/ }

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
                <pre className="bg-black text-blue-50 p-4"> <code>&lt;form action="script.php" method="GET"&gt;</code> </pre>

                <h4 className="text-lg font-medium mt-4">Retrieving Data</h4>
                <ul className="list-disc ml-6">
                    <li>If HTML data is sent with the GET method, use: <code>$_GET</code> or <code>$_REQUEST</code>.</li>
                    <li>If HTML data is sent with the POST method, use: <code>$_POST</code> or <code>$_REQUEST</code>.</li>
                    <li><code>$_REQUEST</code> can be used for both methods.</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">For example, if there is a field named <code>prenom</code>:</p>
                <pre className="bg-black text-blue-50 p-4"><code>&lt;input type="text" name="firstname" /&gt;</code></pre>
                <p className="text-lg leading-relaxed mb-4">If sent via GET, it can be retrieved as: <code>$_GET["prenom"]</code> or <code>$_REQUEST["prenom"]</code></p>
                <p className="text-lg leading-relaxed mb-4">If sent via POST, it can be retrieved as: <code>$_POST["prenom"]</code> or <code>$_REQUEST["prenom"]</code></p>

                <h4 className="text-lg font-medium mt-4">Checking the Request Method</h4>
                <p className="text-lg leading-relaxed mb-4">To check whether data was sent via GET or POST, use:</p>
                <pre className="bg-black text-blue-50 p-4"><code>if ($_SERVER['REQUEST_METHOD'] == "GET") { }</code></pre>

                <h3 className="text-xl font-medium mt-4">Handling Data on the Server</h3>

                <h4 className="text-lg font-medium mt-4">In a Simple Form</h4>
                <p className="text-lg leading-relaxed mb-4">Here is an example of an HTML form:</p>
                <code>&lt;form action="script.php" method="post"&gt;</code><br />
                Name : &lt;input type="text" name="name" size="20" maxlength="40" /&gt; &lt;br /&gt;<br />
                First name: &lt;input type="text" name="firstname" size="20" maxlength="40" /&gt;<br />
                &lt;input type="submit" value="Send" /&gt;<br />
                &lt;/form&gt;
                <p className="text-lg leading-relaxed mb-4">In the <code>script.php</code> file, we retrieve the variables from the form directly:</p>
                <CodeBlock code={`/* Retrieves the name and surname automatically */
                                echo "Hello" . $_REQUEST['firstname'] . " " . $_REQUEST['name'] . "&lt;br&gt;";`} />
                <p className="text-lg leading-relaxed mb-4">This will display the content of the text fields from the form.</p>

                <h4 className="text-lg font-medium mt-4">Passing Form Fields as an Array</h4>
                <p className="text-lg leading-relaxed mb-4">Here's an example where checkbox values are sent as an array:</p>
                <code>&lt;form action="check.php" method="post"&gt;</code><br />
                You use internet :&lt;br /&gt;<br />
                &lt;input type="checkbox" name="days[]" value="Monday" /&gt;Monday&lt;br /&gt;<br />
                &lt;input type="checkbox" name="days[]" value="Tuesday" /&gt;Tuesday&lt;br /&gt;<br />
                &lt;input type="checkbox" name="days[]" value="Wednesday" /&gt;Wednesday&lt;br /&gt;<br />
                &lt;input type="checkbox" name="days[]" value="Thursday" /&gt;Thursday&lt;br /&gt;<br />
                &lt;input type="checkbox" name="days[]" value="Friday" /&gt;Friday&lt;br /&gt;<br />
                &lt;input type="submit" name="Envoyer" value="Send" /&gt;<br />
                &lt;/form&gt;
                <p className="text-lg leading-relaxed mb-4">This sends an array called <code>days[]</code> to collect all the selected checkbox values.</p>
                <p className="text-lg leading-relaxed mb-4">In the <code>check.php</code> file, we read and display the array:</p>
                <pre className="bg-black text-blue-50 p-4"><code>{`echo "Tu surfes sur le web en semaine plutôt le : ";<br />
                        foreach ($_REQUEST["days"] as $jour) {<br />
        echo " $jour - ";<br />
    }`}</code></pre>

                <h4 className="text-lg font-medium mt-4">Using Hidden Fields</h4>
                <p className="text-lg leading-relaxed mb-4">Hidden fields allow you to pass data without showing it on the screen:</p>
                <code>&lt;form action="page.php" method="post"&gt;<br />
                    Votre e-mail : &lt;input type="text" name="email" /&gt;<br />
                    &lt;input type="hidden" name="secret" value="texte à passer discrètement" /&gt;<br />
                    &lt;input type="submit" value="OK" /&gt;<br />
                    &lt;/form&gt;</code>
                <p className="text-lg leading-relaxed mb-4">After filling out the "Your Email" field and clicking "OK," the data will be sent to <code>page.php</code> along with the hidden field <code>secret</code>.</p>

                <h4 className="text-lg font-medium mt-4">Passing Variables Through the URL (GET Method)</h4>
                <p className="text-lg leading-relaxed mb-4">To pass a variable from one page to another, you append a question mark (<code>?</code>) to the URL followed by the variable to be passed:</p>
                <pre className="bg-black text-blue-50 p-4"><code>http://www.monserveur.com/page.php?prenom=bill&lang=fr</code></pre>
                <p className="text-lg leading-relaxed mb-4">This is how you use the GET method to pass variables.</p>

                <h4 className="text-lg font-medium mt-4">The Form and Script Can Be One</h4>
                <p className="text-lg leading-relaxed mb-4">Sometimes the form and script can be combined into one. For example, you can submit the form to the same page it was sent from:</p>
                <pre className="bg-black text-blue-50 p-4"><code>&lt;form action={`"<?php print $_SERVER['PHP_SELF'] ?>"`} method="post"&gt;<br />
                    &lt;input type="text" name="zoneDeTexte" size="40" maxlength="40"&gt;<br />
                    &lt;input type="submit" name="btnEnvoyer" value="Send"&gt;<br />
                    &lt;/form&gt;</code></pre>
                <p className="text-lg leading-relaxed mb-4">The <code>$_SERVER['PHP_SELF']</code> variable contains the current script's name, allowing you to submit the form to itself.</p>

                <h4 className="text-lg font-medium mt-4">Handling Multiple Form Actions</h4>
                <p className="text-lg leading-relaxed mb-4">If your form can perform multiple actions (like create, delete, or update), you can use different submit buttons for each action:</p>
                <code>&lt;input type="submit" name="delete" value="Delete"&gt;<br />
                    &lt;input type="submit" name="create" value="Create"&gt;<br />
                    &lt;input type="submit" name="update" value="Update"&gt;</code>
                <p className="text-lg leading-relaxed mb-4">In the PHP script, use <code>isset()</code> to check which button was clicked and execute the corresponding action:</p>
                <CodeBlock code={`if (isset($_POST['update'])) { // update
        echo "update";
    } elseif (isset($_POST['delete'])) {
        echo"delete";
    } elseif (isset($_POST['create'])) {
        echo "create";
    }`} />
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Exercise</h2>
                <p className="text-lg leading-relaxed mb-4">Take the form you created in the previous session (JavaScript). In this form, you need to modify the <code>action</code> attribute of the <code>form</code> tag to indicate the address of a PHP script.</p>

                <code>&lt;form action="myscript.php"&gt;</code>

                <p className="text-lg leading-relaxed mb-4">Then, create a PHP script to display all the transmitted values.</p>

                <p className="text-lg leading-relaxed mb-4">In PHP, you can retrieve the value of a form input field using:</p>
                <code>$_REQUEST["name_of_input"]</code>

                <p className="text-lg leading-relaxed mb-4">This instruction allows you to retrieve the value of the input parameter <code>name_of_input</code>.</p>

                <h3 className="text-lg font-medium mt-4">Example:</h3>
                <code>&lt;form action="myscript.php" method="post"&gt;</code><br />
                Name : &lt;input type="text" name="name" /&gt;<br />
                First name : &lt;input type="text" name="firstname" /&gt;<br />
                &lt;input type="submit" value="Send" /&gt;<br />
                &lt;/form&gt;

                <p className="text-lg leading-relaxed mb-4">And in <code>myscript.php</code>, you can retrieve and display the form values like this:</p>
                <code>echo "Name : " . $_REQUEST['name'] . "&lt;br&gt;";<br />
                    echo "First name : " . $_REQUEST['firstname'] . "&lt;br&gt;";</code>

                <p className="text-lg leading-relaxed mb-4">This will display the values entered in the <code>nom</code> and <code>prenom</code> fields when the form is submitted.</p>
            </section>

        </div>
    );
};

export default IntroPHP;
