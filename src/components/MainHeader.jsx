import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_LINKS } from '../constants/navigationItems';
import styles from '../styles/components/MainHeader.module.css';
import HeaderNavigation from './HeaderNavigation';
import DropdownMenu from './DropdownMenu';
import logo from '../assets/images/logo.png';
import profilePlaceholder from '../assets/images/placeholder-profile.jpeg';

const MainHeader = () => {
  const isLoggedIn = true;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profileLink, setProfileLink] = useState([
    {
      link: '/profile',
      name: '마이페이지',
    },
  ]);
  // TODO: 로그인 기능 완료 후 조건부로 state 관리
  // { link: '/login', name: '로그인하기' }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
        <div className={styles.header__menu_profileWrapper}>
          <button
            onClick={toggleDropdown}
            className={styles.header__menu_profile}
          >
            <img src={profilePlaceholder} alt="profile" className={''} />
          </button>
          {isDropdownOpen ? <DropdownMenu links={profileLink} /> : null}
        </div>
      </div>
    </>
  );
};

export default MainHeader;
