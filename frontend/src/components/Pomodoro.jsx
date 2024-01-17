import { useState ,useEffect} from "react";
import React from 'react'

export const Pomodoro = () => {
  const [time, setTime] = useState(150); // Initial time in seconds
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    const intervalId = setInterval(() => {
      if(isActive){
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }
    }, 1000); // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [isActive]); // Empty dependency array ensures the effect runs only once on mount

  // Format the time for display
  const formattedTime = `${Math.floor(time / 60)}:${String(time % 60).padStart(2, "0")}`;
  function resetTimer() {
    setIsActive(!isActive);
    setTime(150); // Reset to 25 minutes
  }

  return (
    <div className="pomodoro">
    <p>Pomodoro 🍅</p>
      <p>{ formattedTime }</p>
      <button className='button' onClick={resetTimer}>
        {isActive ? <i className="fa-solid fa-rotate-right"></i> : <i className="fa-solid fa-play"></i>}
      </button>
    </div>
  );
}
