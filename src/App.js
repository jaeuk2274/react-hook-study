import React, { useState } from "react";
import "./styles.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

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
