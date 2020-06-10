import React from 'react';
// import {useState} from 'react';
import moment from 'moment';

    const Break = ({
        breakLength,
        decrementOneMinuteBreak,
        incrementOneMinuteBreak,
    }) => {

    const breakMinutes = moment.duration(breakLength, 's').minutes()
    return (
        <div>
            <p id="break-label" className="App-header">Descanso</p>
            <p id="break-length">{breakMinutes}</p>
            <button id="break-decrement" onClick={decrementOneMinuteBreak}>-</button>
            <button id="break-increment" onClick={incrementOneMinuteBreak}>+</button>
        </div>
    );   
};

export default Break;