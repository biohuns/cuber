import ReactModal from "react-modal";
import Modal from "../Modal";

type Props = {} & ReactModal.Props;

export default function SettingModal(props: Props) {
  return (
    <Modal {...props}>
      <div className="root">
        <h2>Settings</h2>
        <style jsx>{`
          .root {
          }
          .root h2 {
            font-size: 1.2rem;
            font-weight: bold;
          }
        `}</style>
      </div>
    </Modal>
  );
}
