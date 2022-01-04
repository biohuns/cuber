import {
  forwardRef,
  ForwardRefRenderFunction,
  useContext,
  useImperativeHandle,
  useState,
} from "react";
import { FiCornerRightUp, FiCornerUpRight } from "react-icons/fi";
import { Axis, ICubeOptions } from "sr-visualizer";
import { settingsContext } from "../hooks/settings";
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
  const { settings } = useContext(settingsContext);
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
      {settings.rotationHorizontal ? (
        <Button
          onClick={onClickRight}
          disabled={maxAxisY <= axisY}
          color="none"
        >
          <FiCornerUpRight size={30} className="button-icon" />
        </Button>
      ) : null}
      <Cube
        onClick={settings.rotationVertical ? onToggleAxisX : undefined}
        viewportRotations={[
          [Axis.Y, axisY],
          [Axis.X, axisX],
        ]}
        width={150}
        height={150}
        {...props}
      />
      {settings.rotationHorizontal ? (
        <Button
          onClick={onClickLeft}
          disabled={!settings.rotationHorizontal || axisY <= minAxisY}
          color="none"
        >
          <FiCornerRightUp size={30} className="button-icon" />
        </Button>
      ) : null}
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
