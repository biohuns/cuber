import { useCallback } from "react";
import useStopwatch from "../hooks/stopwatch";
import Button from "./Button";
import Card from "./Card";

type Props = {};

export default function StopwatchCard({}: Props) {
  const { isRunning, ms, start, pause, reset } = useStopwatch({});
  const durationFormat = useDurationFormat();
  const formatted = durationFormat(ms);

  return (
    <Card title="Stopwatch">
      <div className="time">{formatted}</div>
      <div className="buttons">
        <Button onClick={start} disabled={isRunning} color="green">
          Start
        </Button>
        <Button onClick={pause} disabled={!isRunning} color="orange">
          Pause
        </Button>
        <Button onClick={reset} disabled={!isRunning && ms === 0} color="red">
          Reset
        </Button>
      </div>
      <style jsx>{`
        .time {
          font-size: 3rem;
          margin-bottom: 8px;
          text-align: right;
        }
        .buttons {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </Card>
  );
}

function useDurationFormat() {
  return useCallback((ms: number) => {
    const s = ms / 1000;
    const sec = (s % 60).toFixed(2).padStart(5, "0");
    const min = Math.floor(s / 60)
      .toString()
      .padStart(2, "0");
    return `${min}:${sec}`;
  }, []);
}
