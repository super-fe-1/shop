import { Link } from 'react-router-dom';
import styles from '../styles/components/DropdownMenu.module.css';

const DropdownMenu = ({ links, onClick }) => {
  return (
    <ul className={styles.dropdown}>
      {links.map((link, i) => {
        return (
          <li key={i} onClick={onClick}>
            <Link to={link.link} className={styles.dropdown__link}>
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DropdownMenu;
