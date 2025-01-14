import { CodeBlock } from "@/components/CodeBlock/code-block";

export default function JSEventsDemo() {
  return (
    <div className="px-5 py-8 font-sans">

      <h1 className="text-3xl font-bold text-center mb-10">JS 14: Events</h1>

      {/* Definition of Events */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> Definition</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          Events are actions performed either by a user or by the browser itself. They enable JavaScript to create interactive and dynamic user experiences.
        </p>
        <p className="text-lg">
          Examples of events include clicking a link, loading a web page, or submitting a form by clicking a submit button.
        </p>
      </section>

      {/* Event List */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">List of Events</h2> <div className="border-b border-gray-300 mb-6" />
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Event</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              { event: "blur", description: "When a form element loses focus" },
              { event: "change", description: "When the value of a form field changes" },
              { event: "click", description: "When a user clicks a button, link, or other element" },
              { event: "focus", description: "When a form element gains focus" },
              { event: "load", description: "When the browser loads the page" },
              { event: "mouseover", description: "When the user hovers over an element" },
              { event: "mouseout", description: "When the mouse leaves an element" },
              { event: "select", description: "When the user selects a form field" },
              { event: "submit", description: "When the user submits a form" },
              { event: "unload", description: "When the user leaves the page" },
            ].map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{item.event}</td>
                <td className="border border-gray-300 px-4 py-2">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section >

      {/* Practical Examples */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> Practical Examples</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          When an event occurs, JavaScript captures it and executes corresponding code, often a function. For example, you can:
        </p>
        <ul className="list-disc ml-8 space-y-2 text-lg">
          <li>Change a color or size</li>
          <li>Validate form input</li>
          <li>Update HTML content or data dynamically</li>
        </ul>
      </section>

      {/* Event Handlers */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Event Handlers</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          JavaScript events are intercepted using event handlers. Event names are written in camelCase and prefixed by "on". For instance:
        </p>
        <CodeBlock code={`<p onClick="alert('OK')">Click here</p>`} />
        <p className="text-lg">
          In this example, clicking the paragraph triggers an alert box with the message "OK".
        </p>
      </section >

      {/* Modern Practices */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> Modern Practices</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          Avoid inline JavaScript event handlers like <code>onClick</code>. Instead, use modern, non-intrusive approaches with
          <code>addEventListener</code>, <code>getElementById</code>, or <code>querySelector</code>. These methods help keep your code clean and
          separate concerns effectively.
        </p>
      </section>
      {/* Overview Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Overview</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          In non-intrusive JavaScript, events can be captured and handled using the <code>getElementById</code> method, which targets an HTML element by its ID,
          and the <code>addEventListener</code> method, which adds an event listener to the element. This allows us to separate JavaScript code from HTML.
        </p>
      </section >

      {/* Example with getElementById and addEventListener */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> Example:Using getElementById and addEventListener</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          The following example demonstrates how to use <code>getElementById</code> to select an element and add an event listener for the <code>click</code> event:
        </p>
        <CodeBlock code={`<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <p id="button1">Click me !</p>
    <script>
var element = document.getElementById("button1");

element.addEventListener("click", function() {
   alert("OK");
});
</script>
  </body>
</html>`} />
        <p className="text-lg">
          In this case, the event name (e.g., <code>click</code>) is not prefixed with "on". When the paragraph with <code>id="button1"</code> is clicked, the message "OK" will appear in an alert box.
        </p>
      </section >

      {/* Exercise Section */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">Exercise</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          Test the above example by implementing it in your own HTML file.
          Observe how the event is triggered when the element is clicked, and how the event listener responds.
        </p>
      </section >

      {/* Example with querySelector */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2"> Example:Using querySelector</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          The <code>querySelector</code> method offers an alternative syntax and achieves the same result as the combination of <code>getElementById</code> and
          <code>addEventListener</code>. It selects the first element matching the given CSS selector.
        </p>

        <CodeBlock code={`<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <button id="button1">Click me !</button>
    <script>
document.querySelector('#button1').onclick = function() {
    alert('You clicked !');
}   
</script>
</body>
</html>`} />
        <p className="text-lg">
          In this example, clicking the button will trigger the alert with the message "Vous avez cliqué !".
        </p>
      </section >

      {/* Other Methods Section */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">Other Methods for Selecting Elements</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          There are several other methods for selecting elements in the DOM:
        </p>
        <ul className="list-disc ml-8 space-y-2 text-lg">
          <li><code>getElementsByClassName</code>: Selects elements with a specific class and returns a collection of those elements.</li>
          <li><code>getElementsByTagName</code>: Selects elements with a specific tag name (e.g., <code>div</code>, <code>p</code>) and returns a collection.</li>
        </ul>
        <p className="text-lg">
          Note: Don't forget the "s" in these methods: <code>getElementsBy...</code>.
        </p>
      </section >

      {/* Event Handlers Table */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2"> Event Handlers for Specific Objects</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          JavaScript provides event handlers for various objects in the DOM. Here's a list of objects and their corresponding events:
        </p>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Object</th>
              <th className="border border-gray-300 px-4 py-2">Tag</th>
              <th className="border border-gray-300 px-4 py-2">Events</th>
            </tr>
          </thead>
          <tbody>
            {[
              { object: "Window", tag: "body", events: "load, unload, focus, blur, error" },
              { object: "Anchor", tag: "a", events: "click, mouseover, mouseout" },
              { object: "Form", tag: "form", events: "reset, submit" },
              { object: "Form elements", tag: "input, select, textarea", events: "click, focus, blur, change, select" },
              { object: "Image", tag: "img", events: "load, abort, error" },
            ].map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{item.object}</td>
                <td className="border border-gray-300 px-4 py-2">{item.tag}</td>
                <td className="border border-gray-300 px-4 py-2">{item.events}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section >

      {/* MouseOver Example */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">MouseOver Example</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          The <code>mouseover</code> event can be used to trigger a function when the user hovers over a link or element. Here's an example:
        </p>

        <CodeBlock code={`<html>
<head>
</head>
<body>
   <a href="#" onMouseOver="message();">Important message</a>
   <script>
   function message()
   {
      alert("Hello");
   }
   </script>
</body>
</html>`} />
        <p className="text-lg">
          Hovering over the "Important message" link will trigger the <code>message()</code> function, which shows an alert box with "Hello".
        </p>
      </section >
      {/* Image Change Section */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2"> Image Change on Mouseover</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          Using the <code>mouseover</code> event, we can change an image when the user hovers over it. The code below demonstrates this by changing the image source when the user moves the mouse over or out of the image.
        </p>

        <CodeBlock code={`<img src="images1.jpg" border="0" width="38" height="20" 
onMouseOver="this.src='images2.jpg'"  
onMouseOut="this.src='images1.jpg'">`} />
        <p className="text-lg">
          In this example, when the mouse is hovered over the image, it will switch to another image. The <code>onMouseOver</code> event changes the <code>src</code> attribute of the image, and <code>onMouseOut</code> restores the original image.
        </p>
      </section >

      {/* Invisible Image Section */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">Invisible Image Trick</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          A fun trick involves using an invisible image that matches the background color (or is transparent). By carefully positioning it in the user's path, you can trigger actions without them noticing. The following shows how to make an invisible image:
        </p>

        <CodeBlock code={`<img src="images/invisible.jpg" style="position:absolute; left:100px; top:100px; opacity:0;">`} />

        <p className="text-lg">
          When the user hovers over this invisible image, any action can be triggered, such as displaying a message or activating a hidden effect. This technique is often used for fun interactive elements.
        </p>
      </section >

      {/* Exercise: Magic Number Exercise */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2"> Magic Number Exercise</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg">
          In this exercise, you'll create a program that generates a random "magic number". The user must guess the number, and the program will give feedback if the guess is too high or too low.
        </p>
        <CodeBlock code={`<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title>Magic number</title>
  </head>
  <body>
    <div id="label1">Enter a number</div>
    <input id="textBox1" value="">
    <input type="button" id="button1" value="check"> 

    <script>
      let magicNumber = Math.floor(Math.random() * 100) + 1;

      function verif() {
        const userGuess = document.getElementById('textBox1').value;
        const label = document.getElementById('label1');
        
        if (userGuess == magicNumber) {
          label.innerHTML = "Congrats, you found the magic number!";
        } else if (userGuess > magicNumber) {
          label.innerHTML = "Too big! Try again.";
        } else {
          label.innerHTML = "Too little! Try again.";
        }
      }

      document.getElementById('button1').addEventListener('click', verif);
    </script>
  </body>
</html>`} />

        <p className="text-lg">
          The program generates a random number between 1 and 100. The user inputs their guess in the text box, and when they click the "Verifier" button, the program compares their guess to the magic number and displays whether the guess is too high, too low, or correct in the <code>label1</code> element.
        </p>
        <p className="text-lg">
          Once this version works, you can refactor the code to make it non-intrusive by separating the JavaScript from the HTML (avoiding inline <code>onclick</code> attributes).
        </p>
      </section >


    </div >
  );
}
