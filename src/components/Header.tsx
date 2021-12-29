type Props = {};

export default function Header({}: Props) {
  return (
    <header className="root">
      <h1>Cube Stats</h1>
      <style jsx>{`
        .root {
          background-color: #ffffff0f;
          border-bottom: 1px solid #ffffff1a;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 9999;
        }
        .root h1 {
          color: var(--text-color);
          font-size: 24px;
          padding: 8px;
          text-align: center;
        }
      `}</style>
    </header>
  );
}
