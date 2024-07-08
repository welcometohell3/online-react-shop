import { Link } from "react-router-dom";
import "./Nav.css";

const Navigation = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Поиск"
        />
        <div className="nav-links">
          <Link to="/">Главная</Link>
          <Link to="/login">Вход</Link>
          <Link to="/register">Регистрация</Link>
          <Link to="/cart">Корзина</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
