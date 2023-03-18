import React from "react";
import "./Bar.css";

const Bar = ({ id, index, height, color }) => {
  const style = {
    height: `${height}px`,
    backgroundColor: color,
  };
  return <div className="bar" id={id} style={style}></div>;
};

export default Bar;
