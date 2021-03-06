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
import { CalculatorProvider } from './context/calculatorContext';

import { ThemeProvider } from 'styled-components';

import { useDarkMode } from './hooks/useDarkMode';
import { darkTheme, lightTheme } from './styles/theme';
import { GlobalStyles } from './styles/global-styles';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import UserMeals from './pages/UserMeals';
import Food from './pages/Food';

export const AppRoutes = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode =
    theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  theme={theme}
                  toggleTheme={toggleTheme}
                />
              }
            />
            <Route
              path="/register"
              element={<Register 
                theme={theme}
                toggleTheme={toggleTheme}
              />}
            />
            <Route
              path="/foods"
              element={
                <CalculatorProvider>
                  <Food
                    theme={theme}
                    toggleTheme={toggleTheme}
                  />
                </CalculatorProvider>
              }
            />
            <Route path="/login" 
              element={
                <Login 
                  theme={theme}
                  toggleTheme={toggleTheme}
            />} />
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
    </ThemeProvider>
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
