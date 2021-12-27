import { useEffect, useRef } from "react";

export default function useInterval(callback: () => void, ms?: number) {
  const onIntervalRef = useRef<() => void>();

  useEffect(() => {
    onIntervalRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (ms === undefined) return;

    const interval = setInterval(() => {
      if (!onIntervalRef.current) return;
      onIntervalRef.current();
    }, ms);
    return () => clearInterval(interval);
  }, [ms]);
}
