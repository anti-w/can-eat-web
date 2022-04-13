import P from 'prop-types';

import { RegisterForm } from '../../components/RegisterForm';
import { Menu} from '../../components/Menu';
import { linksMock } from '../Home';

export const linksRegisterMock = [
  {
    link: '#calculator',
    children: 'Calcular',
    newTab: false,
  },
];

const Register = ({ theme, toggleTheme }) => {
  return(
  <>
    <Menu
        links={linksRegisterMock}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    <RegisterForm />
  </>
  ) ;
};

Register.propTypes = {
  theme: P.string.isRequired,
  toggleTheme: P.func.isRequired,
};

export default Register;
