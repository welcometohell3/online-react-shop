import { Link } from "react-router-dom";
import "./Nav.css";
import { AiFillHeart, AiFillHome } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";

const Navigation = ({ handleInputChange, query }) => {
  return (
    <nav className="nav-container">
      <div>
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Поиск"
        />
      </div>
      <div className="nav-right">
        <Link to="/" className="nav-link">
          <AiFillHome className="icon" />
        </Link>
        <Link to="/cart" className="nav-link">
          <AiFillHeart className="icon" />
        </Link>
        <Link to="/login" className="nav-link">
          <MdOutlineAccountCircle className="icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
