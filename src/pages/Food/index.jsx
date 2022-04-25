import P from 'prop-types';
import * as Styled from './styles';
import { useEffect, useState } from 'react';

import { CalculatorIcon } from '../../components/CalculatorIcon';
import { CalculatorModal } from '../../components/CalculatorModal';
import { ContainerFlexFoodCard } from '../../components/ContainerFlexFoodCard';
import { MenuFood } from '../../components/MenuFood';

import { linksMock } from '../Home';
import { FoodGroupGrid } from '../../components/FoodGroupGrid';
import { getAllGroups } from '../../services/groups';

const Food = ({ theme, toggleTheme }) => {
  const [
    displayCalculatorModal,
    setDisplayCalculatorModal,
  ] = useState(false);
  const [displayFoodGroupGrid, setDisplayFoodGroupGrid] =
    useState(false);
  const [groups, setGroups] = useState([]);

  const [selectedGroup, setSelectedGroup] = useState({
    name: 'Todos os alimentos',
    srcImg:
      'https://cdn-icons-png.flaticon.com/512/1046/1046747.png',
  });

  const handleGroupSelect = (name, srcImg) => {
    setSelectedGroup({ name, srcImg });
    setDisplayFoodGroupGrid(false);
  };
  useEffect(() => {
    (async () => {
      const { data } = await getAllGroups();
      setGroups(data);
    })();
  }, []);

  return (
    <Styled.Container
      displayCalculatorModal={displayCalculatorModal}
    >
      <MenuFood
        theme={theme}
        toggleTheme={toggleTheme}
        displayFoodGroupGrid={displayFoodGroupGrid}
        setDisplayFoodGroupGrid={setDisplayFoodGroupGrid}
        selectedGroup={selectedGroup}
      />
      {displayFoodGroupGrid && (
        <FoodGroupGrid
          groups={groups}
          handleGroupSelect={handleGroupSelect}
          setDisplayFoodGroupGrid={setDisplayFoodGroupGrid}
        />
      )}

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
