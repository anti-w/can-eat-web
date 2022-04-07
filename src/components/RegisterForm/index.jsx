import * as Styled from './styles';
import * as Yup from 'yup';

import { registerUser } from '../../services/register';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextError } from '../TextError';

export const RegisterForm = () => {
  const initialValues = {
    email: '',
    name: '',
    password: '',
    confirmpassword: '',
  };

  const onSubmit = (values) => {
    registerUser(values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid e-mail format')
      .required('E-mail is required'),
    password: Yup.string().required('Password is required'),
    confirmpassword: Yup.string()
      .oneOf(
        [Yup.ref('password'), ''],
        'Passwords must match',
      )
      .required('Confirmpassword is required'),
  });

  return (
    <Styled.Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Styled.FormControl>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" type="text" />
            <ErrorMessage
              name="name"
              component={TextError}
            />
          </Styled.FormControl>

          <Styled.FormControl>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" />
            <ErrorMessage
              name="email"
              component={TextError}
            />
          </Styled.FormControl>

          <Styled.FormControl>
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
            />
            <ErrorMessage
              name="password"
              component={TextError}
            />
          </Styled.FormControl>

          <Styled.FormControl>
            <label htmlFor="password">
              Confirm password
            </label>
            <Field
              id="confirmpassword"
              name="confirmpassword"
              type="password"
            />
            <ErrorMessage
              name="confirmpassword"
              component={TextError}
            />
          </Styled.FormControl>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </Styled.Container>
  );
};