import React from "react";
import "./Bar.css";

const Bar = (props) => {
    const width=props.screenWidth / (25*props.numberOfBlocks) ;
  return (
    <div className="Bar">
    <button
      className="rectangle"
      style={{
        height: `${props.height + "rem"}`,
        width: `${width+ "rem"}`,
      }}
    >
      {" "}
    </button>
    <h3>{props.height}</h3>
    </div>
  );
};
export default Bar;
