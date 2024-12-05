import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { PRODUCT_LINKS } from '../constants/navigationItems';
import styles from '../styles/components/MainHeader.module.css';
import HeaderNavigation from './HeaderNavigation';
import DropdownMenu from './DropdownMenu';
import logo from '../assets/images/logo.png';
import profilePlaceholder from '../assets/images/placeholder-profile.jpeg';

const MainHeader = () => {
  const location = useLocation();

  const isLog = useSelector((state) => state.user.isLog);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const links = isLog
      ? [
          { link: '/profile', name: '마이페이지' },
          { link: '/products/cart', name: '장바구니' },
          { link: '/products/order', name: '주문하기' },
          { link: '/products/upload', name: '상품판매' },
        ]
      : [{ link: '/login', name: '로그인하기' }];
    setDropdownMenu(links);
  }, [isLog]);

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location.pathname]);

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
            <img src={profilePlaceholder} alt="profile" />
          </button>
          {isDropdownOpen && <DropdownMenu links={dropdownMenu} />}
        </div>
      </div>
    </>
  );
};

export default MainHeader;
