import React, { useState, useEffect } from "react";
import Bar from "./components/Bar";
import "./App.css";

const MAX_LENGTH = 1000;
const DEFAULT_LENGTH = 50;

const App = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    randomize(DEFAULT_LENGTH);
  }, []);

  const randomize = (length) => {
    setArray(
      Array(length)
        .fill()
        .map(() => Math.round(Math.random() * 200 + 30))
    );
  };

  const timer = (time) => {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  };

  const sort = async () => {
    let tempArray = [...array];
    for (let i = 0; i < tempArray.length - 1; i++) {
      for (let j = i + 1; j < tempArray.length; j++) {
        if (tempArray[i] > tempArray[j]) {
          let t = tempArray[j];
          tempArray[j] = tempArray[i];
          tempArray[i] = t;
          setArray([...tempArray]);
          document.getElementById(`bar-${i}`).classList.add("swapping");
          document.getElementById(`bar-${j}`).classList.add("swapping");
          await timer((i - j) * 2);
          document.getElementById(`bar-${i}`).classList.remove("swapping");
          document.getElementById(`bar-${j}`).classList.remove("swapping");
        }
      }
      document.getElementById(`bar-${i}`).classList.add("sorted");
    }
    document
      .getElementById(`bar-${tempArray.length - 1}`)
      .classList.add("sorted");
  };

  const handleLengthChange = (e) => {
    const newLength = Number(e.target.value);
    if (newLength >= 0 && newLength <= MAX_LENGTH) {
      randomize(newLength);
      e.target.setCustomValidity("");
    } else if (newLength > MAX_LENGTH) {
      e.target.setCustomValidity(`The maximum array length is ${MAX_LENGTH}`);
    } else {
      e.target.setCustomValidity("Length must be a positive integer");
    }
  };

  return (
    <>
      <h1 className="title">BUBBLE SORT VISUALIZER</h1>
      <div className="control-panel">
        <div className="input-group">
          <label htmlFor="array-length-input" className="array-length-label">
            Array Length:
          </label>
          <input
            id="length-input"
            className="input"
            type="number"
            placeholder={DEFAULT_LENGTH}
            defaultValue={DEFAULT_LENGTH}
            min="0"
            max={MAX_LENGTH}
            onInput={handleLengthChange}
          ></input>
        </div>
        <button id="sort" formAction="submit" onClick={sort}>
          SORT
        </button>
        <button
          id="randomize"
          formAction="submit"
          onClick={() => randomize(DEFAULT_LENGTH)}
        >
          RANDOMIZE
        </button>
      </div>
      <div className="bars">
        {array.map((value, key) => (
          <Bar id={`bar-${key}`} key={key} index={key} height={value} />
        ))}
      </div>
    </>
  );
};

export default App;
