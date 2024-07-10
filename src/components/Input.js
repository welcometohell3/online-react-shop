import React from "react";
import "./Input.css";

const Input = ({ handleChange, value, title, name }) => {
  return (
    <label className="filter">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className="checkmark"></span>
      {title}
    </label>
  );
};

export default Input;
