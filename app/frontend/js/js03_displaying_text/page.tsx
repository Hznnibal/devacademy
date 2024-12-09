import Link from "next/link";

export default function DisplayingText() {
    return (
        <div className="px-6 py-8 space-y-12">
            <h1 className="text-4xl font-bold text-center mb-10">Displaying Text</h1>

            {/* Dialog Boxes */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">Dialog Boxes</h2>
                <p className="text-lg leading-relaxed">
                    JavaScript can display dialog boxes, which are useful for beginner purposes, but should be avoided on production websites.
                </p>

                {/* alert() Method */}
                <h3 className="text-2xl font-semibold">The alert() Method</h3>
                <p className="text-lg leading-relaxed">
                    The <code>alert()</code> method displays a dialog box containing the data passed as a parameter. This box will block the current program until the user clicks "OK".
                </p>
                <div className="bg-gray-100 p-4 rounded">
                    <pre className="text-sm bg-black text-white p-4 rounded">
                        {`var name = "Jeff Lebowski";
window.alert("Hello");
window.alert(name);`}
                    </pre>
                </div>
                <p className="text-lg leading-relaxed">
                    To display text on multiple lines, insert the <code>\n</code> character in the data to be displayed.
                </p>

                {/* prompt() Method */}
                <h3 className="text-2xl font-semibold">The prompt() Method</h3>
                <p className="text-lg leading-relaxed">
                    The <code>prompt()</code> method displays a dialog box with a message and captures the data entered by the user.
                </p>
                <div className="bg-gray-100 p-4 rounded">
                    <pre className="text-sm bg-black text-white p-4 rounded">
                        {`var name;
name = prompt("Enter your name");
alert(name);`}
                    </pre>
                </div>

                {/* confirm() Method */}
                <h3 className="text-2xl font-semibold">The confirm() Method</h3>
                <p className="text-lg leading-relaxed">
                    The <code>confirm()</code> method displays a dialog box with a message and two buttons: OK and Cancel. If the user clicks "OK", the method returns <code>true</code>, and <code>false</code> if they click "Cancel".
                </p>
                <p className="text-lg leading-relaxed">
                    We will learn more about how to use this method later.
                </p>
            </section>

            {/* Displaying Information in the Console */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">Displaying Information in the Console</h2>
                <p className="text-lg leading-relaxed">
                    The <code>console</code> object is an essential tool for debugging during development. It allows you to display debug information (warnings, errors, variable values, etc.), which is crucial for troubleshooting your scripts.
                </p>
                <p className="text-lg leading-relaxed">
                    The console is a developer tool and should not be used for interacting with the user (use <code>alert()</code> or <code>prompt()</code> for that).
                </p>

                {/* log() Method */}
                <h3 className="text-2xl font-semibold">The log() Method</h3>
                <p className="text-lg leading-relaxed">
                    The console is included in the developer tools of browsers like Chrome and Firefox. To access it, press F12 and click on the "Console" tab. You can then use the <code>console.log()</code> method to display something in the console.
                </p>
                <div className="bg-gray-100 p-4 rounded">
                    <pre className="text-sm bg-black text-white p-4 rounded">
                        {`console.log("Text displayed in the console");`}
                    </pre>
                </div>
            </section>

            {/* Exercises */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">Exercises</h2>
                <ul className="list-decimal list-inside text-lg space-y-2">
                    <li>Create a script that asks the user for their first and last name and displays the information via an <code>alert()</code> dialog box.</li>
                    <li>Write a program that calculates the product of two numbers entered by the user and displays the result.</li>
                    <li>Write a program that converts Celsius to Fahrenheit using the formula: <code>F = (C * 9 / 5) + 32</code>. The program will ask the user for the temperature in Celsius and display the converted temperature in Fahrenheit.</li>
                </ul>
            </section>

            {/* Footer Link */}
            <div className="text-center mt-8">
                <Link href="/frontend/javascript/exercises" className="text-blue-600 underline text-lg">
                    Back to Exercises
                </Link>
            </div>
        </div>
    );
}
