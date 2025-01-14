import React from 'react';

const SqlJoinsPage: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">SQL Joins</h1>
            <p className="mb-6">
                SQL joins allow you to link data from different tables using a common key between them. This operation helps retrieve more precise and complete results by combining data from multiple tables.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Types of Joins</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-6">
                There are several types of joins in SQL, but we will focus on the four most common types: INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN.
            </p>

            <h3 className="text-xl font-medium mb-3">LEFT JOIN</h3>
            <p className="text-lg leading-relaxed mb-4">
                The LEFT JOIN returns all records from the left table (here, the <code className="px-1 py-0.5 rounded">employe</code> table) and the matching records from the right table (the <code className="px-1 py-0.5 rounded">dept</code> table). If no matching records exist in the right table, NULL values are returned.
            </p>
            <pre className="bg-gray-900 text-white p-4 rounded mb-4">

                SELECT columns
                FROM table1
                LEFT JOIN table2 ON table1.column = table2.column;
            </pre>
            <p className="font-semibold mb-2">Example:</p>
            <pre className="bg-gray-900 text-white p-4 rounded mb-4">
                SELECT e.name, d.name
                FROM employe e
                LEFT JOIN dept d ON e.nodep = d.nodept;
            </pre>
            <p className="mb-6">
                This query returns all employee names and the departments they work in, even if some employees are not assigned to a department (NULL values for the department).
            </p>

            <h3 className="text-xl font-medium mb-3">RIGHT JOIN</h3>
            <p className="text-lg leading-relaxed mb-4">
                The RIGHT JOIN returns all records from the right table (here, the <code className="px-1 py-0.5 rounded">dept</code> table) and the matching records from the left table (<code className="px-1 py-0.5 rounded">employe</code>). If no matching records exist in the left table, NULL values are returned.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                Note: The right table is the second table specified in the FROM clause, while the left table is the first table specified in the FROM clause.
            </p>
            <pre className="bg-gray-900 text-white p-4 rounded mb-4">

                SELECT columns
                FROM table1
                RIGHT JOIN table2 ON table1.column = table2.column;
            </pre>
            <p className="font-semibold mb-2">Example:</p>
            <pre className="bg-gray-900 text-white p-4 rounded mb-4">
                SELECT e.name, d.name
                FROM employe e
                RIGHT JOIN dept d ON e.nodep = d.nodept;
            </pre>
            <p className="mb-6">
                This query returns all department names, even if some departments have no employees (NULL values for employees).
            </p>

            <h3 className="text-xl font-medium mb-3">FULL OUTER JOIN</h3>
            <p className="text-lg leading-relaxed mb-4">
                The FULL OUTER JOIN (or FULL JOIN) returns all records from both tables, with the matching records from both tables. If no matching records exist, NULL values are returned.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                Note: This type of join is not compatible with MySQL but can be reproduced using a UNION between a LEFT JOIN and a RIGHT JOIN.
            </p>
            <pre className="bg-gray-900 text-white p-4 rounded mb-4">

                SELECT columns
                FROM table1
                FULL OUTER JOIN table2 ON table1.column = table2.column;
            </pre>
            <p className="font-semibold mb-2">Example with UNION:</p>
            <pre className="bg-gray-900 text-white p-4 rounded mb-4">
                SELECT columns
                FROM table1
                LEFT OUTER JOIN table2 ON table1.column = table2.column

                UNION

                SELECT columns
                FROM table1
                RIGHT OUTER JOIN table2 ON table1.column = table2.column;
            </pre>
            <p className="font-semibold mb-2">Example:</p>
            <pre className="bg-gray-900 text-white p-4 rounded mb-4">
                SELECT e.name, d.name
                FROM employe e
                LEFT OUTER JOIN dept d ON e.nodep = d.nodept
                UNION
                SELECT e.name, d.name
                FROM employe e
                RIGHT OUTER JOIN dept d ON e.nodep = d.nodept;
            </pre>
            <p className="mb-6">
                This query returns all employee names and the departments they work in, as well as department names with no employees (NULL values for employees) and employee names with no departments (NULL values for departments).
            </p>

            <h2 className="text-2xl font-semibold mb-4">Other Types of Joins</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-6">Here are some additional types of joins in SQL:</p>

            <h3 className="text-xl font-medium mb-3">CROSS JOIN</h3>
            <p className="text-lg leading-relaxed mb-4">
                The CROSS JOIN is a type of join that returns all possible combinations of rows from two tables, creating a Cartesian product. This join does not require specific join conditions.
            </p>
            <pre className="bg-gray-900 text-white p-4 rounded mb-4">
                Example:
                SELECT e.name, d.name
                FROM employe e
                CROSS JOIN dept d;
            </pre>
            <p className="mb-6">
                This query returns all possible combinations of employee names and department names.
            </p>

            <h3 className="text-xl font-medium mb-3">SELF JOIN</h3>
            <p className="text-lg leading-relaxed mb-4">
                A SELF JOIN is a join performed on a single table, using a different reference to the same table. This can be useful to associate records with themselves for comparison purposes.
            </p>
            <pre className="bg-gray-900 text-white p-4 rounded mb-4">
                Example:
                SELECT employe.name, supervisor.name AS supervisor
                FROM employe
                LEFT JOIN employe AS supervisor ON employe.nosup = supervisor.noemp;
            </pre>
            <p className="mb-6">
                Explanation:
                This query returns employee names and the names of their supervisors, if they have one. The <code className="px-1 py-0.5 rounded">employe</code> table is joined with itself using a LEFT JOIN with an alias <code className="px-1 py-0.5 rounded">supervisor</code> for the joined table. The join condition <code className="px-1 py-0.5 rounded">employe.nosup = supervisor.noemp</code> links the <code className="px-1 py-0.5 rounded">nosup</code> column of the source table to the <code className="px-1 py-0.5 rounded">noemp</code> column of the joined table.
            </p>

            <h3 className="text-xl font-medium mb-3">NATURAL JOIN</h3>
            <p className="text-lg leading-relaxed mb-4">
                The NATURAL JOIN is performed on columns from two tables that have the same name. If a column has the same name in both tables, it is used as the implicit join condition.
            </p>
            <pre className="bg-gray-900 text-white p-4 rounded mb-4">
                Example:
                SELECT e.name, d.name
                FROM employe e
                NATURAL JOIN dept d;
            </pre>
            <p className="mb-6">
                This query returns employee names and the names of the departments they work in, using the <code className="px-1 py-0.5 rounded">nodep</code> column as the implicit join condition.
            </p>

            <p className="mb-6">
                Some types of joins may be more efficient than others in terms of execution time and overall query performance. Use the appropriate type of join based on the database structure and query requirements.
            </p>
            <p className="mb-6">
                Generally, INNER JOIN and LEFT OUTER JOIN are often more efficient than RIGHT OUTER JOIN and FULL OUTER JOIN because they typically have more restrictive join conditions, limiting the number of rows to compare. However, this may vary depending on the database structure and query.
            </p>
            <p className="mb-6">
                Additionally, using subqueries or temporary tables can also affect query performance. It is recommended to use appropriate optimization methods such as indexing, database normalization, and judicious use of WHERE and GROUP BY clauses to improve query performance.
            </p>
        </div>
    );
};

export default SqlJoinsPage;
