import { Link } from 'react-router-dom';
import { PRODUCT_LINKS, MENU_LINKS } from '../constants/navigationItems';
import HeaderNavigation from './HeaderNavigation';
import logo from '../assets/images/logo.png';

const MainHeader = () => {
  return (
    <>
      <div className="flex items-center justify-end px-4 py-2 text-white gap-x-4 bg-text-primary">
        <Link to={'/login'}>Login</Link>
        <Link to={'/signup'}>Sign Up</Link>
      </div>
      <div className="flex items-center justify-between px-4 py-2">
        <Link to={'/'}>
          <img src={logo} alt="logo" className="w-8 h-auto" />
        </Link>
        <HeaderNavigation links={PRODUCT_LINKS} />
        <HeaderNavigation links={MENU_LINKS} />
      </div>
    </>
  );
};

export default MainHeader;
