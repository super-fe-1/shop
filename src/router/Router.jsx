import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import LogoutPage from '../pages/LogoutPage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRouter = () => {
  return (
    <BrowserRouter
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/signup" element={<AuthPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/products/upload" element={<ProductUploadPage />} />
          <Route path="/products/cart" element={<CartPage />} />
          <Route path="/products/order" element={<OrderPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
