import React from "react";
import ProductList from "../components/ProductList";
import "./Home.css";

const Home = ({ addToCart, query, data, handleFilterChange }) => {
  return (
    <div className="home">
      {/* <Sidebar handleChange={handleFilterChange} /> */}
      <ProductList addToCart={addToCart} query={query} data={data} />
    </div>
  );
};

export default Home;
