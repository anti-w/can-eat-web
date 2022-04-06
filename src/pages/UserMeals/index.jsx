import React, { useContext } from 'react';

import { AuthContext } from '../../context/authContext';

const UserMeals = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <h1>User Meals Page</h1>
      <button onClick={() => logout()}>Sair</button>
    </div>
  );
};

export default UserMeals;
