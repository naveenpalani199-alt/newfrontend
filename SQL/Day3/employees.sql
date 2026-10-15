USE students;

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    age INT,
    department VARCHAR(50),
    salary DECIMAL(10,2),
    city VARCHAR(50)
);

INSERT INTO employees (name, age, department, salary, city)
VALUES
('Arun', 25, 'IT', 50000, 'Chennai'),
('Ravi', 28, 'HR', 40000, 'Madurai'),
('Vijay', 30, 'IT', 55000, 'Chennai'),
('Priya', 26, 'CSE', 35000, 'Coimbatore'),
('Kavin', 29, 'Finance', 45000, 'Salem'),
('Anu', 24, 'IT', 38000, 'Chennai'),
('Divya', 27, 'HR', 48000, NULL);

SELECT * FROM employees;

USE students;
SELECT * FROM employees;

SELECT name, salary, city
FROM employees;

SELECT *
FROM employees
WHERE city = 'Chennai';

SELECT *
FROM employees
WHERE salary > 45000;

SELECT *
FROM employees
WHERE age < 28;

SELECT * FROM  employees WHERE salary >= 40000;

SELECT *
FROM employees
WHERE department != 'HR';

SELECT *
FROM employees
WHERE department = 'IT'
AND city = 'Chennai';

SELECT *
FROM employees
WHERE city = 'Chennai'
OR city = 'Madurai';

SELECT *
FROM employees
WHERE salary > 40000 AND age < 30;

SELECT *
FROM employees
WHERE city IN ('Chennai', 'Madurai', 'Salem');

SELECT *
FROM employees
WHERE department NOT IN ('IT', 'HR');

SELECT * FROM employees WHERE city IS NULL;

SELECT * FROM employees WHERE city IS NOT NULL;

SELECT *
FROM employees
WHERE salary BETWEEN 35000 AND 50000;

SELECT * FROM employees WHERE age between 25 AND 30 AND city = 'chennai';

SELECT *
FROM employees
WHERE name LIKE 'A%';

SELECT *
FROM employees
WHERE name LIKE '%vi%';

SELECT DISTINCT department
FROM employees;

SELECT
    name AS employee_name,
    department AS department_name,
    salary AS monthly_salary
FROM employees;
