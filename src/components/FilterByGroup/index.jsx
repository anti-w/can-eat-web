import P from 'prop-types';
import * as Styled from './styles';

import { FoodGroup } from '../FoodGroup';

export const FilterByGroup = ({
  selectedGroup,
  displayFoodGroupGrid,
  setDisplayFoodGroupGrid,
}) => {
  return (
    <Styled.Container
      onClick={() =>
        setDisplayFoodGroupGrid(!displayFoodGroupGrid)
      }
    >
      <FoodGroup
        name={selectedGroup.name}
        srcImg={selectedGroup.srcImg}
      />
    </Styled.Container>
  );
};

FilterByGroup.propTypes = {
  selectedGroup: P.objectOf({
    name: P.string,
    srcImg: P.string,
  }),
  displayFoodGroupGrid: P.bool,
  setDisplayFoodGroupGrid: P.func,
};
