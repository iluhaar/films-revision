import { createPortal } from "react-dom";

import styles from "./modal.module.css";

const ModalWrapper = ({ setIsOpen, children }: Modal) => {
  return <>{setIsOpen && createPortal(<Modal setIsOpen={setIsOpen}>{children} </Modal>, document.body)}</>;
};

export default ModalWrapper;

export const Modal = ({ setIsOpen, children }: Modal) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />{" "}
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Dialog</h5>
          </div>
          <div className={styles.modalContent}>{children}</div>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </div>
    </>
  );
};

interface Modal {
  setIsOpen: (arg0: boolean) => void;
  children: React.ReactNode;
}
