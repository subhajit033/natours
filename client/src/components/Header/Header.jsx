import { Link } from 'react-router-dom';
import { logoWhite } from '../../assets/image';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authentication } from '../../redux/authSlice';
import { loadUserDetails } from '../../redux/userDetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  const userData = useSelector((store) => store.user.userData);
  const handleLogOut = async () => {
    try {
      const response = await axios.get('/api/v1/users/logout');
      if (response?.data?.status === 'success') {
        dispatch(authentication(false));
        dispatch(loadUserDetails(null))
        toast('Logout Sucessfully !', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      } else {
        throw new Error('Logout failed');
      }
    } catch (err) {
      toast.error('Logout Failed! try again', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };
  return (
    <header className='header'>
      <ToastContainer />
      <nav className='nav nav--tours'>
        <a className='nav__el' href='/'>
          All tours
        </a>
      </nav>
      <div className='header__logo'>
        <img src={logoWhite} alt='Natours logo' />
      </div>
      <nav className='nav nav--user'>
        {isAuthenticated ? (
          <>
            <button onClick={handleLogOut} className='nav__el nav__el--logout'>Log out</button>
            <Link className='nav__el' href='/me'>
              <img
                className='nav__user-img'
                src={`../../../src/assets/users/${userData?.photo}`}
                alt='Photo of'
              />
              <span>{userData?.name.split(' ')[0]}</span>
            </Link>
          </>
        ) : (
          <>
            <Link to='/login' className='nav__el' href='/login'>
              Log in
            </Link>
            <Link className='nav__el nav__el--cta' href='#'>
              Sign up{' '}
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
