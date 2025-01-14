import { CodeBlock } from '@/components/CodeBlock/code-block';
import Image from 'next/image';
import React from "react";


const Page: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">HTML - 02 - Tags</h1>
            <section>{/* Introduction */}
                <h2 className="text-2xl font-semibold mb-2">Introduction</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="mb-8">
                    A web page is composed, as we saw in the previous chapter, of a header section (<em>metadata</em>)
                    and the body of the document for the content, enclosed within the{" "}
                    <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;body&gt;</code> tag.

                    This latter part contains structural tags, which define the structure of the web page (header, rows, columns, etc.),
                    and formatting tags that style the content (text, etc.).

                    Structural tags form the page layout; they are generally block type, in contrast to formatting tags,
                    which are often inline type.
                </p>
            </section>
            <section>{/* Types of Tags */}
                <h2 className="text-2xl font-semibold mb-2">Types of Tags</h2> <div className="border-b border-gray-300 mb-6" />

                {/* Block Type Tags */}
                <div>
                    <h3 className="text-xl font-medium mb-3">Block-Type Tags</h3>
                    <p className="mb-3">
                        Block-type tags occupy the full available width, creating a block of content.
                        By default, they stretch 100% of their parent's width.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;address&gt;</code>: contact information
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;article&gt;</code>: article content
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;aside&gt;</code>: tangential content
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;audio&gt;</code>: audio player
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;blockquote&gt;</code>: long quotation
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;canvas&gt;</code>: drawing canvas
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;div&gt;</code>: division of a document
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;fieldset&gt;</code>: group of fields
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;footer&gt;</code>: footer of a page or section
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;form&gt;</code>: form
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;h1&gt;</code> - <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;h6&gt;</code>: heading levels 1 to 6
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;header&gt;</code>: header of a page or section
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;hr&gt;</code>: horizontal divider line
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;nav&gt;</code>: contains navigation links
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;ol&gt;</code>: ordered list
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;p&gt;</code>: paragraph
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;pre&gt;</code>: preformatted text
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;section&gt;</code>: section of a web page
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;table&gt;</code>: table
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;ul&gt;</code>: unordered list
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;video&gt;</code>: video player
                        </li>
                    </ul>
                </div>

                {/* Inline Type Tags */}
                <div>
                    <h3 className="text-xl font-semibold mt-6 mb-3">Inline-Type Tags</h3>
                    <p className="text-lg leading-relaxed mb-4">
                        Unlike block elements, inline elements take up only as much space as needed for their content without breaking the text flow.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;a&gt;</code>: link
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;abbr&gt;</code>: abbreviation
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;acronym&gt;</code>: acronym
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;b&gt;</code>: bold text
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;br&gt;</code>: line break
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;button&gt;</code>: button
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;cite&gt;</code>: title of a work
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;code&gt;</code>: code snippet
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;em&gt;</code>: emphasis
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;i&gt;</code>: italic
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;img&gt;</code>: image
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;input&gt;</code>: form field
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;label&gt;</code>: form field label
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;select&gt;</code>: dropdown list
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;small&gt;</code>: small text
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;span&gt;</code>: generic inline container
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;strong&gt;</code>: important text (appears bold, but differs in semantic meaning)
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;sub&gt;</code>: subscript text
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;sup&gt;</code>: superscript text
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;textarea&gt;</code>: text area (forms)
                        </li>
                    </ul>
                </div>
            </section>
            <section>{/* Lien vers W3Schools */}
                <p className="text-lg leading-relaxed mt-6 mb-6">
                    These lists are not exhaustive. You can refer to{" "}
                    <a
                        href="https://www.w3schools.com/tags"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline hover:text-blue-600"
                    >
                        the W3Schools documentation
                    </a>{" "}
                    to find the complete list of all tags.
                </p>
            </section>
            <section>{/* Section showcasing headers */}
                <h2 className="text-2xl font-semibold mb-2">Sectioning</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    As we've seen, block elements help structure a webpage within the body of the page{" "}
                    <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;body&gt;</code>.
                </p>
                <br />
                <p className="text-lg leading-relaxed mb-4">HTML5 has introduced new tags:</p>
                <br />
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;header&gt;</code>: indicates the header (e.g., for a logo)
                    </li>
                    <li>
                        <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;nav&gt;</code>: indicates a navigation block, like a menu
                    </li>
                    <li>
                        <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;section&gt;</code>: indicates a content section
                    </li>
                    <li>
                        <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;article&gt;</code>: indicates an article of content; this tag should be enclosed within a section (which can contain multiple articles)
                    </li>
                    <li>
                        <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;aside&gt;</code>: placed beside an article (or section) to provide supplementary text (a note, a reference, etc.) directly related to the article. This tag should not be used to create unrelated side columns for the main content.
                    </li>
                </ul>
                <br />
                <h3 className="text-xl font-semibold mb-2">Example of sectioning using new tags:</h3>
                <Image
                    src="/HTML_02_sectionnement.png"
                    alt="Example of sectioning with HTML5"
                    width={480}
                    height={360}
                    className="mb-4"
                />
                <p className="text-lg leading-relaxed mb-4">
                    The <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;div&gt;</code> tag, short for "division," is a generic container that helps organize content without representing anything semantic. It should be used when no semantically appropriate tag exists.
                </p>
                <br />
                <p className="text-lg leading-relaxed mb-4">Example usage of <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;div&gt;</code>:</p>
                <br />
                <CodeBlock code=
                    {`<div>Hello world!</div>
<div>
   <div>Hello world!</div>
</div>
<div>
    <div>
        <p>Hello world!</p>
    </div>
</div>`} />

                <br />
                <p className="text-lg leading-relaxed mb-4">
                    For better readability and structure, documents should be divided into paragraphs using the <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;p&gt;</code> tag, which starts a new paragraph. The <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;br&gt;</code> tag, on the other hand, is used for a simple line break.
                </p>
            </section >
            <section>
                <h2 className="text-2xl font-semibold mb-2 mt-6">Other Tags</h2> <div className="border-b border-gray-300 mb-6" />
                {/* Hierarchical headers */}
                <h3 className="text-xl font-semibold mb-3">Hierarchical Headers</h3>
                <p className="mb-1">
                    Header tags highlight sections of text. Multiple predefined header styles exist, identified by tags{" "}
                    <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;h1&gt;</code> (largest) to{" "}
                    <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;h6&gt;</code> (smallest), providing six different levels of headers.
                    The header text is enclosed between the chosen opening and closing tags.
                </p>
                <br />
                <p className="">
                    <strong>SEO Tip:</strong> Ensure that at least one <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">H1</code> element is present on each page. Each page should contain one <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">H1</code> section header.
                </p>
                <br />
                <h4 className="text-xl font-semibold mb-2">Example and source code for each header tag:</h4>
                <CodeBlock code=
                    {`<h1>H1 Header - Most important</h1>
<h2>H2 Header - Less important than H1</h2>
<h3>H3 Header - Less important than H2</h3>
<h4>H4 Header - Less important than H3</h4>
<h5>H5 Header - Less important than H4</h5>
<h6>H6 Header - Least important</h6>`} />

                <br />
                <h4 className="text-xl font-semibold mb-2">Expected Output:</h4>
                <div className="rounded space-y-2 p-4">
                    <h1 className="text-3xl font-bold">H1 Header - Most important</h1>
                    <h2 className="text-2xl font-semibold mb-2">H2 Header - Less important than H1</h2>
                    <h3 className="text-2xl font-medium">H3 Header - Less important than H2</h3>
                    <h4 className="text-xl">H4 Header - Less important than H3</h4>
                    <h5 className="text-lg">H5 Header - Less important than H4</h5>
                    <h6 className="text-base">H6 Header - Least important</h6>
                </div>
                <br />

                {/* Line break tag */}
                <h3 className="text-xl font-semibold mb-3">The Line Break Tag &lt;br&gt;</h3>
                <p className="text-lg leading-relaxed mb-4">
                    You can insert a line break using the <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;br&gt;</code> tag.
                    This tag should be used for line breaks within a text area (e.g., a <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;div&gt;</code>, paragraph, article, or quote) and not for structuring the page.
                </p>
                <br />

                {/* Horizontal line tag */}
                <h3 className="text-xl font-semibold mb-3">The Horizontal Line Tag &lt;hr&gt;</h3>
                <p className="text-lg leading-relaxed mb-4">
                    You can use the horizontal line tag <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;hr&gt;</code> to separate parts of an HTML document.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    In HTML4, the tags <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;br&gt;</code> and{" "}
                    <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;hr&gt;</code> included a closing slash (<code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;br/&gt;</code>,{" "}
                    <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;hr/&gt;</code>) which is no longer required in HTML5.
                </p>
                <br />

                {/* Conclusion */}
                <h2 className="text-2xl font-semibold mb-2 mt-6">Conclusion</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    The key question to ask is: which tag should I use to create a column, a paragraph, or a site header?
                    Here’s a flowchart to guide you:
                </p>
                <Image
                    src="/h5d-sectioning-flowchart.png"
                    alt="Example of sectioning with HTML5"
                    width={1110}
                    height={580}
                    className="mb-4"
                />
            </section >
            <section>
                <h2 className="text-2xl font-semibold mb-2 mt-6">Task to Complete</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Design a new HTML page. This page should include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>
                        A title (using the <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;h1&gt;</code> tag)
                    </li>
                    <li>
                        A text paragraph <em>(lorem ipsum)</em> (using the <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;p&gt;</code> tag)
                    </li>
                    <li>
                        An image (using the <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;img&gt;</code> tag)
                    </li>
                </ul>
                <br />
                <h2 className="text-2xl font-semibold mb-2 mt-6">Example of HTML Structure:</h2> <div className="border-b border-gray-300 mb-6" />
                <CodeBlock code=
                    {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My New Page</title>
</head>
<body>
    <h1>Welcome to My Page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
    <img src="path-to-your-image.jpg" alt="Image description">
</body>
</html>`} />

                <br />
                <h3 className="text-lg font-semibold mb-2">Instructions:</h3>
                <p className="text-lg leading-relaxed mb-4">
                    Follow this basic structure to create a simple web page. Replace the text and the image with your own content.
                </p>
            </section >
        </div >
    );
};

export default Page;
