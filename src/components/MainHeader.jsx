import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PRODUCT_LINKS } from '../constants/navigationItems';
import styles from '../styles/components/MainHeader.module.css';
import HeaderNavigation from './HeaderNavigation';
import DropdownMenu from './DropdownMenu';
import logo from '../assets/images/logo.png';
import profilePlaceholder from '../assets/images/placeholder-profile.jpeg';

const MainHeader = () => {
  const isLog = useSelector((state) => state.user.isLog);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profileLink, setProfileLink] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    if (isLog) {
      setProfileLink([
        {
          link: '/profile',
          name: '마이페이지',
        },
        {
          link: '/cart',
          name: '장바구니',
        },
        {
          link: '/products/update',
          name: '상품판매',
        },
        {
          link: '/logout',
          name: '로그아웃',
        },
      ]);
    } else {
      setProfileLink([
        {
          link: '/login',
          name: '로그인하기',
        },
      ]);
    }
  }, [isLog]);

  return (
    <>
      <div className={styles.header__auth}>
        {!isLog && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
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
