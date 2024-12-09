import React from "react";

const CSSPage: React.FC = () => {
    return (
        <div className="px-4 space-y-12">
            <h1 className="text-4xl font-bold mb-6">CSS: Selectors</h1>
            <section className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">Basic Selectors</h3>
                <p className="text-lg leading-relaxed mb-4">
                    Consider the following CSS declaration:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`body {
    background-color: #FFFFCC;
    margin-left: 100px;
}

h1 {
    font-size: 48pt;
    color: #FF0000;
    font-style: italic;
    border-bottom: solid thin black;
}

p {
    font-size: 12pt;
    line-height: 14pt;
    font-family: Arial;
    letter-spacing: 0.2mm;
    word-spacing: 0.8mm;
    color: blue;
}`}</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">
                    In this example, <code>body</code>, <code>h1</code>, and <code>p</code> are selectors.
                    A "selector" refers to the part before the curly braces. It determines which HTML elements will be affected by the defined properties.
                </p>

                <h4 className="text-xl font-semibold mb-3">Types of Selectors</h4>
                <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed mb-6">
                    <li><strong>HTML Tag:</strong> Targets elements by their tag name, like <code>body</code>, <code>h1</code>, or <code>p</code>.</li>
                    <li><strong>Class:</strong> Starts with a dot (e.g., <code>.className</code>). Applied to elements with the specified <code>class</code> attribute.</li>
                    <li><strong>ID:</strong> Starts with a hash (e.g., <code>#idName</code>). Targets an element with a unique <code>id</code> attribute.</li>
                    <li><strong>Universal:</strong> The asterisk <code>*</code> selects all elements.</li>
                </ul>

                <h4 className="text-xl font-semibold mb-3">Class Selector Example</h4>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<html>
<head>
    <style>
        .one {
            color: red;
        }
    </style>
</head>
<body>
    <h3 class="one">Red Title</h3>
    <h3>Normal Title</h3>
    <p class="one">Text in red</p>
</body>
</html>`}</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">
                    In this example, the style <code>.one</code> is applied to elements with the <code>class="one"</code> attribute.
                </p>

                <h4 className="text-xl font-semibold mb-3">ID Selector Example</h4>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<html>
<head>
    <style>
        #one {
            background-color: silver;
        }
    </style>
</head>
<body>
    <h3 id="one">Silver Background</h3>
    <h3>Normal Title</h3>
</body>
</html>`}</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">
                    In this case, the style <code>#one</code> applies to the element with the <code>id="one"</code>. Note that <code>id</code> must be unique on a webpage.
                </p>

                <h4 className="text-xl font-semibold mb-3">Universal Selector</h4>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`* {
    color: red;
}`}</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">
                    The universal selector <code>*</code> applies styles to all elements.
                </p>

            </section>
            <section className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">Multiple Selectors</h3>
                <p className="text-lg leading-relaxed mb-4">
                    It is possible to combine multiple selectors, which allows applying the same CSS rules to different selected elements.
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`p, h1, div {
    color: red;
    font-size: 12%;
    border-bottom: solid thin black;
}`}</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">
                    In this example, the styles will apply to all <code>p</code>, <code>h1</code>, and <code>div</code> elements.
                </p>

                <h4 className="text-xl font-semibold mb-3">Multiple Classes</h4>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`.class1, .class2, .class3 {
    color: red;
    font-size: 12%;
    border-bottom: solid thin black;
}`}</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">
                    In this example, the styles will apply to elements with the classes <code>.class1</code>, <code>.class2</code>, and <code>.class3</code>.
                </p>

                <h4 className="text-xl font-semibold mb-3">Multiple IDs</h4>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`#one, #two, #three {
    color: red;
    font-size: 12%;
    border-bottom: solid thin black;
}`}</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">
                    Here, the styles will apply to elements with the IDs <code>#one</code>, <code>#two</code>, and <code>#three</code>.
                </p>

                <h4 className="text-xl font-semibold mb-3">Combining Selectors of Different Types</h4>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`h1, .class1, #one {
    color: red;
}`}</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">
                    You can also combine different types of selectors, such as HTML tags, classes, and IDs, in one rule.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Other Selectors</h3>
                <p className="text-lg leading-relaxed mb-4">
                    In addition to basic selectors, there are also other selectors available:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed mb-6">
                    <li><strong>Child Selectors:</strong> Use the greater-than symbol (<code>&gt;</code>) to target child elements.</li>
                    <li><strong>Adjacent Sibling Selectors:</strong> Use the plus sign (<code>+</code>) to target adjacent sibling elements.</li>
                    <li><strong>Attribute Selectors:</strong> Use square brackets (<code>[]</code>) to target HTML elements based on the presence or value of an attribute.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4">Pseudo-Classes</h3>
                <p className="text-lg leading-relaxed mb-4">
                    A pseudo-class is a keyword added to a selector to define a special state of the element to apply styles.
                    Pseudo-classes are prefixed with a colon (<code>:</code>).
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`a:hover {
    color: red;
}`}</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">
                    In this example, the text of links will turn red when hovered over with the mouse.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Some pseudo-classes are specific to certain elements, like links or the cursor. For example:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed mb-6">
                    <li><strong>:active</strong> - Targets a link when it is being clicked.</li>
                    <li><strong>:focus</strong> - Targets a link when it becomes active (focused).</li>
                    <li><strong>:hover</strong> - Targets a link when hovered over.</li>
                    <li><strong>:link</strong> - Targets a link before it is visited.</li>
                    <li><strong>:visited</strong> - Targets a link after it has been visited.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4">Other Common Pseudo-Classes</h3>
                <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed mb-6">
                    <li><strong>:not(balise)</strong> - Selects all elements except those passed as an argument.</li>
                    <li><strong>:first-child</strong> - Selects the first child of an element.</li>
                    <li><strong>:last-child</strong> - Selects the last child of an element.</li>
                    <li><strong>:nth-child(number)</strong> - Selects the nth child of an element.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4">Pseudo-Elements</h3>
                <p className="text-lg leading-relaxed mb-4">
                    A pseudo-element allows styling a specific part of an element, and it is prefixed with double colons (<code>::</code>).
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`a::before {
    content: "*";
}`}</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">
                    In this example, an asterisk (<code>*</code>) is added before each link.
                </p>

                <h4 className="text-xl font-semibold mb-3">Key Takeaways</h4>
                <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
                    <li>Selectors in CSS target elements to apply styles.</li>
                    <li>You can combine multiple selectors, including HTML tags, classes, and IDs.</li>
                    <li>Advanced selectors like pseudo-classes and pseudo-elements allow for more precise control over styling based on the element's state or specific parts of the element.</li>
                </ul>
            </section>
            <section className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">Exercises: Your Turn!</h3>
                <a href="https://flukeout.github.io/" className="text-blue-600">CSS Dinner</a>
                <br /><br />
                <p className="text-lg leading-relaxed mb-4">
                    In this exercise, you'll practice applying CSS selectors to various HTML elements. Try targeting elements based on their tags, classes, and IDs. You'll also experiment with advanced selectors like pseudo-classes and pseudo-elements for more specific styling.
                </p>


                <h4 className="text-xl font-semibold mb-3">Exercise Instructions</h4>
                <p className="text-lg leading-relaxed mb-4">
                    Follow the instructions to practice the use of selectors and apply styles to the HTML elements. Start with basic selectors and gradually move to more advanced ones.
                </p>
            </section>
        </div>
    );
};

export default CSSPage;
