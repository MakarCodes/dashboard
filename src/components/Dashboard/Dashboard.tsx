import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../store/actions/usersActionsCreators';

import Button from '../Button/Button';
import Spinner from '../UI/Spinner/Spinner';
import classes from './Dashboard.module.scss';
import Description from './Description/Description';
import User from './User/User';

const generateUsersList = (users: IUser[]) =>
  users.map(user => <User key={user.id} user={user} />);

const Dashboard = () => {
  const dispatch = useDispatch();
  const users: IUser[] = useSelector((state: IInitialState) => state.users);
  const isLoading: boolean = useSelector(
    (state: IInitialState) => state.isLoading
  );

  const userList = useMemo(() => generateUsersList(users), [users]);

  return (
    <div className={classes.Wrapper}>
      <div className={classes.TitleBar}>
        <h2 className={classes.Title}>User list</h2>
        <Link to='/form'>
          <Button
            text='Add new'
            bgColor='#007bff'
            action={() => dispatch(actions.addUser)}
          />
        </Link>
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
