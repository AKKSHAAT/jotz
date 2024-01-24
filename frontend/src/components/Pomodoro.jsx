import { useState ,useEffect} from "react";
import React from 'react'

export const Pomodoro = () => {

  const TIME_IN_SECONDS = 150; //change to 1500 for 25 mins
  const [hamburger, setHamburger] = useState(true);
  const [time, setTime] = useState(TIME_IN_SECONDS);
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    const intervalId = setInterval(() => {
      if(isActive){
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }
    }, 1000); 
    return () => clearInterval(intervalId);
  }, [isActive]);

  useEffect(() => { //for the progress bar  
    const p = ((TIME_IN_SECONDS - time) / TIME_IN_SECONDS) * 100;
    setProgress(p);
  }, [time]);

  // Format the time for display
  const formattedTime = `${Math.floor(time / 60)}:${String(time % 60).padStart(2, "0")}`;
  function resetTimer() {
    setIsActive(!isActive);
    setTime(TIME_IN_SECONDS); // Reset to 25 minutes
  }

  const hamburgerToggle = ()=>{
    setHamburger(!hamburger);
  }

  return (
    <>
    <div className="pomodoro" style={hamburger ? {display: "block"} : {display: "none"}}>
    <p>Pomodoro 🍅</p>
      <p>{ formattedTime }</p>
      <progress value={progress} max={100}></progress>
      <button className='button' onClick={resetTimer}>
        {isActive ? <i className="fa-solid fa-rotate-right"></i> : <i className="fa-solid fa-play"></i> }
      </button>
    </div>
    <button className="button" onClick={hamburgerToggle}>🍅</button>
    </>
  );
}
