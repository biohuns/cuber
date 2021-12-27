import { ReactNode } from "react";

type Props = {
  color?: "red" | "green" | "blue" | "orange";
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
};

export default function Button({
  disabled,
  color = "blue",
  onClick,
  children,
}: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={["root", color].join(" ")}
    >
      {children}
      <style jsx>{`
        .root {
          margin: 4px;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 1rem;
        }
        .root:disabled,
        .root:hover:disabled {
          background-color: #33333377;
          border: 1px solid #33333399;
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
      `}</style>
    </button>
  );
}
