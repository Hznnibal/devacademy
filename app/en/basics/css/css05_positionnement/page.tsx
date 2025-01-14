import { CodeBlock } from "@/components/CodeBlock/code-block";
import React from "react";

const FontsPage: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">CSS: Positioning</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    The <code className="bg-gray-200 text-red-600 px-1 rounded">position</code> property defines how an element is positioned in a document.
                    By default, browsers display:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li><strong>Block boxes</strong> stacked vertically.</li>
                    <li><strong>Inline boxes</strong> arranged horizontally.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Position: static</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    The default behavior for elements. The element is positioned according to the normal flow of the document.
                    The <code className="bg-gray-200 text-red-600 px-1 rounded">top</code>, <code className="bg-gray-200 text-red-600 px-1 rounded">right</code>,
                    <code className="bg-gray-200 text-red-600 px-1 rounded">bottom</code>, <code className="bg-gray-200 text-red-600 px-1 rounded">left</code>,
                    and <code className="bg-gray-200 text-red-600 px-1 rounded">z-index</code> properties do not apply.
                </p>
                <CodeBlock code=
                    {`<div class="parent">
    <div class="box" id="one">One</div>
    <div class="box" id="two">Two</div>
    <div class="box" id="three">Three</div>
    <div class="box" id="four">Four</div>
</div>

.parent {
    border: 5px solid black;
    display: inline-block;
}
.box {
    display: inline-block;
    background: rgb(113,113,133);
    width: 100px;
    height: 100px;
}
#two {
    background: #74CC42;
}`} />

            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Position: relative</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Positions an element relative to its current position without affecting the layout around it.
                    For example, moving the green box 20 pixels down and to the right will leave its original space intact.
                </p>
                <CodeBlock code=
                    {`#two {
    top: 20px;
    left: 20px;
    background: #74CC42;
    position: relative;
}`} />

            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Position: absolute</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Positions an element relative to its closest positioned ancestor. Unlike
                    <code className="bg-gray-200 text-red-600 px-1 rounded">relative</code>, it does not leave a space where the element would have been.
                </p>
                <CodeBlock code={`#two {
    top: 20px;
    left: 20px;
    background: #74CC42;
    position: absolute;
}`} />

                <p className="text-lg leading-relaxed mb-4">
                    In this example, the green box is moved 20 pixels from the top-left corner of its parent container.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Explore More</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Learn about the other positioning types:
                    <code className="bg-gray-200 text-red-600 px-1 rounded">static</code>,
                    <code className="bg-gray-200 text-red-600 px-1 rounded">relative</code>,
                    <code className="bg-gray-200 text-red-600 px-1 rounded">absolute</code>,
                    <code className="bg-gray-200 text-red-600 px-1 rounded">sticky</code>, and
                    <code className="bg-gray-200 text-red-600 px-1 rounded">fixed</code>.
                </p>
                <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/position"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline mt-4 block"
                >
                    Learn more about CSS Positioning
                </a>
            </section>
        </div >

    );
};

export default FontsPage