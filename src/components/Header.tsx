import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="root glass-bottom">
      <div className="left" />
      <h1>
        <Link href="/">CubeStats</Link>
      </h1>
      <div className="right" />
      <style jsx>{`
        .root {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          z-index: 9999;
        }
        .root h1 {
          color: var(--text-color);
          font-family: var(--font-monospace);
          font-size: 1rem;
          font-weight: normal;
          letter-spacing: 0.1rem;
          padding: 7px;
        }
      `}</style>
    </header>
  );
}
