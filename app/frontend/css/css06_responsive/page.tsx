
export default function ResponsiveWebDesign() {
    return (
        <div className="px-6 py-8 space-y-12">
            <h1 className="text-4xl font-bold text-center mb-10">CSS Phase 6: Responsive Web Design</h1>

            {/* Objectives Section */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">Objectives</h2>
                <ul className="list-disc list-inside text-lg space-y-2">
                    <li>Understand the constraints of responsive web design.</li>
                    <li>Master CSS media queries.</li>
                    <li>Adapt an HTML page for responsiveness.</li>
                </ul>
            </section>

            {/* Responsive Design Principles */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">Think Responsive</h2>
                <p className="text-lg leading-relaxed">
                    Every element of a web page should resize automatically. Don’t forget:
                </p>
                <ul className="list-disc list-inside text-lg space-y-2">
                    <li>Font sizes</li>
                    <li>Images</li>
                    <li>Other media (e.g., videos, animations)</li>
                    <li>HTML tables</li>
                </ul>
            </section>

            {/* Viewport Section */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">The Viewport</h2>
                <p className="text-lg leading-relaxed">
                    To make a page responsive, add the following HTML meta tag in the
                    <code className="bg-gray-200 text-red-600">&lt;head&gt;</code> section:
                </p>
                <div className="bg-gray-100 p-4 rounded">
                    <pre className="text-sm bg-black text-white p-4 rounded">
                        {`<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">`}
                    </pre>
                </div>
                <p className="text-lg leading-relaxed">
                    Explanation of <code>content</code> values:
                </p>
                <ul className="list-disc list-inside text-lg space-y-2">
                    <li><code>width=device-width</code>: Sets the viewport width to the device's width.</li>
                    <li><code>initial-scale=1.0</code>: Sets the initial zoom level to 100%.</li>
                    <li>
                        <code>shrink-to-fit=no</code>: Fixes a bug specific to Safari mobile
                        (iOS 9).
                    </li>
                </ul>
            </section>

            {/* Media Queries Section */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">Media Queries</h2>
                <p className="text-lg leading-relaxed">
                    Media queries apply CSS rules based on the device and other criteria.
                </p>
                <div className="bg-gray-100 p-4 rounded">
                    <pre className="text-sm bg-black text-white p-4 rounded">
                        {`/* Example: Adjust font size for different screen widths */
@media screen and (max-width: 576px) {
  h1 {
    font-size: 20px;
  }
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 40px;
  }
}`}
                    </pre>
                </div>
                <p className="text-lg leading-relaxed">
                    This code displays <code>h1</code> text at 20px for screens narrower
                    than 576px, and at 40px for screens between 577px and 768px. Beyond
                    768px, the default size is used.
                </p>
            </section>

            {/* Common Criteria */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">Common Media Query Criteria</h2>
                <ul className="list-disc list-inside text-lg space-y-2">
                    <li><strong>Device types:</strong> <code>screen</code>, <code>print</code>, <code>tv</code>, etc.</li>
                    <li><strong>Features:</strong> <code>width</code>, <code>height</code>, <code>orientation</code>, <code>resolution</code>, etc.</li>
                </ul>
                <p className="text-lg leading-relaxed">
                    Criteria can be combined using operators like <code>and</code>,{" "}
                    <code>not</code>, and <code>only</code>.
                </p>
            </section>

            {/* Example Section */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">Examples</h2>
                <div className="bg-gray-100 p-4 rounded">
                    <pre className="text-sm bg-black text-white p-4 rounded">
                        {`/* Adjust background color for mobile devices */
@media screen and (max-width: 480px) {
  body {
    background-color: lightblue;
  }
}

/* Two-column layout for larger screens */
.container {
  display: flex;
  flex-wrap: wrap;
}

.column {
  flex: 1;
  min-width: 300px;
}

@media (max-width: 768px) {
  .column {
    flex: 100%;
  }
}`}
                    </pre>
                </div>
            </section>
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">Integration of Media Queries</h2>
                <p className="text-lg leading-relaxed">
                    Media queries can be integrated into your web page in two main ways:
                </p>
                <ol className="list-decimal list-inside text-lg space-y-2">
                    <li>Using a single global CSS file containing all media queries.</li>
                    <li>
                        Using multiple external CSS files, each targeted to a specific media query/device/breakpoint via the <code>media</code> attribute in the <code>&lt;link&gt;</code> tag:
                    </li>
                </ol>
                <div className="bg-gray-100 p-4 rounded">
                    <pre className="text-sm bg-black text-white p-4 rounded">
                        {`<link rel="stylesheet" media="screen and (max-width: 575px)" href="mobile.css">
<link rel="stylesheet" media="screen and (min-width: 576px)" href="tablet.css">
<link rel="stylesheet" media="screen and (min-width: 992px)" href="desktop.css">`}
                    </pre>
                </div>
            </section>

            {/* Font Sizes */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">Font Sizes in Responsive Design</h2>
                <p className="text-lg leading-relaxed">
                    Managing font sizes in responsive design can be challenging. To ensure flexibility, avoid absolute units like <code>pt</code> or <code>cm</code>, and use relative units instead.
                </p>

                <h3 className="text-2xl font-semibold">The Special Case of Pixels</h3>
                <p className="text-lg leading-relaxed">
                    While pixels are commonly used and resizable, they depend on screen resolution and size, which can be limiting.
                </p>

                <h3 className="text-2xl font-semibold">Other Relative Units: %, em, and rem</h3>
                <p className="text-lg leading-relaxed">
                    Units like <code>%</code> and <code>em</code> are proportional to their parent, which can complicate responsive design. The <code>rem</code> unit, based on the root element (<code>&lt;html&gt;</code>), is a better choice for consistent sizing.
                </p>
                <div className="bg-gray-100 p-4 rounded">
                    <pre className="text-sm bg-black text-white p-4 rounded">
                        {`html {
  font-size: 100%;
}

h1 {
  font-size: 2rem;
}`}
                    </pre>
                </div>

                <h3 className="text-2xl font-semibold">Viewport-Based Units: vw and vh</h3>
                <p className="text-lg leading-relaxed">
                    CSS3 introduced units like <code>vw</code> (viewport width) and <code>vh</code> (viewport height) for responsive design. These are excellent for creating responsive font sizes but may need adjustments for readability on smaller devices.
                </p>
            </section>

            {/* Responsive Images */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">Responsive Images</h2>
                <p className="text-lg leading-relaxed">
                    To make images responsive, apply the following CSS rules and remove any <code>width</code> or <code>height</code> attributes from the HTML:
                </p>
                <div className="bg-gray-100 p-4 rounded">
                    <pre className="text-sm bg-black text-white p-4 rounded">
                        {`img {
  max-width: 100%;
  height: auto;
}`}
                    </pre>
                </div>
                <ul className="list-disc list-inside text-lg space-y-2">
                    <li><code>max-width: 100%:</code> Ensures the image does not exceed the width of its container.</li>
                    <li><code>height: auto:</code> Automatically adjusts the height based on the width to prevent distortion.</li>
                </ul>
                <p className="text-lg leading-relaxed">
                    This is the standard solution. For more advanced options, consider alternative techniques.
                </p>
            </section>
        </div>
    );
}
