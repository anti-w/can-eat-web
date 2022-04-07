import * as Styled from './styles';

import { EggFill } from '@styled-icons/bootstrap';
import { FireIcon } from '@heroicons/react/solid';
import {
  PizzaSlice,
  BreadSlice,
} from '@styled-icons/fa-solid';
import {
  PlusCircleFill,
  DashCircleFill,
} from '@styled-icons/bootstrap';

import { FoodCardIcon } from '../FoodCardIcons';
import { Heading } from '../Heading';

export const FoodCard = () => {
  return (
    <Styled.Container>
      <Styled.TitleWithIcons>
        <Heading as="h4" size="xsmall">
          Abóbora
        </Heading>
        <Styled.IconsContainer>
          <FoodCardIcon bgColor="proteins">
            <EggFill color="white" width={13} back />
          </FoodCardIcon>
          <FoodCardIcon bgColor="fats">
            <PizzaSlice color="white" width={13} />
          </FoodCardIcon>
          <FoodCardIcon bgColor="calories">
            <FireIcon color="white" width={13} />
          </FoodCardIcon>
          <FoodCardIcon bgColor="carb">
            <BreadSlice color="white" width={13} />
          </FoodCardIcon>
        </Styled.IconsContainer>
      </Styled.TitleWithIcons>
      <Styled.NutrientsContainer>
        <p>100cal</p>
        <p>P/G/C</p>
        <p>62/55/102</p>
      </Styled.NutrientsContainer>
      <Styled.DescriptionContainer>
        <p>{`Abóbora, cabotian (japonesa), c/ quiabo, refogado (c/ óleo, cebola e alho), c/ salsa, c/ sal, << Pumpkin, squash, cabotian, with okra, braised (with oil, onion and garlic, with salt`}</p>
      </Styled.DescriptionContainer>
      <Styled.ButtonsContainer>
        <Styled.CustomPlusCircleFill />
        <input />
        <Styled.CustomDashCircleFill />
        <button>Order</button>
      </Styled.ButtonsContainer>
    </Styled.Container>
  );
};
