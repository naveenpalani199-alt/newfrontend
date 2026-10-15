const Task6 = () => {
  const product = {
    name: "Laptop",
    price: 55000,
    category: "Electronics",
    brand: "Dell"
  };

  return (
    <>
      <div className="bg-green-400 p-3">
        <h2>Product Details</h2>

        <p>Name: {product.name}</p>
        <p>Price: ₹{product.price}</p>
        <p>Category: {product.category}</p>
        <p>Brand: {product.brand}</p>
      </div>
    </>
  );
};

export default Task6;