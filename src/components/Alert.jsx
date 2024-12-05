import ReactDOM from 'react-dom';
import styles from '../styles/components/Alert.module.css';
import { IoIosClose } from 'react-icons/io';

const Alert = ({ isAlertShow, onClose, children }) => {
  if (!isAlertShow) return null;

  return ReactDOM.createPortal(
    <section className={styles.alert__container}>
      <button onClick={onClose} className={styles.alert__close}>
        <IoIosClose />
      </button>
      {children}
    </section>,
    document.getElementById('alert')
  );
};

export default Alert;
