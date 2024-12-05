import { Link } from 'react-router-dom';
import styles from '../styles/components/DropdownMenu.module.css';

const DropdownMenu = ({ links }) => {
  return (
    <ul className={styles.dropdown}>
      {links.map((link, i) => {
        return (
          <li key={i}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DropdownMenu;
