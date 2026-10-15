SELECT *
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);

SELECT *
FROM employees
WHERE salary = (
    SELECT MAX(salary)
    FROM employees
);

SELECT *
FROM employees
WHERE salary = (
    SELECT MIN(salary)
    FROM employees
);

SELECT *
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
    WHERE department = 'IT'
);

SELECT *
FROM employees
WHERE department IN (
    SELECT department
    FROM employees
    WHERE department IN ('IT', 'HR')
);

SELECT *
FROM employees
WHERE department NOT IN (
    SELECT department
    FROM employees
    WHERE department = 'HR'
);

SELECT *
FROM departments d
WHERE EXISTS (
    SELECT 1
    FROM employees e
    WHERE e.department = d.department_name
);

SELECT *
FROM departments d
WHERE NOT EXISTS (
    SELECT 1
    FROM employees e
    WHERE e.department = d.department_name
);

SELECT *
FROM employees
WHERE salary < (
    SELECT MAX(salary)
    FROM employees
);

SELECT *
FROM employees e1
WHERE salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.department = e1.department
);