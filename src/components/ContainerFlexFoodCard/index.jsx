import P from 'prop-types';
import * as Styled from './styles';
import { useEffect, useState } from 'react';

import { FlipCard } from '../FlipCard';

import { getFoodsByGroup } from '../../services/foods';
import { PaginationButtons } from '../PaginationButtons';

export const ContainerFlexFoodCard = ({
  selectedGroup,
  page,
  setPage,
}) => {
  const [dataForFront, setDataForFront] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getFoodsByGroup(
        selectedGroup.name,
        page,
      );
      setDataForFront(data);
    })();
  }, [page, selectedGroup]);

  return (
    <Styled.FoodsContainer>
      {dataForFront.map((food, i) => (
        <FlipCard key={i} dataForFront={food} />
      ))}

      <PaginationButtons setPage={setPage} page={page} />
    </Styled.FoodsContainer>
  );
};

ContainerFlexFoodCard.propTypes = {
  selectedGroup: P.object,
  ...PaginationButtons.propTypes,
};
