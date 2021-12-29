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
      className={[className, "root", color].join(" ")}
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
        .root:disabled,
        .root:hover:disabled {
          background-color: #33333377;
          border: 1px solid #33333399;
          color: #575757;
        }
        .default {
          background-color: #ffffff0f;
          border: 1px solid #ffffff1a;
        }
        .default:hover {
          background-color: #ffffff32;
        }
        .red {
          background-color: #ff000077;
          border: 1px solid #ff000099;
        }
        .red:hover {
          background-color: #ff0000aa;
        }
        .green {
          background-color: #00aa1177;
          border: 1px solid #00aa1199;
        }
        .green:hover {
          background-color: #00aa11aa;
        }
        .blue {
          background-color: #005eff77;
          border: 1px solid #005eff99;
        }
        .blue:hover {
          background-color: #005effaa;
        }
        .orange {
          background-color: #ffa50077;
          border: 1px solid #ffa50099;
        }
        .orange:hover {
          background-color: #ffa500aa;
        }
        .none,
        .none:hover,
        .none:disabled,
        .none:hover:disabled {
          background: none;
          border: none;
        }
      `}</style>
    </button>
  );
}
