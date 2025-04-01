
export default function Operators() {
    return (
        <div className="px-5 py-8 font-sans">

            <h1 className="text-3xl font-bold text-center mb-10">Operators</h1>

            {/* Calculation Operators */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2"> Calculation Operators</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    In all examples of this course, we assume that the initial value of x is 11.
                </p>
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Sign</th>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Meaning</th>
                            <th className="border px-4 py-2">Example</th>
                            <th className="border px-4 py-2">Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">+</td>
                            <td className="border px-4 py-2">Addition</td>
                            <td className="border px-4 py-2">x + 3</td>
                            <td className="border px-4 py-2">14</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">Subtraction</td>
                            <td className="border px-4 py-2">x - 3</td>
                            <td className="border px-4 py-2">8</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">*</td>
                            <td className="border px-4 py-2">Multiplication</td>
                            <td className="border px-4 py-2">x * 2</td>
                            <td className="border px-4 py-2">22</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">/</td>
                            <td className="border px-4 py-2">Division</td>
                            <td className="border px-4 py-2">x / 2</td>
                            <td className="border px-4 py-2">5.5</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">%</td>
                            <td className="border px-4 py-2">Modulo</td>
                            <td className="border px-4 py-2">x % 5</td>
                            <td className="border px-4 py-2">1</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">=</td>
                            <td className="border px-4 py-2">Equal</td>
                            <td className="border px-4 py-2">Receives the value on the right</td>
                            <td className="border px-4 py-2">x = 5</td>
                            <td className="border px-4 py-2">5</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-lg leading-relaxed mb-4">
                    The <code>+</code> operator is also used to concatenate strings.
                </p>
            </section>

            {/* Comparison Operators */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Comparison Operators</h2> <div className="border-b border-gray-300 mb-6" />
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Sign</th>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Example</th>
                            <th className="border px-4 py-2">Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">==</td>
                            <td className="border px-4 py-2">Equal</td>
                            <td className="border px-4 py-2">x == 11</td>
                            <td className="border px-4 py-2">true</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">&lt;</td>
                            <td className="border px-4 py-2">Less than</td>
                            <td className="border px-4 py-2">x &lt; 11</td>
                            <td className="border px-4 py-2">false</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">&lt;=</td>
                            <td className="border px-4 py-2">Less than or equal</td>
                            <td className="border px-4 py-2">x &lt;= 11</td>
                            <td className="border px-4 py-2">true</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">&gt;</td>
                            <td className="border px-4 py-2">Greater than</td>
                            <td className="border px-4 py-2">x &gt; 11</td>
                            <td className="border px-4 py-2">false</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">&gt;=</td>
                            <td className="border px-4 py-2">Greater than or equal</td>
                            <td className="border px-4 py-2">x &gt;= 11</td>
                            <td className="border px-4 py-2">true</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">!=</td>
                            <td className="border px-4 py-2">Not equal</td>
                            <td className="border px-4 py-2">x != 11</td>
                            <td className="border px-4 py-2">false</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-lg leading-relaxed mb-4">
                    The <code>=</code> operator is often confused with <code>==</code>. The <code>=</code> is an assignment operator, while <code>==</code> is a comparison operator. This confusion is a common source of programming errors.
                </p>
            </section >

            {/* Associative Operators */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2"> Associative Operators</ h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Associative operators perform calculations where a variable appears on both sides of the <code>=</code> sign (they are essentially assignment operators).
                </p>
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Sign</th>
                            <th className="border px-4 py-2">Description</th>
                            <th className="border px-4 py-2">Example</th>
                            <th className="border px-4 py-2">Meaning</th>
                            <th className="border px-4 py-2">Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">+=</td>
                            <td className="border px-4 py-2">Plus Equal</td>
                            <td className="border px-4 py-2">x += y</td>
                            <td className="border px-4 py-2">x = x + y</td>
                            <td className="border px-4 py-2">16</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">-=</td>
                            <td className="border px-4 py-2">Minus Equal</td>
                            <td className="border px-4 py-2">x -= y</td>
                            <td className="border px-4 py-2">x = x - y</td>
                            <td className="border px-4 py-2">6</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">*</td>
                            <td className="border px-4 py-2">Multiply Equal</td>
                            <td className="border px-4 py-2">x *= y</td>
                            <td className="border px-4 py-2">x = x * y</td>
                            <td className="border px-4 py-2">55</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">/</td>
                            <td className="border px-4 py-2">Divide Equal</td>
                            <td className="border px-4 py-2">x /= y</td>
                            <td className="border px-4 py-2">x = x / y</td>
                            <td className="border px-4 py-2">2.2</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Logical Operators */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Logical Operators</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Logical (boolean) operators are used to check two or more conditions.
                </p>
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Sign</th>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Example</th>
                            <th className="border px-4 py-2">Meaning</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">&&</td>
                            <td className="border px-4 py-2">And</td>
                            <td className="border px-4 py-2">condition1 && condition2</td>
                            <td className="border px-4 py-2">condition1 and condition2</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">||</td>
                            <td className="border px-4 py-2">Or</td>
                            <td className="border px-4 py-2">condition1 || condition2</td>
                            <td className="border px-4 py-2">condition1 or condition2</td>
                        </tr>
                    </tbody>
                </table>
            </section >

            {/* Increment Operators */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2"> Increment Operators</ h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    These operators increase or decrease the value of a variable by one. They are useful for implementing loops.
                </p>
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Sign</th>
                            <th className="border px-4 py-2">Description</th>
                            <th className="border px-4 py-2">Example</th>
                            <th className="border px-4 py-2">Meaning</th>
                            <th className="border px-4 py-2">Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">x++</td>
                            <td className="border px-4 py-2">Increment</td>
                            <td className="border px-4 py-2">y = x++</td>
                            <td className="border px-4 py-2">x++ is the same as x = x + 1</td>
                            <td className="border px-4 py-2">y = 4</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">x--</td>
                            <td className="border px-4 py-2">Decrement</td>
                            <td className="border px-4 py-2">y = x--</td>
                            <td className="border px-4 py-2">x-- is the same as x = x - 1</td>
                            <td className="border px-4 py-2">y = 2</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Operator Precedence */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Operator Precedence</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Operations are performed in the following order of precedence (from lowest to highest).
                    For operators with the same precedence, the operations are performed from left to right.
                </p>
                <table className="table-auto border-collapse border border-gray-300 w-full">
                    <thead>
                        <tr className="">
                            <th className="border border-gray-300 px-4 py-2">Type</th>
                            <th className="border border-gray-300 px-4 py-2">Operators</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td className="border border-gray-300 px-4 py-2">Comma</td>
                            <td className="border border-gray-300 px-4 py-2"><code>,</code></td>
                        </tr>
                        <tr className="">
                            <td className="border border-gray-300 px-4 py-2">Assignment</td>
                            <td className="border border-gray-300 px-4 py-2"><code>= += -= *= /= %=</code></td>
                        </tr>
                        <tr className="">
                            <td className="border border-gray-300 px-4 py-2">Conditional</td>
                            <td className="border border-gray-300 px-4 py-2"><code>?:</code></td>
                        </tr>
                        <tr className="">
                            <td className="border border-gray-300 px-4 py-2">Logical OR</td>
                            <td className="border border-gray-300 px-4 py-2"><code>||</code></td>
                        </tr>
                        <tr className="">
                            <td className="border border-gray-300 px-4 py-2">Logical AND</td>
                            <td className="border border-gray-300 px-4 py-2"><code>&&</code></td>
                        </tr>
                        <tr className="">
                            <td className="border border-gray-300 px-4 py-2">Equality and Inequality</td>
                            <td className="border border-gray-300 px-4 py-2"><code>== !=</code></td>
                        </tr>
                        <tr className="">
                            <td className="border border-gray-300 px-4 py-2">Relational</td>
                            <td className="border border-gray-300 px-4 py-2"><code>&lt; &lt;= &gt; &gt;=</code></td>
                        </tr>
                        <tr className="">
                            <td className="border border-gray-300 px-4 py-2">Arithmetic</td>
                            <td className="border border-gray-300 px-4 py-2"><code>+ -</code></td>
                        </tr>
                        <tr className="">
                            <td className="border border-gray-300 px-4 py-2">Multiplication, Division</td>
                            <td className="border border-gray-300 px-4 py-2"><code>* /</code></td>
                        </tr>
                        <tr className="">
                            <td className="border border-gray-300 px-4 py-2">Unary</td>
                            <td className="border border-gray-300 px-4 py-2"><code>! ++ --</code></td>
                        </tr>
                        <tr className="">
                            <td className="border border-gray-300 px-4 py-2">Parentheses</td>
                            <td className="border border-gray-300 px-4 py-2"><code>()</code></td>
                        </tr>
                    </tbody>
                </table>
            </section >

            {/* Exercise */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2"> Exercise</ h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Given the following variables:</p>
                <ul className="list-inside space-y-2">
                    <li>a = "100" (string)</li>
                    <li>b = 100 (number)</li>
                    <li>c = 1.00 (number)</li>
                    <li>d = true (boolean)</li>
                </ul>
                Complete the following tasks:

                <ul className="list-inside space-y-2">
                    <li>Display: "This is a string: 100"</li>
                    <li>Apply the decrement operator to <code>b</code></li>
                    <li>Add the value of <code>a</code> to <code>c</code></li>
                    <li>Invert the value of <code>d</code></li>
                </ul>
            </section>
        </div >
    );
}
