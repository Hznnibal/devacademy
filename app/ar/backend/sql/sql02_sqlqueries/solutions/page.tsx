import Link from "next/link";

const AnswersPage = () => {
    return (
        <div className="py-4 space-y-4">
            <h4 className="text-lg font-semibold">4. عرض عناوين جميع الموظفين</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT title FROM employee;</code>
            </pre>

            <h4 className="text-lg font-semibold">5. عرض القيم المختلفة لعناوين الموظفين</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT DISTINCT title FROM employee;</code>
            </pre>

            <h4 className="text-lg font-semibold">6. عرض الاسم ورقم الموظف ورقم القسم للموظفين الذين يحملون العنوان "سكرتير"</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, emp_id, nodep FROM employee WHERE title = 'Secretary';</code>
            </pre>

            <h4 className="text-lg font-semibold">7. عرض الاسم ورقم القسم للموظفين الذين رقم قسمهم أكبر من 40</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, nodep FROM employee WHERE nodep {`>`} 40;</code>
            </pre>

            <h4 className="text-lg font-semibold">8. عرض الاسم والاسم الأول للموظفين الذين يأتي اسمهم أبجديًا قبل الاسم الأول</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT first_name, last_name FROM employee WHERE last_name &gt; first_name;</code>
            </pre>

            <h4 className="text-lg font-semibold">9. عرض الاسم والراتب ورقم القسم للموظفين الذين يحملون العنوان "ممثل" ورقم قسمهم 35 والراتب أكبر من 20,000</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, salary, nodep FROM employee WHERE title = 'Representative' AND nodep = 35 AND salary &gt; 20000;</code>
            </pre>

            <h4 className="text-lg font-semibold">10. عرض الاسم والعنوان والراتب للموظفين الذين يحملون العنوان "ممثل" أو "رئيس"</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, title, salary FROM employee WHERE title = 'Representative' OR title = 'President';</code>
            </pre>

            <h4 className="text-lg font-semibold">11. عرض الاسم والعنوان ورقم القسم والراتب للموظفين في قسم 34 الذين يحملون العنوان "ممثل" أو "سكرتير"</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, title, nodep, salary FROM employee WHERE nodep = 34 AND (title = 'Representative' OR title = 'Secretary');</code>
            </pre>

            <h4 className="text-lg font-semibold">12. عرض الاسم والعنوان ورقم القسم والراتب للموظفين الذين يحملون العنوان "ممثل" أو "سكرتير" في قسم 34</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, title, nodep, salary FROM employee WHERE title IN ('Representative', 'Secretary') AND nodep = 34;</code>
            </pre>

            <h4 className="text-lg font-semibold">13. عرض الاسم والراتب للموظفين الذين راتبهم بين 20,000 و30,000</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, salary FROM employee WHERE salary BETWEEN 20000 AND 30000;</code>
            </pre>

            <h4 className="text-lg font-semibold">15. عرض اسم الموظفين الذين يبدأ اسمهم بالحرف "H"</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name FROM employee WHERE last_name LIKE 'H%';</code>
            </pre>

            <h4 className="text-lg font-semibold">16. عرض اسم الموظفين الذين ينتهي اسمهم بالحرف "n"</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name FROM employee WHERE last_name LIKE '%n';</code>
            </pre>

            <h4 className="text-lg font-semibold">17. عرض اسم الموظفين الذين يحتوي اسمهم على الحرف "u" في المركز الثالث</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name FROM employee WHERE last_name LIKE '__u%';</code>
            </pre>

            <h4 className="text-lg font-semibold">18. عرض الراتب والاسم للموظفين من قسم 41 مرتبين حسب الراتب تصاعديًا</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT salary, last_name FROM employee WHERE nodep = 41 ORDER BY salary ASC;</code>
            </pre>

            <h4 className="text-lg font-semibold">19. عرض الراتب والاسم للموظفين من قسم 41 مرتبين حسب الراتب تنازليًا</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT salary, last_name FROM employee WHERE nodep = 41 ORDER BY salary DESC;</code>
            </pre>

            <h4 className="text-lg font-semibold">20. عرض العنوان والراتب والاسم للموظفين مرتبين حسب العنوان تصاعديًا والراتب تنازليًا</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT title, salary, last_name FROM employee ORDER BY title ASC, salary DESC;</code>
            </pre>

            <h4 className="text-lg font-semibold">21. عرض معدل العمولة والراتب والاسم للموظفين مرتبين حسب معدل العمولة تصاعديًا</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT commission_rate, salary, last_name FROM employee ORDER BY commission_rate ASC;</code>
            </pre>

            <h4 className="text-lg font-semibold">22. عرض الاسم والراتب ومعدل العمولة والعنوان للموظفين الذين لا يوجد لديهم معدل عمولة</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, salary, commission_rate, title FROM employee WHERE commission_rate IS NULL;</code>
            </pre>

            <h4 className="text-lg font-semibold">23. عرض الاسم والراتب ومعدل العمولة والعنوان للموظفين الذين لديهم معدل عمولة</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, salary, commission_rate, title FROM employee WHERE commission_rate IS NOT NULL;</code>
            </pre>

            <h4 className="text-lg font-semibold">24. عرض الاسم والراتب ومعدل العمولة والعنوان للموظفين الذين لديهم معدل عمولة أقل من 15</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, salary, commission_rate, title FROM employee WHERE commission_rate {`<`} 15;</code>
            </pre>

            <h4 className="text-lg font-semibold">25. عرض الاسم والراتب ومعدل العمولة والعنوان للموظفين الذين لديهم معدل عمولة أكبر من 15</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, salary, commission_rate, title FROM employee WHERE commission_rate {`>`} 15;</code>
            </pre>

            <h4 className="text-lg font-semibold">26. عرض الاسم والراتب ومعدل العمولة والعمولة للموظفين الذين لديهم معدل عمولة (يتم حساب العمولة بضرب الراتب في معدل العمولة)</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, salary, commission_rate, (salary * commission_rate/ 100) AS Commission FROM employee WHERE commission_rate IS NOT NULL;</code>
            </pre>

            <h4 className="text-lg font-semibold">27. عرض الاسم والراتب ومعدل العمولة والعمولة للموظفين الذين لديهم معدل عمولة، مرتبين حسب معدل العمولة تصاعديًا</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, salary, commission_rate, (salary * commission_rate/ 100) AS Commission FROM employee WHERE commission_rate IS NOT NULL ORDER BY commission_rate ASC;</code>
            </pre>

            <h4 className="text-lg font-semibold">28. عرض الاسم والاسم الأول (مركب) للموظفين (إعادة تسمية الأعمدة)</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employee;</code>
            </pre>

            <h4 className="text-lg font-semibold">29. عرض أول 5 حروف من اسم الموظف</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT SUBSTRING(last_name, 1, 5) AS first_5_letters FROM employee;</code>
            </pre>

            <h4 className="text-lg font-semibold">30. عرض الاسم وموقع حرف "r" في اسم الموظف</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, LOCATE('r', last_name) AS letter_position FROM employee;</code>
            </pre>

            <h4 className="text-lg font-semibold">31. عرض الاسم والاسم الكبير والاسم الصغير للموظف الذي اسمه "young"</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, UPPER(last_name) AS uppercase_name, LOWER(last_name) AS lowercase_name FROM employee WHERE last_name = 'young';</code>
            </pre>

            <h4 className="text-lg font-semibold">32. عرض الاسم وعدد الحروف في اسم الموظف</h4>
            <pre className="bg-black text-blue-50 p-4 rounded-md">
                <code className="text-sm">SELECT last_name, LENGTH(last_name) AS name_length FROM employee;</code>
            </pre>
            <div className="text-center mt-8">
                <Link href="../sql02_sqlqueries" className="text-blue-600 underline text-lg">
                    العودة إلى التمارين
                </Link>
            </div>
        </div>
    );
};

export default AnswersPage;
