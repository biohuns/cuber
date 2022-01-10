import HistoryCard from "../components/HistoryCard";
import Logo from "../components/Logo";
import ManualCard from "../components/ManualCard";
import StopwatchCard from "../components/StopwatchCard";

export default function Home() {
  return (
    <main className="root">
      <Logo className="logo" />
      <StopwatchCard className="stopwatch-card" />
      <HistoryCard className="history-card" />
      <ManualCard className="manual-card" />
      <style jsx>{`
        .root {
          display: grid;
          column-gap: 16px;
          row-gap: 16px;
          grid-template-columns: 1fr;

          max-width: 393px;
          min-width: 288px;
          margin: 0 auto;
          padding: 16px;
        }
        @media (min-width: 768px) {
          .root {
            grid-template-columns: 2fr;
            grid-template-areas:
              "head head"
              "left right"
              "foot foot";
            max-width: 768px;
          }
          .root > :global(.logo) {
            grid-area: head;
          }
          .root > :global(.stopwatch-card) {
            grid-area: left;
            max-width: 360px;
          }
          .root > :global(.history-card) {
            grid-area: right;
            max-width: 360px;
          }
          .root > :global(.manual-card) {
            grid-area: foot;
          }
        }
      `}</style>
    </main>
  );
}
