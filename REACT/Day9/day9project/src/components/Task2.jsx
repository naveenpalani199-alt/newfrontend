import { useState } from "react";

const Task2 = () => {

  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedEmail(email);
  };

  return (
    <>
      <div>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            onChange={handleEmail}
            placeholder="Enter the Email"
          />

          <button type="submit">Submit</button>

        </form>

        <p>Email: {submittedEmail}</p>

      </div>
    </>
  );
};

export default Task2;