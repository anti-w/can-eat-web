import { useAxios } from '../../hooks/useAxios';

const Register = () => {
  const { response, loading, error } = useAxios({
    method: 'POST',
    url: '/auth/register',
    headers: {
      accept: '*/*',
    },
    data: {
      name: 'Wendel Demétrio',
      email: 'teste11234ddsa3',
      password: 'seila',
      confirmpassword: 'seila',
    },
  });

  fetch().then(res => { array.push(res))}

  if (error) {
    return <h1>{error.response.data.msg}</h1>;
  }
  if (loading) {
    return <h1>Carregando..</h1>;
  }
  return (
    <div>
      <h1>{response.msg}</h1>
    </div>
  );
};

export default Register;
