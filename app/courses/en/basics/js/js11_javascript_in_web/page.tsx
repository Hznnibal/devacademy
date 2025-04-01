import { CodeBlock } from "@/components/CodeBlock/code-block";

export default function JSIntegrationDemo() {
  return (
    <div className="px-5 py-8 font-sans">

      <h1 className="text-3xl font-bold text-center mb-10">JS 13: Integrating JavaScript into a Web Page</h1>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> Overview</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          There are several ways to integrate JavaScript into a web page. These methods are similar to the ones used for CSS integration. Let's explore them below:
        </p>
      </section>

      {/* Direct Integration in HTML Tags */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Direct Integration in HTML Tags</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          JavaScript code can be executed directly inside HTML tags using event attributes such as <code>onClick</code>, <code>onMouseOver</code>, etc.
          However, this method is now discouraged as it mixes HTML and JavaScript.
        </p>
        <CodeBlock code={`<html>
<head>
 <title>File Title</title>
</head>
<body>
 <a href="page.html" title="View the page" onclick="alert('Link clicked!');"></a>
</body>
</html>`} />
      </section >

      {/* Integration via <script> Tag */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2"> Integration via the & lt; script & gt; Tag</h2 > <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          JavaScript code can also be placed anywhere in the web page using the <code>&lt;script&gt;</code> tag. This method is also discouraged today.
        </p>
        <CodeBlock code={`<html>
<head>
 <title>File Title</title>
</head>
<body>
 <a href="page.html" title="View the page"></a>
 <script>alert('Hello, World!');</script>
</body>
</html>`} />
      </section >

      {/* Integration via External File */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2"> Integration via an External File</ h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          The recommended practice is to write JavaScript in a separate file with the <code>.js</code> extension. This allows for cleaner, reusable, and more maintainable code.
        </p>
        <CodeBlock code={`<!DOCTYPE html>
<html>
<head>
 <title>File Title</title>
</head>
<body>
 <a href="page.html" title="View the page"></a>
 <script src="script.js"></script>
</body>
</html>`} />
        <p className="text-lg leading-relaxed mb-4">
          The <code>src</code> attribute specifies the path to the external file, which can be a relative path
          (e.g., <code>assets/js/script.js</code>) or an absolute URL (e.g., <code>https://code.jquery.com/jquery-3.3.1.js</code>).
        </p>
      </section >

      {/* Exercises */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">Exercises</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          Follow the steps below to practice integrating JavaScript:
        </p>
        <ol className="list-decimal list-inside text-lg space-y-4">
          <li>
            Copy the following code into your preferred text editor and save it as an HTML file:
            <CodeBlock code={`<!DOCTYPE html>
<html>
<head>
 <title>My First Script</title>
 <script>
    alert("Hello!");
    console.log("Hello from the console!");
    document.write("Hello, World!");
 </script>
</head>
<body>
 <!-- Add JavaScript code here for the title -->   
 <p>Nothing to add here.</p>  
</body>
</html>`} />
          </li>
          <li>Open the HTML file in a web browser and observe what happens on the page and in the console.</li>
          <li>
            Create a new JavaScript file named <code>exercise1.js</code>. Move the JavaScript code from the HTML file into the new external file.
          </li>
          <li>
            Link the external JavaScript file to the HTML file using a <code>&lt;script&gt;</code> tag at the end of the <code>&lt;body&gt;</code>.
          </li>
          <li>
            Modify the JavaScript to repeat the title of the page in the <code>&lt;body&gt;</code> using <code>document.write()</code>. Add HTML tags inside the string parameter.
          </li>
          <li>
            Experiment with passing HTML code as a parameter to the <code>alert()</code> function. What do you notice?
          </li>
        </ol>
      </section >
    </div >
  );
}
