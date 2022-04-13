import * as Styled from './styles';
import * as Yup from 'yup';

import { registerUser } from '../../services/register';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextError } from '../TextError';
import { Heading } from '../Heading';
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
      
    <Styled.FormContainer>
      <Styled.HeadingContainer>
        <Heading size="medium" as="h2">Bem vindo!</Heading>
        <Heading size="small" as="h3">Cadastre-se</Heading>
      </Styled.HeadingContainer>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Styled.FormControl>
            <label htmlFor="name">Nome</label>
            <Field id="name" name="name" type="text" placeHolder="Insira seu nome" />
            <ErrorMessage
              name="name"
              component={TextError}
            />
          </Styled.FormControl>

          <Styled.FormControl>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" placeHolder="Insira seu e-mail" />
            <ErrorMessage
              name="email"
              component={TextError}
            />
          </Styled.FormControl>

          <Styled.FormControl>
            <label htmlFor="password" >Senha</label>
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
      <button type="submit">Register</button>
      <p>{`Você possui cadastro? `} <a>Entre</a> </p>
    </Styled.FormContainer>
    
    <img src='https://cdn-icons.flaticon.com/png/512/3967/premium/3967391.png?token=exp=1649859445~hmac=2faffb9c8f66de6520bc45b513abd3f2' width={383} height={415} />
    </Styled.Container>
  );
};
