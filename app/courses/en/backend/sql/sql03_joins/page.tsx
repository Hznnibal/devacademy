import { CodeBlock } from '@/components/CodeBlock/code-block';
import Link from 'next/link';
import React from 'react';

const SqlJoinsExercise: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">

            <h1 className="text-3xl font-semibold mb-6 text-center">Joins</h1>

            <p className="mb-6">
                The correct syntax to write joins is as follows:
            </p>
            <CodeBlock code={`SELECT *
FROM table1
JOIN table2 ON table1_table2_join_condition
WHERE restriction_condition;`} />
            <p className="mb-6">
                There is an older syntax written as:
            </p>
            <CodeBlock code={`SELECT *
FROM table1, table2
WHERE table1_table2_join_condition AND restriction_condition;`} />

            <p className="text-lg leading-relaxed mb-4">
                In the <code>EMPLOYEE</code> table, the <code>nodept</code> column contains values that also exist in the
                <code>nodept</code> column of the <code>DEPT</code> table and vice versa.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                Logically, each row in <code>EMPLOYEE</code> corresponds to a row in <code>DEPT</code>, and each row in
                <code>DEPT</code> corresponds to one or more rows in <code>EMPLOYEE</code>.
            </p>

            <p className="text-lg leading-relaxed mb-4">
                This correspondence is achieved using the equality operator <code>=</code> between the values of the two columns
                in the two tables. This is called an equi-join.
            </p>

            <h4 className="text-sm ml-12 font-semibold">1. Find the first names of employees and the region number of their department.</h4>

            <p className="text-lg leading-relaxed mb-4">
                Behind <code>SELECT</code>, it may be necessary to prefix the column with the table name. If a column appears
                in multiple tables, it creates ambiguity.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                To simplify query writing, the tables listed after <code>FROM</code> can be temporarily renamed, and the alias
                can be used to prefix the columns.
            </p>
            <h4 className="text-sm ml-12 font-semibold">2. Find the department number, department name, and employee names sorted by department number (rename thetables used).</h4>
            <h4 className="text-sm ml-12 font-semibold">3. Find the names of employees in the Distribution department.</h4>

            <div className="py-8 space-y-4">
                <h2 className="text-2xl font-semibold mb-4">Auto-Joins</h2>
                <p className="mb-6">
                    The ability to temporarily rename a table in a query enables self-joins, where a table is joined with itself.
                </p>
                <h4 className="text-sm ml-12 font-semibold">4. Find the names and salaries of employees who earn more than their manager, as well as the names and salaries of their managers.</h4>

                <h2 className="text-2xl font-semibold mb-4 mt-4">Subqueries</h2>
                <p className="mb-6">
                    The result of a query can be used in the restriction clause of another query. This is known as a nested subquery.
                </p>
                <CodeBlock code={`SELECT *
FROM emp
WHERE nodep IN
    (SELECT nodept FROM dept WHERE name='...');`} />


                <h4 className="text-sm ml-12 font-semibold">5. Find the names and titles of employees who have the same title as <strong>taylor</strong>.</h4>
                <h4 className="text-sm ml-12 font-semibold">6. Find the names, salaries, and department numbers of employees who earn more than any one employeein department 31, sorted by department number and salary.</h4>
                <h4 className="text-sm ml-12 font-semibold">
                    7. Find the names, salaries, and department numbers of employees who earn more than all employees
                    in department 31, sorted by department number and salary.
                </h4>
                <p className="text-lg my-4">
                    <strong>Note:</strong> The operator <code>IN</code> is equivalent to <code>= ANY</code>, while <code>NOT IN</code> is equivalent to <code>!= ALL</code>.
                </p>
                <h4 className="text-sm ml-12 font-semibold">
                    8. Find the names and titles of employees in department 31 who have a title that also exists in department 32.
                </h4>
                <h4 className="text-sm ml-12 font-semibold">
                    9. Find the names and titles of employees in department 31 who have a title that does not exist in department 32.
                </h4>
                <h4 className="text-sm ml-12 font-semibold">
                    10. Find the names, titles, and salaries of employees who have the same title and salary as <strong>Young</strong>.
                </h4>
            </div>

            <div className="py-8">
                <h2 className="text-2xl font-semibold mb-4">External Joins</h2>
                <p className="mb-6">
                    <strong>LEFT JOIN</strong> and <strong>RIGHT JOIN</strong> are used to include rows that do not have matching entries in the other table.
                </p>
                <p className="mb-6">
                    For example, in the <code>DEPT</code> table, there are rows with department numbers that do not correspond to any row in the <code>EMP</code> table.
                    These rows are considered "outside" the join between the two tables. To include these rows in the result, you can use a <strong>LEFT JOIN</strong>.
                </p>
                <p className="mb-6">
                    To write a <strong>LEFT JOIN</strong>, the syntax is the same as a normal join, but replace <code>JOIN</code> with <code>LEFT JOIN</code>.
                </p>
                <p className="mb-6">
                    The difference is that in a normal join, only records that can be matched based on the join condition are included.
                    With a <strong>LEFT JOIN</strong>, you also include records from the table on the left side of the <code>LEFT JOIN</code> that do not match any records in the table on the right.
                </p>
                <p className="mb-6">
                    Similarly, a <strong>RIGHT JOIN</strong> includes records from the table on the right side of the <code>RIGHT JOIN</code> that do not match any records in the table on the left.
                </p>
                <h3 className="text-xl font-medium mb-4">Example Query</h3>
                <p className="text-lg leading-relaxed mb-4">
                    Find the department number, department name, and employee names,
                    while also displaying departments with no employees, sorted by department number.
                </p>
                <CodeBlock code={`SELECT dept.dept_no, dept.dept_name, emp.name
FROM dept
LEFT JOIN emp ON dept.dept_no = emp.dept_no
ORDER BY dept.dept_no;`} />

                <h2 className="text-2xl font-semibold mb-4">Group Functions</h2>
                <p className="mb-6">
                    SQL provides functions that work on groups of rows rather than individual rows. Examples include:
                    <code>AVG</code> (average), <code>MIN</code> (minimum), <code>MAX</code> (maximum), <code>SUM</code> (sum), and <code>COUNT</code> (count).
                </p>
                <h3 className="text-xl font-medium mb-4">Example: Average</h3>
                <p className="mb-6">
                    To find the average salary of secretaries:
                </p>
                <CodeBlock code={`SELECT AVG(salary)
FROM employee
WHERE title = 'Secretary';`} />
                <p className="mb-6">
                    You cannot use <code>SELECT</code> to work on both individual rows and groups simultaneously. For example:
                </p>
                <pre className="bg-gray-900 text-white p-4 rounded mb-4">
                    {`SELECT last_name, AVG(salary)
FROM employee;`}
                </pre>
                <p className="mb-6">
                    This query will produce an error because it combines row-level and group-level operations in one query.
                </p>
                <h3 className="text-xl font-medium mb-4">Using Subqueries with Group Functions</h3>
                <p className="mb-6">
                    However, with nested queries, you can retrieve the name and salary of employees whose salary is the highest:
                </p>
                <CodeBlock code={`SELECT last_name, salary
FROM employee
WHERE salary = (SELECT MAX(salary)
FROM employee);`} />
            </div>

            <div className="py-8 space-y-4">
                <h2 className="text-2xl font-semibold mb-4">Groups and Aggregation</h2>
                <p className="mb-6">
                    To apply a group function to a specific group of rows, use the <code>GROUP BY</code> clause.
                    Group functions and clauses can also be used with joins.
                </p>
                <p className="mb-6">
                    Any column included in the <code>SELECT</code> clause that is not part of an aggregation function must also be included in the <code>GROUP BY</code> clause.
                </p>
                <h3 className="text-xl font-medium mb-4">Example Query</h3>
                <p className="text-lg leading-relaxed mb-4">
                    To calculate the average salary for each department:
                </p>
                <CodeBlock code={`SELECT nodep, AVG(salary)
FROM employee
GROUP BY nodep;`} />

                <h4 className="text-sm ml-12 font-semibold">11. Calculate the number of employees for each title.</h4>
                <h4 className="text-sm ml-12 font-semibold">12. Calculate the average salaries and their total by region.</h4>

                <h2 className="text-2xl font-semibold mb-4">The HAVING Clause</h2>
                <p className="mb-6">
                    While the <code>WHERE</code> clause is used to restrict individual rows, the <code>HAVING</code> clause restricts groups of rows.
                </p>
                <p className="mb-6">
                    For example, to find titles with more than 2 employees:
                </p>
                <CodeBlock code={`SELECT title, COUNT(*)
FROM employee
GROUP BY title
HAVING COUNT(*) > 2;`} />

                <h4 className="text-sm ml-12 font-semibold">13. Display the department numbers with at least 3 employees.</h4>
                <h4 className="text-sm ml-12 font-semibold">14. Display the initials of names that belong to at least 3 employees.</h4>
                <h4 className="text-sm ml-12 font-semibold">15. Find the maximum and minimum salaries among all employees, and calculate the difference between them.</h4>
                <h4 className="text-sm ml-12 font-semibold">16. Find the number of unique titles.</h4>
                <h4 className="text-sm ml-12 font-semibold">17. For each title, count the number of employees holding that title.</h4>
                <h4 className="text-sm ml-12 font-semibold">
                    18. For each department name, display the department name and the number of employees in that department.
                </h4>
                <h4 className="text-sm ml-12 font-semibold">
                    19. Find the titles and the average salaries for each title where the average salary is greater than the
                    average salary of the "Representatives."
                </h4>
                <h4 className="text-sm ml-12 font-semibold">
                    20. Find the number of recorded salaries and the number of recorded commission rates.
                </h4>
            </div>

            <div className="text-center mt-8">
                <Link href="sql03_joins/solutions" className="text-blue-600 underline text-lg">
                    View solutions
                </Link>
            </div>
        </div >
    );
};

export default SqlJoinsExercise;
