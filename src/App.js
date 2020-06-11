import React, { useState, useRef } from "react";
import "./App.css";
import Break from "./components/Break";
import Pomodoro from "./components/Pomodoro";
import TimeLeft from "./components/TimeLeft";
import { useEffect } from "react";

function App() {
  const audioElement = useRef(null);
  const [currentPomodoroType, setCurrentPomodoroType] = useState("Pomodoro");
  const [intervalId, setIntervalId] = useState(null);
  const [pomodoroLength, setPomodoroLength] = useState(60 * 25);
  const [breakLength, setBreakLength] = useState(300);
  const [timeLeft, setTimeLeft] = useState(pomodoroLength);

  useEffect(() => {
    setTimeLeft(pomodoroLength);
  }, [pomodoroLength]);

  const decrementBreakLengthByOneMinute = () => {
    const newBreakLength = breakLength - 60;

    if (newBreakLength < 0) {
      setBreakLength(0);
    } else {
      setBreakLength(newBreakLength);
    }
  };

  const incrementBreakLengthByOneMinute = () => {
    setBreakLength(breakLength + 60);
  };
  const decrementPomodoroLengthByOneMinute = () => {
    const newPomodoroLength = pomodoroLength - 60;

    if (newPomodoroLength < 0) {
      setPomodoroLength(0);
    } else {
      setPomodoroLength(newPomodoroLength);
    }
  };

  const incrementPomodoroLengthByOneMinute = () => {
    setPomodoroLength(pomodoroLength + 60);
  };
  const isStarted = intervalId !== null;
  const handleStartStopClick = () => {
    if (isStarted) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          const newTimeLeft = prevTimeLeft - 1;
          if (newTimeLeft >= 0) {
            return prevTimeLeft - 1;
          }
          audioElement.current.play();
          if (currentPomodoroType === "Pomodoro") {
            setCurrentPomodoroType("Break");
            setTimeLeft(breakLength);
          } else if (currentPomodoroType === "Break") {
            setCurrentPomodoroType("Pomodoro");
            setTimeLeft(pomodoroLength);
          }
        });
      }, 100);
      setIntervalId(newIntervalId);
    }
  };
  const handleReserButtonClick = () => {
    audioElement.current.load();
    clearInterval(intervalId);
    setIntervalId(null);
    setCurrentPomodoroType("Pomodoro");
    setPomodoroLength(60 * 25);
    setBreakLength(60 * 5);
    setTimeLeft(60 * 25);
  };
  return (
    <div className="App">
      <Break
        breakLength={breakLength}
        decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
        incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
      />
      <TimeLeft
        breakLength={breakLength}
        handleStartStopClick={handleStartStopClick}
        handleReserButtonClick={handleReserButtonClick}
        timerLabel={currentPomodoroType}
        pomodoroLength={pomodoroLength}
        starStopButtonLabel={isStarted ? "Parar" : "Iniciar"}
        timeLeft={timeLeft}
      />
      <Pomodoro
        pomodoroLength={pomodoroLength}
        decrementPomodoroLengthByOneMinute={decrementPomodoroLengthByOneMinute}
        incrementPomodoroLengthByOneMinute={incrementPomodoroLengthByOneMinute}
      />
      <audio id="beep" ref={audioElement}>
        <source
          src="https://onlineclock.net/audio/audio/options/default.mp3"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}
export default App;
