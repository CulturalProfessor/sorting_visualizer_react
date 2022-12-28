import React from "react";
import "./Bar.css";

const Bar = (props) => {
    // const width=props.screenWidth / (25*props.numberOfBlocks) ;
  return (
    <div id={props.id} className="Bar">
    <button
      className="rectangle"
      style={{
        height: `${props.height*2 + "px"}`,
        // width: `${width+ "rem"}`,
        background:props.background
      }}
    >
      {" "}
    </button>
    <h6>{props.height}</h6>
    </div>
  );
};
export default Bar;
