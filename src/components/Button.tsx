import { ReactNode } from "react";

type Props = {
  color?: "blue" | "green" | "red";
  onClick?: () => void;
  children?: ReactNode;
};

export default function Button({ color = "blue", onClick, children }: Props) {
  const hex = (() => {
    switch (color) {
      case "blue":
        return "005eff";
      case "green":
        return "00aa11";
      case "red":
        return "ff0000";
      default:
        return "005eff";
    }
  })();

  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>{`
        button {
          display: inline-block;
          margin: 4px;
          padding: 8px 16px;
          background-color: #${hex}77;
          border: 1px solid #${hex}99;
          border-radius: 5px;
          /* backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px); */
        }
        button:hover {
          background-color: #${hex}aa;
        }
      `}</style>
    </>
  );
}
