import { CodeBlock } from "@/components/CodeBlock/code-block";

export default function JavaScriptForms() {
  return (
    <div className="px-5 py-8 font-sans">

      <h1 className="text-3xl font-bold text-center mb-10">HTML Forms in JavaScript</h1>

      {/* General Information */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> General Information</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          With JavaScript, HTML forms take on a whole new dimension. JavaScript allows you to access each element of a form, read or write values, and associate event handlers to enhance the interactivity of your pages.
        </p>
      </section>

      {/* Form Declaration */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Form Declaration</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          An HTML form is declared using the <code>&lt;form&gt;</code> tags. The form may include attributes such as <code>name</code> and <code>id</code>, which are crucial for JavaScript access.
          Additionally, the <code>action</code> and <code>method</code> attributes are optional if no server call is made.
        </p>
        <p className="text-lg">
          Example of form declaration:
        </p>
        <CodeBlock code={`<form id="myForm" name="myForm">
<!-- form elements go here -->
</form>`} />

      </section >

      {/* Accessing Form Elements */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> Accessing Form and Its Elements</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          In JavaScript, form elements can be accessed through the document object in various ways, such as:
        </p>
        <ul className="list-disc pl-8 space-y-2">
          <li><code>document.nom_du_formulaire</code></li>
          <li><code>document.forms[0]</code> – Accesses the first form in the document.</li>
          <li><code>document.forms['nom_du_formulaire']</code> – Accesses the form by its name.</li>
          <li><code>document.getElementById('idElt')</code> – Accesses an element by its ID.</li>
          <li><code>document.getElementsByName('nameElt')</code> – Accesses all elements with the given name.</li>
        </ul>
      </section>

      {/* Form Controls */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Form Controls</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          JavaScript is widely used to validate HTML forms on the client side. It offers a faster and more interactive experience compared to server-side validation. However, it is essential to also validate the form on the server side in case the user has disabled JavaScript.
        </p>
        <p className="text-lg">
          Form validation can be done using event handlers like <code>onClick</code>, <code>onBlur</code>, <code>onSubmit</code>, and <code>onReset</code>, or by using methods like <code>submit()</code> and <code>reset()</code>.
        </p>
        <ul className="list-disc pl-8 space-y-2">
          <li><strong>submit()</strong> – Validates and submits the form.</li>
          <li><strong>reset()</strong> – Resets the form elements to their initial values.</li>
        </ul>
      </section >

      {/* onSubmit Event Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> The onSubmit Event</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          The <code>onSubmit</code> event is triggered when the form's submit button is clicked or when the <code>submit()</code> method is called. It can return a boolean value to determine whether the form should be submitted or not.
        </p>
        <p className="text-lg">
          Example 1: Preventing form submission:
        </p>
        <CodeBlock code={`<html>
<head>
  <script>
      function checkForm(f) {
          alert("Field check: " + f.elements['field'].value);
          return false; // does not submit the form
      }
  </script>
</head>
<body>
  <form action="" id="form1" onSubmit="return checkForm(this);">
      <input type="text" name="field" value="test" />
      <input type="submit" value="Submit" />
  </form>
</body>
</html>
`} />

        <p className="text-lg">
          In this example, the form submission is intercepted by the <code>onSubmit</code> event, which calls the <code>checkForm()</code> function. The form is not submitted because the function returns <code>false</code>.
        </p>

        <p className="text-lg">
          Example 2: Displaying entered values before submitting:
        </p>
        <CodeBlock code={`<!DOCTYPE html>
<html>
  <head>
      <title>Intercept Form Validation</title>
      <script>
          function checkForm(f) {
              alert("Your name is: " + f.elements['name'].value + " " + f.elements['firstname'].value);
              return false; // do not submit the form
          }
      </script>
  </head>
  <body>
      <h2>Intercept Form Validation</h2> <div className="border-b border-gray-300 mb-6"></div>
      <form id="form1" name="form1" onSubmit="return checkForm(this);">
          <input type="text" name="name" value="Dupont" />
          <input type="text" name="firstname" value="Eric" />
          <input type="submit" id="idSubForm1" name="subForm1" value="Login" />
      </form>
  </body>
</html>
`} />

        <p className="text-lg">
          The <code>return</code> statement in the <code>onSubmit</code> event controls whether the form is submitted based on the return value of the <code>checkForm()</code> function.
        </p>
      </section>
      {/* Text Areas */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Text Areas (text and textarea)</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          These elements allow the user to input multiline text. The most commonly used properties are:
        </p>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left">Property</th>
              <th className="border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2"><code>name</code></td>
              <td className="border px-4 py-2">Indicates the name by which the control can be accessed.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><code>defaultValue</code></td>
              <td className="border px-4 py-2">Indicates the default value displayed in the text area.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><code>value</code></td>
              <td className="border px-4 py-2">Indicates the current value of the text area, either typed by the user or the default value if nothing is typed.</td>
            </tr>
          </tbody>
        </table>
        <p className="text-lg">
          Note: All field values are strings. For numeric values, ensure you replace commas with periods.
        </p>
      </section >

      {/* Radio Buttons */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> Radio Buttons (radio)</h2 > <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          Radio buttons allow the user to select one option from a group. The properties for radio buttons are:
        </p>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left">Property</th>
              <th className="border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2"><code>name</code></td>
              <td className="border px-4 py-2">Indicates the name of the control. All radio buttons in a group share the same name.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><code>index</code></td>
              <td className="border px-4 py-2">The index or rank of the radio button, starting from 0.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><code>checked</code></td>
              <td className="border px-4 py-2">Indicates the current state of the radio button (checked or unchecked).</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><code>defaultChecked</code></td>
              <td className="border px-4 py-2">Indicates the default state of the radio button (whether it's checked by default).</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><code>value</code></td>
              <td className="border px-4 py-2">Indicates the value of the radio button.</td>
            </tr>
          </tbody>
        </table>
      </section >

      {/* Checkbox Buttons */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> Checkboxes (checkbox)</h2 > <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          Checkboxes allow users to select multiple options. The properties for checkboxes are:
        </p>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left">Property</th>
              <th className="border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2"><code>name</code></td>
              <td className="border px-4 py-2">Indicates the name of the control. Each checkbox should have a unique name.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><code>checked</code></td>
              <td className="border px-4 py-2">Indicates whether the checkbox is checked or unchecked.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><code>defaultChecked</code></td>
              <td className="border px-4 py-2">Indicates the default state of the checkbox when it is first displayed (checked or unchecked).</td>
            </tr>
          </tbody>
        </table>
      </section >

      {/* Select List */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> Select List (select)</h2 > <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          A select list is a dropdown menu where users can select an option. The properties for select lists are:
        </p>
        <table className="min-w-full  table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left">Property</th>
              <th className="border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2"><code>name</code></td>
              <td className="border px-4 py-2">Indicates the name of the select list control.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><code>length</code></td>
              <td className="border px-4 py-2">Indicates the number of items in the select list.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><code>selectedIndex</code></td>
              <td className="border px-4 py-2">Indicates the index (starting from 0) of the currently selected option.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><code>defaultSelected</code></td>
              <td className="border px-4 py-2">Indicates which option is selected by default.</td>
            </tr>
          </tbody>
        </table>
      </section >

      {/* The use of 'this' */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> The Use of 'this'</h2 > <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          The <code>this</code> keyword refers to the current object in JavaScript. It is commonly used in form elements to refer to the form itself or a specific element within the form.
        </p>
        <p className="text-lg">
          Example of using <code>this</code> in a form submission:
        </p>
        <CodeBlock code={`<form name="form3">
  <input type="radio" name="choice" value="1" />Choice number 1<br />
  <input type="radio" name="choice" value="2" />Choice number 2<br />
  <input type="radio" name="choice" value="3" />Choice number 3<br />
  <input type="button" name="but" value="What is your choice?" onClick="getChoice(this.form)" />
</form>
`} />

        <p className="text-lg">
          In this example, <code>this.form</code> refers to the form object (form3), avoiding any confusion with other form names.
        </p>
        <p className="text-lg">
          Additionally, <code>this</code> can be used to create properties for an object:
        </p>
        <CodeBlock code={`function book(author, publisher, price) {
    this.author = author;
    this.publisher = publisher;
    this.price = price;
}

var b1 = new book("myAuthor", "myPublisher", 15.0);
document.write("My Author '" + b1.author + "' costs " + b1.price + " Dollars.");
`} />

      </section >

      {/* Exercices */} {/* TODO Fix this ! */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> Exercices</ h2> <div className="border-b border-gray-300 mb-6" />
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Create an HTML form with various user input fields.</li>
          <li>Implement validations for each form field.</li>
          <li>Display error messages in case of incorrect input.</li>
        </ul>
      </section>

      {/* Instructions */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          In this exercise, you will create a contact form in HTML with the following validations:
        </p>
        <ol className="list-decimal list-inside text-lg space-y-2">
          <li>The "Company" field must contain at least 1 character.</li>
          <li>The "Contact Person" field must contain at least 1 character.</li>
          <li>The "Postal Code" field must be exactly 5 numeric characters.</li>
          <li>The "City" field must contain at least 1 character.</li>
          <li>The "Email" field must contain the "@" symbol.</li>
        </ol>
      </section >

      {/* Form Code */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> Contact Form</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          Here's an example of HTML code for the contact form:
        </p>
        <CodeBlock code={`<form action="submitForm.php" method="POST">
  <label for="company">Company:</label>
  <input type="text" id="company" name="company" required minlength="1" />
  
  <label for="contact">Contact Person:</label>
  <input type="text" id="contact" name="contact" required minlength="1" />
  
  <label for="postalCode">Postal Code:</label>
  <input type="text" id="postalCode" name="postalCode" pattern="\\d{5}" required />
  
  <label for="city">City:</label>
  <input type="text" id="city" name="city" required minlength="1" />
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />
  
  <label for="environment">Technical Environment:</label>
  <select id="environment" name="environment">
    <option value="Choose">Choose</option>
    <option value="HTML/CSS/JS">HTML/CSS/JS</option>
    <option value="React">React</option>
    <option value="Vue">Vue</option>
  </select>
  
  <input type="submit" value="Submit" />
</form>`} />

      </section >

      {/* Error Messages */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">Error Messages</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          You need to display appropriate error messages when any of the validation rules are not met. Here are some examples:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>If the "Company" field is empty, show: <code>Please enter a valid company name.</code></li>
          <li>If the "Contact Person" field is empty, show: <code>Please enter a contact person.</code></li>
          <li>If the "Postal Code" field does not contain exactly 5 digits, show: <code>Please enter a valid postal code.</code></li>
          <li>If the "City" field is empty, show: <code>Please enter a city name.</code></li>
          <li>If the "Email" field does not contain an "@" symbol, show: <code>Please enter a valid email address.</code></li>
        </ul>
      </section >
    </div >
  );
}
