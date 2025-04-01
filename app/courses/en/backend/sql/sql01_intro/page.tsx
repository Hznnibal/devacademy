import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const SQLIntroduction: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Introduction to SQL</h1>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">Why Learn SQL?</h2>
                <div className="border-b border-gray-300 mb-6" />
                <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
                    <li>Manage and manipulate large amounts of data effectively.</li>
                    <li>Work with relational databases used in web development, data analysis, and more.</li>
                    <li>Query data to gain insights for decision-making.</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">Basic SQL Commands</h2>
                <div className="border-b border-gray-300 mb-6" />

                <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">1. SELECT</h3>
                    <p className="text-lg leading-relaxed mb-4">
                        The <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">SELECT</code> statement is used to query data from a database.
                    </p>
                    <CodeBlock code={`SELECT * FROM employees;`} />
                </section>

                <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">2. INSERT</h3>
                    <p className="text-lg leading-relaxed mb-4">
                        The <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">INSERT</code> statement adds new data to a table.
                    </p>
                    <CodeBlock code={`INSERT INTO employees (name, position) VALUES ('John Doe', 'Developer');`} />
                </section>

                <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">3. UPDATE</h3>
                    <p className="text-lg leading-relaxed mb-4">
                        The <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">UPDATE</code> statement modifies existing data.
                    </p>
                    <CodeBlock code={`UPDATE employees SET position = 'Senior Developer' WHERE name = 'John Doe';`} />
                </section >

                <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">4. DELETE</h3>
                    <p className="text-lg leading-relaxed mb-4">
                        The <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">DELETE</code> statement removes data from a table.
                    </p>
                    <CodeBlock code={`DELETE FROM employees WHERE name = 'John Doe';`} />
                </section >
            </section >

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">Advantages of SQL</h2>
                <div className="border-b border-gray-300 mb-6" />
                <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
                    <li>SQL is widely used and supported by many database systems, such as MySQL, PostgreSQL, and SQLite.</li>
                    <li>It is simple to learn yet powerful for complex queries.</li>
                    <li>It facilitates efficient management of structured data.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Next Steps</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Now that you have a basic understanding of SQL, try experimenting with these commands using a database.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Start with creating a table, inserting some data, and then querying it using <code className="text-red-600 bg-gray-200 px-1 py-0.5 rounded">SELECT</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    For more advanced learning, explore topics like <strong>joins</strong>, <strong>indexes</strong>, and <strong>transactions</strong>.
                </p>
            </section>

            <footer className="mt-6 pt-4 border-t border-gray-300 text-center text-gray-500">
                <p className="text-lg leading-relaxed mb-4">Happy Learning!</p>
            </footer>
        </div >
    );
};

export default SQLIntroduction;
