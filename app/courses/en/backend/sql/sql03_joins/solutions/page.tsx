import { CodeBlock } from '@/components/CodeBlock/code-block';
import Link from 'next/link';
import React from 'react';

const SqlJoinsQuestions: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Joins - Questions and Answers</h1>

            <h4 className="text-sm ml-12 font-semibold">
                1. Find the first names of employees and the region number of their department.
            </h4>
            <CodeBlock code={`SELECT e.first_name, d.region_id
FROM EMPLOYEE e
JOIN DEPT d ON e.nodep = d.nodept;`} />

            <h4 className="text-sm ml-12 font-semibold">
                2. Find the department number, department name, and employee names sorted by department number .
            </h4>
            <CodeBlock code={`SELECT d.nodept, d.name , e.first_name
FROM DEPT d
JOIN EMPLOYEE e ON d.nodept = e.nodep
ORDER BY d.nodept;`} />

            <h4 className="text-sm ml-12 font-semibold">
                3. Find the names of employees in the Distribution department.
            </h4>
            <CodeBlock code={`SELECT e.first_name
FROM EMPLOYEE e
JOIN DEPT d ON e.nodep = d.nodept
WHERE d.name = 'Distribution';`} />

            <h2 className="text-2xl font-semibold mb-4">Auto-Joins</h2>
            <h4 className="text-sm ml-12 font-semibold">
                4. Find the names and salaries of employees who earn more than their manager, as well as the names and salaries of their managers.
            </h4>
            <CodeBlock code={`SELECT e1.first_name AS employee_name, e1.salary AS employee_salary,
       e2.first_name AS manager_name, e2.salary AS manager_salary
FROM EMPLOYEE e1
JOIN EMPLOYEE e2 ON e1.nosup = e2.emp_id
WHERE e1.salary > e2.salary;`} />

            <h2 className="text-2xl font-semibold mb-4">Subqueries</h2>
            <h4 className="text-sm ml-12 font-semibold">
                5. Find the names and titles of employees who have the same title as <strong>taylor</strong>.
            </h4>
            <CodeBlock code={`SELECT e.first_name, e.title
FROM EMPLOYEE e
WHERE e.title = (SELECT title
                 FROM EMPLOYEE
                 WHERE last_name = 'Taylor');`} />

            <h4 className="text-sm ml-12 font-semibold">
                6. Find the names, salaries, and department numbers of employees who earn more than any one employee in department 31, sorted by department number and salary.
            </h4>
            <CodeBlock code={`SELECT e.first_name, e.salary, e.nodep
FROM EMPLOYEE e
WHERE e.salary > ANY (SELECT salary
                      FROM EMPLOYEE
                      WHERE nodep = 31)
ORDER BY e.nodep, e.salary;`} />

            <h4 className="text-sm ml-12 font-semibold">
                7. Find the names, salaries, and department numbers of employees who earn more than all employees in department 31, sorted by department number and salary.
            </h4>
            <CodeBlock code={`SELECT e.first_name, e.salary, e.nodep
FROM EMPLOYEE e
WHERE e.salary > ALL (SELECT salary
                      FROM EMPLOYEE
                      WHERE nodep = 31)
ORDER BY e.nodep, e.salary;`} />

            <h4 className="text-sm ml-12 font-semibold">
                8. Find the names and titles of employees in department 31 who have a title that also exists in department 32.
            </h4>
            <CodeBlock code={`SELECT e1.name, e1.title
FROM employee e1
WHERE e1.nodep = 31
AND e1.title NOT IN (
    SELECT title
    FROM employee
    WHERE nodep = 32
);`} />

            <h4 className="text-sm ml-12 font-semibold">
                9. Find the names and titles of employees in department 31 who have a title that does not exist in department 32
            </h4>
            <CodeBlock code={`SELECT e1.last_name, e1.title
FROM employee e1
WHERE e1.nodep = 31
AND e1.title NOT IN (
    SELECT title
    FROM employee
    WHERE nodep = 32
);`} />

            <h4 className="text-sm ml-12 font-semibold">
                10. Find the names, titles, and salaries of employees who have the same title and salary as Young.
            </h4>
            <CodeBlock code={`SELECT e.last_name, e.title, e.salary
FROM employee e
WHERE (e.title, e.salary) = (
    SELECT title, salary
    FROM employee
    WHERE last_name = 'Young'
);`} />

            <h4 className="text-sm ml-12 font-semibold">
                11. Calculate the number of employees for each title.
            </h4>
            <CodeBlock code={`SELECT title, COUNT(*) AS employee_count
FROM employee
GROUP BY title;`} />

            <h4 className="text-sm ml-12 font-semibold">
                12. Calculate the average salaries and their total by region.
            </h4>
            <CodeBlock code={`SELECT d.region_id, AVG(e.salary) AS avg_salary, SUM(e.salary) AS total_salary
FROM employee e
JOIN dept d ON e.nodep = d.nodept
GROUP BY d.region_id;
`} />

            <h4 className="text-sm ml-12 font-semibold">
                13. Display the department numbers with at least 3 employees.
            </h4>
            <CodeBlock code={`SELECT nodep
FROM employee
GROUP BY nodep
HAVING COUNT(*) >= 3;`} />

            <h4 className="text-sm ml-12 font-semibold">
                14. Display the initials of names that belong to at least 3 employees.
            </h4>
            <CodeBlock code={`SELECT SUBSTRING(last_name FROM 1 FOR 1) AS initials, COUNT(*)
FROM employee
GROUP BY initials
HAVING COUNT(*) >= 3;`} />

            <h4 className="text-sm ml-12 font-semibold">
                15. Find the maximum and minimum salaries among all employees, and calculate the difference between them.
            </h4>
            <CodeBlock code={`SELECT MAX(salary) AS max_salary, MIN(salary) AS min_salary, 
    MAX(salary) - MIN(salary) AS salary_difference
FROM employee;`} />

            <h4 className="text-sm ml-12 font-semibold">
                16. Find the number of unique titles.
            </h4>
            <CodeBlock code={`SELECT COUNT(DISTINCT title) AS unique_titles_count
FROM employee;`} />

            <h4 className="text-sm ml-12 font-semibold">
                17. For each title, count the number of employees holding that title.
            </h4>
            <CodeBlock code={`SELECT title, COUNT(*) AS employee_count
FROM employee
GROUP BY title;`} />

            <h4 className="text-sm ml-12 font-semibold">
                18. For each department name, display the department name and the number of employees in that department.
            </h4>
            <CodeBlock code={`SELECT d.name, COUNT(e.emp_id) AS employee_count
FROM dept d
LEFT JOIN employee e ON d.nodept = e.nodep
GROUP BY d.name;`} />

            <h4 className="text-sm ml-12 font-semibold">
                19. Find the titles and the average salaries for each title where the average salary is greater than the average salary of the "Representatives."
            </h4>
            <CodeBlock code={`SELECT title, AVG(salary) AS avg_salary
FROM employee
GROUP BY title
HAVING AVG(salary) > (
    SELECT AVG(salary)
    FROM employee
    WHERE title = 'Representative'
);`} />

            <h4 className="text-sm ml-12 font-semibold">
                20. Find the number of recorded salaries and the number of recorded commission rates.
            </h4>
            <CodeBlock code={`SELECT
    COUNT(salary) AS recorded_salaries,
    COUNT(commission_rate) AS recorded_commission_rates
FROM employee;
`} />

            <div className="text-center mt-8">
                <Link href="../sql03_joins" className="text-blue-600 underline text-lg">
                    View solutions
                </Link>
            </div>
        </div>
    );
};

export default SqlJoinsQuestions;
