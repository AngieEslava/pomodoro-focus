import React , {useState} from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import {useEffect} from 'react';

momentDurationFormatSetup(moment);

const Time = ({breakLength, pomodoroLength}) => {
    const [currentPomodoro, setCurrentPomodoro] = useState('Pomodoro')
    const [intervalId, setInterval]=useState(null);
    const [time, setTime]  = useState(pomodoroLength);
    
    useEffect(() => {
        setTime(pomodoroLength);
    }, [pomodoroLength]);

    const isStarted = intervalId !== null;  
    const handleStartStopClick = () => {
        if(isStarted){
            clearInterval(intervalId)
            setInterval(null)
        } else {
        const newIntervalId = setInterval(()=>{
            setTime(prevTime => {
                const newTime = prevTime-1;
                if (newTime >= 0) {
                    return prevTime-1;
                }
                if (currentPomodoro === 'Pomodoro'){
                    setCurrentPomodoro('Break')
                    setTime(breakLength)
                }else if(currentPomodoro === 'Break'){
                    setCurrentPomodoro('Pomodoro')
                    setTime(pomodoroLength)
                }
            });
        }, 100);
            setInterval(newIntervalId);
        }
    };

    const formatTime = moment.duration(time, 's').format('mm:ss',{trim:false}); 
    return <div>
        {formatTime}
        <button onClick={handleStartStopClick}>{isStarted   ? 'Stop' : 'Start'}</button>
        </div>;
};

export default Time;
