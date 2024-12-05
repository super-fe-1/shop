import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isLog }) => {
  return isLog ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
