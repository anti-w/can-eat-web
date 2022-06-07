import P from 'prop-types';
import * as Styled from './styles';

import { useEffect, useState } from 'react';
import { getAllGroups } from '../../services/groups';

import { CalculatorIcon } from '../../components/CalculatorIcon';
import { CalculatorModal } from '../../components/CalculatorModal';
import { ContainerFlexFoodCard } from '../../components/ContainerFlexFoodCard';
import { MenuFood } from '../../components/MenuFood';
import { FoodGroupGrid } from '../../components/FoodGroupGrid';

const Food = ({ theme, toggleTheme }) => {
  const [groups, setGroups] = useState([]);
  const [page, setPage] = useState(0);

  const [
    displayCalculatorModal,
    setDisplayCalculatorModal,
  ] = useState(false);
  const [displayFoodGroupGrid, setDisplayFoodGroupGrid] =
    useState(false);

  const [selectedGroup, setSelectedGroup] = useState({
    name: 'Todos os alimentos',
    srcImg:
      'https://cdn-icons-png.flaticon.com/512/1046/1046747.png',
  });

  const handleGroupSelect = (name, srcImg) => {
    setSelectedGroup({ name, srcImg });
    setDisplayFoodGroupGrid(false);
    setPage(0);
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
      displayFoodGroupGrid={displayFoodGroupGrid}
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

      <ContainerFlexFoodCard
        selectedGroup={selectedGroup}
        page={page}
        setPage={setPage}
      />
      <CalculatorIcon
        setDisplayCalculatorModal={
          setDisplayCalculatorModal
        }
      />
      {displayCalculatorModal && (
        <CalculatorModal
          setDisplayCalculatorModal={
            setDisplayCalculatorModal
          }
          displayCalculatorModal={displayCalculatorModal}
        />
      )}
    </Styled.Container>
  );
};

Food.propTypes = {
  theme: P.string.isRequired,
  toggleTheme: P.func.isRequired,
};

export default Food;
