import React, { useEffect, useRef } from "react";
import "./styles.css";
import { useFadeIn } from "./useFadeIn";

// useNetwork
// onChange
// navigator.onLine
// handelChange
// event online / offline


// useScroll


// useFullscreen

export const App3 = () => {
  const fadeInH1 = useFadeIn(2, 1);
  const fadeInH2 = useFadeIn(5, 3);
  return (
    <div className="App3">
        <h1 {...fadeInH1}>Hi~ welcome</h1>
        <h2 {...fadeInH2}> hello world </h2>
    </div>
  );
};


