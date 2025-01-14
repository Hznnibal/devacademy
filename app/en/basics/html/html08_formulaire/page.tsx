import { CodeBlock } from "@/components/CodeBlock/code-block";
import React from "react";

const Page: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">HTML - 08 - Forms</h1>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">Introduction</h2>  <div className="border-b border-gray-300 mb-6" />
                <h4 className="text-lg font-semibold mb-4">
                    Forms allow users to input data and send it to the web server for processing by server-side scripts.
                </h4>
                <p className="text-lg leading-relaxed mb-4">
                    Inputs in a form can be made through:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li>Text input fields</li>
                    <li>Multiline text areas</li>
                    <li>Dropdown lists</li>
                    <li>Checkboxes for multiple-choice answers</li>
                    <li>Radio buttons for single-choice answers</li>
                    <li>Uploading a file is also possible</li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Form Structure</h2>  <div className="border-b border-gray-300 mb-6" />
                <h3 className="text-xl font-semibold mb-2">Form Declaration</h3>

                <p className="text-lg leading-relaxed mb-4">
                    A form starts with the <code>&lt;form&gt;</code> tag and ends with the <code>&lt;/form&gt;</code> tag:
                </p>
                <CodeBlock code={`<form>
</form>`} />

                <p className="text-lg leading-relaxed mb-4">
                    The <code>&lt;form&gt;</code> tag requires the <code>action</code> attribute, while other attributes are optional.
                </p>
                <CodeBlock code={`<form action="destination.php" method="post" id="contact_form"> 
</form>`} />

                <p className="text-lg leading-relaxed mb-4">Explanations:</p>
                <table className="min-w-full bg-black text-blue-50 p-4 mb-4">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left">Attribute</th>
                            <th className="px-4 py-2 text-left">Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2"><code>action</code></td>
                            <td className="px-4 py-2">
                                Specifies the URL of the file that will process the data sent by the form (e.g., for database storage).
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2"><code>method</code></td>
                            <td className="px-4 py-2">
                                This attribute can have two values:
                                <ul className="list-disc ml-6">
                                    <li><code>GET</code>: input data is added to the URL (less secure).</li>
                                    <li><code>POST</code>: input data is sent in the request body, which is more secure.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2"><code>accept</code></td>
                            <td className="px-4 py-2">
                                Restricts the type of files that can be uploaded. However, this does not constitute a security measure.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section >
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Input Fields</h2>  <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Inside the <code>&lt;form&gt;</code> tag, we include all the code that allows data input: text fields (<code>&lt;input&gt;</code>), dropdown lists, and other form elements.
                </p>

                <h3 className="text-lg font-semibold mb-4">Example:</h3>

                <CodeBlock code={`<form action="destination.php" method="post"> 
   <input type="text" name="name"> 
   <input type="text" name="surname"> 
</form>`} />

                <p className="text-lg leading-relaxed mb-4">
                    The <code>&lt;input&gt;</code> tags create fields where users can enter text or make choices. There are several types of fields, which we will detail further in this course.
                </p>

                <h3 className="text-xl font-semibold mb-4">Form Submission</h3>
                <p className="text-lg leading-relaxed mb-4">
                    To send a form, it is necessary to add a field of type <code>submit</code> before the closing <code>&lt;/form&gt;</code> tag.
                </p>

                <h4 className="text-lg font-semibold mb-4">Example:</h4>
                <CodeBlock code={`<form action="destination.php" method="post"> 
   <input type="text" name="name"> 
   <input type="text" name="surname"> 
   <input type="submit" value="Send"> 
</form>`} />

                <p className="text-lg leading-relaxed mb-4">
                    The <code>&lt;input type="submit"&gt;</code> field creates a button to submit the form. It can also be replaced by a <code>&lt;button type="submit"&gt;</code> button:
                </p>
                <CodeBlock code={`<button type="submit">Send</button>`} />
            </section >
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Field Types</h2>  <div className="border-b border-gray-300 mb-6" />
                <h4 className="text-lg font-semibold mb-4">Text Input Fields</h4>
                <p className="text-lg leading-relaxed mb-4">
                    Users can enter information in a text input field using the <code>&lt;input type="text"&gt;</code> tag.
                </p>
                <CodeBlock code={`<label for="name">Name:</label><input type="text" name="name" id="name">`} />
                <p className="text-lg leading-relaxed mb-4">
                    <strong>Displays:</strong>
                </p>

                <form className="flex items-center mb-4">
                    <label htmlFor="name" className="mr-4">Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        size={50}
                        maxLength={50}
                        className="border p-2 text-black"
                    />
                </form>
                <p className="text-lg leading-relaxed mb-4">
                    In HTML5, the <code>&lt;input&gt;</code> tag does not require a self-closing slash: <code>&lt;input type="text"&gt;</code> instead of <code>&lt;input type="text" /&gt;</code>.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                    The <code>{`<input>`}</code> tag has the following main attributes: only the *type* and *name* attributes are mandatory. If the *name* attribute is missing, the data entered in the field will not be sent to the target file.
                </p>

                <h4 className="text-lg font-semibold mb-4">List of Possible Attributes:</h4>
                <table className="min-w-full table-auto border-collapse">
                    <thead>
                        <tr className="">
                            <th className="border px-4 py-2 text-left">Attribute</th>
                            <th className="border px-4 py-2 text-left">Required</th>
                            <th className="border px-4 py-2 text-left">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2"><code>type</code></td>
                            <td className="border px-4 py-2">Mandatory</td>
                            <td className="border px-4 py-2">Specifies the field type (e.g., <code>text</code>, <code>radio</code>, etc.).</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>name</code></td>
                            <td className="border px-4 py-2">Mandatory</td>
                            <td className="border px-4 py-2">The field name, used to transmit the data.</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>value</code></td>
                            <td className="border px-4 py-2">Optional</td>
                            <td className="border px-4 py-2">Default value for the field.</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>size</code></td>
                            <td className="border px-4 py-2">Optional</td>
                            <td className="border px-4 py-2">Defines the visible width of the field in characters.</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>maxlength</code></td>
                            <td className="border px-4 py-2">Optional</td>
                            <td className="border px-4 py-2">Sets the maximum number of characters the user can input.</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>autocomplete</code></td>
                            <td className="border px-4 py-2">Optional</td>
                            <td className="border px-4 py-2">Enables autocomplete for the field.</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>autofocus</code></td>
                            <td className="border px-4 py-2">Optional</td>
                            <td className="border px-4 py-2">Gives focus to the field when the page loads.</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>readonly</code></td>
                            <td className="border px-4 py-2">Optional</td>
                            <td className="border px-4 py-2">Makes the field read-only, preventing modifications.</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>disabled</code></td>
                            <td className="border px-4 py-2">Optional</td>
                            <td className="border px-4 py-2">Disables the field, making it non-interactive.</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>placeholder</code></td>
                            <td className="border px-4 py-2">Optional</td>
                            <td className="border px-4 py-2">Displays a hint text that disappears when the user starts typing.</td>
                        </tr>
                    </tbody>
                </table>
                <h4 className="text-lg font-semibold mb-4 mt-4">Example with Various Attributes:</h4>
                <CodeBlock code={`<label for="name">Name:</label>
<input type="text" name="name" id="name" size="50" maxlength="50" value="Dave LOPER">`} />
                <p className="text-lg leading-relaxed mb-4">
                    <strong>Displays:</strong>
                </p>

                <form className="flex items-center mb-4">
                    <label htmlFor="name" className="mr-4 ">Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        size={50}
                        maxLength={50}
                        defaultValue="Dave LOPER"
                        className="border p-2 text-black"
                    />
                </form>
                <p className="text-lg leading-relaxed mb-4">
                    Here, <code>Dave LOPER</code> is displayed by default in the field because this value is pre-filled using the <code>value</code> attribute.
                </p>
            </section >
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Multiline Input Fields</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    When you want to enter text across multiple lines or input lengthy content, you use multiline input fields with the <code>&lt;textarea&gt;...&lt;/textarea&gt;</code> tag.
                </p>
                <section className="mb-12">
                    <h3 className="text-lg font-semibold mb-4">Attributes of the <code>&lt;textarea&gt;</code> Tag</h3>

                    <table className="min-w-full table-auto">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2 text-left">Attribute</th>
                                <th className="border px-4 py-2 text-left">Required</th>
                                <th className="border px-4 py-2 text-left">Purpose</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2"><code>name</code></td>
                                <td className="border px-4 py-2">Mandatory</td>
                                <td className="border px-4 py-2">Defines the field name used to submit the data.</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2"><code>rows</code></td>
                                <td className="border px-4 py-2">Optional</td>
                                <td className="border px-4 py-2">Specifies the number of visible text lines in the input area.</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2"><code>cols</code></td>
                                <td className="border px-4 py-2">Optional</td>
                                <td className="border px-4 py-2">Specifies the number of visible characters per line in the input area.</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="text-lg leading-relaxed mb-4">
                        The default content of the multiline input field is the text between the <code>{`<textarea>`}</code> and <code>{`</textarea>`}</code> tags.
                    </p>
                </section>

                <h4 className="text-lg font-semibold mb-4">Example of a Multiline Input Field:</h4>
                <CodeBlock code={`<textarea name="comment" rows="10" cols="50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis quis metus ornare semper. In vitae lacus ex. In elementum iaculis malesuada. Maecenas vulputate, erat id molestie dictum, diam dolor faucibus nisl, in pharetra sapien libero eget risus. Morbi vehicula aliquam placerat. Suspendisse mollis tempus dictum. Nullam suscipit nec massa eget viverra. Etiam feugiat facilisis est nec euismod. Quisque convallis, tortor sed placerat lacinia, elit nunc volutpat arcu, vel consequat velit libero at tortor. Suspendisse interdum lacus non felis bibendum facilisis. In sit amet enim mauris.</textarea>`} />

                <p className="text-lg leading-relaxed mb-4">
                    <strong>Renders as:</strong>
                </p>

                <textarea
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis quis metus ornare semper. In vitae lacus ex. In elementum iaculis malesuada. Maecenas vulputate, erat id molestie dictum, diam dolor faucibus nisl, in pharetra sapien libero eget risus. Morbi vehicula aliquam placerat. Suspendisse mollis tempus dictum. Nullam suscipit nec massa eget viverra. Etiam feugiat facilisis est nec euismod. Quisque convallis, tortor sed placerat lacinia, elit nunc volutpat arcu, vel consequat velit libero at tortor. Suspendisse interdum lacus non felis bibendum facilisis. In sit amet enim mauris."
                    name="comment"
                    rows={10}
                    cols={50}
                    className="border p-2 text-black"

                />

                <p className="text-lg leading-relaxed mb-4">
                    This input field can hold long text like this example and allows the user to edit it. Vertical and horizontal scrollbars may appear if the input area is too small to display all the text.
                </p>
            </section>
            <section className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Checkboxes and Radio Buttons</h3>
                <p className="text-lg leading-relaxed mb-4">
                    Data can be selected by users using checkboxes (multiple choices) or radio buttons (single choice). For this, the following tags are used:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li><code>&lt;input type="checkbox"&gt;</code> for checkboxes</li>
                    <li><code>&lt;input type="radio"&gt;</code> for radio buttons</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    These tags have the following attributes:
                </p>
                <table className="table-auto w-full mb-4">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Attribute</th>
                            <th className="border px-4 py-2">Required</th>
                            <th className="border px-4 py-2">Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2"><code>name</code></td>
                            <td className="border px-4 py-2">Required</td>
                            <td className="border px-4 py-2">Name of the data, used to retrieve the data server-side</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>value</code></td>
                            <td className="border px-4 py-2">Required</td>
                            <td className="border px-4 py-2">Label corresponding to the selected option</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>checked</code></td>
                            <td className="border px-4 py-2">Optional</td>
                            <td className="border px-4 py-2">Indicates that the option will be selected by default</td>
                        </tr>
                    </tbody>
                </table>

                <h4 className="text-lg font-semibold mb-4">Checkbox Example</h4>
                <CodeBlock code={`<input type="checkbox" name="color1" value="Blue" checked> Blue
<input type="checkbox" name="color2" value="Red"> Red
<input type="checkbox" name="color3" value="Green"> Green`} />
                <p className="text-lg leading-relaxed mb-4">Displays:</p>
                <div className="ml-6">
                    <input type="checkbox" name="color1" value="Blue" defaultChecked /> Blue
                    <input type="checkbox" name="color2" value="Red" /> Red
                    <input type="checkbox" name="color3" value="Green" /> Green
                </div>
                <p className="text-lg leading-relaxed mb-4">Here, Blue is checked by default thanks to the checked attribute.</p>

                <h4 className="text-lg font-semibold mb-4">Radio Button Example</h4>
                <CodeBlock code={`<input type="radio" name="color" value="Blue"> Blue
<input type="radio" name="color" value="Red"> Red
<input type="radio" name="color" value="Green" checked> Green`} />
                <p className="text-lg leading-relaxed mb-4">Displays:</p>
                <div className="ml-6">
                    <input type="radio" name="color" value="Blue" /> Blue
                    <input type="radio" name="color" value="Red" /> Red
                    <input type="radio" name="color" value="Green" defaultChecked /> Green
                </div>
                <p className="text-lg leading-relaxed mb-4">Radio buttons must share the same name, i.e., the same value for the name attribute.</p>

                <h4 className="text-lg font-semibold mb-4">Dropdown List</h4>
                <p className="text-lg leading-relaxed mb-4">
                    Users can select the desired information from a pre-filled list. The <code>&lt;select&gt;</code> tag defines the list of possible choices.
                </p>
                <CodeBlock code={`<select name="color">
    <option>Blue</option>
    <option>Red</option>
    <option>Green</option>
</select>`} />

                <h2 className="text-2xl font-semibold mb-2">Attributes of the &lt;select&gt; Tag</h2> <div className="border-b border-gray-300 mb-6" />
                <table className="table-auto w-full mb-4">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2 text-left">Attribute</th>
                            <th className="border px-4 py-2 text-left">Required</th>
                            <th className="border px-4 py-2 text-left">Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2"><code>name</code></td>
                            <td className="border px-4 py-2">Required</td>
                            <td className="border px-4 py-2">
                                Data name. This is the name under which the entered information will be known and retrieved in the server script triggered by the form.
                            </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>size</code></td>
                            <td className="border px-4 py-2">Required</td>
                            <td className="border px-4 py-2">
                                If size equals 1 (default value), it's a dropdown list (single choice). If size &gt; 1, it's a list box with a scrollbar.
                            </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>multiple</code></td>
                            <td className="border px-4 py-2">Optional</td>
                            <td className="border px-4 py-2">
                                Indicates that multiple selections are allowed (also applies to <code>input</code> fields of types <code>email</code> and <code>file</code>).
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h2 className="text-2xl font-semibold mb-2">Attributes of the &lt;option&gt; Tag</h2> <div className="border-b border-gray-300 mb-6" />
                <table className="table-auto w-full mb-4">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2 text-left">Attribute</th>
                            <th className="border px-4 py-2 text-left">Type</th>
                            <th className="border px-4 py-2 text-left">Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2"><code>value</code></td>
                            <td className="border px-4 py-2">Optional</td>
                            <td className="border px-4 py-2">
                                The data name for the corresponding option. It allows specifying a value different from the one displayed to
                                the user. If absent (optional attribute), the value displayed to the user (between &lt;option&gt;) is sent.
                            </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>selected</code></td>
                            <td className="border px-4 py-2">Required</td>
                            <td className="border px-4 py-2">Defines the default choice.</td>
                        </tr>
                    </tbody>
                </table>
                <h4 className="text-lg font-semibold mb-4">Example with the <code>selected</code> Attribute</h4>
                <CodeBlock code={`<label for="color">Choose your color</label>
<select id="color">
    <option value="" selected>-</option>
    <option value="Blue">Blue</option>
    <option value="Red">Red</option>
    <option value="Green">Green</option>
</select>`} />
                <p className="text-lg leading-relaxed mb-4">Displays:</p>
                <div className="ml-6 mb-4">
                    <label className="mr-2" htmlFor="color">Choose your color</label>
                    <select className="border border-black rounded text-black" id="color" defaultValue="">
                        <option value="">-</option>
                        <option value="Blue">Blue</option>
                        <option value="Red">Red</option>
                        <option value="Green">Green</option>
                    </select>

                </div>
                <p className="text-lg leading-relaxed mb-4">Here, if the user does not make a selection, Green will be selected by default.</p>
                <h4 className="text-lg font-semibold mb-4">Example with the <code>size</code> Attribute (value = 3)</h4>
                <CodeBlock code={`<label for="color">Choose your color</label>
<select id="color" size="3">
    <option value="">-</option>
    <option value="Blue">Blue</option>
    <option value="Red">Red</option>
    <option value="Green">Green</option>
    <option value="Yellow">Yellow</option>
    <option value="White">White</option>
</select>`} />
                <p className="text-lg leading-relaxed mb-4">Displays:</p>
                <div className="ml-6">
                    <label className="mr-2" htmlFor="color">Choose your color</label>
                    <select className="border border-black rounded text-black" id="color" size={3} defaultValue="">
                        <option value="">-</option>
                        <option value="Blue">Blue</option>
                        <option value="Red">Red</option>
                        <option value="Green">Green</option>
                        <option value="Yellow">Yellow</option>
                        <option value="White">White</option>
                    </select>

                </div>
            </section >
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">File Upload</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    The <code>file</code> type on an <code>&lt;input&gt;</code> tag allows a file to be uploaded from the user's computer to the server hosting the webpage.
                </p>
                <p className="text-lg leading-relaxed mb-2">
                    To use this type, you must add the following to the <code>&lt;form&gt;</code> tag:
                </p>
                <ul className="list-disc ml-10 mb-4">
                    <li>
                        <strong>The value <code>POST</code> for the <code>method</code> attribute</strong>: File uploads do not work with HTTP <code>GET</code> requests.
                    </li>
                    <li>
                        <strong>The <code>enctype</code> attribute with the value <code>multipart/form-data</code></strong>: Necessary to enable file uploads.
                    </li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    Example of a form for file upload:
                </p>
                <CodeBlock code={`<form action="destination.php" method="post" enctype="multipart/form-data">
  <input type="file" name="file">
</form>`} />
                <p className="text-lg leading-relaxed mb-4">
                    <strong>Displays:</strong>
                </p>
                <form action="destination.php" method="post" encType="multipart/form-data">
                    <input type="file" name="file" />
                </form>
                <p className="mb-4 mt-4">
                    The file will then be physically stored on the server in a directory defined in the server-side processing code.
                </p>
                <p className="mb-4 mt-4">
                    <strong>Uploading a file to a server via a form presents serious security vulnerabilities that must be handled with server-side scripting.</strong>
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Example to allow only <code>.png</code> files:
                </p>
                <CodeBlock code={`<input type="file" name="file" accept="image/png">`} />

                <h4 className="text-lg font-semibold mb-4">Additional Attributes for <code>file</code> Type</h4>
                <table className="table-auto w-full mb-4">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Attribute</th>
                            <th className="border px-4 py-2">Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2"><code>multiple</code></td>
                            <td className="border px-4 py-2">Allows multiple file selection</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>required</code></td>
                            <td className="border px-4 py-2">Indicates the field is required</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>accept</code></td>
                            <td className="border px-4 py-2">Restricts accepted file types (e.g., <code>image/png</code>)</td>
                        </tr>
                    </tbody>
                </table>
                <p className="mb-4 mt-4">
                    Various file information (name, size, MIME type, etc.) will be transmitted from the webpage to the server. These details must be retrieved, validated, and processed using server-side scripting languages like PHP.
                </p>

                <h2 className="text-2xl font-semibold mb-2">Hidden Fields</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    You can send hidden data to the server using the <code>&lt;input type="hidden"&gt;</code> tag.
                </p>
                <CodeBlock code={`<input type="hidden" name="user_id" value="12345">`} />

                <h2 className="text-2xl font-semibold mb-2">Field Labels</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    To indicate to the user what information to enter, use the <code>&lt;label&gt;</code> tag with the <code>for</code> attribute, which must match the form field's <code>id</code>.
                </p>
                <CodeBlock code={`<label for="name">Name:</label><input type="text" name="name" id="name">`} />
                <p className="text-lg leading-relaxed mb-4">
                    The <code>&lt;label&gt;</code> tag must have the <code>for</code> attribute to associate it with the desired form field.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    On the field side (<code>&lt;input&gt;</code>), you need to add the <code>id</code> attribute whose value matches the <code>for</code> value for the association to work.
                </p>
                <blockquote className="mb-4">
                    In practice, use the same value for the <code>id</code>, <code>for</code>, and <code>name</code> attributes, except for checkboxes and radio buttons.
                </blockquote>

                <h2 className="text-2xl font-semibold mb-2">Field Groups</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    The <code>&lt;fieldset&gt;</code> tag groups fields in a form, and the <code>&lt;legend&gt;</code> tag assigns a name to the group.
                </p>
                <CodeBlock code={`<fieldset>
  <legend>Contact Info</legend>
  <label for="name">Name:</label><input type="text" name="name" id="name"><br>
  <label for="email">Email:</label><input type="email" name="email" id="email"><br>
  <label for="dob">Date of Birth:</label><input type="date" name="dob" id="dob">
</fieldset>`} />
                <p className="text-lg leading-relaxed mb-4">Displays:</p>
                <fieldset >
                    <legend className="text-xl font-semibold">Contact Info</legend>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" className="border p-2 mb-2 text-black" />
                    <br />
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" className="border p-2 mb-2 text-black" />
                    <br />
                    <label htmlFor="dob">Date of Birth:</label>
                    <input type="date" name="dob" id="dob" className="border p-2 mb-2 text-black" />
                </fieldset>
            </section >
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Other Field Types</h2> <div className="border-b border-gray-300 mb-6" />

                <h3 className="text-xl font-semibold mb-2">Datalist</h3>
                <p className="text-lg leading-relaxed mb-4">
                    HTML5 introduced the <code>&lt;datalist&gt;</code> element, which provides a list of suggestions/autocomplete options when a user types text into an <code>&lt;input&gt;</code> field.
                </p>
                <p className="text-lg leading-relaxed mb-4">Example usage of the <code>&lt;datalist&gt;</code> element:</p>
                <CodeBlock code={`<label for="metiers2">Select your profession</label>
<input type="text" name="metiers1" id="metiers2" list="metiers3">
<datalist id="metiers3">
    <option value="webmaster">
    <option value="developer">
    <option value="database administrator">
    <option value="web designer">
</datalist>`} />

                <div>
                    <label htmlFor="metiers2">Select your profession:</label>
                    <input className="border border-black text-black" type="text" name="metiers1" id="metiers2" list="metiers3" />
                    <datalist id="metiers3">
                        <option value="webmaster" />
                        <option value="developer" />
                        <option value="database administrator" />
                        <option value="web designer" />
                    </datalist>
                </div>

                <h2 className="text-2xl font-semibold mb-2 mt-4">Form Validation</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    HTML5 provides attributes to help with client-side form validation. These attributes enhance user experience but do not ensure secure validation.
                </p>
                <table className="table-auto w-full mb-4">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Attribute</th>
                            <th className="border px-4 py-2">Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2"><code>required</code></td>
                            <td className="border px-4 py-2">Indicates that a field is mandatory</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>pattern</code></td>
                            <td className="border px-4 py-2">Specifies a regular expression pattern for validating input</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>title</code></td>
                            <td className="border px-4 py-2">Customizes the validation error message</td>
                        </tr>
                    </tbody>
                </table>

                <p className="text-lg leading-relaxed mb-4">
                    Example of a field with <code>pattern</code> and <code>required</code>:
                </p>
                <CodeBlock code={`<input type="text" placeholder="Enter your name" pattern="^[a-z]+$" required title="Enter your name (only characters from a to z)">`} />

                <p className="text-lg leading-relaxed mb-4">Displays a text field with validation:</p>
                <form className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="nom" className="block">Name:</label>
                        <input
                            type="text"
                            id="nom"
                            name="name"
                            placeholder="Enter your name"
                            pattern="^[a-z]+$"
                            required
                            title="Enter your name (only characters from a to z)"
                            className="border p-2 w-full text-black"
                        />
                    </div>
                </form>

                <p className="font-extralight mt-4">
                    In this example, the pattern <code>^[a-z]+$</code> indicates that only alphabetic characters are expected.
                </p>

                <p className="mt-4">
                    <strong>
                        Using <code>pattern</code> and <code>required</code> attributes does not secure a form but rather improves usability (UI/UX). Always perform validations server-side using a scripting language. We will cover validation extensively in JavaScript and PHP courses.
                    </strong>
                </p>
            </section >
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Exercises</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    1 - Create a form with <code>http://bienvu.net/script.php</code> as the value for the <code>action</code> attribute
                    and <code>GET</code> as the value for the <code>method</code> attribute. Some fields are required.
                </p>
                <p className="mt-4 mb-4">
                    For the dropdown list, the values should be: My orders, Question about a product, Complaint, Others.
                </p>
                <p className="font-semibold text-red-600">
                    WARNING: Do not replicate the black frame!
                </p>
                <img
                    src="/htmlform.png"
                    alt="Html form"
                    className="rounded shadow-md"
                    width={760}
                />

                <p className="text-lg leading-relaxed mb-4">
                    Below is the expected dropdown list:
                </p>
                <img
                    src="/listform.png"
                    alt="Html form"
                    className="rounded shadow-md"
                    width={360}
                />

                <p className="mt-4">
                    2 - Observe the data transmitted in the URL.
                </p>
                <p className="mt-4">
                    3 - Replace the GET value with POST for the <code>method</code> attribute. Submit the form again and observe the URL.
                </p>
            </section>
        </div >
    );
};

export default Page;
