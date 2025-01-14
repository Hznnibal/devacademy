import Link from "next/link";

const AnswersPage = () => {
    return (
        <div className="py-4 space-y-4">
            <h4 className="text-lg font-semibold">4. Display the Titles of All Employees</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT title FROM employee;</code>
            </pre>

            <h4 className="text-lg font-semibold">5. Display the Different Values of Employee Titles</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT DISTINCT title FROM employee;</code>
            </pre>

            <h4 className="text-lg font-semibold">6. Display the Name, Employee Number, and Department Number of Employees with the Title "Secretary"</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, emp_id, nodep FROM employee WHERE title = 'Secretary';</code>
            </pre>

            <h4 className="text-lg font-semibold">7. Display the Name and Department Number of Employees Whose Department Number is Greater Than 40</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, nodep FROM employee WHERE nodep {`>`} 40;</code>
            </pre>

            <h4 className="text-lg font-semibold">8. Display the Name and first name of Employees Whose Name Comes Alphabetically Before Their first name</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT first_name, last_name FROM employee WHERE last_name &gt; first_name;</code>
            </pre>

            <h4 className="text-lg font-semibold">9. Display the Name, Salary, and Department Number of Employees with the Title "Representative", Department Number 35, and a Salary Greater Than 20,000</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, salary, nodep FROM employee WHERE title = 'Representative' AND nodep = 35 AND salary &gt; 20000;</code>
            </pre>

            <h4 className="text-lg font-semibold">10. Display the Name, Title, and Salary of Employees Whose Title is "Representative" or "President"</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, title, salary FROM employee WHERE title = 'Representative' OR title = 'President';</code>
            </pre>

            <h4 className="text-lg font-semibold">11. Display the Name, Title, Department Number, and Salary of Employees in Department 34 with the Title "Representative" or "Secretary"</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, title, nodep, salary FROM employee WHERE nodep = 34 AND (title = 'Representative' OR title = 'Secretary');</code>
            </pre>

            <h4 className="text-lg font-semibold">12. Display the Name, Title, Department Number, and Salary of Employees Whose Title is "Representative" or "Secretary" in Department 34</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, title, nodep, salary FROM employee WHERE title IN ('Representative', 'Secretary') AND nodep = 34;</code>
            </pre>

            <h4 className="text-lg font-semibold">13. Display the Name and Salary of Employees Whose Salary is Between 20,000 and 30,000</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, salary FROM employee WHERE salary BETWEEN 20000 AND 30000;</code>
            </pre>

            <h4 className="text-lg font-semibold">15. Display the Name of Employees Whose Name Starts with the Letter "H"</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name FROM employee WHERE last_name LIKE 'H%';</code>
            </pre>

            <h4 className="text-lg font-semibold">16. Display the Name of Employees Whose Name Ends with the Letter "n"</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name FROM employee WHERE last_name LIKE '%n';</code>
            </pre>

            <h4 className="text-lg font-semibold">17. Display the Name of Employees Whose Name Contains the Letter "u" in the 3rd Position</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name FROM employee WHERE last_name LIKE '__u%';</code>
            </pre>

            <h4 className="text-lg font-semibold">18. Display the Salary and Name of Employees from Department 41 Ordered by Salary Ascending</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT salary, last_name FROM employee WHERE nodep = 41 ORDER BY salary ASC;</code>
            </pre>

            <h4 className="text-lg font-semibold">19. Display the Salary and Name of Employees from Department 41 Ordered by Salary Descending</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT salary, last_name FROM employee WHERE nodep = 41 ORDER BY salary DESC;</code>
            </pre>

            <h4 className="text-lg font-semibold">20. Display the Title, Salary, and Name of Employees Ordered by Title Ascending and Salary Descending</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT title, salary, last_name FROM employee ORDER BY title ASC, salary DESC;</code>
            </pre>

            <h4 className="text-lg font-semibold">21. Display the Commission Rate, Salary, and Name of Employees Ordered by Commission Rate Ascending</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT commission_rate, salary, last_name FROM employee ORDER BY commission_rate ASC;</code>
            </pre>

            <h4 className="text-lg font-semibold">22. Display the Name, Salary, Commission Rate, and Title of Employees Whose Commission Rate is Not Provided</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, salary, commission_rate, title FROM employee WHERE commission_rate IS NULL;</code>
            </pre>

            <h4 className="text-lg font-semibold">23. Display the Name, Salary, Commission Rate, and Title of Employees Whose Commission Rate is Provided</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, salary, commission_rate, title FROM employee WHERE commission_rate IS NOT NULL;</code>
            </pre>

            <h4 className="text-lg font-semibold">24. Display the Name, Salary, Commission Rate, and Title of Employees Whose Commission Rate is Less Than 15</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, salary, commission_rate, title FROM employee WHERE commission_rate {`<`} 15;</code>
            </pre>

            <h4 className="text-lg font-semibold">25. Display the Name, Salary, Commission Rate, and Title of Employees Whose Commission Rate is Greater Than 15</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, salary, commission_rate, title FROM employee WHERE commission_rate {`>`} 15;</code>
            </pre>

            <h4 className="text-lg font-semibold">26. Display the Name, Salary, Commission Rate, and Commission of Employees Whose Commission Rate is Not Null (The Commission is Calculated by Multiplying the Salary by the Commission Rate)</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, salary, commission_rate, (salary * commission_rate/ 100) AS Commission FROM employee WHERE commission_rate IS NOT NULL;</code>
            </pre>

            <h4 className="text-lg font-semibold">27. Display the Name, Salary, Commission Rate, and Commission of Employees Whose Commission Rate is Not Null, Ordered by Commission Rate Ascending</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, salary, commission_rate, (salary * commission_rate/ 100) AS Commission FROM employee WHERE commission_rate IS NOT NULL ORDER BY commission_rate ASC;</code>
            </pre>

            <h4 className="text-lg font-semibold">28. Display the Name and First Name (Concatenated) of Employees (Rename Columns)</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employee;</code>
            </pre>

            <h4 className="text-lg font-semibold">29. Display the First 5 Letters of the Employee's Name</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT SUBSTRING(last_name, 1, 5) AS first_5_letters FROM employee;</code>
            </pre>

            <h4 className="text-lg font-semibold">30. Display the Name and Position of the Letter "r" in the Employee's Name</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, LOCATE('r', last_name) AS letter_position FROM employee;</code>
            </pre>

            <h4 className="text-lg font-semibold">31. Display the Name, Uppercase Name, and Lowercase Name of the Employee Whose Name is "young"</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, UPPER(last_name) AS uppercase_name, LOWER(last_name) AS lowercase_name FROM employee WHERE last_name = 'young';</code>
            </pre>

            <h4 className="text-lg font-semibold">32. Display the Name and the Number of Characters in the Employee's Name</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, LENGTH(last_name) AS name_length FROM employee;</code>
            </pre>
            <div className="text-center mt-8">
                <Link href="../sql02_sqlqueries" className="text-blue-600 underline text-lg">
                    Back to Exercises
                </Link>
            </div>
        </div>
    );
};

export default AnswersPage;
