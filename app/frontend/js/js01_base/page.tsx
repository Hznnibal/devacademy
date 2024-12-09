
export default function ProgramStructure() {
    return (
        <div className="px-6 py-8 space-y-12">
            <h1 className="text-4xl font-bold text-center mb-10">Program Structure</h1>

            {/* Objectives */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">Objectives</h2>
                <ul className="list-disc list-inside text-lg space-y-2">
                    <li>Understand the basics of programming and create your first program.</li>
                    <li>Learn the rules and conventions of syntax and presentation in a program.</li>
                    <li>Add comments to your programs to clarify their purpose.</li>
                </ul>
            </section>

            {/* First Approach */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">First Approach</h2>
                <p className="text-lg leading-relaxed">
                    If you're reading this, you’ve already encountered HTML, CSS, and worked with the Bootstrap framework.
                    Now, it’s time to bring dynamic behavior to your web pages using JavaScript.
                </p>
                <p className="text-lg leading-relaxed">
                    There are several ways to include JavaScript code in your web page:
                </p>
                <ol className="list-decimal list-inside text-lg space-y-2">
                    <li>Directly in the HTML page:</li>
                </ol>
                <div className="bg-gray-100 p-4 rounded">
                    <pre className="text-sm bg-black text-white p-4 rounded">
                        {`<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
    </head>

    <body>
        Bonjour !!!
        <script>
            alert("mon premier script en javascript !");
        </script>
    </body>
</html>`}
                    </pre>
                </div>

                <ol className="list-decimal list-inside text-lg space-y-2">
                    <li>Or in an external file (both index.html and script.js are in the same directory):</li>
                </ol>
                <div className="bg-gray-100 p-4 rounded">
                    <pre className="text-sm bg-black text-white p-4 rounded">
                        {`<!-- fichier index.html -->
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
    </head>

    <body>
        Bonjour !!!
        <script src="script.js"></script>
    </body>
</html>

// fichier script.js
alert("mon premier script en javascript !");`}
                    </pre>
                </div>
            </section>

            {/* JavaScript Demo */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">JavaScript Demo: Comments</h2>
                <p className="text-lg leading-relaxed">
                    Comments in a program serve to:
                </p>
                <ul className="list-disc list-inside text-lg space-y-2">
                    <li>Provide developers with insights into how the program works.</li>
                    <li>Temporarily disable blocks of code.</li>
                </ul>
                <p className="text-lg leading-relaxed">
                    Commented-out code does not get executed.
                </p>

                <h3 className="text-2xl font-semibold">Single-line Comments</h3>
                <div className="bg-gray-100 p-4 rounded">
                    <pre className="text-sm bg-black text-white p-4 rounded">
                        {`// Displays a super important message!!!
alert("Pourquoi 42 ?");`}
                    </pre>
                </div>

                <h3 className="text-2xl font-semibold">Multi-line Comments</h3>
                <div className="bg-gray-100 p-4 rounded">
                    <pre className="text-sm bg-black text-white p-4 rounded">
                        {`/* 
    Comment
    on
    multiple
    lines
*/
alert("Je pense avoir compris");`}
                    </pre>
                </div>
            </section>

        </div>
    );
}
