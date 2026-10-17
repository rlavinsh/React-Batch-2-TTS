import React from "react";

const ProductCard = (props) => {
  // console.log(props);

  return (
    <div className="card">
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
      <button
        className="btn"
        onClick={() => {
          props.addToCart({ name: props.name, price: props.price });
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
