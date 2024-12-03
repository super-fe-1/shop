import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PRODUCT_LINKS } from '../constants/navigationItems';
import styles from '../styles/components/MainHeader.module.css';
import HeaderNavigation from './HeaderNavigation';
import DropdownMenu from './DropdownMenu';
import logo from '../assets/images/logo.png';
import profilePlaceholder from '../assets/images/placeholder-profile.jpeg';

const MainHeader = () => {
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem('token');

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  //
  const profileLink = isLoggedIn
    ? [
        { link: '/profile', name: '마이페이지' },
        { link: '#', name: '로그아웃', onClick: handleLogout },
      ]
    : [
        { link: '/login', name: '로그인하기' },
        { link: '/signup', name: '회원가입' },
      ];

  //드롭다운
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // 로그아웃
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
    window.location.reload();
  };

  return (
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
          <img
            src={profilePlaceholder}
            alt="profile"
            className={styles.header__menu_profileImage}
          />
        </button>
        {isDropdownOpen && (
          <DropdownMenu links={profileLink} onClose={toggleDropdown} />
        )}
      </div>
    </div>
  );
};

export default MainHeader;
