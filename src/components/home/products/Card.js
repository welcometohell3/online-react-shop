const Card = ({ img, title, price, addToCart }) => {
  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-price">
          <div className="price">{price}</div>
        </section>
        <button onClick={addToCart}>Добавить в корзину</button>
      </div>
    </section>
  );
};

export default Card;
