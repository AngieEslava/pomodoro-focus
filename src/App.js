import React from 'react';
import './App.css';
import {useState} from 'react';
import Break from './components/Break';
import Pomodoro from './components/Pomodoro';
import Time from './components/Time';

function App() {
  const[breakLength, setBreakLength ] = useState(300);
  const[pomodoroLength, setPomodoroLength ] = useState(1500);

  const decrementOneMinutePomodoro = () => {
    const newPomodoro = pomodoroLength-60;
    if(newPomodoro < 0) {
        setPomodoroLength(0);
    }else{
        setPomodoroLength(newPomodoro);
    };
  }; 
  const incrementOneMinutePomodoro = () => {
      setPomodoroLength(pomodoroLength + 60);
  };

  const decrementOneMinuteBreak = () => {
    const newBreak = breakLength-60;
    if(newBreak < 0) {
        setBreakLength(0);
    }else{
        setBreakLength(newBreak);
    };
  }; 
  const incrementOneMinuteBreak = () => {
      setBreakLength(breakLength + 60);
  };

  return (
    <div className = "App">
      <Break 
        breakLength={breakLength}
        decrementOneMinuteBreak={decrementOneMinuteBreak}
        incrementOneMinuteBreak={incrementOneMinuteBreak}
      />
      <Time breakLength={breakLength} pomodoroLength={pomodoroLength} />
      <Pomodoro 
        pomodoroLength={pomodoroLength}
        decrementOneMinutePomodoro={decrementOneMinutePomodoro}
        incrementOneMinutePomodoro={incrementOneMinutePomodoro}
      />
    </div>
  );
}

export default App;