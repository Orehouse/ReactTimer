import React from "react";

const Interval = props => {
  const { setTimeInterval, timeInterval } = props.timeInterval;

  const changeInterval = value => {
    setTimeInterval(timeInterval + value);
  };

  return (
    <div>
      <span>Интервал обновления секундомера: {timeInterval} сек.</span>
      <span>
        <button
          onClick={() => changeInterval(-1)}
          disabled={props.isRunning || timeInterval === 1}
          type="button"
        >
          -
        </button>
        <button
          onClick={() => changeInterval(1)}
          disabled={props.isRunning}
          type="button"
        >
          +
        </button>
      </span>
    </div>
  );
};

export default Interval;
