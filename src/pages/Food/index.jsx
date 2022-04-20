import P from 'prop-types';
import * as Styled from './styles';
import { useState } from 'react';

import { CalculatorIcon } from '../../components/CalculatorIcon';
import { CalculatorModal } from '../../components/CalculatorModal';
import { ContainerFlexFoodCard } from '../../components/ContainerFlexFoodCard';
import { Menu } from '../../components/Menu';

import { linksMock } from '../Home';

const Food = ({ theme, toggleTheme }) => {
  const [
    displayCalculatorModal,
    setDisplayCalculatorModal,
  ] = useState(false);
  return (
    <Styled.Container
      displayCalculatorModal={displayCalculatorModal}
    >
      <Menu
        links={linksMock}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <ContainerFlexFoodCard />
      <CalculatorIcon
        setDisplayCalculatorModal={
          setDisplayCalculatorModal
        }
      />
      <CalculatorModal
        setDisplayCalculatorModal={
          setDisplayCalculatorModal
        }
        displayCalculatorModal={displayCalculatorModal}
      />
    </Styled.Container>
  );
};

Food.propTypes = {
  theme: P.string.isRequired,
  toggleTheme: P.func.isRequired,
};

export default Food;
