import { useFormik } from 'formik';
import * as Styled from './styles';
import * as Yup from 'yup';

export const RegisterForm = () => {
  const initialValues = {
    email: '',
    name: '',
    password: '',
    confirmpassword: '',
  };

  const onSubmit = ({
    email,
    name,
    confirm,
    confirmpassword,
  }) => {
    alert(JSON.stringify(name, null, 2));
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid e-mail format')
      .required('E-mail is required'),
    password: Yup.string().required('Password is required'),
    confirmpassword: Yup.string().required(
      'Confirmpassword is required',
    ),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Styled.Container>
      <form onSubmit={formik.handleSubmit}>
        <Styled.FormControl>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name && (
            <Styled.SpanError>
              {formik.errors.name}
            </Styled.SpanError>
          )}
        </Styled.FormControl>

        <Styled.FormControl>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <Styled.SpanError>
              {formik.errors.email}
            </Styled.SpanError>
          )}
        </Styled.FormControl>

        <Styled.FormControl>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password &&
            formik.errors.password && (
              <Styled.SpanError>
                {formik.errors.password}
              </Styled.SpanError>
            )}
        </Styled.FormControl>

        <Styled.FormControl>
          <label htmlFor="password">Confirm password</label>
          <input
            id="confirmpassword"
            name="confirmpassword"
            type="password"
            {...formik.getFieldProps('confirmpassword')}
          />
          {formik.touched.confirmpassword &&
            formik.errors.confirmpassword && (
              <Styled.SpanError>
                {formik.errors.confirmpassword}
              </Styled.SpanError>
            )}
        </Styled.FormControl>
        <button type="submit">Register</button>
      </form>
    </Styled.Container>
  );
};
