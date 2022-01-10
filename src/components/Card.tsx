import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

type Props = {
  title?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default function Card({ title, className, children, ...props }: Props) {
  return (
    <div className={clsx("root", "glass", className)} {...props}>
      {title ? <div className="header">{title}</div> : null}
      {children}
      <style jsx>{`
        .root {
          padding: 16px;
          color: var(--text-color);
          min-width: 288px;
          position: relative;
        }
        .root > .header {
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
