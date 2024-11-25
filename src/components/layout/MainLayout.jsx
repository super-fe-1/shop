import { Outlet } from 'react-router-dom';
// import Header form ~~
const MainLayout = () => {
  return (
    <div>
      <header></header>
      <Outlet />
      <footer></footer>
    </div>
  );
};

export default MainLayout;
