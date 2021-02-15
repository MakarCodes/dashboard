import React from 'react';
import classes from './User.module.scss';

const User: React.FC<IUser> = ({ id, name, username, email, city }) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Detail}>{id}</div>
      <div className={classes.Detail}>{name}</div>
      <div className={classes.Detail}>{username}</div>
      <div className={classes.Detail}>{email}</div>
      <div className={classes.Detail}>{city}</div>
    </div>
  );
};

export default User;
