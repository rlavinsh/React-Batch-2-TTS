import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <h1>My Store</h1>
      <p>Cart: {props.cart.length}</p>
    </div>
  );
};

export default Header;
