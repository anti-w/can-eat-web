import { useState } from 'react';
import * as Styled from './styles';

import { NavLink } from '../NavLink';
import { Toggle } from '../Toggle';
import { SectionContainer } from '../SectionContainer';

import { FilterSquare } from '@styled-icons/bootstrap/FilterSquare';
import { XSquareFill } from '@styled-icons/bootstrap/XSquareFill';

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
          <XSquareFill aria-label="Close menu" />
        ) : (
          <FilterSquare aria-label="Open menu" />
        )}
      </Styled.Button>
      <Styled.Container
        onClick={() => setVisible(false)}
        visible={visible}
      >
        <SectionContainer>
          <Styled.MenuContainer>
            <NavLink links={links} />
            <Toggle
              theme={theme}
              toggleTheme={toggleTheme}
            />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLink.propTypes,
};
