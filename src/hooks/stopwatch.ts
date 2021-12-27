import { useState } from "react";
import useInterval from "./interval";

type Props = {
  interval?: number;
};

export default function useStopwatch({ interval = 10 }: Props) {
  const [isRunning, setIsRunning] = useState(false);
  const [startMs, setStartMs] = useState(NaN);
  const [ms, setMs] = useState(0);

  useInterval(
    () => setMs(Number.isNaN(startMs) ? 0 : getNowMs() - startMs),
    isRunning ? interval : undefined
  );

  const start = () => {
    setStartMs(getNowMs() - ms);
    setIsRunning(true);
  };

  const pause = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setIsRunning(false);
    setStartMs(NaN);
    setMs(0);
  };

  return { isRunning, ms, start, pause, reset };
}

function getNowMs() {
  return new Date().getTime();
}
