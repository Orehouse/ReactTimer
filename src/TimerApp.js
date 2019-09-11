import React, { useState } from "react";
import Timer from "./components/Timer";
import Interval from "./components/Interval";

const TimerApp = () => {
  const [timeInterval, setTimeInterval] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  return (
    <div>
      <Interval
        timeInterval={{ timeInterval, setTimeInterval }}
        isRunning={intervalId !== null}
      />
      <Timer
        timeInterval={timeInterval}
        currentTime={{ currentTime, setCurrentTime }}
        intervalId={{ intervalId, setIntervalId }}
      />
    </div>
  );
};

export default TimerApp;
