import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validationSchema';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import classes from './Form.module.scss';

import * as actions from '../../store/actions/usersActionsCreators';
interface IDataFromForm {
  name: string;
  email: string;
}

const Form = () => {
  const editUser = useSelector((state: IInitialState) => state.editUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const resetForm = () => {
    setValue('name', '');
    setValue('email', '');
    history.push('/');
  };
  const onSubmit = (data: IDataFromForm) => {
    const { name, email } = data;
    if (editUser) {
      const userAfterEdit = { ...editUser, name, email };
      dispatch(actions.editUser(userAfterEdit));
    } else {
      dispatch(actions.addUser(name, email));
    }
    resetForm();
  };

  const handleCancel = () => {
    resetForm();
  };

  return (
    <div className={classes.Wrapper}>
      <h2 className={classes.Title}>Form</h2>
      <form className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.InputGroup}>
          <label className={classes.LabelRequired}>Name:</label>
          <input
            className={classes.Input}
            ref={register}
            name='name'
            type='text'
            defaultValue={editUser ? editUser.name : ''}
            placeholder='User name...'
          />
          {errors.name && (
            <p className={classes.ErrorField}>{errors.name?.message}</p>
          )}
        </div>
        <div className={classes.InputGroup}>
          <label className={classes.LabelRequired}>Email:</label>
          <input
            className={classes.Input}
            ref={register}
            name='email'
            type='text'
            defaultValue={editUser ? editUser.email : ''}
            placeholder='Email...'
          />
          {errors.email && (
            <p className={classes.ErrorField}>{errors.email?.message}</p>
          )}
        </div>
        <div className={classes.ButtonsContainer}>
          <button
            type='button'
            onClick={() => handleCancel()}
            className={`${classes.Btn} ${classes.Cancel}`}
          >
            Cancel
          </button>
          <button type='submit' className={classes.Btn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
