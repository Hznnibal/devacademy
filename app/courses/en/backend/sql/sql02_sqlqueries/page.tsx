import { CodeBlock } from "@/components/CodeBlock/code-block";
import Image from "next/image";
import Link from "next/link";

export default function CreateDatabasePage() {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">The "example" Database</h1>
            <div className="mb-4">
                <p className="text-xl font-bold mb-3">Use
                    <a
                        href="/SCRIPT/example.sql"
                        download="example.sql"
                        className="text-primary hover:underline font-medium text-blue-600"
                    > this script </a>
                    to create Example database.</p>
                <p className="text-lg text-muted-foreground">
                    This database represents, in a simplified way, the staff of a company. It is designed for learning SQL, with a focus on simplicity and clarity.
                </p>

                <Image
                    src="/DATABASE/diagram.png"
                    alt="Database Schema"
                    className="rounded shadow-md mb-4"
                    width={360}
                    height={360}
                />
                <h3 className="text-lg mt-4 mb-4">Table: EMPLOYEE</h3>

                <Image
                    src="/DATABASE/tablemployee.png"
                    alt="Database Schema"
                    className="rounded shadow-md mb-4"
                    width={760}
                    height={360}
                />
                <p className="text-muted-foreground">
                    The <strong>EMPLOYEE</strong> table contains information about employees, including their IDs, names, hire dates, job roles, and salaries.
                </p>
                <ul className="list-disc space-y-2 ml-4">
                    <li><strong>emp_id:</strong> Unique identifier for each employee (Primary Key).</li>
                    <li><strong>last_name:</strong> Employee's last name.</li>
                    <li><strong>first_name:</strong> Employee's first name.</li>
                    <li><strong>hire_date:</strong> Date when the employee was hired.</li>
                    <li><strong>nosup:</strong> Supervisor identifier.</li>
                    <li><strong>title:</strong> Employee's job title.</li>
                    <li><strong>nodep:</strong> Department ID where the employee works (Foreign Key).</li>
                    <li><strong>salary:</strong> Monthly salary of the employee.</li>
                    <li><strong>commission_rate:</strong> Commission percentage, if applicable.</li>
                </ul>

                <h3 className="text-lg mt-4 mb-4">Table: DEPT</h3>

                <Image
                    src="/DATABASE/tabledep.png"
                    alt="Department Schema"
                    className="rounded shadow-md mb-4 mt-4"
                    width={460}
                    height={360}
                />

                <p className="text-muted-foreground mb-4">
                    The <strong>DEPT</strong> table contains information about the company's departments.
                </p>
                <ul className="list-disc space-y-2 ml-4">
                    <li><strong>nodept:</strong> Unique identifier for each department (Primary Key).</li>
                    <li><strong>name:</strong> Name of the department.</li>
                    <li><strong>region_id:</strong> Region identifier (Foreign Key).</li>
                </ul>
            </div>

            <div className="py-4 space-y-4">
                <h3 className="text-xl font-semibold">SELECT</h3>
                <p className="text-base">
                    The <strong className="font-bold">SELECT</strong> statement is used to query the database.
                </p>
                <p className="text-base">
                    Initially, we will consider queries involving a single table.
                </p>
                <p className="text-base">
                    Later, we will cover queries involving multiple tables.
                </p>
                <p className="text-base">
                    The basic syntax is:
                </p>
                <CodeBlock code={`SELECT columns
FROM tables separated by ","
WHERE conditions logical separated by "AND" or "OR"
ORDER BY columns separated by ","`} />


                <p className="text-base">
                    The <code className="font-mono text-sm">*</code> symbol is used to select all columns from a table.
                </p>

                <h4 className="text-sm ml-12 font-semibold">1. Display All Employee Information</h4>
                <p className="text-base">
                    To display all the information about employees, use the following query:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code className="text-sm">SELECT * FROM employee;</code>
                </pre>

                <h4 className="text-sm ml-12 font-semibold">2. Display All Department Information</h4>


                <p className="text-base">
                    Instead of selecting all columns with <code className="font-mono text-sm">*</code>, you can specify the columns you want to display by listing them.

                </p>

                <h4 className="text-sm ml-12 font-semibold">3. Display Name, Hire Date, Department ID, and Salary of Employees</h4>

                <p className="text-base">
                    You can change column titles using <code className="font-mono text-sm">AS</code>. The query </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code className="text-sm">SELECT last_name AS Employee FROM employee;</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4">will produce the same result as</p>
                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code className="text-sm">SELECT last_name FROM employee;</code>
                </pre>
                <p className="text-lg leading-relaxed mb-4"> except that the column will be titled <code className="font-mono text-sm">Employee</code> instead of <code className="font-mono text-sm">name</code>.
                </p>
                <p className="text-base">
                    If you want to use a column title that contains anything other than unaccented letters (such as spaces, punctuation, accents, etc.), you must enclose it in double quotes (<code className="font-mono text-sm">"</code>). For example:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code className="text-sm">SELECT last_name AS "Employee's Name" FROM emp;</code>
                </pre>
            </div>

            <div className="py-4 space-y-4">
                <h3 className="text-lg font-semibold">Removing Duplicates</h3>
                <p className="text-base">
                    It may be useful to remove duplicates, which is why we use the <code className="font-mono text-sm">DISTINCT</code> clause. This ensures that only one instance of any duplicate rows will be displayed.
                    It is used in the query as follows:
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code className="text-sm">SELECT DISTINCT ...</code>
                </pre>

                <h4 className="text-sm ml-12 font-semibold">4. Display the Titles of All Employees</h4>

                <h4 className="text-sm ml-12 font-semibold">5. Display the Different Values of Employee Titles</h4>


                <h3 className="text-xl font-semibold">Restrictions</h3>
                <p className="text-base">
                    Restriction clauses are written after <code className="font-mono text-sm">WHERE</code>. They allow you to filter the rows that should be displayed.
                </p>

                <h4 className="text-sm ml-12 font-semibold">6. Display the Name, Employee Number, and Department Number of Employees with the Title "Secretary"</h4>

                <h4 className="text-sm ml-12 font-semibold">7. Display the Name and Department Number of Employees Whose Department Number is Greater Than 40</h4>

                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code className="text-sm">SELECT last_name, nodep FROM employee WHERE nodep {`>`} 40;</code>
                </pre>
            </div>

            <div className="py-4 space-y-4">
                <h3 className="text-lg font-semibold">Restrictions by Comparing Columns</h3>
                <p className="text-base">
                    The restriction can involve comparing two or more columns to each other. You simply need to refer to the columns by their names.
                </p>
                <h4 className="text-sm ml-12 font-semibold">8. Display the Name and first name of Employees Whose Name Comes Alphabetically Before Their first name</h4>
                <h4 className="text-sm ml-12 font-semibold">9. Display the Name, Salary, and Department Number of Employees with the Title "Representative", Department Number 35, and a Salary Greater Than 20,000</h4>
                <h4 className="text-sm ml-12 font-semibold">10. Display the Name, Title, and Salary of Employees Whose Title is "Representative" or "President"</h4>
                <h4 className="text-sm ml-12 font-semibold">11. Display the Name, Title, Department Number, and Salary of Employees in Department 34 with the Title "Representative" or "Secretary"</h4>
                <h4 className="text-sm ml-12 font-semibold">12. Display the Name, Title, Department Number, and Salary of Employees Whose Title is "Representative" or "Secretary" in Department 34</h4>
                <h4 className="text-sm ml-12 font-semibold">13. Display the Name and Salary of Employees Whose Salary is Between 20,000 and 30,000</h4>
            </div>

            <div className="py-4 space-y-4">
                <h3 className="text-xl font-semibold">Negation, Pattern Matching</h3>
                <p className="text-base">
                    Arithmetic operators are negated with « ! »: for example, "not equal" is written as « != » {`(or « <> »)`}.
                    Other operators are negated using « NOT »: for example, "not in" is written as « NOT IN ».
                    Wildcard characters are « % » for a string and « _ » for a single character. These are used with the LIKE operator.
                </p>
                <h4 className="text-sm ml-12 font-semibold">15. Display the Name of Employees Whose Name Starts with the Letter "H"</h4>
                <h4 className="text-sm ml-12 font-semibold">16. Display the Name of Employees Whose Name Ends with the Letter "n"</h4>
                <h4 className="text-sm ml-12 font-semibold">17. Display the Name of Employees Whose Name Contains the Letter "u" in the 3rd Position</h4>
                <h4 className="text-sm ml-12 font-semibold">18. Display the Salary and Name of Employees from Department 41 Ordered by Salary Ascending</h4>
                <h4 className="text-sm ml-12 font-semibold">19. Display the Salary and Name of Employees from Department 41 Ordered by Salary Descending</h4>
                <h4 className="text-sm ml-12 font-semibold">20. Display the Title, Salary, and Name of Employees Ordered by Title Ascending and Salary Descending</h4>
            </div>

            <div className="py-4 space-y-4">
                <h3 className="text-xl font-semibold">NULL Values</h3>
                <p className="text-base">
                    In SQL, there is a value that represents an empty value. This is equivalent to the Null value in certain programming languages (like Java or Python). It is the value that fields have when they are not populated, and it is also called NULL. This value is not considered in rankings.
                </p>
                <h4 className="text-sm ml-12 font-semibold">21. Display the Commission Rate, Salary, and Name of Employees Ordered by Commission Rate Ascending</h4>
                <h4 className="text-sm ml-12 font-semibold">22. Display the Name, Salary, Commission Rate, and Title of Employees Whose Commission Rate is Not Provided</h4>
                <h4 className="text-sm ml-12 font-semibold">23. Display the Name, Salary, Commission Rate, and Title of Employees Whose Commission Rate is Provided</h4>
                <h4 className="text-sm ml-12 font-semibold">24. Display the Name, Salary, Commission Rate, and Title of Employees Whose Commission Rate is Less Than 15</h4>
                <h4 className="text-sm ml-12 font-semibold">25. Display the Name, Salary, Commission Rate, and Title of Employees Whose Commission Rate is Greater Than 15</h4>
                <h4 className="text-sm ml-12 font-semibold">26. Display the Name, Salary, Commission Rate, and Commission of Employees Whose Commission Rate is Not Null (The Commission is Calculated by Multiplying the Salary by the Commission Rate)</h4>
                <h4 className="text-sm ml-12 font-semibold">27. Display the Name, Salary, Commission Rate, and Commission of Employees Whose Commission Rate is Not Null, Ordered by Commission Rate Ascending</h4>
                <div className="py-4 space-y-4">
                    <h3 className="text-xl font-semibold">Concatenation</h3>
                    <p className="text-base">
                        The function used for string concatenation is CONCAT. It allows you to combine two or more strings into one.
                    </p>

                    <h4 className="text-sm ml-12 font-semibold">28. Display the Name and first name (Concatenated) of Employees. Rename the Columns</h4>
                    <h3 className="text-xl font-semibold">String Functions</h3>
                    <p className="text-base">
                        SQL also provides several string functions to extract parts of strings, locate certain characters, and manipulate case:
                    </p>
                    <ul className="list-disc ml-6">
                        <li>
                            <b>SUBSTRING(expr, p, n):</b> This function extracts a substring from `expr` starting at position `p` and extending for `n` characters.
                        </li>
                        <li>
                            <b>LOCATE(arg1, arg2):</b> This function returns the position of `arg1` within `arg2`. It helps find the position of one string in another.
                        </li>
                        <li>
                            <b>UPPER(arg1):</b> This function forces the conversion of the string `arg1` to uppercase.
                        </li>
                        <li>
                            <b>LOWER(arg1):</b> This function forces the conversion of the string `arg1` to lowercase.
                        </li>
                        <li>
                            <b>LENGTH(arg1):</b> This function returns the number of characters in the string `arg1`.
                        </li>
                    </ul>

                    <h4 className="text-sm ml-12 font-semibold">29. Display the First 5 Letters of the Employee's Name</h4>
                    <h4 className="text-sm ml-12 font-semibold">30. Display the Name and Position of the Letter "r" in the Employee's Name</h4>
                    <h4 className="text-sm ml-12 font-semibold">31. Display the Name, Uppercase Name, and Lowercase Name of the Employee Whose Name is "Vrante"</h4>
                    <h4 className="text-sm ml-12 font-semibold">32. Display the Name and the Number of Characters in the Employee's Name</h4>
                </div>
            </div>

            <div className="text-center mt-8">
                <Link href="sql02_sqlqueries/solutions" className="text-blue-600 underline text-lg">
                    View solutions
                </Link>
            </div>
        </div>
    );
}
