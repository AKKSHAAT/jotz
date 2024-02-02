import React, { useReducer, useEffect } from "react";
import { Explorer } from "./Explorer";
import { usePomodoro } from "./usePomodoro";

export const LeftMenu = () => {
  const { RenderTimer, pomodoroTimer } = usePomodoro();

  const workTime = pomodoroTimer.isActive && pomodoroTimer.type === "work";

  function reducer(state, action) {
    switch (action.type) {
      case "TOGGLE_POMODORO":
        return { ...state, Pomodoro: !state.Pomodoro, Explorer: false };
      // return { ...state, Pomodoro: !state.Pomodoro }; use this if you want one thing opened at a time

      case "TOGGLE_EXPLORER":
        return { ...state, Explorer: !state.Explorer, Pomodoro: false };

      default:
        return state;
    }
  }

  const [hamburger, dispatch] = useReducer(reducer, {
    Pomodoro: true,
    Explorer: false,
  });

  useEffect(() => {
    const leftElement = document.getElementById("left");
    leftElement.classList.toggle(
      "isOpen",
      hamburger.Pomodoro || hamburger.Explorer
    );
  }, [hamburger.Pomodoro, hamburger.Explorer]);

  const PomodoroStyle = {
    display: hamburger.Pomodoro ? "block" : "none",
    zIndex: hamburger.Pomodoro ? 100 : -100,
  };

  const ExplorerStyle = {
    display: hamburger.Explorer ? "block" : "none",
    zIndex: hamburger.Explorer ? 100 : -100,
  };
  return (
    <div id="left">
      <div className= {`ham-burger ${workTime ? "make-red" : ""}`}>
        <button
          className="button"
          onClick={() => dispatch({ type: "TOGGLE_EXPLORER" })}
        >
          🗒️
        </button>
        <button
          className="button"
          onClick={() => dispatch({ type: "TOGGLE_POMODORO" })}
        >
          🍅
        </button>
      </div>

      <section className={workTime ? "make-red" : ""}>
        {hamburger.Explorer ? <Explorer style={ExplorerStyle} /> : <></>}
        {hamburger.Pomodoro ? (
          <div style={PomodoroStyle}>{RenderTimer}</div>
        ) : (
          <></>
        )}
      </section>
    </div>
  );
};
