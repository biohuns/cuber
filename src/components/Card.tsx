import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Card({ children }: Props) {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          padding: 16px;
          color: var(--text-color);

          background-color: #ffffff0f;
          border: 1px solid #ffffff1a;
          border-radius: 10px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
      `}</style>
    </>
  );
}
