import { useCallback, useRef } from "react";
import { HiPause, HiPlay, HiStop } from "react-icons/hi";
import useScrambler from "../hooks/scrambler";
import useStopwatch from "../hooks/stopwatch";
import Button from "./Button";
import Card from "./Card";
import RotateCube from "./RotateCube";

type Props = {};

export default function StopwatchCard({}: Props) {
  const rotateCubeRef = useRef<{ reset: () => void }>();
  const { isRunning, ms, start, pause, reset } = useStopwatch({});
  const durationFormat = useDurationFormat();
  const { scramble, refresh } = useScrambler();

  const onReset = () => {
    refresh();
    reset();
    rotateCubeRef.current?.reset();
  };

  return (
    <Card title="Stopwatch">
      <div className="cube">
        <RotateCube algorithm={scramble} ref={rotateCubeRef} />
      </div>
      <div className="scramble">{scramble}</div>
      <div className="time">{durationFormat(ms)}</div>
      <div className="buttons">
        <Button onClick={start} disabled={isRunning} color="green">
          <HiPlay size={20} className="button-icon" />
          <span className="button-text">Start</span>
        </Button>
        <Button onClick={pause} disabled={!isRunning} color="orange">
          <HiPause size={20} />
          <span className="button-text">Pause</span>
        </Button>
        <Button onClick={onReset} disabled={!isRunning && ms === 0} color="red">
          <HiStop size={20} />

          <span className="button-text">Reset</span>
        </Button>
      </div>
      <style jsx>{`
        .cube {
          margin-bottom: 8px;
        }
        .scramble {
          font-size: 1.2rem;
          text-align: center;
          margin-bottom: 16px;
        }
        .time {
          font-size: 3rem;
          font-family: "Roboto Mono", monospace;
          margin-bottom: 8px;
          text-align: center;
        }
        .buttons {
          display: flex;
          justify-content: center;
        }
        .button-text {
          margin-left: 2px;
        }
        @media (max-width: 374px) {
          .button-text {
            display: none;
          }
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
