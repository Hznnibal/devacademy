import { CodeBlock } from "@/components/CodeBlock/code-block";
import React from "react";

const HTMLIntroduction: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">HTML - 01 - Introduction and Document Structure</h1>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">What is the World Wide Web?</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    The World Wide Web (Web) is a network of resources and information. It relies on three key mechanisms to make data widely accessible:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>A uniform naming system for locating resources on the Web (e.g., URLs).</li>
                    <li>Protocols to access named resources at their address (e.g., HTTP).</li>
                    <li>Hypertext for navigating between resources (e.g., HTML).</li>
                </ul>
            </section>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">What is HTML?</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Publishing information for global distribution requires a universally understood language, a "native tongue" accepted by all computers. The publication language used on the Web is HTML (Hyper Text Markup Language).
                </p>
                <p className="text-lg leading-relaxed mb-4">HTML enables authors to:</p>
                <ul className="list-disc list-inside mb-4">
                    <li>Publish documents with titles, text, tables, lists, photos, etc.</li>
                    <li>Access information online through hyperlinks with a single click.</li>
                    <li>Design forms for transactions like searching, booking, and ordering.</li>
                    <li>Embed spreadsheets, videos, audio, and other applications directly into documents.</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    HTML is a markup language that represents information. Its tags are interpreted by browsers (e.g., Chrome, Firefox, Safari) to display the desired information.
                </p>
                <p className="text-lg leading-relaxed mb-4">History of HTML :</p>
                <ul className="list-disc list-inside mb-4">
                    <li>1993: HTML (1.0)</li>
                    <li>1995: HTML 2.0</li>
                    <li>1997: HTML 3.2 and 4.0</li>
                    <li>2000: XHTML</li>
                    <li>2009: HTML 5</li>
                </ul>
            </section>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">HTML 5</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    HTML 5, introduced in 2009, is the current version of HTML. It brings new features and removes outdated tags.
                </p>
                <h3 className="text-xl font-semibold mb-2">Basic Rules of HTML 5:</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>Close all tags.</li>
                    <li>Tags and attributes are always in lowercase.</li>
                    <li>Attribute values are enclosed in quotes.</li>
                    <li>All attributes have explicit values.</li>
                    <li>
                        Tags indicate the document structure rather than its presentation. Presentation-related tags and attributes are replaced by CSS styles.
                    </li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    As with each evolution of HTML, HTML 5 introduces new features while deprecating some old tags. This ensures that the language stays modern and efficient.
                </p>
                <p className="mt-2">
                    <a className="text-blue-600" href="https://www.w3schools.com/tags" target="_blank" rel="noopener noreferrer">
                        This page
                    </a>{" "}
                    lists all HTML5 tags, highlighting the new ones and those that have become obsolete.
                </p>

            </section>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">HTML Architecture</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    HTML is a semantic markup language formed by tags assembled to determine the structure of a page or document.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    A tag has a name that describes its content, making HTML a semantic language. For instance, using the <code className="bg-gray-200 text-red-600">&lt;article&gt;</code> tag implies that the text within it is an article.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Tag names are enclosed between <code className="bg-gray-200 text-red-600">&lt;</code> and <code className="bg-gray-200 text-red-600">&gt;</code>, known as angle brackets. Examples include <code className="bg-gray-200 text-red-600">&lt;p&gt;</code>, <code className="bg-gray-200 text-red-600">&lt;div&gt;</code>, <code className="bg-gray-200 text-red-600">&lt;article&gt;</code>, and <code className="bg-gray-200 text-red-600">&lt;meta&gt;</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Some tags must be opened and closed with the same tag name (preceded by a <code className="bg-gray-200 text-red-600">/</code> for the closing tag), such as:
                </p>

                <CodeBlock code={`<p>text</p>
<header>other tags</header>`} />

                <p className="text-lg leading-relaxed mb-4">
                    Other tags are self-closing, requiring only a closing angle bracket without repeating the tag name, such as:
                </p>
                <CodeBlock code={`<br>
<hr>
<img>`} />

                <p className="text-lg leading-relaxed mb-4">
                    Depending on the tag, attributes can be mandatory or optional. Some attributes accept custom values defined by the developer, while others require specific values as per HTML specifications.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Tags can be nested, creating a hierarchical structure called markup. This allows child tags within parent tags, forming multi-level hierarchies with different tag types.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Example 1: An unordered list with <code className="bg-gray-200 text-red-600">&lt;li&gt;</code> (list item) tags nested within an <code className="bg-gray-200 text-red-600">&lt;ul&gt;</code> tag:
                </p>
                <CodeBlock code={`<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>`} />

                <p className="text-lg leading-relaxed mb-4">
                    Example 2: Paragraphs and a <code>&lt;div&gt;</code> within another <code>&lt;div&gt;</code>:
                </p>
                <CodeBlock code={`<div>
  <p>First paragraph</p>
  <p>Second paragraph</p>
  <div>Nested div content</div>
</div>`} />
            </section>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">Structure of an HTML Document</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    An HTML 5 document consists of several parts that must follow a specific order.
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>
                        A doctype declaration specifying the HTML version of the page: in HTML 5, this declaration is <code>&lt;!DOCTYPE html&gt;</code>.
                    </li>
                    <li>
                        An <code>&lt;html&gt;</code> element containing:
                        <ul className="list-disc list-inside ml-6">
                            <li>A declarative header section enclosed in the <code>&lt;head&gt;</code> tag.</li>
                            <li>The document body containing the actual content, typically enclosed by the <code>&lt;body&gt;</code> element.</li>
                        </ul>
                    </li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    Both the <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code> tags can contain nested tags.
                </p>
                <p className="text-lg leading-relaxed mb-4">Example of a basic HTML 5 document:</p>
                <CodeBlock code=
                    {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>My First HTML 5 Page</title>
  </head>
  <body>
    <h1>HTML 5</h1>
    <p>HTML is fantastic.</p>
  </body>
</html>`} />

                <p className="mt-4">
                    <strong>Note:</strong> In HTML 5, all tags and attributes must be in lowercase (except DOCTYPE). Additionally, include the <code>lang</code> attribute in the <code>&lt;html&gt;</code> tag to indicate the language of the page.
                </p>
            </section >
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">Document Head: <code>&lt;head&gt;</code></h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    The <code>&lt;head&gt;</code> block contains metadata about the current document, such as its title, keywords for search engines, and other data not considered part of the document's content.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Metadata is often enclosed in <code>&lt;meta&gt;</code> tags and is not visible to users, except for the <code>&lt;title&gt;</code> tag, which appears in browser tabs and search engine results.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Example:
                </p>
                <CodeBlock code=
                    {`<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First HTML Page</title>
  <link href="style.css" rel="stylesheet">
</head>`} />
                <p className="mt-4">
                    <strong>Note:</strong> The <code>meta charset</code> tag specifies the character encoding for the page (typically <code>UTF-8</code>) to prevent issues with special characters or accents. It should appear before the <code>&lt;title&gt;</code> tag.
                </p>
            </section >
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">Document Body: <code>&lt;body&gt;</code></h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    The <code>&lt;body&gt;</code> section contains the actual content displayed to the user, such as text, images, tables, and multimedia elements.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Example:
                </p>
                <CodeBlock code=
                    {`<body>
  <h1>My Content</h1>
  <p>HTML 5 is fantastic.</p>
</body>`} />
                <p className="mt-4">
                    The <code>&lt;body&gt;</code> tag includes both structural elements (e.g., columns, paragraphs, headers) and formatting elements (e.g., bold, italics, media).
                </p>
            </section >
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">Comments: <code>&lt;!-- Comment --&gt;</code></h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    You can comment your source code, and the user will not see this comment.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Example:
                </p>
                <CodeBlock code=
                    {`<!-- This is a comment -->`} />


                <p className="mt-4">
                    Comments will be visible in the source code of your page (view the page in a browser and press Ctrl + U). Therefore, avoid adding too many details that could compromise security.
                </p>
                <p className="mt-4">
                    To view the source code of a page, display the page in a web browser, then press Ctrl + U or, if you're familiar, inspect it using the browser's developer tools (as covered later in the course).
                </p>
            </section >
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">HTML Document Structure: <code>&lt;html&gt;</code></h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Here is a summary of a basic HTML page structure:
                </p>
                <CodeBlock code=
                    {`<!DOCTYPE html>
<html lang="en">

<!-- Start of head tag -->
<head>

  <!-- UTF-8 encoding for all characters -->
  <meta charset="UTF-8">

  <!-- Tells the browser how to display the page on different devices -->
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta http-equiv="X-UA-Compatible" content="IE=7">

  <!-- Important for SEO: meta-description should be useful, attractive, and persuasive -->
  <meta name="description" content="Description of my site" />

  <!-- Title element, necessary and required -->
  <title>My Tab Title</title>

  <!-- Tab icon, note the file extension must be .ico -->
  <link rel="icon" href="Logo.ico" />

  <!-- Link to our CSS stylesheet -->
  <link rel="stylesheet" href="assets/css/style.css">

  <!-- Adding the 'Concert One' font from Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Concert+One&display=swap" rel="stylesheet">

</head>
<!-- End of head tag -->

<!-- --------------------------------------------------------------------------------------------------------- -->
<!-- Remember to comment your code! Useful for small and large projects, solo or in teams! -->
<!-- --------------------------------------------------------------------------------------------------------- -->

<!-- Start of body tag -->
<body>

<!-- --------------------------------------------------------------------------------------------------------- -->
<!-- All content of your webpage will go inside the body tag -->
<!-- --------------------------------------------------------------------------------------------------------- -->

</body>
<!-- End of HTML document -->
</html>`} />
            </section >
        </div >
    );
};

export default HTMLIntroduction;
