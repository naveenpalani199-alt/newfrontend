const Task9 = () => {
  const employees = [
    {
      id: 1,
      name: "Naveen",
      department: "Frontend",
      salary: 30000
    },
    {
      id: 2,
      name: "Rahul",
      department: "Backend",
      salary: 35000
    },
    {
      id: 3,
      name: "Arun",
      department: "Testing",
      salary: 28000
    },
    {
      id: 4,
      name: "Karthik",
      department: "UI/UX",
      salary: 32000
    }
  ];

  return (
    <>
      <div>
        <h2>Employee Details</h2>

        {employees.map((employee) => (
          <div
            key={employee.id}
            className="bg-red-400 p-4 m-3 rounded-xl"
          >
            <p>ID: {employee.id}</p>
            <p>Name: {employee.name}</p>
            <p>Department: {employee.department}</p>
            <p>Salary: ₹{employee.salary}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Task9;