import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const IntroPHP: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Introduction to PHP</h1>


            {/* Intro Section */}
            <p className="mb-4 leading-relaxed">
                PHP, also known as <strong>PHP Hypertext Preprocessor</strong>, is a server-side scripting
                language specifically designed to generate dynamic HTML pages.
            </p>

            <ul className="list-disc list-inside space-y-3 mb-6 pl-4 text-lg">
                <li>
                    <span className="font-semibold">Cross-platform:</span> Available on Unix, Windows, and Linux.
                </li>
                <li>
                    <span className="font-semibold">Database Integration:</span> Easily manages databases like MySQL.
                </li>
                <li>
                    <span className="font-semibold">Efficient and Fast:</span> Handles high traffic with minimal server slowdown.
                </li>
            </ul>

            <p className="mb-4 leading-relaxed">
                PHP was initially developed by <strong>Rasmus Lerdorf</strong> in 1994 as PHP/FI.
                It was intended to add simple processing capabilities to HTML pages.
            </p>

            <p className="mb-4 leading-relaxed">
                Over time, PHP has become a widely used programming language due to its
                balance of <span className="font-semibold">simplicity</span> and <span className="font-semibold">power</span>.
                It is also open-source, making it free and accessible.
            </p>

            <p className="mb-6 leading-relaxed">
                Companies like <strong>Zend Technologies</strong> have significantly contributed to PHP's development,
                especially through the creation of the <strong>Zend Engine</strong>, PHP's execution engine.
            </p>

            {/* Structure of a Program */}
            <h2 className="text-2xl font-semibold mb-4 ">Structure of a Program</h2>
            <div className="border-b border-gray-300 mb-6" />

            <p className="mb-4 leading-relaxed">
                To let the server know it must interpret PHP code, we enclose the script
                between special tags, similar to JavaScript.
            </p>

            <CodeBlock code={`<html>
  <body>
    <?php
        // ...
        // Script to execute
        // ...
    ?>
  </body>
</html>`} />


            <p className="mb-4 leading-relaxed">
                The file must have the extension <code className=" px-1 rounded">.php</code>.
            </p>

            <p className="mb-4 leading-relaxed">
                A PHP file is essentially an HTML file with certain parts processed by the
                PHP interpreter. These parts are enclosed within{" "}
                <code className=" px-1 rounded">{`<?php … ?>`}</code>.
            </p>

            <p className="leading-relaxed">
                In simple terms, the output of executing a PHP script is an HTML document.
            </p>
        </div >
    );
};

export default IntroPHP;
