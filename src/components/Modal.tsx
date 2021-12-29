import { PropsWithChildren } from "react";
import ReactModal from "react-modal";

type Props = {} & ReactModal.Props;

export default function Modal({
  className,
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
      backgroundColor: "#00000066",
      zIndex: 10000,
    },
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "16px",
      overflow: "auto",
      color: "var(--text-color)",
    },
  };

  return (
    <ReactModal
      style={styles}
      className={[className, "glass"].join(" ")}
      {...props}
    >
      {children}
    </ReactModal>
  );
}
