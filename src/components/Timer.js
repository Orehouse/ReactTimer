import React, { useRef, useEffect } from "react";

const TimerComponent = props => {
  const { currentTime, setCurrentTime } = props.currentTime;
  const { intervalId, setIntervalId } = props.intervalId;
  const timeInterval = props.timeInterval;

  const refTime = useRef(0);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleStart = () => {
    refTime.current = currentTime;
    const id = setInterval(() => {
      refTime.current += timeInterval;
      setCurrentTime(refTime.current);
    }, timeInterval * 1000);
    setIntervalId(id);
  };

  const handleStop = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setCurrentTime(0);
  };

  return (
    <React.Fragment>
      <div>Секундомер: {currentTime} сек.</div>
      <div>
        <button
          onClick={handleStart}
          disabled={intervalId !== null}
          type="button"
        >
          Старт
        </button>
        <button onClick={handleStop} type="button">
          Стоп
        </button>
      </div>
    </React.Fragment>
  );
};

export default TimerComponent;
