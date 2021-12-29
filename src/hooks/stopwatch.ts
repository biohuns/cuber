import { useReducer } from "react";
import useInterval from "./interval";

const intervalMilliSeconds = 10;
const limitSeconds = 3600;

type State = {
  isRunning: boolean;
  start: number;
  count: number;
};

type Action = {
  type: "COUNT" | "START" | "PAUSE" | "RESET";
};

const initialState: State = {
  isRunning: false,
  start: 0,
  count: 0,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "COUNT":
      if (!state.isRunning) return state;
      if (Number.isNaN(state.start)) return { ...state, count: 0 };
      const count = getNowMs() - state.start;
      if (limitSeconds * 1000 < count)
        return { isRunning: false, start: NaN, count: 0 };
      return { ...state, count };
    case "START":
      return { ...state, isRunning: true, start: getNowMs() - state.count };
    case "PAUSE":
      return { ...state, isRunning: false };
    case "RESET":
      return { isRunning: false, start: NaN, count: 0 };
  }
};

export default function useStopwatch() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const start = () => dispatch({ type: "START" });
  const pause = () => dispatch({ type: "PAUSE" });
  const reset = () => dispatch({ type: "RESET" });

  useInterval(
    () => dispatch({ type: "COUNT" }),
    state.isRunning ? intervalMilliSeconds : undefined
  );

  return { state, start, pause, reset };
}

function getNowMs() {
  return new Date().getTime();
}
