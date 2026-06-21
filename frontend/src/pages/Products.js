import React, { useState } from "react";

function Products({ addToCart }) {
  const [search, setSearch] = useState("");

const products = [
  {
    name: "Laptop",
    price: 50000,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
  },
  {
    name: "Mobile",
    price: 20000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    name: "Headphones",
    price: 3000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },
  {
    name: "Smart Watch",
    price: 5000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  }
];
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Featured Products</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="products-container">
        {filteredProducts.map((product, index) => (
          <div className="product-card" key={index}>
<img
  src={product.image}
  alt={product.name}
  className="product-image"
/>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;