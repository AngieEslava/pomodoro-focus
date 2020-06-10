import React , {useState} from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import {useEffect} from 'react';


momentDurationFormatSetup(moment);

const Timer = ({pomodoroLength}) => {
    const [timer,setTimer] = useState(pomodoroLength);

    useEffect(()=>{
        setTimer(pomodoroLength);
    },[pomodoroLength]);

    const handleStartStopClick = ()=>{

        setInterval(() => {
            setTimer(prevTimer => {
                const newTimer = prevTimer -1;
                if (newTimer>=0){
                    return prevTimer-1;
                }
                return prevTimer;
            });
        }, 1000);
    };
    

    const formatTimer = moment.duration(timer,'s').format('mm:ss', {trim:false});
    return <div>
        {formatTimer}
        <button onClick={handleStartStopClick}>Start</button>
        </div>;
}

export default Timer;



// const Timer = ({breakLength, pomodoroLength}) => {
//     const [currentPomodoro, setCurrentPomodoro] = useState('Pomodoro')
//     const [intervalId, setInterval]=useState(null);
//     const [timer, setTimer]  = useState(pomodoroLength);
    
//     useEffect(() => {
//         setTimer(pomodoroLength);
//     }, [pomodoroLength]);

//     const isStarted = intervalId !== null;  
//       const handleStartStopClick = () => {
//         if(isStarted){
//             clearInterval(intervalId)
//             setInterval(null)
//         } else {
//         const newIntervalId = setInterval(()=>{
//                 (prevTimer => {
//                 const newTimer = prevTimer-1;
//                 if (newTimer >= 0) {
//                     return prevTimer-1;
//                 }
//                 if (currentPomodoro === 'Pomodoro'){
//                     setCurrentPomodoro('Break')
//                     setTimer(breakLength)
//                 }else if(currentPomodoro === 'Break'){
//                     setCurrentPomodoro('Pomodoro')
//                     setTimer(pomodoroLength)
//                 }
//             });
//         }, 100);
//             setInterval(newIntervalId);
//         }
//     };

//     const formatTimer = moment.duration(timer, 's').format('mm:ss',{trim:false}); 
//     return <div>
//         {formatTimer}
//         <button onClick={handleStartStopClick}>{isStarted   ? 'Stop' : 'Start'}</button>
//         </div>;
// };

// export default Timer;
