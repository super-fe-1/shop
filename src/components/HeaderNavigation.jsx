import { Link } from 'react-router-dom';
import styles from '../styles/components/HeaderNavigation.module.css';

const HeaderNavigation = ({ links }) => {
  return (
    <ul className={styles.list}>
      {Object.values(links).map((link, i) => {
        return (
          <li key={i}>
            <Link to={link.link}>{link.name?.toUpperCase()}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderNavigation;
