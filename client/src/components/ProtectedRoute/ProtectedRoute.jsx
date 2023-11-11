import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  console.log('isAuthenticated ' + isAuthenticated);
  if (!isAuthenticated) {
    return <h1>Loading...</h1>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
