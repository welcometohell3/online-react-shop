import { useState } from "react";
import Card from "../components/Card";
import Sidebar from "./sidebar/Sidebar";
import Products from "./products/Products";
import products from "../db/data";
import Navigation from "./nav/Navigation";
import "./index.css";

const Home = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category }) => category === selected
      );
    }

    return filteredProducts.map(({ img, title, price }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        price={price}
        addToCart={() => addToCart({ img, title, price })}
      />
    ));
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Products result={result} />
    </div>
  );
};

export default Home;
