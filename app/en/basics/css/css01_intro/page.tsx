import { CodeBlock } from "@/components/CodeBlock/code-block";
import React from "react";

const CSSPage: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">CSS: Introduction and Basics</h1>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">CSS Objectives</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    CSS (Cascading Style Sheets) complements HTML by providing a language to define the graphical properties of elements.
                </p>
                <p className="text-lg leading-relaxed mb-4">CSS manages three main aspects:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>The layout of HTML elements on your page (positioning)</li>
                    <li>Typography: font styles and text size</li>
                    <li>Graphic styling: colors, borders, and backgrounds</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    Styles can be applied to one or multiple elements, allowing a style to be defined once and reused wherever needed without redefinition.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    CSS code consists of a selector followed by a block of instructions enclosed in curly braces:
                </p>
                <CodeBlock code={`selector {
    CSS instructions;
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    Example:
                </p>
                <CodeBlock code={`h1 {
    color: red;
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    This basic example applies the red color to the text within an <code>&lt;h1&gt;</code> element.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    As shown, a CSS instruction ends with a semicolon. Multiple instructions can be included in a block:
                </p>
                <CodeBlock code={`/* CSS */
h1 {
    color: red;
    border: 2px solid blue;
    background-color: yellow;
    font-family: Verdana;
}`} />
            </section >
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Cascade and Inheritance</h2> <div className="border-b border-gray-300 mb-6" />
                <h3 className="text-xl font-semibold mb-4">The Principle of Cascade</h3>
                <p className="text-lg leading-relaxed mb-4">
                    CSS (Cascading Style Sheets) operates on two core principles: cascade and inheritance.
                    The cascade determines the final style of an element when multiple rules from different sources apply.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    While this complexity makes CSS powerful, it can also be a source of confusion when troubleshooting issues.
                    The cascade derives its power from the following sources of information:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Default browser styles for the markup language</li>
                    <li>User-defined styles in the browser settings</li>
                    <li>External styles linked by the author using <code>&lt;link&gt;</code> elements</li>
                    <li>Inline styles within the <code>&lt;style&gt;</code> tag in the <code>&lt;head&gt;</code> of the document</li>
                    <li>Inline styles directly applied to elements via the <code>style</code> attribute</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    Each source overrides the previous one, in this order. This prioritization in the cascade is often referred to as the "weight" of style rules.
                </p>

                <h3 className="text-xl font-semibold mb-4">Inheritance</h3>

                <h4 className="text-xl font-medium mb-3">Mixing Rules</h4>
                <p className="text-lg leading-relaxed mb-4">
                    When multiple rules apply to the same element, all non-conflicting rules are combined.
                    The cascade handles conflicts, but other rules remain in effect.
                </p>
                <CodeBlock code={`<!-- HTML -->
<p className="text-lg leading-relaxed mb-4">I love <strong>CSS</strong></p>

/* CSS */
p strong {
    background-color: khaki;
    color: green;
}

strong {
    text-decoration: underline;
    color: red;
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    Due to its higher specificity, the first rule overrides the <code>color</code> property from the second rule.
                    However, the background color from the first rule and the text decoration from the second rule both apply to the <code>&lt;strong&gt;</code> element.
                </p>

                <h4 className="text-xl font-medium mb-3">Property Inheritance</h4>
                <p className="text-lg leading-relaxed mb-4">
                    Some properties can inherit values from their parent element.
                    This mechanism allows elements to adopt styles from their ancestors without explicitly defining the same rules repeatedly.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    For example, properties like <code>color</code> or <code>font-family</code> inherit naturally.
                    If no value is provided, the default browser style for these properties is used.
                    CSS provides three special values for inheritance management:
                </p>
                <table className="table-auto border-collapse border border-gray-400 mb-6">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Value</th>
                            <th className="border border-gray-300 px-4 py-2">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">inherit</td>
                            <td className="border border-gray-300 px-4 py-2">
                                Forces the property to inherit its value from the parent element.
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">initial</td>
                            <td className="border border-gray-300 px-4 py-2">
                                Resets the property to its default browser value.
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">unset</td>
                            <td className="border border-gray-300 px-4 py-2">
                                Resets the property: behaves as <code>inherit</code> for inheritable properties, and as <code>initial</code> otherwise.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section >
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Declaring a Stylesheet</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    There are several ways to integrate CSS stylesheets into a webpage.
                    However, keep in mind the order of precedence established by the cascade principle.
                </p>

                <h3 className="text-xl font-semibold mb-4">Defining Styles in an HTML Tag</h3>
                <p className="text-lg leading-relaxed mb-4">
                    CSS styles can be declared directly within an HTML tag using the <code>style</code> attribute.
                    However, this method is no longer recommended.
                    Best practices suggest placing all styles in external files for better maintainability and organization.
                </p>
                <CodeBlock code={`<!-- HTML Code -->
<html>
<head>   
    <title>File Title</title> 
</head> 
<body>    
    <h1 style="color:blue;">...</h1> 
</body> 
</html>`} />

                <h3 className="text-xl font-semibold mb-4">Defining Styles in the <code className="bg-gray-200 text-red-600">&lt;head&gt;</code> Section</h3>
                <p className="text-lg leading-relaxed mb-4">
                    Styles can also be declared in the document's <code className="bg-gray-200 text-red-600">&lt;head&gt;</code> section using the <code>&lt;style&gt;</code> tag.
                </p>
                <CodeBlock code={`<!-- HTML Code -->
<html>
<head> 
    <style type="text/css">  /* This is CSS */
    /* Styles are defined here */
    </style>
</head>
<body>
    ...
</body>
</html>`} />
                <p className="text-lg leading-relaxed mb-4">
                    Note: The default value for the <code>type</code> attribute is <code>type/css</code>, so the attribute is optional.
                    The following is a simplified example:
                </p>
                <CodeBlock code={`<style>
/* Styles are defined here */
</style>`} />
            </section >
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Defining Global Styles in a Separate CSS File</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Styles can be defined in a separate text file (.css) that can be linked to the HTML files where needed.
                    Any update to the .css file will automatically reflect across all the HTML pages that use this stylesheet.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    This is the recommended best practice (separating content and presentation) and should always be applied.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    A .css file is linked using the <code>&lt;link&gt;</code> tag in the <code>&lt;head&gt;</code> section of the webpage:
                </p>
                <CodeBlock code={`<!-- HTML Code -->
<html>
<head>
    <title>File Title</title> 
    <link rel="stylesheet" href="file.css"> 
</head> 
<body> 
… 
</body> 
</html>`} />
                <p className="text-lg leading-relaxed mb-4">
                    It's possible to combine a link to an external .css file with locally defined styles using the <code>&lt;style&gt;</code> tag.
                    In such cases, styles defined in the <code>&lt;style&gt;</code> block take priority.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Note: Since HTML5, the <code>&lt;link&gt;</code> tag no longer uses a self-closing slash <code>/&gt;</code>, and the <code>type</code> attribute is obsolete.
                    Thus, no need for <code>type='text/css'</code>.
                </p>
                <CodeBlock code={`<!-- HTML Code -->
<html>
<head>   
    <title>File Title</title>    
    <link rel="stylesheet" href="styles/file.css">  
</head>
<body>
 …
</body>
</html>`} />
                <p className="text-lg leading-relaxed mb-4">
                    The <code>href</code> attribute must contain the full path to the CSS file. This can even be a URL to a CSS file hosted on another server:
                </p>
                <CodeBlock code={`<!-- HTML Code -->
<html>
<head>   
    <title>File Title</title>
    <link rel="stylesheet" href="http://www.example.com/styles/file.css">   
</head>
<body>
 …
</body>
</html>`} />
                <p className="text-lg leading-relaxed mb-4">
                    Multiple .css files can be linked to a single webpage.
                    While there is no limit to the number of linked stylesheets, more files can slow down page loading times.
                </p>
                <CodeBlock code={`<!-- HTML Code -->
<html>
<head>   
    <title>File Title</title>
    <link rel="stylesheet" href="file1.css">
    <link rel="stylesheet" href="styles/file2.css">
    <link rel="stylesheet" href="http://www.anotherexample.com/assets/file3.css">
</head>
<body>
…
</body>
</html>`} />
                <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
                <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
                    <li>CSS is used to structure and style the HTML content of a webpage.</li>
                    <li>CSS follows the principles of cascading and inheritance.</li>
                    <li>
                        CSS is applied via selectors followed by instructions inside a block enclosed in curly braces.
                    </li>
                    <li>
                        There are three ways to declare CSS styles in a webpage (within tags, in the head, or in an external CSS file).
                        The best practice is to place all styles in an external file (or multiple files if necessary).
                    </li>
                </ul>
            </section >
        </div >
    );
};

export default CSSPage;
