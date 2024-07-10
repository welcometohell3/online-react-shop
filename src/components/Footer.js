import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-text">
        &copy; {new Date().getFullYear()} RadioTech. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
