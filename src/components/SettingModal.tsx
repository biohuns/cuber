import { ReactNode, useContext } from "react";
import ReactModal from "react-modal";
import { FacePattern } from "../entity/cube";
import { settingsContext } from "../hooks/settings";
import GiikerPatternImg from "../images/StopwatchCard/giiker.svg";
import GlobalPatternImg from "../images/StopwatchCard/global.svg";
import OldJapanPatternImg from "../images/StopwatchCard/old-japan.svg";
import Modal from "./Modal";
import RadioInput from "./RadioInput";
import SwitchInput from "./SwitchInput";

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
  {
    label: "GiiKER Cube Pattern",
    value: "giiker",
    preview: <GiikerPatternImg />,
  },
];

export default function SettingModal(props: Props) {
  const { settings, setSettings } = useContext(settingsContext);

  return (
    <Modal {...props}>
      <h2>Settings</h2>
      <h3>Rotation</h3>
      <SwitchInput
        name="rotation-horizontal"
        label="Horizontal"
        defaultChecked={settings.rotationHorizontal}
        onChange={(rotationHorizontal: boolean) =>
          setSettings({ ...settings, rotationHorizontal })
        }
      />
      <SwitchInput
        name="rotation-vertical"
        label="Vertical"
        defaultChecked={settings.rotationVertical}
        onChange={(rotationVertical: boolean) =>
          setSettings({ ...settings, rotationVertical })
        }
      />
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
        h2 {
          text-align: center;
          margin-top: 0;
        }
      `}</style>
    </Modal>
  );
}
