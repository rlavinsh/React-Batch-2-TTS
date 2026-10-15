import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
const App = () => {
  return (
    <div>
      <Header />
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
