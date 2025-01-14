import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const DmlDataUpdatePage: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">DML: Data Update</h1>
            <p className="mb-6">
                To modify data in a database, the user has three SQL statements at their disposal:
                <code className="block  px-2 py-1 rounded mt-2">INSERT, UPDATE, DELETE</code>
            </p>

            <h2 className="text-2xl font-semibold mb-4">INSERT</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-6">
                The <strong>INSERT</strong> statement is used as follows:
            </p>
            <CodeBlock code={`INSERT INTO table_name (column_names)
VALUES (value_list);`} />
            <h3 className="text-xl font-medium mb-3">Examples:</h3>
            <p className="text-lg leading-relaxed mb-4">
                Insert an employee with ID <code>00140</code>, last name <code>REEVES</code>, first name <code>TEDDY</code>, in department <code>A00</code>, with a salary of <code>2100</code>:
            </p>
            <CodeBlock code={`INSERT INTO employee (emp_id, last_name, first_name, dept, salary)
VALUES (00140, 'REEVES', 'TEDDY', 'A00', 2100);`} />
            <p className="mb-6">
                If the salary column is not specified, it will take a <code>NULL</code> value unless otherwise restricted:
            </p>
            <CodeBlock code={`INSERT INTO employee (emp_id, last_name, first_name, dept)
VALUES (00140, 'REEVES', 'TEDDY', 'A00');`} />
            <p className="mb-6">
                In this case, the <code>salary</code> column will have a <code>NULL</code> value.
            </p>
            <h3 className="text-xl font-medium mb-3">Inserting Multiple Rows</h3>
            <p className="mb-6">
                Multiple rows can be inserted in a single statement as shown below:
            </p>
            <CodeBlock code={`INSERT INTO employee (emp_id, last_name, first_name, dept, salary)
VALUES (00140, 'REEVES', 'HUBERT', 'A00', 2100),
(00150, 'SMITH', 'JOHN', 'B00', 1800);`} />

            <h3 className="text-xl font-medium mb-3">AUTO_INCREMENT Columns</h3>
            <p className="mb-6">
                A column with the <code>AUTO_INCREMENT</code> property can be included in the column list. If its value is not specified, the system will automatically generate a new value.
            </p>

            <h2 className="text-2xl font-semibold mb-4">UPDATE</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-6">
                The <strong>UPDATE</strong> statement is used to modify existing rows in a table:
            </p>
            <CodeBlock code={`UPDATE table_name
SET column_1 = value_1, column_2 = value_2
WHERE condition;`} />
            <p className="mb-6">
                - <strong>SET</strong> specifies the columns and their new values or expressions.
                - <strong>WHERE</strong> is an optional condition to specify which rows to update.
            </p>
            <p className="mb-6">
                If the <code>WHERE</code> clause is omitted, the entire table will be updated.
            </p>

            <h3 className="text-xl font-medium mb-3">Examples:</h3>
            <p className="text-lg leading-relaxed mb-4">
                Increase the salary of all employees by 20%:
            </p>
            <CodeBlock code={`UPDATE employee
SET salary = salary * 1.2;`} />
            <p className="mb-6">
                Increase the salary of employee with ID <code>00040</code> by 20%:
            </p>
            <CodeBlock code={`UPDATE employee
SET salary = salary * 1.2
WHERE emp_id = 00040;`} />
            <p className="mb-6">
                Increase the salary of employee with ID <code>00040</code> by 20% and change their department to <code>A40</code>:
            </p>
            <CodeBlock code={`UPDATE employee
SET salary = salary * 1.2, dept = 'A40'
WHERE emp_id = 00040;`} />

            <h2 className="text-2xl font-semibold mb-4">DELETE</h2><div className="border-b border-gray-300 mb-6" />
            <p className="mb-6">
                The <strong>DELETE</strong> statement is used to remove one or more rows from a table:
            </p>
            <CodeBlock code={`DELETE
FROM table_name
WHERE condition;`} />
            <p className="mb-6">
                - <strong>FROM</strong> specifies the table where rows will be deleted. <br />
                - <strong>WHERE</strong> specifies the condition for selecting the rows to delete (optional).
            </p>
            <p className="mb-6">
                If the <code>WHERE</code> clause is omitted, all rows will be deleted.
            </p>

            <h3 className="text-xl font-medium mb-3">Examples:</h3>
            <p className="text-lg leading-relaxed mb-4">
                Delete all employees from the <code>employee</code> table:
            </p>
            <CodeBlock code={`DELETE FROM employee;`} />
            <p className="mb-6">
                Delete employees from department <code>E21</code>:
            </p>
            <CodeBlock code={`DELETE FROM employee
WHERE dept = 'E21';`} />

            <h3 className="mb-6 font-bold text-xl">
                Revisit your database and perform the following exercises:
            </h3>

            <h4 className="text-lg font-bold mt-4 mb-2">For the INSERT statement:</h4>
            <ul className="text-base ml-12 font-semibold">
                <li>1. Add three employees to the database with data of your choice.</li>
                <li>2. Add a new department.</li>
                <li>3. Use a SELECT query to verify the insertion.</li>
            </ul>

            <h4 className="text-lg font-bold mt-4 mb-2">For the UPDATE statement:</h4>
            <ul className="text-base ml-12 font-semibold">
                <li>4. Increase the salary of employee 17 by 10%.</li>
                <li>5. Change the name of department 45 to 'Logistics'.</li>
            </ul>

            <h4 className="text-lg font-bold mt-4 mb-2">For the DELETE statement:</h4>
            <ul className="text-base ml-12 font-semibold">
                <li>6. Delete the last employee you inserted earlier.</li>
            </ul>
        </div >
    );
};

export default DmlDataUpdatePage;
