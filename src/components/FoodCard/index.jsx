import * as Styled from './styles';

import { EggFill } from '@styled-icons/bootstrap';
import { FireIcon } from '@heroicons/react/solid';
import {
  PizzaSlice,
  BreadSlice,
} from '@styled-icons/fa-solid';

import { FoodCardIcon } from '../FoodCardIcon';
import { Heading } from '../Heading';

export const FoodCard = () => {
  return (
    <Styled.Container>
      <Styled.IconsContainer>
        <Heading size="small">Abobora</Heading>
        <FoodCardIcon>
          <EggFill color="white" width={13} />
        </FoodCardIcon>
        <FoodCardIcon>
          <PizzaSlice color="white" width={13} />
        </FoodCardIcon>
        <FoodCardIcon>
          <FireIcon color="white" width={13} />
        </FoodCardIcon>
        <FoodCardIcon>
          <BreadSlice color="white" width={13} />
        </FoodCardIcon>
      </Styled.IconsContainer>
    </Styled.Container>
  );
};
