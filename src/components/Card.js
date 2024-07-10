import React, { useState } from "react";
import { Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import "./Card.css";

const Card = ({ img, title, price, addToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart();
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // Сбрасываем состояние через 2 секунды
  };

  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-price">
          <div className="price">{price}</div>
          <Button
            variant="outlined"
            onClick={handleAddToCart}
            className="add-to-cart-button"
            disabled={added} // Отключаем кнопку на время отображения подтверждения
          >
            {added ? <CheckIcon /> : "+"}
          </Button>
        </section>
      </div>
    </section>
  );
};

export default Card;
