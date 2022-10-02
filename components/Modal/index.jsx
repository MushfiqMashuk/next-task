import { useEffect } from "react";
import ModalTitle from "../ModalTitle";
import styles from "./modal.module.scss";

const Modal = ({ onClose, children = null, title = "Hello There" }) => {
  useEffect(() => {
    document.body.classList.add(styles.overflow_hidden);

    return () => document.body.classList.remove(styles.overflow_hidden);
  });

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <div className={styles.close_button_container} onClick={onClose}>
          <span className={styles.close_button}>&times;</span>
        </div>
        <ModalTitle>{title}</ModalTitle>
        <div className={styles.modal_body}>{children && children}</div>
      </div>
    </div>
  );
};

export default Modal;
