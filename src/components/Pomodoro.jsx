import React from 'react';
// import {useState} from 'react';
import moment from 'moment';

    const Pomodoro = ({
        pomodoroLength,
        decrementOneMinutePomodoro,
        incrementOneMinutePomodoro,
    }) => {

    const pomodoroMinutes = moment.duration(pomodoroLength, 's').minutes()
    return (
        <div>
            <p id="pomodoro-label" className="App-header">Pomodoro</p>
            <p id="pomodoro-length">{pomodoroMinutes}</p>
            <button id="pomodoro-decrement" onClick={decrementOneMinutePomodoro}>-</button>
            <button id="pomodoro-increment" onClick={incrementOneMinutePomodoro}>+</button>
        </div>
    );
};

export default Pomodoro;