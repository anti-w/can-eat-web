import P from 'prop-types';
import React, { useState, useContext } from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';

import {
  AuthProvider,
  AuthContext,
} from './context/authContext';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import UserMeals from './pages/UserMeals';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/meals"
            element={
              <Private>
                <UserMeals />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export const Private = ({ children }) => {
  const { authenticated, loading } =
    useContext(AuthContext);

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  if (!authenticated) {
    return <Navigate to="/" />;
  }

  return children;
};

Private.propTypes = {
  children: P.node.isRequired,
};
