import { CodeBlock } from "@/components/CodeBlock/code-block";

export default function ProgramStructure() {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-bold text-center mb-10">Program Structure</h1>

            {/* Introduction to CSS */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Objectives</h2> <div className="border-b border-gray-300 mb-6" />
                <ul className="list-disc list-inside text-lg space-y-2">
                    <li>Understand the basics of programming and create your first program.</li>
                    <li>Learn the rules and conventions of syntax and presentation in a program.</li>
                    <li>Add comments to your programs to clarify their purpose.</li>
                </ul>
            </section>

            {/* First Approach */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">First Approach</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    If you're reading this, you’ve already encountered HTML, CSS, and worked with the Bootstrap framework.
                    Now, it’s time to bring dynamic behavior to your web pages using JavaScript.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    There are several ways to include JavaScript code in your web page:
                </p>
                <ol className="list-decimal list-inside text-lg space-y-2">
                    <li>Directly in the HTML page:</li>
                </ol>
                <CodeBlock code={`<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
    </head>

    <body>
        Hello !!!
        <script>
            alert("my first script !");
        </script>
    </body>
</html>`} />

                <ol className="list-decimal list-inside text-lg space-y-2">
                    <li>Or in an external file (both index.html and script.js are in the same directory):</li>
                </ol>
                <CodeBlock code={`<!-- fichier index.html -->
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
    </head>

    <body>
        Hello !!!
        <script src="script.js"></script>
    </body>
</html>

// fichier script.js
alert("my first script !");`} />
            </section >

            {/* JavaScript Demo */}
            < section className="mb-6" >
                <h2 className="text-xl font-semibold mb-2">JavaScript Demo: Comments</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Comments in a program serve to:
                </p>
                <ul className="list-disc list-inside text-lg space-y-2">
                    <li>Provide developers with insights into how the program works.</li>
                    <li>Temporarily disable blocks of code.</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    Commented-out code does not get executed.
                </p>

                <h3 className="text-xl font-semibold">Single-line Comments</h3>
                <CodeBlock code={`// Displays a super important message!!!
alert("Why 42 ?");`} />

                <h3 className="text-xl font-semibold">Multi-line Comments</h3>
                <CodeBlock code={`/* 
    Comment
    on
    multiple
    lines
*/
alert("I got it");`} />
            </section >

        </div >
    );
}
