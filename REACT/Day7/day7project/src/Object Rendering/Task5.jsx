const Task5 = () => {
  const employee = {
    name: "Rahul",
    role: "Frontend Developer",
    salary: 30000,
    location: "Chennai"
  };

  return (
    <>
      <div className="bg-amber-800 p-3">
        <h2>Employee Details</h2>

        <p>Name: {employee.name}</p>
        <p>Role: {employee.role}</p>
        <p>Salary: ₹{employee.salary}</p>
        <p>Location: {employee.location}</p>
      </div>
    </>
  );
};

export default Task5;