import React from 'react';
import Button from '../../Button/Button';
import classes from './User.module.scss';

const User: React.FC<IUser> = ({ id, name, username, email, city }) => {
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
          action={() => console.log('edit')}
        />
      </div>
      <div className={classes.Detail}>
        <Button
          text='Delete'
          bgColor='#dc3545'
          action={() => console.log('delete')}
        />
      </div>
    </div>
  );
};

export default User;