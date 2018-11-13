import React from "react";
import "./Button.css";

const isOperator = val => {
  return "/*-+=".includes(val);
};

export const Button = ({ children, handleClick }) => (
  <div
    className={`button-wrapper ${isOperator(children) ? "operator" : ""}`}
    onClick={() => handleClick(children)}
  >
    {children}
  </div>
);
