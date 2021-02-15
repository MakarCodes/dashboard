import { useDispatch } from 'react-redux';

import * as actions from '../../../store/actions/usersActionsCreators';

import Button from '../../Button/Button';
import classes from './User.module.scss';

interface IProps {
  user: IUser;
}

const User: React.FC<IProps> = ({ user }) => {
  const { id, name, username, email, city } = user;
  const dispatch = useDispatch();
  return (
    <div className={classes.Container}>
      <div className={`${classes.Detail} ${classes.DetailHiddenS}`}>{id}</div>
      <div className={`${classes.Detail} ${classes.DetailHiddenS}`}>{name}</div>
      <div className={classes.Detail}>{username}</div>
      <div className={`${classes.Detail} ${classes.DetailHidden}`}>{email}</div>
      <div className={`${classes.Detail} ${classes.DetailHiddenM}`}>{city}</div>
      <div className={classes.Detail}>
        <Button
          text='Edit'
          bgColor='#ffc107'
          action={() => dispatch(actions.editUser(user))}
        />
      </div>
      <div className={classes.Detail}>
        <Button
          text='Delete'
          bgColor='#dc3545'
          action={() => dispatch(actions.removeUser(id))}
        />
      </div>
    </div>
  );
};

export default User;
