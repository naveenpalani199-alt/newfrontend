import { useState } from "react";


const Task1 = () => {

    const [student, setStudent] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
    city: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(student);
  };

  return (
    <>
    
    <div>
        <h2>Student Registration Form</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            placeholder="Enter Name"
          />

          <br /><br />

          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            placeholder="Enter Email"
          />

          <br /><br />

          <input
            type="number"
            name="age"
            value={student.age}
            onChange={handleChange}
            placeholder="Enter Age"
          />

          <br /><br />

          <input
            type="text"
            name="course"
            value={student.course}
            onChange={handleChange}
            placeholder="Enter Course"
          />

          <br /><br />

          <input
            type="text"
            name="city"
            value={student.city}
            onChange={handleChange}
            placeholder="Enter City"
          />

          <br /><br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>


    

  )
}

export default Task1