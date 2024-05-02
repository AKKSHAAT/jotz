import { useState, useEffect, useReducer } from "react";
import React from "react";

const MINS_25 = 1500; //change to 1500 for 25 mins
const MINS_5 = 900;

const actionTypes = {
  START_TIMER: "START_TIMER",
  STOP_TIMER: "STOP_TIMER",
  RESET_TIMER: "RESET_TIMER",
  SWITCH_TO_BREAK: "SWITCH_TO_BREAK",
  SWITCH_TO_WORK: "SWITCH_TO_WORK",
  TICK: "TICK",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.START_TIMER:
      return {
        ...state,
        isActive: true,
      };
    case actionTypes.STOP_TIMER:
      return {
        ...state,
        isActive: false,
      };
    case actionTypes.RESET_TIMER:
      return {
        ...state,
        isActive: false,
        time: action.payload,
      };
    case actionTypes.TICK:
      const progressValue =
        ((state.initialTime - state.time) / state.initialTime) * 100;
      return {
        ...state,
        time: state.time > 0 ? state.time - 1 : 0,
        progress: progressValue,
      };
    case actionTypes.SWITCH_TO_BREAK:
      return {
        type: "break",
        isActive: true,
        time: MINS_5,
        initialTime: MINS_5,
        progress: 0,
      };
    case actionTypes.SWITCH_TO_WORK:
      return {
        type: "work",
        isActive: true,
        time: MINS_25,
        initialTime: MINS_25,
        progress: 0,
      };
    default:
      return state;
  }
};

export const usePomodoro = () => {
  const [pomodoroTimer, dispatch] = useReducer(reducer, {
    type: "work",
    isActive: false,
    time: MINS_25,
    initialTime: MINS_25,
    progress: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (pomodoroTimer.isActive) {
        dispatch({ type: actionTypes.TICK });

        if (pomodoroTimer.time === 0) {
          // Switch to the other timer type
          dispatch({
            type:
              pomodoroTimer.type === "work"
                ? actionTypes.SWITCH_TO_BREAK
                : actionTypes.SWITCH_TO_WORK,
          });
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [pomodoroTimer]);

  const formattedTime = `${Math.floor(pomodoroTimer.time / 60)} : ${String(
    pomodoroTimer.time % 60
  ).padStart(2, "0")}`;

  function resetTimer() {
    if (pomodoroTimer.isActive) {
      dispatch({
        type: actionTypes.STOP_TIMER,
      });
    } else {
      dispatch({ type: actionTypes.START_TIMER });
    }
  }

  return {
    pomodoroTimer,
    RenderTimer: (
      <>
        <div className="pomodoro">
          <p>Pomodoro 🍅</p>
          <p className="title">
            {pomodoroTimer.type === "work" ? "work- shes" : "break- sesh"}
          </p>
          <p>{formattedTime}</p>
          <progress className="p-bar" value={pomodoroTimer.progress} max={100}></progress>
          <button className="button" onClick={resetTimer}>
            {pomodoroTimer.isActive ? (
              <i class="fa-solid fa-pause"></i>
            ) : (
              <i className="fa-solid fa-play"></i>
            )}
          </button>
        </div>
      </>
    ),
  };
};
