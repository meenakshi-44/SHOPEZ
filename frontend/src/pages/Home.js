import React from "react";
import products from "../products";

function Home() {
  return (
    <div>
      <h2>Featured Products</h2>

     
        <div className="products-container">
  {products.map((product) => (
    <div className="product-card" key={product.id}>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button>Add to Cart</button>
    </div>
  ))}
</div>
    </div>
  );
}

export default Home;