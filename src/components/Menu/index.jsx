import { useState } from 'react';
import * as Styled from './styles';

import { NavLink } from '../NavLink';
import { Toggle } from '../Toggle';

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
      >
        <Styled.MenuHeader>
          <h2>Logo</h2>
          <Styled.ButtonIcons>
            {visible ? (
              <XSquareFill
                aria-label="Close menu"
                style={{ marginRight: '2rem' }}
                onClick={() => setVisible(true)}
              />
            ) : (
              <FilterSquare
                style={{ marginRight: '2rem' }}
                onClick={() => setVisible(true)}
                aria-label="Open menu"
              />
            )}
            <Toggle
              theme={theme}
              toggleTheme={toggleTheme}
            />
          </Styled.ButtonIcons>
        </Styled.MenuHeader>
      </Styled.Button>
      <Styled.Container
        onClick={() => setVisible(false)}
        visible={visible}
      >
        <Styled.MenuContainer>
          {!visible && <h3>Logo</h3>}
          {links.length > 0 && <NavLink links={links} />}
          <Styled.ButtonsContainer>
            {!visible && (
              <Button
                textInside="Registre-se"
                typeAction="register"
              />
            )}
            <Button
              textInside="Entrar"
              typeAction="login"
            />
            {!visible && (
              <Toggle
                theme={theme}
                toggleTheme={toggleTheme}
              />
            )}
          </Styled.ButtonsContainer>
        </Styled.MenuContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLink.propTypes,
};
