import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { useEffect } from 'react';
import OverView from './components/Overview/OverView';
import TourDetails from './components/TourDetails/TourDetails';
import UserDashBoard from './components/UserDashBoard/UserDashBoard';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authentication } from './redux/authSlice';
import { loadUserDetails } from './redux/userDetails';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    isUserLoggedIn();
  }, []);
  const isUserLoggedIn = async () => {
    try {
      const response = await axios.get('/api/v1/users/rememberMe');
      if (response?.data?.status === 'success') {
        dispatch(authentication(true));
        dispatch(loadUserDetails(response?.data?.data?.user));
      } else {
        throw new Error('Please Login Into the Website');
      }
    } catch (err) {
      dispatch(authentication(false));
    }
  };
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <OverView />,
      },
      // {
      //   path: '/tour/:tourId',
      //   element: <ProtectedRoute />,
      //   children: [
      //     {
      //       path: '/tour/:tourId/',
      //       element: <TourDetails />
      //     }
      //   ]
      // },
      {
        path: '/:tourName',
        element: <TourDetails />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/me',
        element: <ProtectedRoute />,
        children:[
          {
            path: '/me/',
            element: <UserDashBoard />
          }
        ]
      },
    ],
  },
]);

export default App;
