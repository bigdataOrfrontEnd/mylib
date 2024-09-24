import React from 'react';
import styles from './index.module.less';

interface ModalProps {
  visible: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ visible, title, onClose, children }) => {
  if (!visible) return null;
console.log(styles);

  return (
    <div className={styles.modal}>
      <div className={styles.modalMask} onClick={onClose}></div>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <span className={styles.modalTitle}>{title}</span>
          <button className={styles.modalClose} onClick={onClose}>×</button>
        </div>
        <div className={styles.modalBody}>
          {children}
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.modalOk} onClick={onClose}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
