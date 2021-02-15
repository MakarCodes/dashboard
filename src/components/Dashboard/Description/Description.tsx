import classes from './Description.module.scss';

const Description = () => {
  return (
    <div className={classes.Container}>
      <div className={`${classes.Detail} ${classes.DetailHiddenS}`}>Id</div>
      <div className={`${classes.Detail} ${classes.DetailHiddenS}`}>Name</div>
      <div className={classes.Detail}>Username</div>
      <div className={`${classes.Detail} ${classes.DetailHidden}`}>Email</div>
      <div className={`${classes.Detail} ${classes.DetailHiddenM}`}>City</div>
      <div className={classes.Detail}>Edit</div>
      <div className={classes.Detail}>Delete</div>
    </div>
  );
};

export default Description;
