import Link from "next/link";

export default function CssExercises() {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-bold text-center mb-10">CSS Exercises</h1>

            {/* Introduction to CSS */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">1. Introduction to CSS</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    CSS (Cascading Style Sheets) is used to style HTML and manage the appearance of elements.
                    It allows you to define colors, sizes, fonts, and much more.
                </p>
                <pre className="bg-black text-white p-4 rounded text-sm">
                    {`Exercise:
- Add a CSS stylesheet to a given HTML document.
- Change the text color to blue and the font style to Arial.`}
                </pre>
            </section>

            {/* Selectors */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">2. Selectors</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    CSS selectors are used to target specific HTML elements to apply styles.
                    You can use simple selectors like <code className="bg-gray-100 text-black px-1 rounded">.class</code> or
                    <code className="bg-gray-100 text-black px-1 rounded">#id</code>, or advanced selectors like
                    <code className="bg-gray-100 text-black px-1 rounded">:hover</code>.
                </p>
                <pre className="bg-black text-white p-4 rounded text-sm">
                    {`Exercise:
- Target all h1 headings and give them a red border.
- Apply a yellow background color to paragraphs containing the class .highlight.`}
                </pre>
            </section>

            {/* Colors and Fonts */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">3. Colors and Fonts</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Colors can be defined using keywords, hexadecimal codes, or functions like
                    <code className="bg-gray-100 text-black px-1 rounded">rgb()</code>. Fonts can be imported from Google Fonts.
                </p>
                <pre className="bg-black text-white p-4 rounded text-sm">
                    {`Exercise:
- Change the background color of a page using an rgba() color.
- Use a custom font for the main text.`}
                </pre>
            </section>

            {/* Box Model */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">4. Box Model</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    In CSS, each element is a box. The dimensions are defined by the properties
                    <code className="bg-gray-100 text-black px-1 rounded">width</code>, <code className="bg-gray-100 text-black px-1 rounded">height</code>,
                    <code className="bg-gray-100 text-black px-1 rounded">padding</code>, <code className="bg-gray-100 text-black px-1 rounded">margin</code>, and
                    <code className="bg-gray-100 text-black px-1 rounded">border</code>.
                </p>
                <pre className="bg-black text-white p-4 rounded text-sm">
                    {`Exercise:
- Create a box with a black border, 10px padding, and 20px margin.
- Experiment with the overflow property to manage long content.`}
                </pre>
            </section>

            {/* Positioning */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">5. Positioning</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Elements can be positioned using the <code className="bg-gray-100 text-black px-1 rounded">position</code> property:
                    <code className="bg-gray-100 text-black px-1 rounded">static</code>, <code className="bg-gray-100 text-black px-1 rounded">relative</code>,
                    <code className="bg-gray-100 text-black px-1 rounded">absolute</code>, <code className="bg-gray-100 text-black px-1 rounded">fixed</code>, or
                    <code className="bg-gray-100 text-black px-1 rounded">sticky</code>.
                </p>
                <pre className="bg-black text-white p-4 rounded text-sm">
                    {`Exercise:
- Position a box at the top right of the page using absolute.
- Use sticky to create a navigation that stays visible while scrolling.`}
                </pre>
            </section>

            {/* Responsive Design */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">6. Responsive Design</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Responsive design allows web pages to adapt to different screen sizes. Use
                    <code className="bg-gray-100 text-black px-1 rounded">media queries</code> to apply specific styles for different devices.
                </p>
                <pre className="bg-black text-white p-4 rounded text-sm">
                    {`Exercise:
- Create a layout with three columns that turns into a single column on mobile.
- Change the background color depending on the screen width.`}
                </pre>
            </section>

            <div className="text-center mt-8">
                <Link href="css07_exercices/solutions" className="text-blue-600 underline text-lg">
                    View solutions
                </Link>
            </div>
        </div>
    );
}
