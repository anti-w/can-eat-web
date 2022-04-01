import { useAxios } from '../../hooks/useAxios';
import axios from 'axios';
import { useEffect } from 'react';

const Register = () => {
  const fetchData = async () => {
    axios
      .post(
        'https://can-eat-api.herokuapp.com/auth/register',
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(JSON.stringify(err)));
  };

  useEffect(() => {
    fetchData();
  }, []);
  // const { response, loading, error } = useAxios({
  //   method: 'POST',
  //   url: '/auth/register',
  //   headers: {
  //     accept: '*/*',
  //   },
  //   data: {
  //     name: 'Wendel Demétrio',
  //     email: 'teste1',
  //     password: 'seila',
  //     confirmpassword: 'seila',
  //   },
  // });
  return (
    <>
      <div>
        <h1>Register</h1>
      </div>
    </>
  );
};

export default Register;
