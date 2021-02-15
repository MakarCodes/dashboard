import { useCallback } from 'react';
import classes from './DeleteButton.module.scss';

interface IProps {
  user: IUser;
  handleDeleteClick: (user: IUser) => void;
}

const DeleteButton: React.FC<IProps> = ({ user, handleDeleteClick }) => {
  const handleClick = useCallback(
    (user: IUser) => {
      handleDeleteClick(user);
    },
    [user, handleDeleteClick]
  );
  return (
    <button
      onClick={() => {
        handleClick(user);
      }}
      className={classes.Btn}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
