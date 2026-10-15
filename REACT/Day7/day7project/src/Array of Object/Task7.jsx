const Task7 = () => {
  const students = [
    {
      id: 1,
      name: "Naveen",
      age: 25,
      course: "React"
    },
    {
      id: 2,
      name: "Rahul",
      age: 23,
      course: "Python"
    },
    {
      id: 3,
      name: "Arun",
      age: 24,
      course: "JavaScript"
    },
    {
      id: 4,
      name: "Karthik",
      age: 22,
      course: "Java"
    }
  ];

  return (
    <>
      <div className="bg-pink-400 p-3">
        <h2>Student Details</h2>

        {students.map((e) => (
          <div key={e.id}>
            <p>ID: {e.id}</p>
            <p>Name: {e.name}</p>
            <p>Age: {e.age}</p>
            <p>Course: {e.course}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Task7;