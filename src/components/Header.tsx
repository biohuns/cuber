import Link from "next/link";
import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import Button from "./Button";
import SettingModal from "./SettingModal";

type Props = {};

export default function Header({}: Props) {
  const [settingIsOpen, setSettingIsOpen] = useState(false);

  return (
    <header className="root">
      <h1>
        <Link href="/">CubeStats</Link>
      </h1>
      <Button
        color="none"
        disabled={settingIsOpen}
        className="setting-button"
        onClick={() => setSettingIsOpen(true)}
      >
        <FiSettings size={20} color="white" />
      </Button>
      <SettingModal
        isOpen={settingIsOpen}
        onRequestClose={() => setSettingIsOpen(false)}
      />
      <style jsx>{`
        .root {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          background-color: #ffffff0f;
          border-bottom: 1px solid #ffffff1a;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          justify-content: space-between;
          z-index: 9999;
        }
        .root h1 {
          color: var(--text-color);
          font-family: "Roboto Mono", monospace;
          font-size: 24px;
          font-weight: bold;
          letter-spacing: 0.2rem;
          padding: 10px;
        }
        .root .setting-button {
          color: white;
        }
      `}</style>
    </header>
  );
}
