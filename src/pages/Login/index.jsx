import P from 'prop-types';

import { LoginForm } from '../../components/LoginForm';
import { Menu} from '../../components/Menu';
import { linksMock } from '../Home';

export const linksLoginMock = [
  {
    link: '#calculator',
    children: 'Calcular',
    newTab: false,
  },
];
const Login = ({ theme,toggleTheme }) => {
    return(
        <>
      <LoginForm
       toggleTheme={toggleTheme}
       theme={theme}
       />
      </>
    );
}



Login.propTypes = {
    theme: P.string.isRequired,
    toggleTheme: P.func.isRequired,
  };
  
export default Login;
