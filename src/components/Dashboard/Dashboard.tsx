import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import classes from './Dashboard.module.scss';
import User from './User/User';

const Dashboard = () => {
  const users: IUser[] = useSelector((state: IInitialState) => state.users);

  useEffect(() => {
    console.log(users);
  }, []);

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
      <div className={classes.Table}>
        {users.map(user => (
          <User
            id={user.id}
            name={user.name}
            username={user.username}
            city={user.city}
            email={user.email}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
