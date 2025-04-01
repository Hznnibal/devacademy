import { CodeBlock } from "@/components/CodeBlock/code-block";
import React from "react";

const FontsPage: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Fonts & Colors</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Default Fonts</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    By default, meaning in the absence of a CSS stylesheet, text (font family and size) will be displayed according to the browser's settings.
                    Each browser has its own default settings, which may vary between browsers.
                    Users can modify these default fonts, and they can be overridden by CSS stylesheets written by developers or CSS frameworks (like Bootstrap, Foundation, etc.).
                </p>

                <h4 className="text-xl font-semibold mb-3">Font Properties</h4>
                <table className="table-auto w-full text-lg mb-6 border  border-gray-500">
                    <thead className="border rounded border-gray-500">
                        <tr >
                            <th className="px-4 py-2">Property</th>
                            <th className="px-4 py-2">Function</th>
                            <th className="px-4 py-2">Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2">font-family</td>
                            <td className="px-4 py-2">A list of font families to use</td>
                            <td className="px-4 py-2"><code>#text &#123;font-family: Verdana, sans-serif;&#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">font-size</td>
                            <td className="px-4 py-2">Font size, can be specified in various units: px, pt, em, rem, %, vw/vh</td>
                            <td className="px-4 py-2"><code>#text &#123;font-size: 14pt;&#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">font-style</td>
                            <td className="px-4 py-2">Font style: normal, italic, oblique</td>
                            <td className="px-4 py-2"><code>#text &#123;font-style: italic;&#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">font-variant</td>
                            <td className="px-4 py-2">Font variant: display in capital letters or small caps</td>
                            <td className="px-4 py-2"><code>#text &#123;font-variant: small-caps;&#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">font-weight</td>
                            <td className="px-4 py-2">Font weight (boldness) with various values like bold, lighter, semi-bold, etc.</td>
                            <td className="px-4 py-2"><code>#text &#123;font-weight: semi-bold;&#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">font</td>
                            <td className="px-4 py-2">A shorthand for combining all font properties</td>
                            <td className="px-4 py-2"><code>#text &#123;font: 14pt semi-bold italic small-caps Verdana, sans-serif;&#125;</code></td>
                        </tr>
                    </tbody>
                </table>

            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Font Families</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    The font name is specified via the <code>font-family</code> property. This can contain multiple font names, separated by commas, typically with standard fonts to ensure at least one is available on the user's computer.
                    The browser will check if the first font in the list is available, and if not, it will check the next one, continuing until it finds a match. If none are found, the browser's default font will be used.
                    If a font name contains spaces (like "Times New Roman"), it must be enclosed in quotes (either single or double).
                </p>
                <CodeBlock code={`#text {
        font-family: Arial, "Times New Roman", sans-serif;
}`} />
            </section >

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Font Types</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Fonts can be referred to by their family name or by their type (generic name), which groups fonts based on their graphical styles (serif, sans-serif, monospace, cursive, etc.).
                    The browser will choose an appropriate font from these generic groups if the specified family is not available.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Some fonts like Arial, Verdana, and Times New Roman are common because they are present on most systems. However, fonts present on one computer may not be available on another, as users can install or uninstall fonts on their systems.
                    Developers can ensure fonts are available on all devices by hosting fonts directly on the website via the <code>@font-face</code> rule.
                </p>
                <CodeBlock code={` @font-face {
        font-family: "Open Sans";
        src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2");
}`} />

            </section >

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Font Size Units</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Font size units are divided into two types: fixed (absolute) units and relative units.
                </p>

                <h5 className="text-lg font-semibold mb-3">Fixed Size Units</h5>
                <table className="table-auto w-full text-lg mb-6">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Unit</th>
                            <th className="px-4 py-2">Abbreviation</th>
                            <th className="px-4 py-2">Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2">Point</td>
                            <td className="px-4 py-2">pt</td>
                            <td className="px-4 py-2"><code>#text &#123;font - size: 14pt; &#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">Pica</td>
                            <td className="px-4 py-2">pc</td>
                            <td className="px-4 py-2"><code>#text &#123;font - size: 14pc; &#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">Centimeter, Millimeter</td>
                            <td className="px-4 py-2">cm, mm</td>
                            <td className="px-4 py-2"><code>#text &#123;font - size: 14cm; &#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">Inch</td>
                            <td className="px-4 py-2">in</td>
                            <td className="px-4 py-2"><code>#text &#123;font - size: 14in; &#125;</code></td>
                        </tr>
                    </tbody>
                </table>

                <h5 className="text-lg font-semibold mb-3">Relative Size Units</h5>
                <table className="table-auto w-full text-lg mb-6">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Unit</th>
                            <th className="px-4 py-2">Abbreviation</th>
                            <th className="px-4 py-2">Scaling</th>
                            <th className="px-4 py-2">Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2">Pixel</td>
                            <td className="px-4 py-2">px</td>
                            <td className="px-4 py-2">Relative to the display device</td>
                            <td className="px-4 py-2"><code>#text &#123;font - size: 14px;&#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">Percentage</td>
                            <td className="px-4 py-2">%</td>
                            <td className="px-4 py-2">Relative to the font size of the parent element</td>
                            <td className="px-4 py-2"><code>#text &#123;font - size: 14%; &#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">Cadratin</td>
                            <td className="px-4 py-2">em</td>
                            <td className="px-4 py-2">Relative to the font size of the parent element</td>
                            <td className="px-4 py-2"><code>#text &#123;font - size: 14em;&#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">Root em</td>
                            <td className="px-4 py-2">rem</td>
                            <td className="px-4 py-2">Relative to the <code>&lt;html&gt;</code> element's font size</td>
                            <td className="px-4 py-2"><code>#text &#123;font - size: 0.8re&#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">Viewport Width</td>
                            <td className="px-4 py-2">vw</td>
                            <td className="px-4 py-2">Relative to the width of the display device</td>
                            <td className="px-4 py-2"><code>#text &#123;font - size: 14vw;&#125;</code></td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Line Height</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Line height is another important factor in web typography, set using the <code>line-height</code> property. Like font properties, browsers define a default line height.
                </p>
                <CodeBlock code={`p {
    line - height: 3em;
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    To revert to the initial (default) line height, use the <code>normal</code> value:
                </p>
                <CodeBlock code={`p {
    line - height: normal;
}`} />
            </section >

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Text Alignment</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Text can be aligned just like in word processors using the <code>text-align</code> property:
                </p>
                <CodeBlock code={`div {
    text-align: center; 
}`} />
                <p className="text-lg leading-relaxed mb-4">Alignment options:</p>
                <ul className="list-disc pl-8">
                    <li>left</li>
                    <li>right</li>
                    <li>center</li>
                    <li>justify</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    However, using justified text alignment is generally discouraged in web usability practices.
                </p>
            </section >
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Color Properties</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    There are 3 properties for colors: text color, border color, and background color of an element.
                </p>

                <table className="table-auto w-full text-lg mb-6">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Property</th>
                            <th className="px-4 py-2">Function</th>
                            <th className="px-4 py-2">Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2">color</td>
                            <td className="px-4 py-2">Text color (foreground)</td>
                            <td className="px-4 py-2"><code>{`#text {color: #000000;}`}</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">background-color</td>
                            <td className="px-4 py-2">Background color</td>
                            <td className="px-4 py-2"><code>{`#text {background-color: #000000;}`}</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">border-color</td>
                            <td className="px-4 py-2">Border color</td>
                            <td className="px-4 py-2"><code>{`#text {border-color: #000000;}`}</code></td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Color Names and Codes</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Colors can be expressed either by their English name (e.g., black, white, red, yellow, fuchsia…), by hexadecimal codes, or by RGB and HSL codes.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                    The color names like "black", "white", "red", "fuchsia", etc. are widely used. However, only 16 color names are officially recognized by the W3C.
                </p>
                <CodeBlock code={`#text {
    color: #FF0000; /* red */
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    For less common color variants, it is recommended to use hexadecimal codes like <code>#FF0000</code> for red or <code>#FFFFFF</code> for white.
                </p>
            </section >

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Color Code Examples</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Here are some examples of colors using different color definition methods:
                </p>
                <ul className="list-disc pl-8">
                    <li><code>#FF0000</code> (Hexadecimal, red)</li>
                    <li><code>rgb(255, 0, 0)</code> (RGB, red)</li>
                    <li><code>hsl(0, 100%, 50%)</code> (HSL, red)</li>
                    <li><code>black</code> (Color name, black)</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Borders</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Borders can be precisely defined for each side of an element. You can also apply rounded corners to borders with the <code>border-radius</code> property.
                </p>
                <CodeBlock code={`div {
    border: 2px solid red;
    border-radius: 5px;
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    Since HTML5, it is possible to create rounded borders with the <code>border-radius</code> property. The rounding degree can be expressed in pixels or percentages.
                </p>
            </section >

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Color Gradients</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Gradients can be created with the CSS property <code>background-image</code> using the <code>linear-gradient</code> or <code>radial-gradient</code> functions.
                </p>
                <CodeBlock code={`div {
    background-image: linear-gradient(to right, red, yellow);
}`} />
            </section >

        </div >
    );
};

export default FontsPage;
