import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Container({ children }: Props) {
  return (
    <main className="root">
      {children}
      <style jsx>{`
        .root {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          column-gap: 16px;
          row-gap: 16px;
          max-width: 1024px;
          min-width: 288px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .root {
            grid-template-columns: 1fr;
            max-width: 425px;
          }
        }
      `}</style>
    </main>
  );
}
