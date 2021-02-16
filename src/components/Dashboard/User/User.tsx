import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../../store/actions/usersActionsCreators';

import Button from '../../Button/Button';
import classes from './User.module.scss';
import { useCallback } from 'react';

interface IProps {
  user: IUser;
  handleDeleteClick: (user: IUser) => void;
}

const User: React.FC<IProps> = ({ user, handleDeleteClick }) => {
  const { id, name, username, email, city } = user;
  const dispatch = useDispatch();

  const handleDelete = useCallback(
    (user: IUser) => {
      handleDeleteClick(user);
    },
    [user, handleDeleteClick]
  );

  return (
    <div className={classes.Container}>
      <div className={`${classes.Detail} ${classes.DetailHiddenS}`}>{id}</div>
      <div className={`${classes.Detail} ${classes.DetailHiddenS}`}>{name}</div>
      <div className={classes.Detail}>{username}</div>
      <div className={`${classes.Detail} ${classes.DetailHidden}`}>{email}</div>
      <div className={`${classes.Detail} ${classes.DetailHiddenM}`}>{city}</div>
      <div className={classes.Detail}>
        <Link to='/form'>
          <Button
            text='Edit'
            bgColor='#ffc107'
            action={() => dispatch(actions.setEditedUser(user))}
          />
        </Link>
      </div>
      <div className={classes.Detail}>
        <Button
          text='Delete'
          bgColor='#dc3545'
          action={() => handleDelete(user)}
        />
      </div>
    </div>
  );
};

export default User;
