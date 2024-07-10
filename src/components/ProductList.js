import React from "react";
import Card from "./Card";
import "./Card.css";

const ProductList = ({ addToCart, query, data }) => {
  const filteredProducts = data.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <Card
          key={product.title}
          img={product.img}
          title={product.title}
          price={product.price}
          addToCart={() => addToCart(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;
