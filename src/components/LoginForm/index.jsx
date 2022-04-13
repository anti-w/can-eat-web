import * as Styled from './styles';
import * as Yup from 'yup';
import React, { useContext } from 'react';

import { AuthContext } from '../../context/authContext';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextError } from '../TextError';
import { Heading } from '../Heading';

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
      <Styled.FormContainer>
        <Styled.HeadingContainer>
          <Heading size="medium" as="h2">
            Bem vindo!
          </Heading>
          <Heading size="small" as="h3">
            Cadastre-se
          </Heading>
        </Styled.HeadingContainer>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <Styled.FormControl>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                placeHolder="Insira seu e-mail"
              />
              <ErrorMessage
                name="email"
                component={TextError}
              />
            </Styled.FormControl>

            <Styled.FormControl>
              <label htmlFor="password">Senha</label>
              <Field
                id="password"
                name="password"
                type="password"
                placeHolder="Insira sua senha"
              />
              <ErrorMessage
                name="password"
                component={TextError}
              />
            </Styled.FormControl>
          </Form>
        </Formik>
        <Styled.Remember>
          <label>
            <input type="checkbox" />
            Lembre-me
          </label>
          <a>Esqueceu sua senha?</a>
        </Styled.Remember>
        <button type="submit">Login</button>
        {/* <p>{String(authenticated)}</p> */}
        <p>
          {`Você possui cadastro? `}{' '}
          <a href="/register">Cadastre-se</a>{' '}
        </p>
      </Styled.FormContainer>

      <img
        src="https://cdn-icons.flaticon.com/png/512/3967/premium/3967391.png?token=exp=1649859445~hmac=2faffb9c8f66de6520bc45b513abd3f2"
        width={383}
        height={415}
      />
    </Styled.Container>
  );
};
