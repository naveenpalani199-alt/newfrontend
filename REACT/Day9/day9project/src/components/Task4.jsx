import { useState } from "react";

const Task4 = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div>
        <h2>Search Input</h2>

        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search..."
        />

        <p>You are searching for: {search}</p>
      </div>
    </>
  );
};

export default Task4;