import { PropsWithChildren } from "react";
import ReactModal from "react-modal";

type Props = {} & ReactModal.Props;

export default function Modal({
  children,
  ...props
}: PropsWithChildren<Props>) {
  const styles: ReactModal.Styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      zIndex: 10000,
    },
    content: {
      position: "absolute",
      top: "100px",
      left: "100px",
      right: "100px",
      bottom: "100px",
      padding: "20px",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      color: "var(--text-color)",
      // Backdrop
      backgroundColor: "#ffffff0f",
      border: "1px solid #ffffff1a",
      borderRadius: "10px",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
    },
  };
  return (
    <ReactModal style={styles} {...props}>
      {children}
    </ReactModal>
  );
}
