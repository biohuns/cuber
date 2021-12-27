import { useState } from "react";
import useInterval from "./interval";

type Props = {
  interval?: number;
  limit?: number;
};

export default function useStopwatch({ interval = 10, limit }: Props) {
  const [isRunning, setIsRunning] = useState(false);
  const [startMs, setStartMs] = useState(NaN);
  const [ms, setMs] = useState(0);

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

  useInterval(
    () => {
      setMs(Number.isNaN(startMs) ? 0 : getNowMs() - startMs);
      if (limit !== undefined && limit < ms) reset();
    },
    isRunning ? interval : undefined
  );

  return { isRunning, ms, start, pause, reset };
}

function getNowMs() {
  return new Date().getTime();
}
