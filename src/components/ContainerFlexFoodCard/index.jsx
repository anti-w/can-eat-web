import * as Styled from './styles';

import { FlipCard } from '../FlipCard';

export const ContainerFlexFoodCard = () => {
  return (
    <Styled.Container>
      <FlipCard />
      <FlipCard />
      <FlipCard />
      <FlipCard />
    </Styled.Container>
  );
};
