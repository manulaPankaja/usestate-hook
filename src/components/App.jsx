import React from "react";
import { useState } from "react";

function App() {

  setInterval(updateTime, 1000) // 1 second

  let time = new Date().toLocaleTimeString(); 
  
  const [timeNow, setTime] = useState(time); // timeNow is the current time and setTime is the function to update the time

  function updateTime(){
    let time = new Date().toLocaleTimeString();
    setTime(time);
  } // updateTime function is called when the button is clicked

  return (
    <div className="container">
      <h1>{timeNow}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
