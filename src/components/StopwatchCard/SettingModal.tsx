import ReactModal from "react-modal";
import Modal from "../Modal";

type Props = {} & ReactModal.Props;

export default function SettingModal(props: Props) {
  return (
    <Modal {...props}>
      <div className="root">
        <h2>Settings</h2>
        <h3>Face Pattern</h3>
        <style jsx>{`
          .root {
          }
        `}</style>
      </div>
    </Modal>
  );
}
