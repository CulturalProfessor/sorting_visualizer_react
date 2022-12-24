import React from "react";
import { useState } from "react";
import Bar from "./components/Bar";
import './App.css';

const App = () => {
  const [elementsValue, setElementsValue] = useState([]);
  let arrayOfElements = elementsValue.toString().split(",").map(Number);
  console.log(arrayOfElements);

  function sort(numberOfElements) {}

  return (
    <>
      <div>
        <input
          className="input"
          placeholder="Value of elements"
          value={elementsValue}
          onChange={(e) => {
            setElementsValue(e.target.value);
          }}
        ></input>
        <button className="submit" formAction="submit" onClick={sort()}>
          SORT
        </button>
      </div>
      <div className="bars">
      {arrayOfElements.length > 0 ? (
        arrayOfElements.map((numberOfElements) => {
            console.log(numberOfElements);
          return <Bar height={numberOfElements} numberOfBlocks={arrayOfElements.length} screenWidth={window.innerWidth} />;
        })
      ) : (
        <h1>Enter Array</h1>
      )}
      </div>
    </>
  );
};
export default App;
