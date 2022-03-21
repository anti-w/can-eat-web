import P from 'prop-types';
import * as Styled from './styles';
import React from 'react';

import { Moon, Sun } from '@styled-icons/bootstrap';

export const Toggle = ({ theme, toggleTheme }) => {
  console.log(theme);
  return (
    <Styled.Button onClick={toggleTheme}>
      {theme === 'light' ? (
        <Sun size="30" />
      ) : (
        <Moon size="28" />
      )}
    </Styled.Button>
  );
};

Toggle.propTypes = {
  theme: P.string,
  toggleTheme: P.func,
};
