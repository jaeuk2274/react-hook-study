import React from "react";
import "./styles.css";
import { useTitle } from "./useTitle";

export const App2 = () => {
  //useTitle
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000); // 5초 뒤 타이틀 변경

  return (
    <div className="App2">
        <div>hi</div>
    </div>
  );
}
