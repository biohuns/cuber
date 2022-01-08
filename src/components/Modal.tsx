import clsx from "clsx";
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
      inset: "0 0 0 0",
      backgroundColor: "#00000066",
      zIndex: 10000,
    },
    content: {
      position: "absolute",
      inset: "50% auto auto 50%",
      marginRight: "-25%",
      transform: "translate(-50%, -50%)",
      padding: "16px",
      overflow: "auto",
      color: "var(--text-color)",
      outline: "none",
      maxHeight: "calc(100vh - 32px)",
    },
  };

  return (
    <ReactModal
      style={styles}
      className={clsx(className, "glass")}
      bodyOpenClassName="body-open-modal"
      {...props}
    >
      {children}
      <style jsx>{`
        :global(.body-open-modal) {
          overflow: hidden;
        }
      `}</style>
    </ReactModal>
  );
}
