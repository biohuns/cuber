import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useState,
} from "react";
import { FiCornerRightUp, FiCornerUpRight } from "react-icons/fi";
import { Axis, ICubeOptions } from "sr-visualizer";
import Button from "./Button";
import Cube from "./Cube";

const defaultAxisX = -35;
const defaultAxisY = 45;
const maxAxisY = 135;
const minAxisY = -45;

type Props = {} & ICubeOptions;

const RotateCube: ForwardRefRenderFunction<{ reset: () => void }, Props> = (
  props,
  ref
) => {
  const [axisX, setAxisX] = useState(defaultAxisX);
  const [axisY, setAxisY] = useState(defaultAxisY);

  useImperativeHandle(ref, () => ({
    reset() {
      setAxisX(defaultAxisX);
      setAxisY(defaultAxisY);
    },
  }));

  const onToggleAxisX = () => setAxisX((prev) => (prev === -35 ? 45 : -35));
  const onClickLeft = () => {
    if (axisY <= minAxisY) return;
    setAxisY((prev) => prev - 90);
  };
  const onClickRight = () => {
    if (maxAxisY <= axisY) return;
    setAxisY((prev) => prev + 90);
  };

  return (
    <div className="root">
      <Button onClick={onClickRight} disabled={maxAxisY <= axisY} color="none">
        <FiCornerUpRight size={30} className="button-icon" />
      </Button>
      <Cube
        onClick={onToggleAxisX}
        viewportRotations={[
          [Axis.Y, axisY],
          [Axis.X, axisX],
        ]}
        width={150}
        height={150}
        {...props}
      />
      <Button onClick={onClickLeft} disabled={axisY <= minAxisY} color="none">
        <FiCornerRightUp size={30} className="button-icon" />
      </Button>
      <style jsx>{`
        .root {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .root :global(svg).button-icon {
          transform: rotate(-45deg);
        }
      `}</style>
    </div>
  );
};

export default forwardRef(RotateCube);
