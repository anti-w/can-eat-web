import P from 'prop-types';

import { RegisterForm } from '../../components/RegisterForm';

const Register = ({ theme, toggleTheme }) => {
  return (
    <>
      <RegisterForm
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </>
  );
};

Register.propTypes = {
  theme: P.string.isRequired,
  toggleTheme: P.func.isRequired,
};

export default Register;
