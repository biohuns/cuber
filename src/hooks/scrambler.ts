import Cube from "cubejs";
import { useCallback, useEffect, useState } from "react";

export default function useScrambler() {
  const [initialized, setInitialized] = useState(false);
  const [scramble, setScramble] = useState("");

  useEffect(() => {
    if (initialized) return;
    Cube.initSolver();
    setInitialized(true);
  }, [initialized]);

  const refresh = useCallback(async () => {
    if (!initialized) return;
    setScramble(Cube.scramble());
  }, [initialized]);

  useEffect(() => {
    if (!initialized) return;
    refresh();
  }, [initialized, refresh]);

  return { scramble, refresh };
}
