import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillHeart, AiFillHome } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import "./Nav.css";

const Navigation = ({ handleInputChange, query }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <nav className="nav-container">
      <div className="nav-left">
        <div className="store-name">RadioTech</div>
      </div>
      {isHomePage && (
        <form className="search-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Поиск"
            className="search-input"
          />
        </form>
      )}
      <div className="nav-right">
        <div className="nav-links">
          <Link to="/" className="nav-link">
            <AiFillHome className="icon" />
          </Link>
          <Link to="/cart" className="nav-link">
            <AiFillHeart className="icon" />
          </Link>
          <Link to="/account" className="nav-link">
            <MdOutlineAccountCircle className="icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
