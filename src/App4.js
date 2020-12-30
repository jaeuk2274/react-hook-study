import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { useFullscreen } from "./useFullscreen";


export const App4 = () => {
 
  //useFullscreen 
  const onFullS = isFull => {
    console.log(isFull ? "We are full" : "We are small");
  }
  const {element, triggerFull, exitFull} = useFullscreen(onFullS);

  return (
    <div className="App4" style = {{height:1500}}>
        <div ref={element}>
          <img src="https://item.kakaocdn.net/do/8bdb8dec2d96f5e334479d9e139a892cf43ad912ad8dd55b04db6a64cddaf76d" style ={{height:150}} /> 
        </div>
        <button onClick={triggerFull}> FULL BUTTON </button>
        <button onClick={exitFull}> EXIT BUTTON </button>
    </div>
    
  );
};


