import { useCallback, useEffect, useRef } from "react";
import { cubeSVG, ICubeOptions } from "sr-visualizer";
import styles from "../styles/components/Cube.module.css";

type Props = {} | ICubeOptions;

export default function Cube(props: Props) {
  const cubeRef = useRef<HTMLDivElement>();

  const clearCube = useCallback(() => {
    if (!cubeRef.current.children) return;
    Array.from(cubeRef.current.children).forEach((child) =>
      cubeRef.current.removeChild(child)
    );
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

  return <div ref={cubeRef} className={styles.cube}></div>;
}
