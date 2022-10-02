import styles from "./modalTitle.module.scss";

const ModalTitle = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};

export default ModalTitle;
