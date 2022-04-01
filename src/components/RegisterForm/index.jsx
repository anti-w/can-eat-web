import { useFormik } from 'formik';
import * as Styled from './styles';

export const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      confirmpassword: '',
    },
    onSubmit: ({
      email,
      name,
      password,
      confirmpassword,
    }) => {
      alert(JSON.stringify(email, null, 2));
    },
  });

  return (
    <Styled.Container>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <label htmlFor="password">Confirm password</label>
        <input
          id="confirpassword"
          name="confirpassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button type="submit">Register</button>
      </form>
    </Styled.Container>
  );
};
