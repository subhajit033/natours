import { useSelector } from 'react-redux';
import { redirect, Navigate, Outlet } from 'react-router-dom';
import Login from '../Login/Login';

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  console.log('Auth' + isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
