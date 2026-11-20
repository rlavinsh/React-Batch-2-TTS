import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../products.json";
const PageDetails = () => {
  const data = useParams();
  const navigate = useNavigate();
  // console.log(data.id);

  const product = products.find((product) => {
    return product.id == data.id;
  });

  console.log(product);
  if (!product) {
    return (
      <div className="not-found">
        <h1>Product Not Found!</h1>
        <p>Sorry, the product you are looking for does not exist.</p>
        <button onClick={() => navigate("/products")}>Back to Products</button>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        <div className="product-icon">🛍️</div>

        <h1>{product.productName}</h1>

        <p className="product-id">Product ID: #{product.id}</p>

        <div className="product-price">
          ₹{product.productPrice.toLocaleString("en-IN")}
        </div>

        <p className="product-description">
          Explore this amazing product at an affordable price. Get yours today!
        </p>

        <div className="product-buttons">
          <button
            className="buy-btn"
            onClick={() => alert("Thank you for your interest!")}
          >
            Buy Now
          </button>

          <button className="back-btn" onClick={() => navigate("/products")}>
            Back to Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageDetails;
