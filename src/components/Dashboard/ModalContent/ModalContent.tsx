import * as actions from '../../../store/actions/usersActionsCreators';

import classes from './ModalContent.module.scss';

import Button from '../../Button/Button';
import { useDispatch } from 'react-redux';

interface IProps {
  userToDelete: IUser;
  toggleVisibility: () => void;
  setUserToDelete: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

const ModalContent: React.FC<IProps> = ({
  userToDelete,
  toggleVisibility,
  setUserToDelete,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(actions.removeUser(userToDelete.id));
    toggleVisibility();
    setUserToDelete(undefined);
  };
  return (
    <div className={classes.Wrapper}>
      <h2 className={classes.Title}>Delete</h2>
      <p className={classes.Question}>
        Do You want to delete user - {userToDelete.name}?
      </p>
      <Button text='Delete' action={handleDelete} bgColor='#dc3545' />
    </div>
  );
};

export default ModalContent;
