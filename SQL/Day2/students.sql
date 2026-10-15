create database students;
use students;


CREATE TABLE Student (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    age INT,
    department VARCHAR(50),
    city VARCHAR(50),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO Student (name, age, department, city)
VALUES ('Ravi', 22, 'CSE', 'Chennai');

INSERT INTO Student (name, age, department, city)
VALUES
('Arun', 23, 'IT', 'Madurai'),
('Bala', 21, 'ECE', 'Chennai'),
('Priya', 24, 'CSE', 'Coimbatore');

UPDATE Student
SET city = 'Bangalore'
WHERE id = 2;

UPDATE Student
SET age = 25
WHERE id = 3;

UPDATE Student
SET age = 24,
    department = 'IT',
    city = 'Chennai'
WHERE id = 1;

UPDATE Student
SET city = 'Madurai'
WHERE department = 'CSE';

DELETE FROM Student
WHERE id = 4;

DELETE FROM Student
WHERE city = 'Salem';

SELECT * FROM Student
WHERE id = 2;

UPDATE Student
SET city = 'Chennai'
WHERE id = 2;

SELECT * FROM Student
WHERE id = 2;

INSERT INTO Student (name, age, department, city)
VALUES ('Karthik', 22, 'CSE', 'Chennai');

INSERT INTO Student (name, age, department, city)
VALUES
('Suresh', 23, 'IT', 'Madurai'),
('Divya', 21, 'ECE', 'Salem');

SET SQL_SAFE_UPDATES = 0;

UPDATE Student
SET city = 'Coimbatore'
WHERE name = 'Karthik';

UPDATE Student
SET age = 25,
    department = 'CSE'
WHERE name = 'Suresh';

DELETE FROM Student
WHERE name = 'Divya';

SELECT * FROM Student;

SET SQL_SAFE_UPDATES = 1;

