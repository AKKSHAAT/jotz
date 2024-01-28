import { useState, useEffect, useReducer } from "react";
import React from "react";

const MINS_25 = 150; //change to 1500 for 25 mins
const MINS_5 = 5; 

const actionTypes = {
  START_TIMER: "START_TIMER",
  STOP_TIMER: "STOP_TIMER",
  RESET_TIMER: "RESET_TIMER",
  TICK: "TICK",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.START_TIMER:
      return { ...state, isActive: true };
    case actionTypes.STOP_TIMER:
      return { ...state, isActive: false };
    case actionTypes.RESET_TIMER:
      return { ...state, isActive: false, time: MINS_25 };
    case actionTypes.TICK:
      const progressValue = ((MINS_25 - state.time) / MINS_25) * 100;
      return {
        ...state,
        time: state.time > 0 ? state.time - 1 : 0,
        progress: progressValue,
      };
    default:
      return state;
  }
};

export const Pomodoro = () => {
  const [pomodoroTimer, dispatch] = useReducer(reducer, {
    type: "work",
    isActive: false,
    time: MINS_25,
    progress: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (pomodoroTimer.isActive) {
        dispatch({ type: actionTypes.TICK });
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [pomodoroTimer]);

  // Format the time for UI
  const formattedTime = `${Math.floor(pomodoroTimer.time / 60)} : ${String(
    pomodoroTimer.time % 60
  ).padStart(2, "0")}`;

  function resetTimer() {
    if (pomodoroTimer.isActive) {
      dispatch({ type: actionTypes.RESET_TIMER });
    } else {
      dispatch({ type: actionTypes.START_TIMER });
    }
  }

  return (
    <>
      <div className="pomodoro">
        <p>Pomodoro 🍅</p>
        <p>{formattedTime}</p>
        <progress value={pomodoroTimer.progress} max={100}></progress>
        <button className="button" onClick={resetTimer}>
          {pomodoroTimer.isActive ? (
            <i className="fa-solid fa-rotate-right"></i>
          ) : (
            <i className="fa-solid fa-play"></i>
          )}
        </button>
      </div>
    </>
  );
};
