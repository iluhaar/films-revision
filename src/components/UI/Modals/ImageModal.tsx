import { createPortal } from "react-dom";

import styles from "./modal.module.css";

const ImageModalWrapper = ({ setIsOpen, children }: Modal) => {
  return <>{setIsOpen && createPortal(<ImageModal setIsOpen={setIsOpen}>{children} </ImageModal>, document.body)}</>;
};

export default ImageModalWrapper;

export const ImageModal = ({ setIsOpen, children }: Modal) => {
  return (
    <>
      <div onClick={() => setIsOpen(false)} className={styles.modalContent}>
        {children}
      </div>
    </>
  );
};

interface Modal {
  setIsOpen: (arg0: boolean) => void;
  children: React.ReactNode;
}
