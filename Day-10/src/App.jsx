import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
const App = () => {
  const [cart, setCart] = useState([]);
  function addToCart(product) {
    // console.log(product);
    setCart([...cart, product]);
  }
  console.log(cart);

  function clearCart() {
    setCart([]);
  }
  return (
    <div>
      <Header cart={cart} />
      <hr />
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} clearCart={clearCart} />
    </div>
  );
};

export default App;
