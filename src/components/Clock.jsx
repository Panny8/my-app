import React, { useState } from "react";

function Clock() {
  setInterval(updateTime, updateDate,  1000);

  const now = new Date().toLocaleTimeString();
  const noww = new Date().toLocaleDateString();

  const [time, setTime] = useState(now);
  const [date, setDate] = useState(noww);

  function updateTime() {
 const newTime = new Date().toLocaleTimeString();
 setTime(newTime);
  }

  function updateDate() {
const newDate = new Date().toLocaleDateString();
setDate(newDate);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <h2>{date}</h2>
      <button onClick={updateTime}>+</button>

    </div>
 
    )

}

export default Clock;
