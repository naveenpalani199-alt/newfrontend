import { useState } from "react";

const Task2 = () => {
  const [employee, setEmployee] = useState({
    name: "",
    id: "",
    department: "",
    role: "",
    salary: ""
  });

  const [submittedEmployee, setSubmittedEmployee] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEmployee({
      ...employee,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedEmployee(employee);

    setEmployee({
      name: "",
      id: "",
      department: "",
      role: "",
      salary: ""
    });
  };

  return (
    <>
      <div>
        <h2>Employee Details Form</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            placeholder="Employee Name"
          />

          <br /><br />

          <input
            type="text"
            name="id"
            value={employee.id}
            onChange={handleChange}
            placeholder="Employee ID"
          />

          <br /><br />

          <input
            type="text"
            name="department"
            value={employee.department}
            onChange={handleChange}
            placeholder="Department"
          />

          <br /><br />

          <input
            type="text"
            name="role"
            value={employee.role}
            onChange={handleChange}
            placeholder="Role"
          />

          <br /><br />

          <input
            type="number"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
            placeholder="Salary"
          />

          <br /><br />

          <button type="submit">Submit</button>
        </form>

        {submittedEmployee && (
          <div>
            <h2>Employee Details</h2>

            <p>Name: {submittedEmployee.name}</p>
            <p>ID: {submittedEmployee.id}</p>
            <p>Department: {submittedEmployee.department}</p>
            <p>Role: {submittedEmployee.role}</p>
            <p>Salary: ₹{submittedEmployee.salary}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Task2