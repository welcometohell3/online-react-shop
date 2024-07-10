import React from "react";
import "./Cart.css";

const Cart = ({ user, cartItems, removeFromCart }) => {
  if (!user) {
    return <div className="cart-message">Войдите, чтобы увидеть корзину</div>;
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Корзина</h2>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Корзина пуста</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.img} alt={item.title} className="cart-item-img" />
              <div className="cart-item-details">
                <p className="cart-item-title">{item.title}</p>
                <p className="cart-item-price">{item.price}</p>
                <button
                  className="cart-item-remove"
                  onClick={() => removeFromCart(index)}
                >
                  Удалить
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
