import { useState } from "react";
import useInterval from "./interval";

export default function useStopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [startMilliSeconds, setStartMilliSeconds] = useState(NaN);
  const [seconds, setSeconds] = useState(0);

  useInterval({
    intervalMilliSeconds: isRunning ? 10 : undefined,
    onInterval: () => {
      setSeconds(
        Number.isNaN(startMilliSeconds)
          ? 0
          : (getNowMilliSeconds() - startMilliSeconds) / 1000
      );
    },
  });

  const start = () => {
    setStartMilliSeconds(getNowMilliSeconds());
    setIsRunning(true);
  };

  const reset = () => {
    setIsRunning(false);
    setStartMilliSeconds(NaN);
  };

  return { isRunning, seconds, start, reset };
}

function getNowMilliSeconds() {
  return new Date().getTime();
}
