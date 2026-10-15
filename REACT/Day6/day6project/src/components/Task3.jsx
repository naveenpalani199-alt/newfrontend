const Task3 = () => {

  const products = [
    { id: 4345, name: "orange", price: 98, category: "fruit" },
    { id: 4348, name: "pencilbox", price: 100, category: "stationary" },
    { id: 4366, name: "laptop", price: 56798, category: "electronics" },
    { id: 4385, name: "screwdriver", price: 998, category: "equipment" }
  ];

  return (
    <>
      {products.map((e) => (
        <div
          key={e.id}
          className="bg-green-400 text-black p-3 rounded-2xl"
        >
          <h2>{e.name}</h2>
          <p>{e.price}</p>
          <p>{e.category}</p>
        </div>
      ))}
    </>
  );
};

export default Task3;