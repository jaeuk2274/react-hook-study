import { useState } from "react";

export const useTaps = ( initalTap, allTaps ) => {
    const [currentIndex, setCurrentIndex] = useState(initalTap, allTaps);
  
    if(!allTaps || !Array.isArray(allTaps)){
      return;
    }
  
    return {
      currentItem: allTaps[currentIndex],
      changeItem: setCurrentIndex
    };
};