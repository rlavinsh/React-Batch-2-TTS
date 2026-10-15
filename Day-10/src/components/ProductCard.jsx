import React from "react";

const ProductCard = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
