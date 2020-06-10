import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import React from "react";
// import { useEffect } from "react";

momentDurationFormatSetup(moment);

const TimeLeft = ({
  handleStartStopClick,
  starStopButtonLabel,
  timeLeft,
  timerLabel,
}) => {
  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });
  return (
    <div class="clock">
      <h1 id="timer-tittle" className="App-header">Cronómetro</h1>
      <p id="timer-label">{timerLabel}</p>
      <p id="time-left">{formattedTimeLeft}</p>
      <button id="start_stop" onClick={handleStartStopClick}>
        {starStopButtonLabel}
      </button>
    </div>
  );
};
export default TimeLeft;
