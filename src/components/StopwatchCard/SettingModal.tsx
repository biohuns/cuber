import { ReactNode, useContext } from "react";
import ReactModal from "react-modal";
import { FacePattern } from "../../entity/cube";
import { settingsContext } from "../../hooks/settings";
import Modal from "../Modal";
import RadioInput from "../RadioInput";
import GlobalPatternImg from "./global.svg";
import OldJapanPatternImg from "./old-japan.svg";

type Props = {} & ReactModal.Props;

const facePatternChoices: Array<{
  label: string;
  value: FacePattern;
  preview?: ReactNode;
}> = [
  {
    label: "Global Pattern",
    value: "global",
    preview: <GlobalPatternImg />,
  },
  {
    label: "Previous Japanese Pattern",
    value: "old-japan",
    preview: <OldJapanPatternImg />,
  },
];

export default function SettingModal(props: Props) {
  const { settings, setSettings } = useContext(settingsContext);

  return (
    <Modal {...props}>
      <div className="root">
        <h2>Settings</h2>
        <h3>Face Pattern</h3>
        <RadioInput
          name="face-pattern"
          items={facePatternChoices}
          defaultValue={settings.facePattern}
          onChange={(facePattern: FacePattern) => {
            setSettings({ ...settings, facePattern });
          }}
        />
        <style jsx>{`
          .root {
          }
        `}</style>
      </div>
    </Modal>
  );
}
