import { CodeBlock } from "@/components/CodeBlock/code-block";
import Link from "next/link";

export default function CssSolutions() {
  return (
    <div className="px-5 py-8 font-sans">

      <h1 className="text-3xl font-bold text-center mb-10">Solutions: CSS Exercises</h1>

      {/* Introduction to CSS */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction to CSS</h2> <div className="border-b border-gray-300 mb-6" />

        <p className="text-lg leading-relaxed mb-4">
          Here’s how to add a CSS stylesheet and style a simple page.
        </p>
        <CodeBlock code={`/* HTML */
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Exercise</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1 className="text-3xl font-semibold mb-6 text-center">Hello World!</h1>
</body>
</html>

/* style.css */
body {
  color: blue;
  font-family: Arial, sans-serif;
}`} />
      </section >

      {/* Selectors */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">2. Selectors</h2> <div className="border-b border-gray-300 mb-6" />

        <p className="text-lg leading-relaxed mb-4">
          Example of using both simple and advanced selectors.
        </p>
        <CodeBlock code={`/* CSS */
h1 {
  border: 2px solid red;
}

.highlight {
  background-color: yellow;
}`} />
      </section >

      {/* Colors and Fonts */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">3. Colors and Fonts</h2 > <div className="border-b border-gray-300 mb-6" />

        <p className="text-lg leading-relaxed mb-4">
          Usage of custom colors and fonts.
        </p>
        <CodeBlock code={`/* CSS */
body {
  background-color: rgba(255, 99, 71, 0.5); /* Transparent tomato */
  font-family: 'Roboto', sans-serif; /* Import from Google Fonts */
}

/* Add this in the <head> of HTML */
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
`} />
      </section >

      {/* Box Model */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">4. Box Model</h2 > <div className="border-b border-gray-300 mb-6" />

        <p className="text-lg leading-relaxed mb-4">
          Managing dimensions, margins, and overflows.
        </p>
        <CodeBlock code={`/* CSS */
.box {
  border: 2px solid black;
  padding: 10px;
  margin: 20px;
  width: 200px;
  height: 100px;
  overflow: hidden; /* Handles overflow */
}
`} />
      </section >

      {/* Positioning */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">5. Positioning</h2 > <div className="border-b border-gray-300 mb-6" />

        <p className="text-lg leading-relaxed mb-4">
          Example of using positioning properties.
        </p>
        <CodeBlock code={`/* CSS */

/* Position absolute */
.absolute-box {
  position: absolute;
  top: 10px;
  right: 10px;
}

/* Position sticky */
.sticky-nav {
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
}`} />
      </section >

      {/* Responsive */}
      < section className="mb-6" >
        <h2 className="text-2xl font-semibold mb-2">6. Responsive Design</h2 > <div className="border-b border-gray-300 mb-6" />

        <p className="text-lg leading-relaxed mb-4">
          Example of using media queries.
        </p>
        <CodeBlock code={`/* CSS */

/* Three-column layout */
.container {
  display: flex;
  flex-wrap: wrap;
}

.column {
  flex: 1;
  min-width: 200px;
}

/* Media query for mobile */
@media (max-width: 600px) {
  .column {
    flex: 100%; /* One column */
  }

  body {
    background-color: lightblue; /* Changes color based on width */
  }
}`} />
      </section >

      <div className="text-center mt-8">
        <Link href="../css07_exercices" className="text-blue-600 underline text-lg">
          Back to Exercises
        </Link>
      </div>
    </div >
  );
}
