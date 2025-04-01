import React from "react";

const Page: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">HTML - 03 - Formatting</h1>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">Text Formatting</h2> <div className="border-b border-gray-300 mb-6" />
                <section className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Logical Formatting</h3>
                    <p className="text-lg leading-relaxed mb-4">
                        Using these tags, the browser interprets the text formatting. These tags are often used in non-graphical environments (like DOS) and are becoming less common.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;blockquote&gt;</code>: indicates a quotation
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;code&gt;</code>: indicates computer code
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;em&gt;</code>: emphasis (displayed as italics but has semantic significance)
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;strong&gt;</code>: highlights text in bold
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;samp&gt;</code>: displays characters literally
                        </li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Physical Formatting</h3>
                    <p className="text-lg leading-relaxed mb-4">
                        Using these tags, you control what the browser displays.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;b&gt;</code>: displays text in bold
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;i&gt;</code>: displays text in italics
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;u&gt;</code>: underlines text
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;small&gt;</code>: displays text in a smaller font
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;sup&gt;</code>: displays text as superscript
                        </li>
                        <li>
                            <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;sub&gt;</code>: displays text as subscript
                        </li>
                    </ul>
                </section>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Fonts</h2> <div className="border-b border-gray-300 mb-6" />

                <section className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Using CSS</h3>
                    <p className="text-lg leading-relaxed mb-4">
                        HTML5 removed most tags used for font management (<code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;font&gt;</code>, <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;color&gt;</code>, <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&lt;size&gt;</code>...), which should now be managed exclusively through CSS, which we will study later.
                    </p>
                </section>

                <section className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Accented and Special Characters</h3>
                    <p className="text-lg leading-relaxed mb-4">
                        Previously, for accents and special characters to be correctly recognized, they had to be replaced in the text with a code called an HTML entity:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            A numeric code (ISO code), starting with <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&#38;#</code> and followed by a semicolon. For example, for the copyright symbol ©: <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&#38;#169;</code>, or for the letter è: <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&#38;#232;</code>
                        </li>
                        <li>
                            Some codes can have a name: for copyright, you can write <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&#38;copy;</code>, or for è, <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">&#38;egrave;</code>
                        </li>
                    </ul>
                </section>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-2">Practical Exercise</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Take the HTML page you created earlier and test the different tags discussed in this chapter.
                </p>
            </section>
        </div>
    );
};

export default Page;
