import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PrivateRoute from './PrivateRoute';
// layout
import MainLayout from '../components/layouts/MainLayout';
// pages
import HomePage from '../pages/HomePage';
import AuthPage from '../pages/AuthPage';
import DetailPage from '../pages/DetailPage';
import ProfilePage from '../pages/ProfilePage';
import ProductUploadPage from '../pages/ProductUploadPage';
import CartPage from '../pages/CartPage';
import OrderPage from '../pages/OrderPage';
import NotFoundPage from '../pages/NotFoundPage';

const Router = () => {
  const isLog = useSelector((state) => state.user.isLog);

  return (
    <BrowserRouter
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/signup" element={<AuthPage />} />
<<<<<<< HEAD
          <Route path="/detail/:id" element={<DetailPage />} />
=======
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:productId" element={<DetailPage />} />
>>>>>>> feature/detail-page-api
          <Route path="/profile" element={<ProfilePage />} />
          <Route element={<PrivateRoute isLog={isLog} />}>
            <Route path="/products/upload" element={<ProductUploadPage />} />
            <Route path="/products/cart" element={<CartPage />} />
            <Route path="/products/order" element={<OrderPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
