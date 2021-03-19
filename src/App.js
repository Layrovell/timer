import React, { useState, useEffect } from 'react';
import './App.scss';
import './styles/reset.scss';
import { interval } from 'rxjs';
import { Buttons } from './components/Buttons/Buttons';
import { Countdown } from "./components/Countdown/Countdown";

function App() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    const countdown$ = interval(1000)
      .subscribe(() => {
        if (timerOn === true) {
          setTime(prevTime => prevTime + 1)
        }
      });

    return () => {
      countdown$.unsubscribe();
    };
  }, [timerOn]);

  const startStop = () => {
    setTimerOn(!timerOn);
  };

  const wait = () => {
    setTimerOn(false);
  };

  const reset = () => {
    setTime(0);
    setTimerOn(false);
  };

  const show = () => {
    setShowInfo(true);
  };

  return (
    <div className="App">
      <div className="App-container">
        {showInfo && (
          <button className="delete" onClick={() => {
            setShowInfo(false);
            console.log('close')
          }}/>
        )}

        {!showInfo && (
          <button
            onClick={show}
            className="button is-link"
          >
            Show
          </button>
        )}

        {showInfo && (
            <div className="box">
              <Countdown time={time}/>
              <Buttons
                onStartStop={startStop}
                onWait={wait}
                onReset={reset}
              />
            </div>
        )}
      </div>
    </div>
  );
};

export default App;
