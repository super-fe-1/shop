import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isLog, children }) => {
  return isLog ? <>{children}</> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
