import useStopwatch from "../hooks/stopwatch";
import Button from "./Button";
import Card from "./Card";

type Props = {};

export default function StopwatchCard({}: Props) {
  // const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
  //   useStopwatch({ autoStart: false });

  const { isRunning, seconds, start, reset } = useStopwatch();

  return (
    <Card>
      <div style={{ textAlign: "center" }}>
        <h1>react-timer-hook</h1>
        <p>Stopwatch Demo</p>
        <div style={{ fontSize: "100px" }}>
          <span>{seconds.toFixed(2)}</span>
        </div>
        <p>{isRunning ? "Running" : "Not running"}</p>
        <Button onClick={start} color="green">
          Start
        </Button>
        {/* <Button onClick={pause}>Pause</Button> */}
        <Button onClick={reset} color="red">
          Stop
        </Button>
      </div>
    </Card>
  );
}
