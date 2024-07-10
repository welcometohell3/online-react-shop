import React from "react";

const Cart = ({ user, cartItems, removeFromCart }) => {
  if (!user) {
    return <div>Войдите, чтобы увидеть корзину</div>;
  }

  return (
    <div>
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
              <p>{item.price}</p>
              <button onClick={() => removeFromCart(index)}>Удалить</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
