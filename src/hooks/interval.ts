import { useEffect, useRef } from "react";

type Props = {
  intervalMilliSeconds?: number;
  onInterval?: () => void;
};

export default function useInterval({
  intervalMilliSeconds,
  onInterval,
}: Props) {
  const onIntervalRef = useRef<Props["onInterval"]>();

  useEffect(() => {
    onIntervalRef.current = onInterval;
  });

  useEffect(() => {
    if (intervalMilliSeconds === undefined) return;

    const interval = setInterval(() => {
      if (!onIntervalRef.current) return;
      onIntervalRef.current?.();
    }, intervalMilliSeconds);
    return () => clearInterval(interval);
  }, [intervalMilliSeconds, onInterval]);
}
