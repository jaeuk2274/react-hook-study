import { useRef } from "react";

export const useFullscreen = callback => {
    const element = useRef();
    const runCb = isFull => {
      if(callback && typeof callback === "function") {
        callback(isFull);
      }
    }
  
    const triggerFull = () => {
      // 브라우저별...
      if(element.current){
        element.current.requestFullscreen();
        runCb(true);
      }
    };
    const exitFull = () => {
      console.log("exitFull");
      console.log(document);
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
      // 타 브라우저...
      runCb(false);
    }
    return {element, triggerFull, exitFull};
  }