import React, { useEffect, useRef } from "react";

// useFadeIn
export const useFadeIn = (duraction = 2, delay = 1) => {
    const element = useRef();
  
    useEffect(()=>{
      if(element.current){
        const {current} = element;
        current.style.transition = `opacity ${duraction}s ease-in-out ${delay}s`
        current.style.opacity = 1;
      }
    })
  
    return {ref: element, style: {opacity:0}};
  }