import P from 'prop-types';
import * as Styled from './styles';

import { getAllGroups } from '../../services/groups';
import { useEffect, useState } from 'react';
import { FoodGroup } from '../FoodGroup';

export const FilterByGroup = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getAllGroups();
      setGroups(data);
    })();
  }, []);

  console.log(groups);
  return (
    <Styled.Container>
      {groups.map((group) => (
        <FoodGroup
          key={group._id}
          name={group.name}
          srcImg={group.srcImg}
        />
      ))}
    </Styled.Container>
  );
};
