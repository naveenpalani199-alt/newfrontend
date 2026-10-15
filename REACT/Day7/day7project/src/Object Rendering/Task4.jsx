

const Task4 = () => {
  const student = {
    name: "Rahul",
    age: 25,
    course: "React",
    city: "Chennai"
  };

  return (
    <>
      <div className="bg-amber-600 p-3">
        <h2>Student Details</h2>

        <p>Name: {student.name}</p>
        <p>Age: {student.age}</p>
        <p>Course: {student.course}</p>
        <p>City: {student.city}</p>
      </div>
    </>
  );
};
export default Task4