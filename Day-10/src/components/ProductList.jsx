import React from "react";
import ProductCard from "./ProductCard";
const ProductList = ({ addToCart }) => {
  return (
    <div className="parent">
      {/* <h1>ProductList</h1> */}
      <ProductCard name={"Iphone-15"} price={20000} addToCart={addToCart} />
      <ProductCard name={"Boat Speaker"} price={10000} addToCart={addToCart} />
      <ProductCard name={"Laptop"} price={35000} addToCart={addToCart} />
    </div>
  );
};

export default ProductList;
