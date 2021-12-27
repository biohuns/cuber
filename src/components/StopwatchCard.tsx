import useStopwatch from "../hooks/stopwatch";
import Button from "./Button";
import Card from "./Card";

type Props = {};

export default function StopwatchCard({}: Props) {
  const { isRunning, ms, start, pause, reset } = useStopwatch({});

  return (
    <Card title="Stopwatch">
      <div className="time">
        <span>{(ms / 1000).toFixed(2)}</span>
      </div>
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
