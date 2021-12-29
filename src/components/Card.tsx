import { ReactNode } from "react";

type Props = { title?: string; children: ReactNode };

export default function Card({ title, children }: Props) {
  return (
    <div className="root glass">
      {title ? <div className="header">{title}</div> : null}
      {children}
      <style jsx>{`
        .root {
          padding: 16px;
          color: var(--text-color);
          min-width: 288px;
          position: relative;
        }
        .root .header {
          font-family: var(--font-monospace);
          font-size: 1.4rem;
          font-weight: bold;
          margin-bottom: 16px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
