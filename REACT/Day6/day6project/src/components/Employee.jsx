


const Employee = ({ employee }) => {
  return (
    <>
      <div className="bg-purple-400 text-black p-5 rounded-2xl">
        <h2>Employee Details</h2>

        <p>Name: {employee.name}</p>
        <p>Role: {employee.role}</p>
        <p>Salary: ₹{employee.salary}</p>
        <p>City: {employee.city}</p>
      </div>
    </>
  );
};

export default Employee;