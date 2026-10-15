const Task8 = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 55000,
      category: "Electronics"
    },
    {
      id: 2,
      name: "Mobile",
      price: 25000,
      category: "Electronics"
    },
    {
      id: 3,
      name: "Shoes",
      price: 3000,
      category: "Fashion"
    },
    {
      id: 4,
      name: "Backpack",
      price: 1500,
      category: "Accessories"
    },
    {
      id: 5,
      name: "Watch",
      price: 5000,
      category: "Accessories"
    }
  ];

  return (
    <>
      <div>
        <h2>Product Details</h2>

        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-400 p-4 m-3 rounded-xl"
          >
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <p>Category: {product.category}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Task8;