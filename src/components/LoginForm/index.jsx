import * as Styled from './styles';
import * as Yup from 'yup';
import React, { useContext } from 'react';

import { AuthContext } from '../../context/authContext';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextError } from '../TextError';

export const LoginForm = () => {
  const { authenticated, login } = useContext(AuthContext);

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values) => {
    login(values.email, values.password);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid e-mail format')
      .required('E-mail is required'),
    password: Yup.string().required('Password is required'),
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
          <button type="submit">Login</button>
          <p>{String(authenticated)}</p>
        </Form>
      </Formik>
    </Styled.Container>
  );
};
