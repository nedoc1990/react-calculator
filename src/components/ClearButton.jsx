import React from "react";
import "./ClearButton";

export const ClearButton = ({ children, handleClear }) => (
  <div className="clear-btn" onClick={handleClear}>
    {children}
  </div>
);
