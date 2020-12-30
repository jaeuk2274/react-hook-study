import { useEffect } from "react";

export const useBeforeLaevn = (onBefore) => {
    const handle = (event) => {
      const {clientY} = event;
      if(clientY <= 0){
        onBefore();
      }
    }

    useEffect(() => {
      document.addEventListener("mouseleave", handle);
      return () => document.removeEventListener("mouseleave", handle);
    }, [])
  }