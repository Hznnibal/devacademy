import React from "react";

const FontsPage: React.FC = () => {
    return (
        <div className="px-4 space-y-12">
            <h1 className="text-4xl font-bold mb-6">CSS: Box Models</h1>

            <section className="mb-6">
                <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
                <p className="text-lg leading-relaxed mb-4">
                    In an HTML document, each element is represented by a rectangular box.
                    The rendering engine calculates the size, properties (color, background, border style),
                    and position of these boxes. CSS defines each box using a standard model
                    that describes the space occupied by an element.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    The CSS box model is the foundation of content layout in a document.
                    Before diving into layout principles, let’s explore how boxes work.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-3xl font-semibold mb-4">The Standard Box Model</h2>
                <p className="text-lg leading-relaxed mb-4">
                    Each HTML element is represented as a box, which can be adjusted using specific CSS properties.
                    These properties define the structure of a box as follows:
                </p>
            </section>

            <section className="mb-6">
                <h3 className="text-2xl font-medium mb-4">Content Box (Height & Width)</h3>
                <p className="text-lg leading-relaxed mb-4">
                    The content box is where the element's content is displayed.
                    This includes text or child elements. The size of the content box
                    is determined by the <code className="bg-gray-100 px-1 rounded">width</code>
                    and <code className="bg-gray-100 px-1 rounded">height</code> properties.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Additional properties like <code className="bg-gray-100 px-1 rounded">min-width</code>,
                    <code className="bg-gray-100 px-1 rounded">max-width</code>,
                    <code className="bg-gray-100 px-1 rounded">min-height</code>,
                    and <code className="bg-gray-100 px-1 rounded">max-height</code>
                    can limit the dimensions of the content box.
                </p>
            </section>

            <section className="mb-6">
                <h3 className="text-2xl font-medium mb-4">Padding Box</h3>
                <p className="text-lg leading-relaxed mb-4">
                    Padding is the space between the content and the border.
                    It can be set using the shorthand property
                    <code className="bg-gray-100 px-1 rounded">padding</code>
                    or individual properties
                    (<code className="bg-gray-100 px-1 rounded">padding-top</code>,
                    <code className="bg-gray-100 px-1 rounded">padding-right</code>,
                    <code className="bg-gray-100 px-1 rounded">padding-bottom</code>,
                    and <code className="bg-gray-100 px-1 rounded">padding-left</code>).
                </p>
            </section>

            <section className="mb-6">
                <h3 className="text-2xl font-medium mb-4">Border Box</h3>
                <p className="text-lg leading-relaxed mb-4">
                    The border surrounds the padding and content. By default, the border size is 0, making it invisible.
                    The shorthand property <code className="bg-gray-100 px-1 rounded">border</code>
                    allows defining the width, style, and color of the border:
                    <ul className="list-disc list-inside space-y-2 mt-2">
                        <li><code className="bg-gray-100 px-1 rounded">border-width</code></li>
                        <li><code className="bg-gray-100 px-1 rounded">border-style</code></li>
                        <li><code className="bg-gray-100 px-1 rounded">border-color</code></li>
                    </ul>
                </p>
            </section>

            <section className="mb-6">
                <h3 className="text-2xl font-medium mb-4">Margin Box</h3>
                <p className="text-lg leading-relaxed mb-4">
                    The margin is the space outside the border, separating one box from another.
                    Margins can collapse, meaning the space between two adjacent boxes
                    is determined by the larger of the two margins rather than their sum.
                </p>
            </section>

            <section className="mb-6">
                <h3 className="text-2xl font-medium mb-4">Example</h3>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`/* CSS Example */
p {
    width: 100px;
    height: auto;
    padding: 10px 20px;
    border: 5px solid black;
    margin: 20px 0;
}`}</code>
                </pre>
                <p className="text-lg leading-relaxed">
                    This code styles paragraphs with defined width, padding, border, and margin.
                    Open developer tools (<kbd>F12</kbd> in Chrome or <kbd>Ctrl + Shift + C</kbd> in Firefox)
                    to inspect these boxes in action.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-3xl font-semibold mb-4">Interactions Overview</h2>
                <p className="text-lg leading-relaxed mb-4">
                    In CSS, managing boxes goes beyond defining their size. It's also about making them interactive and responsive.
                </p>
            </section>

            <section className="mb-6">
                <h3 className="text-2xl font-medium mb-4">Overflow</h3>
                <p className="text-lg leading-relaxed mb-4">
                    When the size of a box is defined with absolute values, its content might not always fit within the allocated space. This results in content overflow.
                    The <code className="bg-gray-100 px-1 rounded">overflow</code> property controls how to handle this situation.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>
                        <strong>auto:</strong> Browsers decide the behavior, often adding scrollbars if the content overflows the padding box.
                    </li>
                    <li>
                        <strong>hidden:</strong> Content is clipped to fit the padding box, and no scrollbar is displayed.
                    </li>
                    <li>
                        <strong>visible:</strong> The default value. Content can overflow outside the padding box.
                    </li>
                </ul>

                <h4 className="text-xl font-medium mb-2">Example</h4>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<p class="autoscroll">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
</p>
<p class="clipped">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
</p>`}</code>
                </pre>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`/* CSS Example */
p {
    width: 400px;
    height: 2.5em;
    padding: 1em;
    border: 1px solid black;
}
.autoscroll { overflow: auto; }
.clipped { overflow: hidden; }`}</code>
                </pre>
            </section>

            <section className="mb-6">
                <h3 className="text-2xl font-medium mb-4">Box Types</h3>
                <p className="text-lg leading-relaxed mb-4">
                    The box model we've explored so far applies primarily to block boxes. However, CSS includes other box types, each with distinct behavior.
                    The <code className="bg-gray-100 px-1 rounded">display</code> property determines the type of box for an element.
                </p>

                <h4 className="text-xl font-medium mb-2">Block Boxes</h4>
                <p className="text-lg leading-relaxed mb-4">
                    Block boxes stack vertically, breaking the visual line before and after the box. The standard box model applies to these.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li><code className="bg-gray-100 px-1 rounded">&lt;div&gt;</code></li>
                    <li><code className="bg-gray-100 px-1 rounded">&lt;p&gt;</code></li>
                    <li><code className="bg-gray-100 px-1 rounded">&lt;footer&gt;</code></li>
                    <li><code className="bg-gray-100 px-1 rounded">&lt;article&gt;</code></li>
                </ul>

                <h4 className="text-xl font-medium mb-2">Inline Boxes</h4>
                <p className="text-lg leading-relaxed mb-4">
                    Inline boxes flow with text, without breaking the visual line before or after the box.
                    The box model applies but doesn’t affect surrounding boxes.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li><code className="bg-gray-100 px-1 rounded">&lt;span&gt;</code></li>
                    <li><code className="bg-gray-100 px-1 rounded">&lt;em&gt;</code></li>
                    <li><code className="bg-gray-100 px-1 rounded">&lt;a&gt;</code></li>
                    <li><code className="bg-gray-100 px-1 rounded">&lt;img&gt;</code></li>
                </ul>

                <h4 className="text-xl font-medium mb-2">Example</h4>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <span class="inline">Mauris tempus turpis id ante mollis dignissim.</span>
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <span class="block">Mauris tempus turpis id ante mollis dignissim.</span>
</p>`}</code>
                </pre>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`/* CSS Example */
p {
    padding: 1em;
    border: 1px solid black;
}
span {
    padding: 0.5em;
    border: 1px solid green;
    background-color: yellow;
}
.inline { display: inline; }
.block { display: block; }`}</code>
                </pre>
            </section>
            <h2 className="text-2xl font-semibold mb-4">CSS: The Flexible Box Model (Flexbox)</h2>
            <section className="mb-6">
                <h4 className="text-xl font-semibold mb-4">Introduction</h4>

                <p className="text-lg leading-relaxed mb-4">
                    CSS3 introduced a new box model called Flexbox (short for *Flexible Box*) to meet the needs of responsive design.
                    This model differs from the standard box model, providing an efficient way to arrange, align, and distribute space among
                    items within a container—even when their dimensions are unknown or dynamic.
                </p>
                <p className="text-lg leading-relaxed">
                    Flexbox allows child elements of a container to be placed in any direction and can adapt their dimensions to fit the available space.
                </p>
                <a
                    href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline mt-4 block"
                >
                    Learn more about Flexbox
                </a>
            </section>

            <section className="mb-6">
                <h4 className="text-xl font-semibold mb-4">Practice Activity</h4>
                <p className="text-lg leading-relaxed mb-4">
                    Explore Flexbox through interactive exercises. Try out Flexbox Froggy!
                </p>
                <a
                    href="https://flexboxfroggy.com/#fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline mt-4 block"
                >
                    Flexbox Froggy Exercise
                </a>
            </section>

            <section className="mb-6">
                <h4 className="text-xl font-semibold mb-4">Key Takeaways</h4>
                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>
                        In CSS, the formatting of a targeted element can be modified by adjusting its content
                        (<code className="bg-gray-100 px-1 rounded">height</code> and <code className="bg-gray-100 px-1 rounded">width</code>),
                        internal margins (<code className="bg-gray-100 px-1 rounded">padding</code>), border
                        (<code className="bg-gray-100 px-1 rounded">border</code>), and external margins
                        (<code className="bg-gray-100 px-1 rounded">margin</code>).
                    </li>
                    <li>
                        Overflow can be managed with the <code className="bg-gray-100 px-1 rounded">overflow</code> property to handle content
                        exceeding its container. Common options include
                        <code className="bg-gray-100 px-1 rounded">auto</code>, <code className="bg-gray-100 px-1 rounded">hidden</code>,
                        <code className="bg-gray-100 px-1 rounded">visible</code>, and <code className="bg-gray-100 px-1 rounded">scroll</code>.
                    </li>
                    <li>
                        Box types can be <code className="bg-gray-100 px-1 rounded">block</code> or <code className="bg-gray-100 px-1 rounded">inline</code>.
                        The <code className="bg-gray-100 px-1 rounded">display</code> property can be used to switch between these types.
                    </li>
                </ul>
            </section>
        </div>

    );
};

export default FontsPage