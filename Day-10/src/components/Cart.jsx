import React from "react";

const Cart = ({ cart, clearCart }) => {
  // console.log("yeah cart hein ", cart);
  let total = cart.reduce((acc, curr) => {
    return (acc += curr.price);
  }, 0);
  return (
    <div>
      <div className="cart">
        <h2>Cart:({cart.length})</h2>
        {cart.map((product, index) => {
          return (
            <>
              <div className="cart-item" key={index}>
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
              <hr />
            </>
          );
        })}

        <h2 align="right">Total: {total}</h2>
        <button className="btn" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
