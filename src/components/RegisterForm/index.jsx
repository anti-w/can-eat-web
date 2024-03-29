import * as Styled from './styles';
import * as Yup from 'yup';
import P from 'prop-types';
import { Link } from 'react-router-dom';

import { House } from '@styled-icons/bootstrap';

import { registerUser } from '../../services/register';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import { TextError } from '../TextError';
import { Heading } from '../Heading';
import { Toggle } from '../Toggle';

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
              Bem vindo (a)!
            </Heading>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '0.5rem',
              }}
            >
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
                placeholder="Insira seu nome"
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

            <Styled.FormControl>
              <label htmlFor="password">
                Confirme a senha
              </label>
              <Field
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                placeholder="Repita sua senha"
              />
              <ErrorMessage
                name="confirmpassword"
                component={TextError}
              />
            </Styled.FormControl>
            <Styled.FooterForm>
              <button>Cadastrar</button>
              <p>
                {`Você possui cadastro? `}{' '}
                <a href="/login">Entre</a>{' '}
              </p>
            </Styled.FooterForm>
          </Form>
        </Formik>
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
