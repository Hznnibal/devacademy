import React from "react";

const Page: React.FC = () => {
    return (
        <div className="px-2 space-y-12">
            <h1 className="text-4xl text-center font-bold mb-6">HTML - 03 - Formatting</h1>

            <section className="mb-6">
                <h2 className="text-3xl font-semibold mb-4">Text Formatting</h2>

                <section className="mb-4">
                    <h3 className="text-2xl font-medium mb-2">Logical Formatting</h3>
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
                    <h3 className="text-2xl font-medium mb-2">Physical Formatting</h3>
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
                <h2 className="text-3xl font-semibold mb-4">Fonts</h2>

                <section className="mb-4">
                    <h3 className="text-2xl font-medium mb-2">Using CSS</h3>
                    <p className="text-lg leading-relaxed">
                        HTML5 removed most tags used for font management (<code>&lt;font&gt;</code>, <code>&lt;color&gt;</code>, <code>&lt;size&gt;</code>...), which should now be managed exclusively through CSS, which we will study later.
                    </p>
                </section>

                <section className="mb-4">
                    <h3 className="text-2xl font-medium mb-2">Accented and Special Characters</h3>
                    <p className="text-lg leading-relaxed mb-4">
                        Previously, for accents and special characters to be correctly recognized, they had to be replaced in the text with a code called an HTML entity:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            A numeric code (ISO code), starting with <code>&#38;#</code> and followed by a semicolon. For example, for the copyright symbol ©: <code>&#38;#169;</code>, or for the letter è: <code>&#38;#232;</code>
                        </li>
                        <li>
                            Some codes can have a name: for copyright, you can write <code>&#38;copy;</code>, or for è, <code>&#38;egrave;</code>
                        </li>
                    </ul>
                </section>
            </section>

            <section>
                <h2 className="text-3xl font-semibold mb-4">Practical Exercise</h2>
                <p className="text-lg leading-relaxed">
                    Take the HTML page you created earlier and test the different tags discussed in this chapter.
                </p>
            </section>
        </div>
    );
};

export default Page;
