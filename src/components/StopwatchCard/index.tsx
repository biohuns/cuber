import { useCallback, useRef, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { HiPause, HiPlay, HiStop } from "react-icons/hi";
import useScrambler from "../../hooks/scrambler";
import useStopwatch from "../../hooks/stopwatch";
import Button from "../Button";
import Card from "../Card";
import RotateCube from "../RotateCube";
import SettingModal from "./SettingModal";

type Props = {};

export default function StopwatchCard({}: Props) {
  const rotateCubeRef = useRef<{ reset: () => void }>();
  const { state, start, pause, reset } = useStopwatch();
  const durationFormat = useDurationFormat();
  const { scramble, refresh } = useScrambler();
  const [settingIsOpen, setSettingIsOpen] = useState(false);

  const onReset = () => {
    reset();
    refresh();
    rotateCubeRef.current?.reset();
  };

  return (
    <Card title="Stopwatch">
      <div className="root">
        <Button
          color="none"
          disabled={settingIsOpen}
          className="setting-button"
          onClick={() => setSettingIsOpen(true)}
        >
          <FiSettings size={20} color="white" />
        </Button>
        <div className="cube">
          <RotateCube algorithm={scramble} ref={rotateCubeRef} />
        </div>
        <div className="scramble">{scramble}</div>
        <div className="time">{durationFormat(state.count)}</div>
        <div className="buttons">
          {!state.isRunning ? (
            <Button onClick={start} color="green">
              <HiPlay size={20} />
              <span className="button-text">Start</span>
            </Button>
          ) : (
            <Button onClick={pause} color="orange">
              <HiPause size={20} />
              <span className="button-text">Pause</span>
            </Button>
          )}
          <Button
            onClick={onReset}
            disabled={!state.isRunning && state.count === 0}
            color="red"
          >
            <HiStop size={20} />
            <span className="button-text">Reset</span>
          </Button>
        </div>
        <SettingModal
          isOpen={settingIsOpen}
          onRequestClose={() => setSettingIsOpen(false)}
        />
        <style jsx>{`
          .root :global(.setting-button) {
            color: white;
            position: absolute;
            top: 8px;
            right: 8px;
          }
          .cube {
            margin-bottom: 8px;
          }
          .scramble {
            font-size: 1.2rem;
            text-align: center;
            margin-bottom: 16px;
          }
          .time {
            font-family: var(--font-monospace);
            font-size: 2.4rem;
            margin-bottom: 8px;
            text-align: center;
          }
          .buttons {
            display: flex;
            justify-content: center;
          }
          .button-text {
            font-family: var(--font-monospace);
            margin-left: 2px;
          }
        `}</style>
      </div>
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
