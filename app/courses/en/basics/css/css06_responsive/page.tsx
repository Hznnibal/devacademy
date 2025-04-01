import { CodeBlock } from "@/components/CodeBlock/code-block";

export default function ResponsiveWebDesign() {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">CSS Phase 6: Responsive Web Design</h1>

            {/* Objectives Section */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Objectives</h2> <div className="border-b border-gray-300 mb-6" />

                <ul className="list-disc list-inside text-lg space-y-2">
                    <li>Understand the constraints of responsive web design.</li>
                    <li>Master CSS media queries.</li>
                    <li>Adapt an HTML page for responsiveness.</li>
                </ul>
            </section>

            {/* Responsive Design Principles */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Think Responsive</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
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
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">The Viewport</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    To make a page responsive, add the following HTML meta tag in the
                    <code className="bg-gray-200 text-red-600">&lt;head&gt;</code> section:
                </p>
                <CodeBlock code={`<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">`} />
                <p className="text-lg leading-relaxed mb-4">
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
            </section >

            {/* Media Queries Section */}
            < section className="mb-6" >
                <h2 className="text-2xl font-semibold mb-2">Media Queries</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Media queries apply CSS rules based on the device and other criteria.
                </p>
                <CodeBlock code={`/* Example: Adjust font size for different screen widths */
@media screen and (max-width: 576px) {
  h1 {
    font-size: 20px;
  }
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 40px;
  }
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    This code displays <code>h1</code> text at 20px for screens narrower
                    than 576px, and at 40px for screens between 577px and 768px. Beyond
                    768px, the default size is used.
                </p>
            </section >

            {/* Common Criteria */}
            < section className="mb-6" >
                <h2 className="text-2xl font-semibold mb-2">Common Media Query Criteria</h2> <div className="border-b border-gray-300 mb-6" />

                <ul className="list-disc list-inside text-lg space-y-2">
                    <li><strong>Device types:</strong> <code>screen</code>, <code>print</code>, <code>tv</code>, etc.</li>
                    <li><strong>Features:</strong> <code>width</code>, <code>height</code>, <code>orientation</code>, <code>resolution</code>, etc.</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    Criteria can be combined using operators like <code>and</code>,{" "}
                    <code>not</code>, and <code>only</code>.
                </p>
            </section >

            {/* Example Section */}
            < section className="mb-6" >
                <h2 className="text-2xl font-semibold mb-2">Examples</h2> <div className="border-b border-gray-300 mb-6" />

                <CodeBlock code={`/* Adjust background color for mobile devices */
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
}`} />
            </section >
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Integration of Media Queries</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Media queries can be integrated into your web page in two main ways:
                </p>
                <ol className="list-decimal list-inside text-lg space-y-2">
                    <li>Using a single global CSS file containing all media queries.</li>
                    <li>
                        Using multiple external CSS files, each targeted to a specific media query/device/breakpoint via the <code>media</code> attribute in the <code>&lt;link&gt;</code> tag:
                    </li>
                </ol>
                <CodeBlock code={`<link rel="stylesheet" media="screen and (max-width: 575px)" href="mobile.css">
<link rel="stylesheet" media="screen and (min-width: 576px)" href="tablet.css">
<link rel="stylesheet" media="screen and (min-width: 992px)" href="desktop.css">`} />
            </section >

            {/* Font Sizes */}
            < section className="mb-6" >
                <h2 className="text-2xl font-semibold mb-2">Font Sizes in Responsive Design</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Managing font sizes in responsive design can be challenging. To ensure flexibility, avoid absolute units like <code>pt</code> or <code>cm</code>, and use relative units instead.
                </p>

                <h3 className="text-xl font-semibold">The Special Case of Pixels</h3>
                <p className="text-lg leading-relaxed mb-4">
                    While pixels are commonly used and resizable, they depend on screen resolution and size, which can be limiting.
                </p>

                <h3 className="text-xl font-semibold">Other Relative Units: %, em, and rem</h3>
                <p className="text-lg leading-relaxed mb-4">
                    Units like <code>%</code> and <code>em</code> are proportional to their parent, which can complicate responsive design. The <code>rem</code> unit, based on the root element (<code>&lt;html&gt;</code>), is a better choice for consistent sizing.
                </p>
                <CodeBlock code={`html {
  font-size: 100%;
}

h1 {
  font-size: 2rem;
}`} />

                <h3 className="text-xl font-semibold">Viewport-Based Units: vw and vh</h3>
                <p className="text-lg leading-relaxed mb-4">
                    CSS3 introduced units like <code>vw</code> (viewport width) and <code>vh</code> (viewport height) for responsive design. These are excellent for creating responsive font sizes but may need adjustments for readability on smaller devices.
                </p>
            </section >

            {/* Responsive Images */}
            < section className="mb-6" >
                <h2 className="text-2xl font-semibold mb-2">Responsive Images</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    To make images responsive, apply the following CSS rules and remove any <code>width</code> or <code>height</code> attributes from the HTML:
                </p>
                <CodeBlock code={`img {
  max-width: 100%;
  height: auto;
}`} />
                <ul className="list-disc list-inside text-lg space-y-2">
                    <li><code>max-width: 100%:</code> Ensures the image does not exceed the width of its container.</li>
                    <li><code>height: auto:</code> Automatically adjusts the height based on the width to prevent distortion.</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    This is the standard solution. For more advanced options, consider alternative techniques.
                </p>
            </section >
        </div >
    );
}
