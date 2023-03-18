import React from "react";
import "./Bar.css";

const Bar = ({ id, index, height }) => {
  const style = {
    height: `${height}px`,
    backgroundColor: "blue", // Change color here
  };
  return <div className="bar" id={id} style={style}></div>;
};

export default Bar;
