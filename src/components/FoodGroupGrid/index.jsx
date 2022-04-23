import P from 'prop-types';
import * as Styled from './styles';

import { FoodGroup } from '../FoodGroup';

export const FoodGroupGrid = ({
  groups,
  handleGroupSelect,
}) => {
  return (
    <Styled.GroupsContainer>
      {groups.map((group) => (
        <FoodGroup
          key={group._id}
          name={group.name}
          srcImg={group.srcImg}
          handleGroupSelect={handleGroupSelect}
        />
      ))}
    </Styled.GroupsContainer>
  );
};

FoodGroupGrid.propTypes = {
  groups: P.array.isRequired,
  handleGroupSelect: P.func.isRequired,
};
