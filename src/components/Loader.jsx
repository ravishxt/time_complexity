import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="gooey">
        <span className="dot"></span>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
