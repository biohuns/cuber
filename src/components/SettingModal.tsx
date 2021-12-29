import ReactModal from "react-modal";
import Modal from "./Modal";

type Props = {} & ReactModal.Props;

export default function SettingModal(props: Props) {
  return (
    <Modal {...props}>
      <h2>Settings</h2>
    </Modal>
  );
}
