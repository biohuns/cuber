import { useCallback } from "react";
import useScrambler from "../hooks/scrambler";
import useStopwatch from "../hooks/stopwatch";
import Button from "./Button";
import Card from "./Card";
import Cube from "./Cube";

type Props = {};

export default function StopwatchCard({}: Props) {
  const { isRunning, ms, start, pause, reset } = useStopwatch({});
  const durationFormat = useDurationFormat();
  const { scramble, refresh } = useScrambler();

  const onReset = () => {
    refresh();
    reset();
  };

  return (
    <Card title="Stopwatch">
      {scramble ? (
        <>
          <div className="scramble">{scramble}</div>
          <div className="cube">
            <Cube width={150} height={150} algorithm={scramble} />
          </div>
        </>
      ) : null}
      <div className="time">{durationFormat(ms)}</div>
      <div className="buttons">
        <Button onClick={start} disabled={isRunning} color="green">
          Start
        </Button>
        <Button onClick={pause} disabled={!isRunning} color="orange">
          Pause
        </Button>
        <Button onClick={onReset} disabled={!isRunning && ms === 0} color="red">
          Reset
        </Button>
      </div>
      <style jsx>{`
        .time {
          font-size: 3rem;
          margin-bottom: 8px;
          text-align: center;
        }
        .buttons {
          display: flex;
          justify-content: center;
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
