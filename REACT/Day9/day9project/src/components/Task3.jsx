import { useState } from "react";

const Task3 = () => {
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(age === "" ? "Age is required" : `Age: ${age}`);

    age !== "" && setAge("");
  };

  return (
    <>
      <div>
        <h2>Age Validation</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
          />

          <button type="submit">Submit</button>
        </form>

        <p>{message}</p>
      </div>
    </>
  );
};

export default Task3;