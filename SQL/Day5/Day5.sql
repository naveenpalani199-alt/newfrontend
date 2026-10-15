use students;

CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(50),
    trainer_name VARCHAR(50)
);

CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50),
    course_id INT,
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

show tables;

INSERT INTO Courses VALUES
(101, 'Java', 'Ravi'),
(102, 'Python', 'Karthik');

INSERT INTO Students VALUES
(1, 'Arun', 101),
(2, 'Bala', 101),
(3, 'Kumar', 102),
(4, 'Priya', 101),
(5, 'Divya', 102);

CREATE TABLE DEPARTMENTS (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(50)
);

INSERT INTO DEPARTMENTS VALUES
(10, 'IT'),
(20, 'HR'),
(30, 'Finance'),
(40, 'Marketing');

CREATE TABLE EMPLOYEE (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(50),
    salary INT,
    department_id INT
);

INSERT INTO EMPLOYEE VALUES
(1, 'Arun', 45000, 10),
(2, 'Bala', 35000, 20),
(3, 'Kumar', 55000, 10),
(4, 'Priya', 40000, 30);

SELECT 
    e.employee_id,
    e.employee_name,
    e.salary,
    d.department_name
FROM EMPLOYEE e
INNER JOIN DEPARTMENTS d
ON e.department_id = d.department_id;