import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { useFadeIn } from "./useFadeIn";
import { useNetwork } from "./useNetwork";
import { useScroll } from "./useScroll";



// useFullscreen

export const App3 = () => {
  //useFadeIn
  const fadeInH1 = useFadeIn(2, 1);
  const fadeInH2 = useFadeIn(5, 3);

  //useNetwork
  const handelNetworkChange = (online) => {
    console.log(online ? "We just went online" : "defuse false!!!");
  };
  const onLine = useNetwork(handelNetworkChange);

  //useScroll
  const { y } = useScroll();

  return (
    <div className="App3" style = {{height:1500}}>
        <h1 {...fadeInH1}>Hi~ welcome</h1>
        <h2 {...fadeInH2}> hello world </h2>
        <br />
        <h1>{onLine ? "Online" : "Offline"}</h1>
        <br />
        <h1 style={{position: "fixed", color: y > 100 ? "red" : "blue"}}> Hello color change?</h1>
        <br />
    </div>
  );
};


