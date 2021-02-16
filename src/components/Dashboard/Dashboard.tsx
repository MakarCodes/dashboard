import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../store/actions/usersActionsCreators';

import Button from '../Button/Button';
import { useModalLogic } from '../UI/Modal/Modal';
import Spinner from '../UI/Spinner/Spinner';
import classes from './Dashboard.module.scss';
import Description from './Description/Description';
import User from './User/User';
import Modal from '../UI/Modal/Modal';
import ModalContent from './ModalContent/ModalContent';

const generateUsersList = (
  users: IUser[],
  handleDeleteClick: (user: IUser) => void
) =>
  users.map(user => (
    <User key={user.id} user={user} handleDeleteClick={handleDeleteClick} />
  ));

const Dashboard = () => {
  const dispatch = useDispatch();
  const users: IUser[] = useSelector((state: IInitialState) => state.users);
  const isLoading: boolean = useSelector(
    (state: IInitialState) => state.isLoading
  );
  const error: boolean = useSelector((state: IInitialState) => state.error);
  const userForRemoval = useSelector(
    (state: IInitialState) => state.userForRemoval
  );
  const { isVisible, toggleVisibility } = useModalLogic();

  const handleDeleteClick = useCallback(
    (user: IUser) => {
      toggleVisibility();
      dispatch(actions.setUserToRemove(user));
    },
    [userForRemoval]
  );

  const userList = useMemo(() => generateUsersList(users, handleDeleteClick), [
    users,
  ]);

  return (
    <>
      {isVisible && (
        <Modal isVisible={isVisible} toggleVisibility={toggleVisibility}>
          {userForRemoval && (
            <ModalContent
              userForRemoval={userForRemoval}
              toggleVisibility={toggleVisibility}
            />
          )}
        </Modal>
      )}
      <div className={classes.Wrapper}>
        <div className={classes.TitleBar}>
          <h2 className={classes.Title}>User list</h2>
          <Link to='/form'>
            <Button
              text='Add new'
              bgColor='#007bff'
              action={() => dispatch(actions.setEditedUser(null))}
            />
          </Link>
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className={classes.Table}>
            <Description />
            {users.length ? (
              userList
            ) : error ? (
              <p className={classes.Info}>
                Sorry, data couldn't be loaded - please try later or check your
                url
              </p>
            ) : (
              <p className={classes.Info}>
                Sorry, there are no more users in the database.
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
