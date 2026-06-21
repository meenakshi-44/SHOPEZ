import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Checkout from "./pages/Checkout";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((item, index) => index !== indexToRemove));
  };

  return (
    <BrowserRouter>
      <div>
        <h1>🛒 SHOPEZ</h1>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/products">Products</Link> |{" "}
          <Link to="/cart">Cart ({cart.length})</Link> |{" "}
          <Link to="/login">Login</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/products"
            element={<Products addToCart={addToCart} />}
          />

          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
              />
            }
          />

         <Route
  path="/checkout"
  element={<Checkout />}
/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;