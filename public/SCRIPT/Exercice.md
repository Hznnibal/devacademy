-- SQL Practice Questions:

-- 1. Basic Queries
-- Display all information about employees
SELECT \* FROM employees;

-- 2. Column Selection
-- Display department name and budget
SELECT department_name, budget FROM departments;

-- 3. Filtering
-- Display employees with salary greater than 70000
SELECT first_name, last_name, salary FROM employees WHERE salary > 70000;

-- 4. Sorting
-- Display employees ordered by hire date
SELECT first_name, last_name, hire_date FROM employees ORDER BY hire_date;

-- 5. String Functions
-- Concatenate first and last names
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employees;

-- 6. Numeric Functions
-- Calculate average salary by department
SELECT nodep, AVG(salary) as avg_salary FROM employees GROUP BY nodep;

-- 7. Date Functions
-- Display employees hired in 2020
SELECT \* FROM employees WHERE YEAR(hire_date) = 2020;

-- 8. Joins
-- Display employee names with their department names
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
JOIN departments d ON e.nodep = d.nodep;

-- 9. Aggregation
-- Count employees in each department
SELECT d.department_name, COUNT(e.employee_id) as employee_count
FROM departments d
LEFT JOIN employees e ON d.nodep = e.nodep
GROUP BY d.department_name;

-- 10. Subqueries
-- Find employees who earn more than average salary
SELECT first_name, last_name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- Additional practice questions are available in the exercises section of the application
