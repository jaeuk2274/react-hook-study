import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { useNotification } from "./useNotification";




export const App4 = () => {
  const triggerNotIf = useNotification("Notification title", {body:"Notification description"});
  return (
    <div className="App4">
        <button onClick={triggerNotIf}> Notification </button>
        <br />

    </div>
    
  );
};


