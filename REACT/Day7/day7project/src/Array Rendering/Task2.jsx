const Task2 = () => {
  const cities = [
    "Chennai",
    "Bangalore",
    "Mumbai",
    "Delhi",
    "Hyderabad",
    "Coimbatore"
  ];

  return (
    <>
      <div className="bg-amber-300 p-3">
        <h2>Cities</h2>

        <ul>
          {cities.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Task2;