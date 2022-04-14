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
        <div
          style={{
            display: 'flex',
            width: '100%',
            padding: '2rem',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'columns',
          }}
        >
          {visible ? (
            <>
              <h2>Logo</h2>
              <XSquareFill
                aria-label="Close menu"
                onClick={() => setVisible(true)}
              />
              <Toggle
                theme={theme}
                toggleTheme={toggleTheme}
              />
            </>
          ) : (
            <>
              <h2>Logo</h2>
              <FilterSquare
                onClick={() => setVisible(true)}
                aria-label="Open menu"
              />
              <Toggle
                theme={theme}
                toggleTheme={toggleTheme}
              />
            </>
          )}
        </div>
      </Styled.Button>
      <Styled.Container
        onClick={() => setVisible(false)}
        visible={visible}
      >
        <Styled.MenuContainer>
          {!visible && <h3>Logo</h3>}
          <NavLink links={links} />
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
          </Styled.ButtonsContainer>
        </Styled.MenuContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLink.propTypes,
};
