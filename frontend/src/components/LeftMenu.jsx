import React, { useReducer , useEffect} from 'react';
import { Explorer } from './Explorer';
import { Pomodoro } from './Pomodoro';

export const LeftMenu = () => {
  function reducer(state, action) {
    switch (action.type) {
      case 'TOGGLE_POMODORO':
        return { ...state, Pomodoro: !state.Pomodoro, Explorer: false };
        // return { ...state, Pomodoro: !state.Pomodoro , Explorer: false};  use this if you want one thing opened at a time
        
        case 'TOGGLE_EXPLORER':
        return { ...state, Explorer: !state.Explorer, Pomodoro: false };

      default:
        return state;
    }
  }
  
  const [hamburger, dispatch] = useReducer(reducer, {
    Pomodoro: false,
    Explorer: false,
  });

  useEffect(() => {
  const leftElement = document.getElementById('left');
  leftElement.classList.toggle('isOpen', hamburger.Pomodoro || hamburger.Explorer);
}, [hamburger.Pomodoro, hamburger.Explorer]);

  const PomodoroStyle = {
    display: hamburger.Pomodoro ? 'block' : 'none',
    zIndex: hamburger.Pomodoro ? 100 : -100,
  };

  const ExplorerStyle = {
    display: hamburger.Explorer ? 'block' : 'none',
    zIndex: hamburger.Explorer ? 100 : -100,
  };

  return (
    <div id="left">
      <div className='ham-burger'>
        <button className='button' onClick={() => dispatch({ type: 'TOGGLE_POMODORO' })}>
          🍅
        </button>
        <button className='button' onClick={() => dispatch({ type: 'TOGGLE_EXPLORER' })}>
          🗒️
        </button>
      </div>

      <section>
        {hamburger.Pomodoro ? <Pomodoro style={PomodoroStyle} /> : <></>}
        {hamburger.Explorer ? <Explorer style={ExplorerStyle} /> : <></>}
      </section>
    </div>
  );
};
