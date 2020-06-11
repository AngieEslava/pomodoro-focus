import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import React from "react";
// import { useEffect } from "react";

momentDurationFormatSetup(moment);

const TimeLeft = ({
  handleReserButtonClick,
  handleStartStopClick,
  starStopButtonLabel,
  timeLeft,
  timerLabel,
}) => {
  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });
    
  return (
    <div className="item2">
      <h1 id="timer-tittle" >Cronómetro</h1>
      <p id="timer-label" className="App-header">{timerLabel}</p>
      <p id="time-left">{formattedTimeLeft}</p>
      <button id="start_stop" onClick={handleStartStopClick}>
        {starStopButtonLabel}
      </button>
      <button id="reset" onClick={handleReserButtonClick}>
        {" "}
        Borrar{" "}
      </button>
      
    </div>
  );
};
export default TimeLeft;
