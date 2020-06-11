import moment from "moment";
import React from "react";

const Pomodoro = ({
  pomodoroLength,
  decrementPomodoroLengthByOneMinute,
  incrementPomodoroLengthByOneMinute,
}) => {
  const pomodoroLengthInMinutes = moment.duration(pomodoroLength, "s").minutes();
  return (
    <div className="item1">
      <h1 id="pomodoro-label" >Pomodoro</h1>
      <p id="pomodoro-length">{pomodoroLengthInMinutes}</p>
      <button
        id="pomodoro-decrement"
        onClick={decrementPomodoroLengthByOneMinute}
      >
        -
      </button>
      <button
        id="pomodoro-increment"
        onClick={incrementPomodoroLengthByOneMinute}
      >
        +
      </button>
    </div>
  );
};

export default Pomodoro;
