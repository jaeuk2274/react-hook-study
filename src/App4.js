import React from "react";
import "./styles.css";
import { useNotification } from "./useNotification";
import { useAxios } from "./useAxios";

export const App4 = () => {
  //useNotification
  const triggerNotIf = useNotification("Notification title", {body:"Notification description"});

  //useAxios
  const { loading, error, data, refectch } = useAxios({
    url:"http://....",
  })
  console.log(`loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}`);

  return (
    <div className="App4">
        <button onClick={triggerNotIf}> Notification </button>
        <br />
        <h1>{data && data.status}</h1>
        <h1>{loading ? "Loading..." : "End"}</h1>
        <button onClick={refectch}>refetch</button>
    </div>
    
  );
};


