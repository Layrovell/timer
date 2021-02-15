import React, { useState, useEffect } from 'react';
import './App.scss';
import './styles/reset.scss';
import { interval } from 'rxjs';
import { Buttons } from './components/Buttons/Buttons';
import { Countdown } from "./components/Countdown/Countdown";

function App() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

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

  return (
    <div className="App">
      <div className="box">
        <Countdown time={time}/>
        <Buttons
          onStartStop={startStop}
          onWait={wait}
          onReset={reset}
        />
      </div>
    </div>
  );
};

export default App;
