{/*TODO */ }

import { CodeBlock } from "@/components/CodeBlock/code-block";
import React from "react";

const Page: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">HTML - 05 - Lists</h1>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">Introduction</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    In HTML, a list is a set of points (items). Lists can be:
                </p>
                <ul className="text-lg leading-relaxed list-disc list-inside space-y-2 mb-4">
                    <li>Unordered: preceded by a graphic sign (circle, square, etc.)</li>
                    <li>Ordered: preceded by numbers or letters</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    The primary use of HTML lists is to create navigation menus.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    By default, lists are displayed vertically, but they can be displayed horizontally using CSS stylesheets.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Unordered List</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Unordered lists are declared using the <code>&lt;ul&gt;</code> tag (Unordered List). Each item in the list is represented by the <code>&lt;li&gt;</code> tag.
                </p>
                <CodeBlock code={`<ul>
   <li>TB</li>
   <li>DWWM</li>
   <li>CDA</li>
</ul>`} />
                <p className="text-lg leading-relaxed mb-4">Result:</p>
                <ul className="list-disc list-inside space-y-2 mb-2">
                    <li>TB</li>
                    <li>DWWM</li>
                    <li>CDA</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    Items in unordered lists are preceded by a bullet point. By default, a circular bullet is displayed.
                </p>
            </section >
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Ordered List</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Ordered lists are created using the <code>&lt;ol&gt;</code> tag (Ordered List). An increment is automatically added, by default with numbers.
                </p>
                <CodeBlock code={`<ol>
   <li>Paul</li>
   <li>Franck</li>
   <li>Maria</li>
</ol>`} />
                <p className="text-lg leading-relaxed mb-4">Result:</p>
                <ol className="list-decimal list-inside space-y-2 mb-2">
                    <li>Paul</li>
                    <li>Franck</li>
                    <li>Maria</li>
                </ol>
                <p className="text-lg leading-relaxed mb-4">
                    Example with Roman numerals:<br /></p>
                <CodeBlock code={`<ol type="i">
   <li>John</li>
   <li>Michael</li>
   <li>Carl</li>
</ol>`} />

                <p className="text-lg leading-relaxed mb-4">Result:</p>
                <ol type="i" className="list-decimal list-inside space-y-2">
                    <li>John</li>
                    <li>Michael</li>
                    <li>Carl</li>
                </ol>
            </section >
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Style for Bullets and Numbering</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    The numbering of lists and the shape of bullets (circle, square, etc.) can be customized using CSS.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Alignment</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    By default, lists are displayed vertically. However, using CSS, they can be displayed horizontally if needed.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Exercise</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Recreate the examples above in a new HTML page.
                </p>
            </section>
        </div >
    );
};

export default Page;
