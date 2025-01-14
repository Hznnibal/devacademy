import { CodeBlock } from "@/components/CodeBlock/code-block";

export default function JS11DOMAndObjects() {
  return (
    <div className="px-5 py-8 font-sans">

      <h1 className="text-3xl font-bold text-center mb-10">JS 11: The DOM and the Object</h1>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> Introduction</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          JavaScript is an object-oriented language*. For JavaScript, a web page is a "document," and each element
          (HTML tags and attributes, as well as the browser window) of this document is an object. This object representation is called
          the "Document Object Model" or D.O.M.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The DOM represents the tree structure of a web page, a hierarchy where each level is a node that may have parent and/or child elements.
          The default object (the parent of all other elements) is the <code>document</code> object.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Everything is an object in JavaScript, for instance:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Strings, numbers, and booleans (either as objects or as primitive values treated as objects)</li>
          <li>Functions</li>
          <li>Arrays</li>
          <li>Dates</li>
          <li>The browser (<code>Navigator</code> object)</li>
          <li>The window (<code>Window</code> object)</li>
          <li>The screen (<code>Screen</code> object)</li>
          <li>The location (<code>Location</code> object)</li>
          <li>The browsing history (<code>History</code> object)</li>
          <li>Regular expressions (<code>Regexp</code> object)</li>
        </ul>
        <p className="text-sm italic">
          *For purists, JavaScript is not strictly an object-oriented language like C++ or Java. It is more accurately described as an object-based language.
        </p>
      </section>

      {/* Object Hierarchy */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Object Hierarchy</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          JavaScript divides a web page into objects derived from HTML elements and allows you to access, retrieve information from, and manipulate these objects.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Here's an illustration of the object hierarchy for a loaded web page:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>The <code>window</code> object represents the browser window.</li>
          <li>The <code>document</code> object represents the HTML document inside the window.</li>
          <li>The <code>form</code> object represents an HTML form inside the document.</li>
          <li>Inside the form, objects such as <code>radio</code>, <code>button</code>, and <code>text</code> represent form elements.</li>
        </ul>
        <p className="text-lg leading-relaxed mb-4">
          To access an object, you specify its complete path from the outermost container to the referenced object.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          For instance, for the "week" radio button:
        </p>
        <CodeBlock code={`var radio = document.forms[0].elements[0];`} />
        <p className="text-lg leading-relaxed mb-4">
          To retrieve an object by its ID:
        </p>
        <CodeBlock code={`var elt = document.getElementById("elementID");`} />
        <p className="text-lg leading-relaxed mb-4">
          To retrieve objects by their name attribute:
        </p>
        <CodeBlock code={`var elt = document.getElementsByName("elementName");`} />
      </section >

      {/* Properties */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2"> Object Properties</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          A property is an attribute or characteristic of an object. For instance, a car's steering wheel can be wooden or leather, while a book has properties like its author, publisher, title, and ISBN.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          To access a property in JavaScript, use the syntax:
        </p>
        <CodeBlock code={`objectName.propertyName`} />
        <p className="text-lg leading-relaxed mb-4">
          For example, to check if a radio button is selected:
        </p>
        <CodeBlock code={`document.forms[0].elements[0].checked`} />
      </section >

      {/* innerHTML Property */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">The innerHTML Property</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          This property retrieves the child HTML code of an HTML element or modifies its content.
        </p>
        <CodeBlock code={`<div id="idDiv">
  <p>I am a paragraph in a div</p>
</div>
<script>
  document.getElementById('idDiv').innerHTML = "<h3>Title</h3>";
</script>`} />
      </section >

      {/* Value Property */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2"> The value Property</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          This property retrieves or modifies the value of a form field.
        </p>
        <CodeBlock code={`<input type="text" id="txtBox">
<script>
  document.getElementById('txtBox').value = 53;
</script>`} />
      </section >
      {/* The DOM */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">The DOM</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          The DOM, or Document Object Model, serves as an organizational reference model for the different objects that make up a web page.
          The W3C has defined a standard DOM, called DOM Level 0, which is supported by all browsers since Internet Explorer 5.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Browsers provide a set of functions to allow JavaScript to access DOM elements. JavaScript acts as an interface to the browser's internal objects.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The W3C DOM allows access to all document elements, whereas the browser DOM may not allow access to the entire document content.
        </p>
      </section >

      {/* Browser Object Model */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2"> Browser Object Model</ h2> <div className="border-b border-gray-300 mb-6" />
        <h3 className="text-xl font-semibold">Window Object</h3>
        <p className="text-lg leading-relaxed mb-4">
          The <code>window</code> object refers to the browser's window. It includes:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><code>Anchors[]</code>: Array of anchor tags (&lt;a&gt;).</li>
          <li><code>Links[]</code>: Array of links (href attributes in &lt;a&gt; and &lt;area&gt; tags).</li>
          <li><code>Embeds[]</code>: Array of multimedia objects (&lt;embed&gt; tags).</li>
        </ul>

        {/* Example */}
        <h3 className="text-xl font-semibold">Example</h3>
        <CodeBlock code={`<!DOCTYPE html>
<html>
<head>
    <title>DOM Example</title>
    <script>
        function testRadio() {
            var radios = document.getElementsByName("btnRadChoice");
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].checked) {
                    document.getElementById("txtBox1").value = radios[i].value;
                }
            }
        }
    </script>
</head>
<body>
    <form name="frmChoice">
        <input type="radio" name="btnRadChoice" value="week" checked> Week
        <br>
        <input type="radio" name="btnRadChoice" value="weekend"> Weekend
        <br>
        <input type="button" name="btn" value="Choose" onclick="testRadio();">
        <br>
        <input id="txtBox1" type="text" name="txtChoice" value="">
    </form>
</body>
</html>`} />
      </section >

      {/* Window Object Features */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">Window Object Features</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          The <code>window</code> object provides methods and properties to interact with the browser window.
        </p>
        <h3 className="text-xl font-semibold">Create a New Window</h3>
        <p className="text-lg leading-relaxed mb-4">
          Use the following syntax to create a new window:
        </p>
        <CodeBlock code={`var myWindow = window.open(url, name, features, replace);`} />
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><strong>url</strong>: URL of the page to display.</li>
          <li><strong>name</strong>: Name of the new window.</li>
          <li><strong>features</strong>: Optional. Comma-separated list of window features.</li>
          <li><strong>replace</strong>: Optional. Determines whether the new window replaces the current one in the browser history.</li>
        </ul>

        <h3 className="text-xl font-semibold">Window Features</h3>
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Feature</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">toolbar</td>
              <td className="border border-gray-300 px-4 py-2">Show or hide the toolbar (yes/no).</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">location</td>
              <td className="border border-gray-300 px-4 py-2">Show or hide the address bar (yes/no).</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">width</td>
              <td className="border border-gray-300 px-4 py-2">Window width in pixels.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">height</td>
              <td className="border border-gray-300 px-4 py-2">Window height in pixels.</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-xl font-semibold">Close a Window</h3>
        <p className="text-lg leading-relaxed mb-4">
          Use the <code>close()</code> method to close a window:
        </p>
        <CodeBlock code={`myWindow.close();`} />
      </section >

      {/* Timers */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2"> Timers</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          The <code>window</code> object provides a timer feature to execute a function after a specified delay.
        </p>
        <CodeBlock code={`var timerId = setTimeout("functionToCall()", delayInMilliseconds);`} />
        <p className="text-lg leading-relaxed mb-4">
          To clear the timer before it executes, use:
        </p>
        <CodeBlock code={`clearTimeout(timerId);`} />
      </section >
      {/* Navigator Object */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">The Navigator Object</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          The <code>navigator</code> object provides the ability to identify the browser and its properties, such as version and platform.
          This is useful for ensuring page compatibility across different browsers.
        </p>

        <h3 className="text-xl font-semibold">Key Properties</h3>
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Property</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">appCodeName</td>
              <td className="border border-gray-300 px-4 py-2">Returns the browser's code name.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">appName</td>
              <td className="border border-gray-300 px-4 py-2">Returns the browser's brand name.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">appVersion</td>
              <td className="border border-gray-300 px-4 py-2">Returns information about the version, OS, and locale.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">userAgent</td>
              <td className="border border-gray-300 px-4 py-2">Returns details about the browser's user agent string.</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-xl font-semibold">Example</h3>
        <CodeBlock code={`<!DOCTYPE html>
<html>
<head>
    <title>Navigator Object Example</title>
</head>
<body>
    <script>
        var version = navigator.appVersion;
        console.log("Browser code name: " + navigator.appCodeName);
        console.log("Browser brand: " + navigator.appName);
        console.log("Version details: " + version);
        console.log("User agent: " + navigator.userAgent);

        if (version.indexOf('Win') > -1) {
            console.log("You are using Windows.");
        }

        if (navigator.userAgent.indexOf('Firefox') > -1) {
            console.log("You are using Firefox.");
        } else if (version.indexOf('Chrome') > -1) {
            console.log("You are using Chrome.");
        } else if (version.indexOf('MSIE') > -1) {
            console.log("You are using Internet Explorer.");
        } else {
            console.log("Unknown browser.");
        }
    </script>
</body>
</html>`} />
      </section >

      {/* Location Object */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2"> The Location Object</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          The <code>location</code> object provides information about the URL of the current page.
        </p>

        <h3 className="text-xl font-semibold">Key Methods</h3>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><code>reload()</code>: Reloads the current page.</li>
          <li><code>replace(url)</code>: Loads a new page specified by the URL.</li>
        </ul>

        <h3 className="text-xl font-semibold">Key Properties</h3>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><code>hostname</code>: The domain name of the web host.</li>
          <li><code>href</code>: The complete URL.</li>
          <li><code>pathname</code>: The path of the URL.</li>
          <li><code>port</code>: The port number of the web host.</li>
          <li><code>protocol</code>: The protocol used (e.g., "http:" or "https:").</li>
        </ul>
      </section >

      {/* History Object */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">The History Object</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          The <code>history</code> object allows navigation through the browser's session history.
        </p>

        <h3 className="text-xl font-semibold">Key Methods</h3>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><code>back()</code>: Loads the previous page in the session history.</li>
          <li><code>forward()</code>: Loads the next page in the session history.</li>
          <li><code>go(x)</code>: Loads the page at the specified index in the session history.</li>
        </ul>
      </section >

      {/* Screen Object */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2"> The Screen Object</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          The <code>screen</code> object provides information about the user's screen, such as resolution and color depth.
        </p>

        <h3 className="text-xl font-semibold">Key Properties</h3>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><code>availHeight</code>: The available screen height.</li>
          <li><code>availWidth</code>: The available screen width.</li>
          <li><code>colorDepth</code>: The color depth of the screen.</li>
          <li><code>height</code>: The total screen height.</li>
          <li><code>width</code>: The total screen width.</li>
        </ul>
      </section >
    </div >
  );
}
