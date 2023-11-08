import DashBoardNavigation from './DashBoardNavigation';
import UserDetails from './UserDetails';

const UserDashBoard = () => {
  return (
    <main className='main'>
      <div className='user-view'>
        <DashBoardNavigation />
        <UserDetails />
      </div>
    </main>
  );
};

export default UserDashBoard;
