import * as Styled from './styles';
import * as Yup from 'yup';
import P from 'prop-types';

import { registerUser } from '../../services/register';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextError } from '../TextError';
import { Heading } from '../Heading';
import { Toggle } from '../Toggle';
import { Button } from '../Button';
import { House } from '@styled-icons/bootstrap';
import { Link } from 'react-router-dom';

export const RegisterForm = ({ theme, toggleTheme }) => {
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
      <Styled.FormContainer>
        <Styled.HeadingContainer>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingInline: '0.5rem',
            }}
          >
            <Heading size="medium" as="h2">
              Bem vindo!
            </Heading>
            <Toggle
              theme={theme}
              toggleTheme={toggleTheme}
            />
            <Link to="/">
              <House
                size={24}
                style={{
                  marginRight: '10px',
                }}
              />
            </Link>
          </div>
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
              <label htmlFor="name">Nome</label>
              <Field
                id="name"
                name="name"
                type="text"
                placeHolder="Insira seu nome"
              />
              <ErrorMessage
                name="name"
                component={TextError}
              />
            </Styled.FormControl>

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

            <Styled.FormControl>
              <label htmlFor="password">
                Confirme a senha
              </label>
              <Field
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                placeHolder="Repita sua senha"
              />
              <ErrorMessage
                name="confirmpassword"
                component={TextError}
              />
            </Styled.FormControl>
          </Form>
        </Formik>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button textInside="Cadastrar" />
          <p>
            {`Você possui cadastro? `}{' '}
            <a href="/login">Entre</a>{' '}
          </p>
        </div>
      </Styled.FormContainer>

      <img
        src="https://res.cloudinary.com/dscztnlqq/image/upload/v1649874165/can-eat/3967391_o9agvy.png"
        width={383}
        height={415}
      />
    </Styled.Container>
  );
};

RegisterForm.propTypes = {
  theme: P.string.isRequired,
  toggleTheme: P.func.isRequired,
};
