import React from "react";

const Page: React.FC = () => {
    return (
        <div className="px-2 space-y-12">
            <h1 className="text-4xl font-bold mb-6">HTML - 05 - Lists</h1>

            <section className="mb-6">
                <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
                <p className="text-lg leading-relaxed mb-4">
                    In HTML, a list is a set of points (items). Lists can be:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>Unordered: preceded by a graphic sign (circle, square, etc.)</li>
                    <li>Ordered: preceded by numbers or letters</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    The primary use of HTML lists is to create navigation menus.
                </p>
                <p className="text-lg leading-relaxed">
                    By default, lists are displayed vertically, but they can be displayed horizontally using CSS stylesheets.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-3xl font-semibold mb-4">Unordered List</h2>
                <p className="text-lg leading-relaxed mb-4">
                    Unordered lists are declared using the <code>&lt;ul&gt;</code> tag (Unordered List). Each item in the list is represented by the <code>&lt;li&gt;</code> tag.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                    <code>{`<ul>
   <li>TB</li>
   <li>DWWM</li>
   <li>CDA</li>
</ul>`}</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">Result:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li>TB</li>
                    <li>DWWM</li>
                    <li>CDA</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    Items in unordered lists are preceded by a bullet point. By default, a circular bullet is displayed.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-3xl font-semibold mb-4">Ordered List</h2>
                <p className="text-lg leading-relaxed mb-4">
                    Ordered lists are created using the <code>&lt;ol&gt;</code> tag (Ordered List). An increment is automatically added, by default with numbers.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                    <code>{`<ol>
   <li>TB</li>
   <li>DWWM</li>
   <li>CDA</li>
</ol>`}</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">Result:</p>
                <ol className="list-decimal list-inside space-y-2">
                    <li>TB</li>
                    <li>DWWM</li>
                    <li>CDA</li>
                </ol>
                <p className="text-lg leading-relaxed mb-4">
                    Example with Roman numerals:<br />
                    <code>{`<ol type="i">
   <li>toto</li>
   <li>truc</li>
   <li>bidule</li>
</ol>`}</code>
                </p>
                <p className="text-lg leading-relaxed mb-4">Result:</p>
                <ol type="i" className="list-decimal list-inside space-y-2">
                    <li>toto</li>
                    <li>truc</li>
                    <li>bidule</li>
                </ol>
            </section>

            <section className="mb-6">
                <h2 className="text-3xl font-semibold mb-4">Style for Bullets and Numbering</h2>
                <p className="text-lg leading-relaxed">
                    The numbering of lists and the shape of bullets (circle, square, etc.) can be customized using CSS.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-3xl font-semibold mb-4">Alignment</h2>
                <p className="text-lg leading-relaxed">
                    By default, lists are displayed vertically. However, using CSS, they can be displayed horizontally if needed.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-3xl font-semibold mb-4">Exercise</h2>
                <p className="text-lg leading-relaxed">
                    Recreate the examples above in a new HTML page.
                </p>
            </section>
        </div>


    );
};

export default Page;
