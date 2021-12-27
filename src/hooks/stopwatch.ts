import { useState } from "react";
import useInterval from "./interval";

const intervalMsDefault = 10;
const limitSecDefault = 3600;

type Props = {
  intervalMs?: number;
  limitSec?: number;
};

export default function useStopwatch({
  intervalMs = intervalMsDefault,
  limitSec = limitSecDefault,
}: Props) {
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
      if (limitSec !== undefined && limitSec * 1000 < ms) reset();
    },
    isRunning ? intervalMs : undefined
  );

  return { isRunning, ms, start, pause, reset };
}

function getNowMs() {
  return new Date().getTime();
}
