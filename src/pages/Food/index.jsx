import P from 'prop-types';

import { CalculatorIcon } from '../../components/CalculatorIcon';
import { ContainerFlexFoodCard } from '../../components/ContainerFlexFoodCard';
import { Menu } from '../../components/Menu';
import { linksMock } from '../Home';

const Food = ({ theme, toggleTheme }) => {
  return (
    <>
      <Menu
        links={linksMock}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <ContainerFlexFoodCard />
      <CalculatorIcon />
    </>
  );
};

Food.propTypes = {
  theme: P.string.isRequired,
  toggleTheme: P.func.isRequired,
};

export default Food;
