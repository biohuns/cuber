import { useCallback, useEffect, useRef } from "react";
import { cubeSVG, Face, ICubeOptions } from "sr-visualizer";

type Props = {
  onClick?: () => void;
} & ICubeOptions;

export default function Cube({ onClick, ...props }: Props) {
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
      // Rubik's Cube colors palette
      // @see https://colorswall.com/palette/171
      colorScheme: {
        [Face.U]: "#ffd500",
        [Face.R]: "#b71234",
        [Face.F]: "#0046ad",
        [Face.D]: "#ffffff",
        [Face.L]: "#ff5800",
        [Face.B]: "#009b48",
      },
      stickerOpacity: props.algorithm ? 100 : 0,
      ...props,
    });
    return clearCube;
  }, [props, clearCube]);

  return (
    <div ref={cubeRef} onClick={onClick} className="root">
      <style jsx>{`
        .root {
          cursor: ${onClick ? "pointer" : "auto"};
        }
      `}</style>
    </div>
  );
}
