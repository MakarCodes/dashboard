import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('This field is required')
    .min(3, 'Minimum 3 letters')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
  email: yup
    .string()
    .required('This field is required')
    .matches(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      'Invalid email address'
    ),
});
