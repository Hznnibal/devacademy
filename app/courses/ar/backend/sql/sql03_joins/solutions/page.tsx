import { CodeBlock } from '@/components/CodeBlock/code-block';
import Link from 'next/link';
import React from 'react';

const SqlJoinsQuestions: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">الانضمامات - الأسئلة والأجوبة</h1>

            <h4 className="text-sm ml-12 font-semibold">
                1. ابحث عن الأسماء الأولى للموظفين ورقم المنطقة لقسمهم.
            </h4>
            <CodeBlock code={`SELECT e.first_name, d.region_id
FROM EMPLOYEE e
JOIN DEPT d ON e.nodep = d.nodept;`} />

            <h4 className="text-sm ml-12 font-semibold">
                2. ابحث عن رقم القسم، اسم القسم، وأسماء الموظفين مرتبة حسب رقم القسم.
            </h4>
            <CodeBlock code={`SELECT d.nodept, d.name , e.first_name
FROM DEPT d
JOIN EMPLOYEE e ON d.nodept = e.nodep
ORDER BY d.nodept;`} />

            <h4 className="text-sm ml-12 font-semibold">
                3. ابحث عن أسماء الموظفين في قسم التوزيع.
            </h4>
            <CodeBlock code={`SELECT e.first_name
FROM EMPLOYEE e
JOIN DEPT d ON e.nodep = d.nodept
WHERE d.name = 'Distribution';`} />

            <h2 className="text-2xl font-semibold mb-4">الانضمامات الذاتية</h2>
            <h4 className="text-sm ml-12 font-semibold">
                4. ابحث عن أسماء ورواتب الموظفين الذين يتقاضون أكثر من مديريهم، بالإضافة إلى أسماء ورواتب مديريهم.
            </h4>
            <CodeBlock code={`SELECT e1.first_name AS employee_name, e1.salary AS employee_salary,
       e2.first_name AS manager_name, e2.salary AS manager_salary
FROM EMPLOYEE e1
JOIN EMPLOYEE e2 ON e1.nosup = e2.emp_id
WHERE e1.salary > e2.salary;`} />

            <h2 className="text-2xl font-semibold mb-4">الاستعلامات الفرعية</h2>
            <h4 className="text-sm ml-12 font-semibold">
                5. ابحث عن أسماء وألقاب الموظفين الذين لديهم نفس اللقب مثل <strong>تايلور</strong>.
            </h4>
            <CodeBlock code={`SELECT e.first_name, e.title
FROM EMPLOYEE e
WHERE e.title = (SELECT title
                 FROM EMPLOYEE
                 WHERE last_name = 'Taylor');`} />

            <h4 className="text-sm ml-12 font-semibold">
                6. ابحث عن الأسماء، الرواتب، وأرقام الأقسام للموظفين الذين يتقاضون أكثر من أي موظف في القسم 31، مرتبة حسب رقم القسم والراتب.
            </h4>
            <CodeBlock code={`SELECT e.first_name, e.salary, e.nodep
FROM EMPLOYEE e
WHERE e.salary > ANY (SELECT salary
                      FROM EMPLOYEE
                      WHERE nodep = 31)
ORDER BY e.nodep, e.salary;`} />

            <h4 className="text-sm ml-12 font-semibold">
                7. ابحث عن الأسماء، الرواتب، وأرقام الأقسام للموظفين الذين يتقاضون أكثر من جميع الموظفين في القسم 31، مرتبة حسب رقم القسم والراتب.
            </h4>
            <CodeBlock code={`SELECT e.first_name, e.salary, e.nodep
FROM EMPLOYEE e
WHERE e.salary > ALL (SELECT salary
                      FROM EMPLOYEE
                      WHERE nodep = 31)
ORDER BY e.nodep, e.salary;`} />

            <h4 className="text-sm ml-12 font-semibold">
                8. ابحث عن الأسماء والألقاب للموظفين في القسم 31 الذين لديهم لقب يوجد أيضًا في القسم 32.
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
                9. ابحث عن الأسماء والألقاب للموظفين في القسم 31 الذين لديهم لقب لا يوجد في القسم 32.
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
                10. ابحث عن الأسماء، الألقاب، والرواتب للموظفين الذين لديهم نفس اللقب والراتب مثل يونغ.
            </h4>
            <CodeBlock code={`SELECT e.last_name, e.title, e.salary
FROM employee e
WHERE (e.title, e.salary) = (
    SELECT title, salary
    FROM employee
    WHERE last_name = 'Young'
);`} />


            <h4 className="text-sm ml-12 font-semibold">
                11. احسب عدد الموظفين لكل لقب.
            </h4>
            <CodeBlock code={`SELECT title, COUNT(*) AS employee_count
FROM employee
GROUP BY title;`} />

            <h4 className="text-sm ml-12 font-semibold">
                12. احسب الرواتب المتوسطة وإجماليها حسب المنطقة.
            </h4>
            <CodeBlock code={`SELECT d.region_id, AVG(e.salary) AS avg_salary, SUM(e.salary) AS total_salary
FROM employee e
JOIN dept d ON e.nodep = d.nodept
GROUP BY d.region_id;
`} />

            <h4 className="text-sm ml-12 font-semibold">
                13. اعرض أرقام الأقسام التي تحتوي على 3 موظفين على الأقل.
            </h4>
            <CodeBlock code={`SELECT nodep
FROM employee
GROUP BY nodep
HAVING COUNT(*) >= 3;`} />

            <h4 className="text-sm ml-12 font-semibold">
                14. اعرض الحروف الأولى من الأسماء التي تنتمي إلى 3 موظفين على الأقل.
            </h4>
            <CodeBlock code={`SELECT SUBSTRING(last_name FROM 1 FOR 1) AS initials, COUNT(*)
FROM employee
GROUP BY initials
HAVING COUNT(*) >= 3;`} />

            <h4 className="text-sm ml-12 font-semibold">
                15. ابحث عن أعلى وأدنى الرواتب بين جميع الموظفين، واحسب الفرق بينهما.
            </h4>
            <CodeBlock code={`SELECT MAX(salary) AS max_salary, MIN(salary) AS min_salary, 
    MAX(salary) - MIN(salary) AS salary_difference
FROM employee;`} />

            <h4 className="text-sm ml-12 font-semibold">
                16. ابحث عن عدد الألقاب الفريدة.
            </h4>
            <CodeBlock code={`SELECT COUNT(DISTINCT title) AS unique_titles_count
FROM employee;`} />

            <h4 className="text-sm ml-12 font-semibold">
                17. لكل لقب، احسب عدد الموظفين الذين يحملون ذلك اللقب.
            </h4>
            <CodeBlock code={`SELECT title, COUNT(*) AS employee_count
FROM employee
GROUP BY title;`} />

            <h4 className="text-sm ml-12 font-semibold">
                18. لكل اسم قسم، اعرض اسم القسم وعدد الموظفين في ذلك القسم.
            </h4>
            <CodeBlock code={`SELECT d.name, COUNT(e.emp_id) AS employee_count
FROM dept d
LEFT JOIN employee e ON d.nodept = e.nodep
GROUP BY d.name;`} />

            <h4 className="text-sm ml-12 font-semibold">
                19. ابحث عن الألقاب والرواتب المتوسطة لكل لقب حيث الرواتب المتوسطة أكبر من الراتب المتوسط لـ "الممثلين".
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
                20. ابحث عن عدد الرواتب المسجلة وعدد معدلات العمولة المسجلة.
            </h4>
            <CodeBlock code={`SELECT
    COUNT(salary) AS recorded_salaries,
    COUNT(commission_rate) AS recorded_commission_rates
FROM employee;
`} />

            <div className="text-center mt-8">
                <Link href="../sql03_joins" className="text-blue-600 underline text-lg">
                    عرض الحلول
                </Link>
            </div>

        </div>
    );
};

export default SqlJoinsQuestions;
