import { useState } from 'react';
import * as Styled from './styles';

import { NavLink } from '../NavLink';
import { Toggle } from '../Toggle';
import { SectionContainer } from '../SectionContainer';

import { FilterSquare } from '@styled-icons/bootstrap/FilterSquare';
import { XSquareFill } from '@styled-icons/bootstrap/XSquareFill';
import { Button } from '../Button';

export const Menu = ({
  links = [],
  theme,
  toggleTheme,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Styled.Button
        aria-label="Open/Close Menu"
        visible={visible}
        onClick={() => setVisible(true)}
      >
        {visible ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'columns',
            }}
          >
            <h1>Logo</h1>
            <XSquareFill aria-label="Close menu" />
          </div>
        ) : (
          <FilterSquare aria-label="Open menu" />
        )}
      </Styled.Button>
      <Styled.Container
        onClick={() => setVisible(false)}
        visible={visible}
      >
        <Styled.MenuContainer>
          <NavLink links={links} />
          <Styled.ButtonsContainer>
            <Button
              textInside="Registre-se"
              typeAction="register"
            />
            <Button
              textInside="Entrar"
              typeAction="login"
            />
            <Toggle
              theme={theme}
              toggleTheme={toggleTheme}
            />
          </Styled.ButtonsContainer>
        </Styled.MenuContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLink.propTypes,
};
