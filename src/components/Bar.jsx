import React from "react";
import "./Bar.css";

const Bar = ({ id, index, height }) => {
  const style = {
    height: `${height}px`,
    backgroundColor: "#c9d6df", // Change color here
    margin: "0 2px",
    transition: "all 0.1s ease-in-out",
  };

  return <div className="bar" id={id} style={style}></div>;
};

export default Bar;
