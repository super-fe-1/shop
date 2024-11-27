import { Link } from 'react-router-dom';
import styles from '../styles/components/HeaderNavigation.module.css';

const HeaderNavigation = ({ links }) => {
  return (
    <ul className={styles.list}>
      {Object.values(links).map((link) => {
        return (
          <li>
            <Link to={link.link}>{link.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderNavigation;
