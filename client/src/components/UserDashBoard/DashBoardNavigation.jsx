import { iconsSvg } from '../../assets/image';

const DashBoardNavigation = () => {
  return (
    <nav className='user-view__menu'>
      <ul className='side-nav'>
        <li className='side-nav--active'>
          <a href='#'>
            <svg>
              <use xlinkHref={`${iconsSvg}#icon-setting`} />
            </svg>
            Settings
          </a>
        </li>
        <li>
          <a href='#'>
            <svg>
              <use xlinkHref={`${iconsSvg}#icon-briefcase`} />
            </svg>
            My bookings
          </a>
        </li>
        <li>
          <a href='#'>
            <svg>
              <use xlinkHref={`${iconsSvg}#icon-star`} />
            </svg>
            My reviews
          </a>
        </li>
        <li>
          <a href='#'>
            <svg>
              <use xlinkHref={`${iconsSvg}#icon-credit-card`} />
            </svg>
            Billing
          </a>
        </li>
      </ul>
      <div className='admin-nav'>
        <h5 className='admin-nav__heading'>Admin</h5>
        <ul className='side-nav'>
          <li>
            <a href='#'>
              <svg>
                <use xlinkHref={`${iconsSvg}#icon-map`} />
              </svg>
              Manage tours
            </a>
          </li>
          <li>
            <a href='#'>
              <svg>
                <use xlinkHref={`${iconsSvg}#icon-users`} />
              </svg>
              Manage users
            </a>
          </li>
          <li>
            <a href='#'>
              <svg>
                <use xlinkHref={`${iconsSvg}#icon-star`} />
              </svg>
              Manage reviews
            </a>
          </li>
          <li>
            <a href='#'>
              <svg>
                <use xlinkHref={`${iconsSvg}#icon-briefcase`} />
              </svg>
              Manage Booking
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashBoardNavigation;
