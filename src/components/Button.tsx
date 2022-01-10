import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = {
  color?: "default" | "red" | "green" | "blue" | "orange" | "none";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  color = "default",
  disabled,
  className,
  onClick,
  children,
}: PropsWithChildren<Props>) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx("root", `color-${color}`, className)}
    >
      {children}
      <style jsx>{`
        .root {
          margin: 4px;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .root.color-default {
          background-color: #ffffff0f;
          border: 1px solid #ffffff1a;
        }
        .root.color-default:hover {
          background-color: #ffffff32;
        }
        .root.color-red {
          background-color: #ff000077;
          border: 1px solid #ff000099;
        }
        .root.color-red:hover {
          background-color: #ff0000aa;
        }
        .root.color-green {
          background-color: #00aa1177;
          border: 1px solid #00aa1199;
        }
        .root.color-green:hover {
          background-color: #00aa11aa;
        }
        .root.color-blue {
          background-color: #005eff77;
          border: 1px solid #005eff99;
        }
        .root.color-blue:hover {
          background-color: #005effaa;
        }
        .root.color-orange {
          background-color: #ffa50077;
          border: 1px solid #ffa50099;
        }
        .root.color-orange:hover {
          background-color: #ffa500aa;
        }
        .root[class*="color-"]:disabled,
        .root[class*="color-"]:disabled:hover {
          background-color: #33333377;
          border: 1px solid #33333399;
          color: #575757;
        }
        .root.color-none,
        .root.color-none:hover,
        .root.color-none:disabled,
        .root.color-none:disabled:hover {
          background: none;
          border: none;
        }
      `}</style>
    </button>
  );
}
