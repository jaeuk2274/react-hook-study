import React, { useState } from "react";
import "./styles.css";
import { useInput } from "./useInput";
import { useTaps } from "./useTaps";

const content = [
  {
    tab : "Section 1",
    content : "I'm the content of the Section 1"
  },
  {
    tab : "Section 2",
    content : "I'm the content of the Section 2"
  },
  {
    tab : "Section 3",
    content : "I'm the content of the Section 3"
  }
];
 
export const App = () => {
  //what is useState?
  const [number, setNumber] = useState(0);
  const addNumber = () => setNumber(number + 1);
  const minusNumber = () => setNumber(number - 1);

  //useInput
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);

  //useTap
  const { currentItem, changeItem } = useTaps(0, content);

  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Number : {number} </h2>
      <button onClick={addNumber}> add </button>
      <button onClick={minusNumber}> minus </button>
      <br /><br />

      <input {...name} />
      <br /><br />

      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
      <br /><br />

      
    </div>
  );
}
