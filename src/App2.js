import React, { useEffect, useRef } from "react";
import "./styles.css";
import { useTitle } from "./useTitle";
import { useClick } from "./useClick";
import { useConfirm } from "./useConfirm";
import { usePreventLeave } from "./usePreventLeave";


export const App2 = () => {
  //useTitle
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000); // 5초 뒤 타이틀 변경

  //useClick
  const sayHello = () => console.log("say~~~~~");
  const title = useClick(sayHello);

  //useConfirm
  const confirmAction = () => console.log("confirmAction~!!");
  const cancelAction = () => console.log("cancelAction~!!");
  const confirmDelete = useConfirm("Are you sure?", confirmAction, cancelAction);

  //usePreventLeave
  const {enablePrevent, disablePrevent} = usePreventLeave();

  return (
    <div className="App2">
        <h1 ref={title}>Hi</h1>
        <button onClick={confirmDelete}> confirmDelete </button> 
        <br />
        <button onClick={enablePrevent}> enablePrevent </button>
        <button onClick={disablePrevent}> disablePrevent </button>
    </div>
  );
}

