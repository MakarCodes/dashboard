import * as actions from '../../../store/actions/usersActionsCreators';

import classes from './ModalContent.module.scss';

import Button from '../../Button/Button';
import { useDispatch } from 'react-redux';

interface IProps {
  userForRemoval: IUser;
  toggleVisibility: () => void;
}

const ModalContent: React.FC<IProps> = ({
  userForRemoval,
  toggleVisibility,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(actions.removeUser(userForRemoval.id));
    toggleVisibility();
  };
  const handleCancelDelete = () => {
    toggleVisibility();
    dispatch(actions.setUserToRemove(null));
  };
  return (
    <div className={classes.Wrapper}>
      <h2 className={classes.Title}>Delete</h2>
      <p className={classes.Question}>
        Do You want to delete user - {userForRemoval.name}?
      </p>
      <div style={{ textAlign: 'right' }}>
        <Button text='Delete' action={handleDelete} bgColor='#dc3545' />
        <Button text='Cancel' action={handleCancelDelete} bgColor='grey' />
      </div>
    </div>
  );
};

export default ModalContent;
