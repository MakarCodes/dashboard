import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validationSchema';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import classes from './Form.module.scss';

import * as actions from '../../store/actions/usersActionsCreators';
interface IDataFromForm {
  name: string;
  email: string;
}

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });
  const onSubmit = (data: IDataFromForm) => {
    const { name, email } = data;
    dispatch(actions.addUser(name, email));
    setValue('name', '');
    setValue('email', '');
    history.push('/');
  };

  const handleCancel = () => {
    setValue('name', '');
    setValue('email', '');
    history.push('/');
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
            defaultValue=''
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
            defaultValue=''
            placeholder='Email...'
          />
          {errors.email && (
            <p className={classes.ErrorField}>{errors.email?.message}</p>
          )}
        </div>
        <div className={classes.ButtonsContainer}>
          <button
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
