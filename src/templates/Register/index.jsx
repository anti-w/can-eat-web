import { RegisterForm } from '../../components/RegisterForm';
import { useAxios } from '../../hooks/useAxios';

const Register = () => {
  // const { response, loading, error } = useAxios({
  //   method: 'POST',
  //   url: '/auth/register',
  //   headers: {
  //     accept: '*/*',
  //   },
  //   data: {
  //     name: 'Wendel Demétrio',
  //     email: 'teste11234ddsa3',
  //     password: 'seila',
  //     confirmpassword: 'seila',
  //   },
  // });

  // if (error) {
  //   return <h1>{error.response.data.msg}</h1>;
  // }
  // if (loading) {
  //   return <h1>Carregando..</h1>;
  // }
  return <RegisterForm />;
};

export default Register;
