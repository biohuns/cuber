import { useCallback, useContext, useEffect, useRef } from "react";
import { cubeSVG, Face, ICubeOptions } from "sr-visualizer";
import { colorSchemes } from "../entity/cube";
import { settingsContext } from "../hooks/settings";

type Props = {
  onClick?: () => void;
} & ICubeOptions;

export default function Cube({ onClick, ...props }: Props) {
  const cubeRef = useRef<HTMLDivElement>(null);
  const { settings } = useContext(settingsContext);

  const clearCube = useCallback(() => {
    if (!cubeRef.current || !cubeRef.current.children) return;
    while (cubeRef.current.firstChild) {
      cubeRef.current.removeChild(cubeRef.current.firstChild);
    }
  }, []);

  useEffect(() => {
    const { width, height } = cubeRef.current.getBoundingClientRect();
    const scheme = colorSchemes[settings.facePattern];
    cubeSVG(cubeRef.current, {
      width,
      height,
      // Rubik's Cube colors palette
      // @see https://colorswall.com/palette/171
      colorScheme: {
        [Face.U]: scheme.U,
        [Face.R]: scheme.R,
        [Face.F]: scheme.F,
        [Face.D]: scheme.D,
        [Face.L]: scheme.L,
        [Face.B]: scheme.B,
      },
      stickerOpacity: props.algorithm ? 100 : 0,
      ...props,
    });
    return clearCube;
  }, [settings.facePattern, props, clearCube]);

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
