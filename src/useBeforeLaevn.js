import { useEffect } from "react";

export const useBeforeLaevn = (onBefore) => {
    const handle = (event) => {
      const {clientY} = event;
      if(clientY <= 0){
        onBefore();
      }
    }
  // clientY
    useEffect(() => {
      document.addEventListener("mouseleave", handle);
      return () => document.removeEventListener("mouseleave", handle);
    }, [])
  }