import {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useContext,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { FiCornerRightUp, FiCornerUpRight } from "react-icons/fi";
import { Axis, ICubeOptions } from "sr-visualizer";
import { settingsContext } from "../hooks/settings";
import Button from "./Button";
import Cube from "./Cube";

const cubeLength = 150;

const axisXList = [-35, 45] as const;
const defaultAxisXIndex = 0;

const axisYList = [-45, 45, 135] as const;
const defaultAxisYIndex = 1;

type Props = {} & ICubeOptions;

const RotateCube: ForwardRefRenderFunction<{ reset: () => void }, Props> = (
  props,
  ref
) => {
  const { rotationHorizontal, rotationVertical } =
    useContext(settingsContext).settings;

  const [axisXIndex, setAxisXIndex] = useState(defaultAxisXIndex);
  const [axisYIndex, setAxisYIndex] = useState(defaultAxisYIndex);

  useImperativeHandle(ref, () => ({
    reset() {
      setAxisXIndex(defaultAxisXIndex);
      setAxisYIndex(defaultAxisYIndex);
    },
  }));

  const onToggleAxisX = useCallback(
    () => setAxisXIndex((prev) => (prev === 0 ? axisXList.length - 1 : 0)),
    []
  );
  const onClickLeft = useCallback(
    () =>
      setAxisYIndex((prev) =>
        prev === axisYList.length - 1 ? prev : prev + 1
      ),
    []
  );
  const onClickRight = useCallback(
    () => setAxisYIndex((prev) => (prev === 0 ? prev : prev - 1)),
    []
  );

  const viewportRotations = useMemo<[Axis, number][]>(
    () => [
      [Axis.Y, axisYList[rotationHorizontal ? axisYIndex : defaultAxisYIndex]],
      [Axis.X, axisXList[rotationVertical ? axisXIndex : defaultAxisXIndex]],
    ],
    [rotationHorizontal, rotationVertical, axisYIndex, axisXIndex]
  );

  return (
    <div className="root">
      {rotationHorizontal ? (
        <Button
          onClick={onClickLeft}
          disabled={axisYIndex === axisYList.length - 1}
          color="none"
        >
          <FiCornerUpRight size={30} className={`button-icon-${axisXIndex}`} />
        </Button>
      ) : null}
      <Cube
        onClick={rotationVertical ? onToggleAxisX : undefined}
        viewportRotations={viewportRotations}
        width={cubeLength}
        height={cubeLength}
        {...props}
      />
      {rotationHorizontal ? (
        <Button onClick={onClickRight} disabled={axisYIndex === 0} color="none">
          <FiCornerRightUp size={30} className={`button-icon-${axisXIndex}`} />
        </Button>
      ) : null}
      <style jsx>{`
        .root {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .root :global(svg).button-icon-0 {
          transform: rotate(-45deg);
        }
        .root :global(svg).button-icon-1 {
          transform: scale(1, -1) rotate(-45deg);
        }
      `}</style>
    </div>
  );
};

export default forwardRef(RotateCube);
