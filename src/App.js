import React, { useState } from "react";
import "./styles.css";
import { useInput } from "./useInput";


export default function App() {
  const [number, setNumber] = useState(0);
  const addNumber = () => setNumber(number + 1);
  const minusNumber = () => setNumber(number - 1);
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Number : {number} </h2>
      <button onClick={addNumber}> add </button>
      <button onClick={minusNumber}> minus </button>
      <input {...name} />
    </div>
  );
}
