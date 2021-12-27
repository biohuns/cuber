import { useCallback, useEffect, useRef } from "react";
import { cubeSVG, ICubeOptions } from "sr-visualizer";

type Props = {} | ICubeOptions;

export default function Cube(props: Props) {
  const cubeRef = useRef<HTMLDivElement>(null);

  const clearCube = useCallback(() => {
    if (!cubeRef.current || !cubeRef.current.children) return;
    while (cubeRef.current.firstChild) {
      cubeRef.current.removeChild(cubeRef.current.firstChild);
    }
  }, []);

  useEffect(() => {
    const { width, height } = cubeRef.current.getBoundingClientRect();
    cubeSVG(cubeRef.current, {
      width,
      height,
      ...props,
    });
    return clearCube;
  }, [props, clearCube]);

  return <div ref={cubeRef}></div>;
}
