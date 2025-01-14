import { CodeBlock } from "@/components/CodeBlock/code-block";
import React from "react";

const Page: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">HTML - 04 - Links</h1>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">The &lt;a&gt; Tag</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    The <code>&lt;a&gt;</code> tag (short for "anchor") is used to create hyperlinks.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Links enable navigation within a website to another page but also:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>To a specific part of the current page</li>
                    <li>To another site (a page on another website)</li>
                    <li>To a resource (file, image, video, etc.)</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4 mt-2">
                    Example:
                </p>

                <CodeBlock code=
                    {`<a href="page2.html" title="Next page">Click here</a>`} />


                <p className="text-lg leading-relaxed mb-4">A link consists of different parts and attributes:</p>
                <ul className="list-disc ml-8">
                    <li>
                        <code className="bg-gray-200 text-red-600 list-disc">href</code>: This mandatory attribute specifies the destination of the link.
                    </li>
                    <li>
                        <code className="bg-gray-200 text-red-600 list-disc">title</code>: This mandatory attribute provides an indicative text that appears when hovering over the link.
                    </li>
                    <li>
                        A visible text displayed on the web page (e.g., <em>"Click here"</em>), which is what the user sees.
                    </li>
                </ul>

            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Linking Between Pages</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    You can navigate between different HTML pages. Here are some examples:
                </p>
                <ul className="list-disc list-inside space-y-6">
                    <li>
                        <strong>Page in the same directory:</strong>{" "}<br />
                        <code className="bg-gray-200 text-red-600 list-disc">&lt;a href="page2.html"&gt;Click here to go to page 2&lt;/a&gt;</code>
                    </li>
                    <li>
                        <strong>Page in a subdirectory:</strong>{" "}<br />
                        <code className="bg-gray-200 text-red-600 list-disc">&lt;a href="subdirectory/page2.html" title="Page in a subdirectory"&gt;Click here&lt;/a&gt;</code>
                    </li>
                    <li>
                        <strong>Page in another directory:</strong>{" "}<br />
                        <code className="bg-gray-200 text-red-600 list-disc">&lt;a href="../directory/page2.html" title="Page in an external directory"&gt;Click here&lt;/a&gt;</code>
                    </li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Internal Links</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Internal links allow navigation within the same HTML page. Here is an example:
                </p>
                <CodeBlock code=
                    {`<p id="target">Lorem ipsum...</p>
<a href="#target" title="Go to target">Go to the paragraph</a>`} />

                <p className="text-lg leading-relaxed mb-4">
                    To link to a target on another page:{" "}<br />
                </p>
                <CodeBlock code=
                    {`<a href="page2.html#target" title="Target on another page">Click here</a>`} />

            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">External Links</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Example:{" "}<br />
                </p>

                <CodeBlock code=
                    {`<a href="https://www.w3schools.com/" title="W3Schools website">Visit W3S</a>>`} />

            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Absolute and Relative Links</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    There are two ways to specify the path in the <code>href</code> attribute:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Absolute link:</strong> the entire path from the root of the directory structure is specified.
                    </li>
                    <li>
                        <strong>Relative link:</strong> <code>../</code> is used to navigate through the directory structure.
                    </li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">The target Attribute</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    The <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">target</code> attribute specifies where the link will open:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">_blank</code>: opens in a new window
                    </li>
                    <li>
                        <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">_self</code>: opens in the current window
                    </li>
                    <li>
                        <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">_parent</code>: opens in the parent window
                    </li>
                    <li>
                        <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">_top</code>: opens in the main window
                    </li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Links to Resources</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Example for displaying or downloading a file:
                </p>
                <CodeBlock code=
                    {`<a href="docs/manual.pdf" title="The manual">Download the manual (PDF)</a>
<a href="manual.pdf" download="manual.pdf" title="The manual">Download the manual</a>`} />
            </section >
            <section>
                <h2 className="text-2xl font-semibold mb-2">Email Links</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Example:
                </p>

                <CodeBlock code=
                    {`<a href="mailto:contact@example.com?subject=Contact Request" title="Contact us">Write to us</a>`} />
                <p className="text-lg leading-relaxed mb-4">
                    Caution: Avoid exposing plain email addresses in the code to prevent spam.
                </p>
            </section >
        </div >
    );
};

export default Page;
