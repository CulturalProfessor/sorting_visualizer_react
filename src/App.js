//https://dev.to/igor_bykov/react-calling-functional-components-as-functions-1d3l

import React from "react";
import { useState, useEffect } from "react";
import Bar from "./components/Bar";
import "./App.css";

const App = () => {

  useEffect(()=>{
    randomize();
  },[])

  let [array, setArray] = useState([]);
  // let [length,setLength]=useState(100);
  let Length=100;
  const randomize=async ()=>{
    let currentArray = [];
    for (let i = 0; i < Length; i++) {
      currentArray.push(Math.round(Math.random() * 200 + 30));
      // await timer(1)
      // let bar=document.getElementById(`${i}`).style;
      // bar.backgroundColor='#ffccff';
    }
    setArray([...currentArray,array]);
    console.log(array.length);
  }

  

  async function timer(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }

   async function sort() {
    let tempArray = array;
    console.log(tempArray);
    for (let i = 0; i < array.length-1; i++) {
      for (let j = i + 1; j < array.length ; j++) {
        if (tempArray[i] > tempArray[j]) {
          let t = tempArray[j];
          tempArray[j] = tempArray[i];
          tempArray[i] = t;
          let bar1=document.getElementById(i);
          let bar2=document.getElementById(j);
          bar1.backgroundColor='#ffffff';
          bar2.backgroundColor='#ffddff';
          // console.log(bar1);
          await timer((i-j)*1);
        }
      }
      setArray([...array,tempArray]);
    }
    console.log(tempArray);
  }

  // console.log(array);
  return (
    <>
      <div>
        <input
          className="input"
          placeholder="Length of Array"
          onInput={(e) => {
            array.length=e.target.value;
          }}
        ></input>
        <button
          id="sort"
          formAction="submit"
          onClick={(e) => {
            e.preventDefault();
           sort();
          }}
        >
          SORT
        </button>
        <button
          id="sort"
          formAction="submit"
          onClick={(e) => {
            e.preventDefault();
           randomize();
          }}
        >
          RANDOMIZE
        </button>
      </div>
      <div className="bars">
        {
          array.map((value, key) => {
          // console.log(array);
          return <Bar id={key} key={key} height={value} />;
        })
        }
      </div>
    </>
  );
};
export default App;
