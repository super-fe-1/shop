import { Link } from 'react-router-dom';
import { PRODUCT_LINKS, MENU_LINKS } from '../constants/navigationItems';
import styles from '../styles/components/MainHeader.module.css';
import HeaderNavigation from './HeaderNavigation';
import logo from '../assets/images/logo.png';
import profilePlaceholder from '../assets/images/placeholder-profile.jpeg';

const MainHeader = () => {
  return (
    <>
      <div className={styles.header__auth}>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
      <div className={styles.header__menu}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.header__menu_image} />
        </Link>
        <HeaderNavigation links={PRODUCT_LINKS} />

        <Link to="/profile" className={styles.header__menu_profile}>
          <img src={profilePlaceholder} alt="profile" className={''} />
        </Link>
      </div>
    </>
  );
};

export default MainHeader;
