import {useState, useRef} from "react";
import ResultModel from "./ResultModel";

export default function TimeStopper({title, targetTime}){
    const dialog = useRef();
    const timer = useRef();
    const [timeRemain, setTimeRemain] = useState(targetTime*1000);
    const timerIsActive = timeRemain > 0 && timeRemain < targetTime*1000;
    
    if (timeRemain <= 0){
        clearInterval(timer.current);
        dialog.current.open();
    }
    function handleStart(){
        timer.current = setInterval(() =>{
            setTimeRemain((prev) => prev - 10)
        }, 10);
    }

    function handleStop(){
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset(){
        setTimeRemain(targetTime*1000);
    }
    return(
        <>
            <ResultModel ref={dialog} targetTime={targetTime} remainingTime={timeRemain} onReset={handleReset}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">{targetTime} giây </p>
                <button onClick={timerIsActive ? handleStop : handleStart}>{!timerIsActive ? "Start" : "Stop"}</button>
                <p className={timerIsActive ? "active" : undefined}>{timerIsActive ? "Đồng hồ đang chạy..." : "Đồng hồ chưa khởi động"}</p>
            </section>
        </>
    )
}