import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import Spinner from '../UI/Spinner/Spinner';
import classes from './Dashboard.module.scss';
import Description from './Description/Description';
import User from './User/User';

const generateUsersList = (users: IUser[]) =>
  users.map(({ id, name, username, email, city }) => (
    <User
      key={id}
      id={id}
      name={name}
      username={username}
      city={city}
      email={email}
    />
  ));

const Dashboard = () => {
  const users: IUser[] = useSelector((state: IInitialState) => state.users);
  const isLoading: boolean = useSelector(
    (state: IInitialState) => state.isLoading
  );

  const userList = useMemo(() => generateUsersList(users), [users]);

  return (
    <div className={classes.Wrapper}>
      <div className={classes.TitleBar}>
        <h2 className={classes.Title}>User list</h2>
        <Button
          text='Add new'
          bgColor='#007bff'
          action={() => console.log('hurrey')}
        />
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={classes.Table}>
          <Description />
          {userList}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
