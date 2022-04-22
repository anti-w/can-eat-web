import P from 'prop-types';

import * as Styled from './styles';
import * as Yup from 'yup';
import React, { useContext } from 'react';

import { AuthContext } from '../../context/authContext';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextError } from '../TextError';
import { Heading } from '../Heading';
import { Toggle } from '../Toggle';
import { Link } from 'react-router-dom';
import { House } from '@styled-icons/bootstrap';

export const LoginForm = ({ theme, toggleTheme }) => {
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: '2rem',
            }}
          >
            <Heading size="medium" as="h2">
              Bem vindo (a)!
            </Heading>
            <div>
              <Toggle
                theme={theme}
                toggleTheme={toggleTheme}
              />
              <Link to="/">
                <House
                  className="houseIcon"
                  size={28}
                  style={{
                    marginInline: '15px',
                  }}
                />
              </Link>
            </div>
          </div>
          <Heading size="small" as="h3">
            Faça login
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
                placeholder="Insira seu e-mail"
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
                placeholder="Insira sua senha"
              />
              <ErrorMessage
                name="password"
                component={TextError}
              />
            </Styled.FormControl>
            <Styled.FooterForm>
              <button type="submit"> Entrar</button>
              <p>
                {`Não possui conta? `}{' '}
                <a href="/register">Registrar</a>{' '}
              </p>
            </Styled.FooterForm>
          </Form>
        </Formik>
        <Styled.Remember>
          <a>Esqueceu sua senha?</a>
        </Styled.Remember>
      </Styled.FormContainer>

      <img
        src="https://cdn-icons-png.flaticon.com/512/2114/2114485.png"
        width={383}
        height={415}
      />
    </Styled.Container>
  );
};

LoginForm.propTypes = {
  theme: P.string.isRequired,
  toggleTheme: P.func.isRequired,
};
