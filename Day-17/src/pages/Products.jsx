import React from "react";
import { NavLink } from "react-router-dom";
import products from "../products.json";
const Products = () => {
  return (
    <div className="parent">
      {products.map((product) => {
        return (
          <div class="product-card" key={product.id}>
            <h3>{product.productName}</h3>
            <p class="price">₹{product.productPrice}</p>
            <NavLink className="btn" to={`/products/${product.id}`}>
              {product.viewDetail}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
