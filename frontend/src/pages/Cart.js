import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart, removeFromCart }) {
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index}>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>

              <button
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>

          <button
            onClick={() => navigate("/checkout")}
          >
            Buy Now
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;