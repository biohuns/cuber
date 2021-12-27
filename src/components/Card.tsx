import { ReactNode } from "react";

type Props = { title?: string; children: ReactNode };

export default function Card({ title, children }: Props) {
  return (
    <div className="root">
      {title ? <div className="header">{title}</div> : null}
      {children}
      <style jsx>{`
        .root {
          padding: 16px;
          color: var(--text-color);

          background-color: #ffffff0f;
          border: 1px solid #ffffff1a;
          border-radius: 10px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .header {
          font-size: 1.4rem;
          font-weight: bold;
          margin-bottom: 8px;
        }
      `}</style>
    </div>
  );
}
