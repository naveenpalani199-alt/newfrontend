const Task3 = () => {
  const courses = [
    "FullStack",
    "MernStack",
    "DataScience",
    "Devops",
    "DataAnalytics"
  ];

  return (
    <>
      <div>
        <h2>Available Courses</h2>

        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-blue-300 p-3 m-2 rounded-lg"
          >
            <p>{course}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Task3;