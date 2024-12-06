import { Outlet } from 'react-router-dom';
import styles from '../../styles/layouts/MainLayout.module.css';
import MainHeader from '../MainHeader';

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <header>
        <MainHeader />
      </header>
      <main className={styles.layout__main}>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2024 Team0910. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
