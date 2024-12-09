import React from "react";

const Page: React.FC = () => {
    return (
        <div className="px-2 space-y-12">
            <h1 className="text-4xl text-center font-bold mb-6">HTML - 04 - Links</h1>

            <section className="mb-6">
                <h2 className="text-3xl font-semibold mb-4">The &lt;a&gt; Tag</h2>
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
                <p className="text-lg leading-relaxed mb-4">
                    Example: <code>&lt;a href="page2.html" title="Next page"&gt;Click here&lt;/a&gt;</code>
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-3xl font-semibold mb-4">Linking Between Pages</h2>
                <p className="text-lg leading-relaxed mb-4">
                    You can navigate between different HTML pages. Here are some examples:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Page in the same directory:</strong>{" "}
                        <code>&lt;a href="page2.html"&gt;Click here to go to page 2&lt;/a&gt;</code>
                    </li>
                    <li>
                        <strong>Page in a subdirectory:</strong>{" "}
                        <code>&lt;a href="subdirectory/page2.html" title="Page in a subdirectory"&gt;Click here&lt;/a&gt;</code>
                    </li>
                    <li>
                        <strong>Page in another directory:</strong>{" "}
                        <code>&lt;a href="../directory/page2.html" title="Page in an external directory"&gt;Click here&lt;/a&gt;</code>
                    </li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-3xl font-semibold mb-4">Internal Links</h2>
                <p className="text-lg leading-relaxed mb-4">
                    Internal links allow navigation within the same HTML page. Here is an example:
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                    <code>
                        {`<p id="target">Lorem ipsum...</p>
<a href="#target" title="Go to target">Go to the paragraph</a>`}
                    </code>
                </pre>
                <p className="text-lg leading-relaxed">
                    To link to a target on another page:{" "}
                    <code>&lt;a href="page2.html#target" title="Target on another page"&gt;Click here&lt;/a&gt;</code>
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-3xl font-semibold mb-4">External Links</h2>
                <p className="text-lg leading-relaxed">
                    Example:{" "}
                    <code>
                        &lt;a href="https://www.afpa.fr" title="AFPA website"&gt;Visit AFPA&lt;/a&gt;
                    </code>
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-3xl font-semibold mb-4">Absolute and Relative Links</h2>
                <p className="text-lg leading-relaxed">
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
                <h2 className="text-3xl font-semibold mb-4">The target Attribute</h2>
                <p className="text-lg leading-relaxed mb-4">
                    The <code>target</code> attribute specifies where the link will open:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <code>_blank</code>: opens in a new window
                    </li>
                    <li>
                        <code>_self</code>: opens in the current window
                    </li>
                    <li>
                        <code>_parent</code>: opens in the parent window
                    </li>
                    <li>
                        <code>_top</code>: opens in the main window
                    </li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-3xl font-semibold mb-4">Links to Resources</h2>
                <p className="text-lg leading-relaxed mb-4">
                    Example for displaying or downloading a file:
                </p>
                <pre className="bg-gray-100 p-4 rounded">
                    <code>
                        {`<a href="docs/manual.pdf" title="The manual">Download the manual (PDF)</a>
<a href="manual.pdf" download="manual.pdf" title="The manual">Download the manual</a>`}
                    </code>
                </pre>
            </section>

            <section>
                <h2 className="text-3xl font-semibold mb-4">Email Links</h2>
                <p className="text-lg leading-relaxed mb-4">
                    Example:{" "}
                    <code>
                        &lt;a href="mailto:contact@example.com?subject=Contact Request" title="Contact us"&gt;Write to us&lt;/a&gt;
                    </code>
                </p>
                <p className="text-lg leading-relaxed">
                    Caution: Avoid exposing plain email addresses in the code to prevent spam.
                </p>
            </section>
        </div>

    );
};

export default Page;
