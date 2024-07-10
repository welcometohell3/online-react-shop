import React from "react";
import { Button } from "@mui/material";
const Card = ({ img, title, price, addToCart }) => {
  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-price">
          <div className="price">{price}</div>
          <Button
            variant="outlined"
            onClick={addToCart}
            className="add-to-cart-button"
          >
            +
          </Button>
        </section>
      </div>
    </section>
  );
};

export default Card;
