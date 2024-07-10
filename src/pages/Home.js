import React from "react";
import ProductList from "../components/ProductList";

const Home = ({ addToCart, query, data }) => {
  return (
    <div className="home">
      <ProductList addToCart={addToCart} query={query} data={data} />
    </div>
  );
};

export default Home;