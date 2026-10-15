import { useState } from "react";

const Task3 = () => {

  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <div>
        {show && <h2>useState() is a React Hook used to create and manage state inside a functional component.</h2>}

        <button onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </button>
      </div>
    </>
  );
};

export default Task3;