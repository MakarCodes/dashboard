import { useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/usersActionsCreators';

import Button from '../../Button/Button';
import classes from './Description.module.scss';

const Description = () => {
  const dispatch = useDispatch();
  return (
    <div className={classes.Container}>
      <div className={`${classes.Detail} ${classes.DetailHiddenS}`}>Id</div>
      <div className={`${classes.Detail} ${classes.DetailHiddenS}`}>Name</div>
      <div className={classes.Detail}>
        <Button
          text='Username'
          bgColor='#007bff'
          action={() => dispatch(actions.sortUsers())}
        />
      </div>
      <div className={`${classes.Detail} ${classes.DetailHidden}`}>Email</div>
      <div className={`${classes.Detail} ${classes.DetailHiddenM}`}>City</div>
      <div className={classes.Detail}>Edit</div>
      <div className={classes.Detail}>Delete</div>
    </div>
  );
};

export default Description;
