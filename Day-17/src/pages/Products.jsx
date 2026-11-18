import React from "react";
import { NavLink } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: 1,
      productName: "iPhone 15",
      productPrice: 69999,
      viewDetail: "View Detail",
    },
    {
      id: 2,
      productName: "Samsung Galaxy S24",
      productPrice: 74999,
      viewDetail: "View Detail",
    },
    {
      id: 3,
      productName: "OnePlus 12",
      productPrice: 64999,
      viewDetail: "View Detail",
    },
    {
      id: 4,
      productName: "Google Pixel 8",
      productPrice: 59999,
      viewDetail: "View Detail",
    },
    {
      id: 5,
      productName: "MacBook Air M3",
      productPrice: 114999,
      viewDetail: "View Detail",
    },
    {
      id: 6,
      productName: "Dell XPS 13",
      productPrice: 99999,
      viewDetail: "View Detail",
    },
    {
      id: 7,
      productName: "HP Pavilion",
      productPrice: 55999,
      viewDetail: "View Detail",
    },
    {
      id: 8,
      productName: "Lenovo IdeaPad",
      productPrice: 45999,
      viewDetail: "View Detail",
    },
    {
      id: 9,
      productName: "Sony Headphones",
      productPrice: 12999,
      viewDetail: "View Detail",
    },
    {
      id: 10,
      productName: "Apple AirPods Pro",
      productPrice: 24999,
      viewDetail: "View Detail",
    },
    {
      id: 11,
      productName: "Samsung Smart TV",
      productPrice: 54999,
      viewDetail: "View Detail",
    },
    {
      id: 12,
      productName: "LG Washing Machine",
      productPrice: 32999,
      viewDetail: "View Detail",
    },
    {
      id: 13,
      productName: "Canon DSLR Camera",
      productPrice: 45999,
      viewDetail: "View Detail",
    },
    {
      id: 14,
      productName: "Nikon Mirrorless Camera",
      productPrice: 89999,
      viewDetail: "View Detail",
    },
    {
      id: 15,
      productName: "Apple Watch Series 9",
      productPrice: 41999,
      viewDetail: "View Detail",
    },
    {
      id: 16,
      productName: "Samsung Galaxy Watch",
      productPrice: 24999,
      viewDetail: "View Detail",
    },
    {
      id: 17,
      productName: "iPad Air",
      productPrice: 59999,
      viewDetail: "View Detail",
    },
    {
      id: 18,
      productName: "Amazon Kindle",
      productPrice: 12999,
      viewDetail: "View Detail",
    },
    {
      id: 19,
      productName: "JBL Bluetooth Speaker",
      productPrice: 4999,
      viewDetail: "View Detail",
    },
    {
      id: 20,
      productName: "Logitech Wireless Mouse",
      productPrice: 1999,
      viewDetail: "View Detail",
    },
  ];

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
