import React from "react";
import ProductCard from "./ProductCard";
const ProductList = () => {
  return (
    <div>
      {/* <h1>ProductList</h1> */}
      <ProductCard name={"Iphone-15"} price={20000} />
      <ProductCard name={"Boat Speaker"} price={10000} />
      <ProductCard name={"Laptop"} price={35000} />
    </div>
  );
};

export default ProductList;
