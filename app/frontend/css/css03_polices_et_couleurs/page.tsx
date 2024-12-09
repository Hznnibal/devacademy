import React from "react";

const FontsPage: React.FC = () => {
    return (
        <div className="px-4 space-y-12">
            <h1 className="text-4xl font-bold mb-6">Fonts & Colors</h1>

            <section className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">Default Fonts</h3>
                <p className="text-lg leading-relaxed mb-4">
                    By default, meaning in the absence of a CSS stylesheet, text (font family and size) will be displayed according to the browser's settings.
                    Each browser has its own default settings, which may vary between browsers.
                    Users can modify these default fonts, and they can be overridden by CSS stylesheets written by developers or CSS frameworks (like Bootstrap, Foundation, etc.).
                </p>

                <h4 className="text-xl font-semibold mb-3">Font Properties</h4>
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
                <h4 className="text-xl font-semibold mb-3">Font Families</h4>
                <p className="text-lg leading-relaxed mb-4">
                    The font name is specified via the <code>font-family</code> property. This can contain multiple font names, separated by commas, typically with standard fonts to ensure at least one is available on the user's computer.
                    The browser will check if the first font in the list is available, and if not, it will check the next one, continuing until it finds a match. If none are found, the browser's default font will be used.
                    If a font name contains spaces (like "Times New Roman"), it must be enclosed in quotes (either single or double).
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`#text {
        font-family: Arial, "Times New Roman", sans-serif;
}`}</code>
                </pre>
            </section>

            <section className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Font Types</h4>
                <p className="text-lg leading-relaxed mb-4">
                    Fonts can be referred to by their family name or by their type (generic name), which groups fonts based on their graphical styles (serif, sans-serif, monospace, cursive, etc.).
                    The browser will choose an appropriate font from these generic groups if the specified family is not available.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Some fonts like Arial, Verdana, and Times New Roman are common because they are present on most systems. However, fonts present on one computer may not be available on another, as users can install or uninstall fonts on their systems.
                    Developers can ensure fonts are available on all devices by hosting fonts directly on the website via the <code>@font-face</code> rule.
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{` @font-face {
        font-family: "Open Sans";
        src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2");
}`}</code>
                </pre>

            </section>

            <section className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Font Size Units</h4>
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
                <h4 className="text-xl font-semibold mb-3">Line Height</h4>
                <p className="text-lg leading-relaxed mb-4">
                    Line height is another important factor in web typography, set using the <code>line-height</code> property. Like font properties, browsers define a default line height.
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`p {
    line - height: 3em;
}`}</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">
                    To revert to the initial (default) line height, use the <code>normal</code> value:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`p {
    line - height: normal;
}`}</code>
                </pre>
            </section>

            <section className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Text Alignment</h4>
                <p className="text-lg leading-relaxed mb-4">
                    Text can be aligned just like in word processors using the <code>text-align</code> property:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`div {
    text-align: center; 
}`}</code>
                </pre>
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
            </section>
            <section className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">Propriétés de Couleur</h3>
                <p className="text-lg leading-relaxed mb-4">
                    Il existe 3 propriétés pour les couleurs : la couleur du texte, la couleur des bordures et la couleur de fond d’un élément.
                </p>

                <table className="table-auto w-full text-lg mb-6">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Propriété</th>
                            <th className="px-4 py-2">Fonction</th>
                            <th className="px-4 py-2">Exemple</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2">color</td>
                            <td className="px-4 py-2">Couleur du texte (avant-plan)</td>
                            <td className="px-4 py-2"><code>#texte &#123;color: #000000;&#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">background-color</td>
                            <td className="px-4 py-2">Couleur d'arrière-plan</td>
                            <td className="px-4 py-2"><code>#texte &#123;background-color: #000000;&#125;</code></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">border-color</td>
                            <td className="px-4 py-2">Couleur de bordure</td>
                            <td className="px-4 py-2"><code>#texte &#123;border-color: #000000;&#125;</code></td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Noms et Codes des Couleurs</h4>
                <p className="text-lg leading-relaxed mb-4">
                    Les couleurs peuvent être exprimées soit par leur nom en anglais (par exemple : black, white, red, yellow, fuschia…), soit par des codes hexadécimaux, ou encore par des codes RGB et HSL.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                    Les noms des couleurs : "black", "white", "red", "fuchsia", etc. sont largement utilisés. Mais seulement 16 noms de couleurs sont reconnus officiellement par le W3C.
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`#texte {
    color: #FF0000; /* red */
}`}</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">
                    Pour les variantes de couleurs moins courantes, il est recommandé d'utiliser des codes hexadécimaux comme <code>#FF0000</code> pour le rouge ou <code>#FFFFFF</code> pour le blanc.
                </p>
            </section>

            <section className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Exemples de Codes Couleur</h4>
                <p className="text-lg leading-relaxed mb-4">
                    Voici quelques exemples de couleurs en utilisant différentes méthodes de définition des couleurs :
                </p>
                <ul className="list-disc pl-8">
                    <li><code>#FF0000</code> (Hexadécimal, rouge)</li>
                    <li><code>rgb(255, 0, 0)</code> (RGB, rouge)</li>
                    <li><code>hsl(0, 100%, 50%)</code> (HSL, rouge)</li>
                    <li><code>black</code> (Nom de couleur, noir)</li>
                </ul>
            </section>

            <section className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Bordures</h4>
                <p className="text-lg leading-relaxed mb-4">
                    Les bordures peuvent être définies de manière précise pour chaque côté de l'élément. Vous pouvez également appliquer des arrondis aux bordures avec la propriété <code>border-radius</code>.
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`div {
    border: 2px solid red;
    border-radius: 5px;
}`}</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">
                    Depuis HTML5, il est possible de faire des bordures arrondies grâce à la propriété <code>border-radius</code>. Le degré d’arrondi peut être exprimé en pixels ou en pourcentages.
                </p>
            </section>

            <section className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Dégradés de Couleur</h4>
                <p className="text-lg leading-relaxed mb-4">
                    Les dégradés peuvent être créés avec la propriété CSS <code>background-image</code> en utilisant la fonction <code>linear-gradient</code> ou <code>radial-gradient</code>.
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded mb-4">
                    <code>{`div {
    background-image: linear-gradient(to right, red, yellow);
}`}</code>
                </pre>
            </section>
        </div>
    );
};

export default FontsPage;
