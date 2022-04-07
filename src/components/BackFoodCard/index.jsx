import * as Styled from './styles';
import P from 'prop-types';

import { EggFill } from '@styled-icons/bootstrap';
import { FireIcon } from '@heroicons/react/solid';
import {
  PizzaSlice,
  BreadSlice,
} from '@styled-icons/fa-solid';

import { FoodCardIcon } from '../FoodCardIcons';
import { Heading } from '../Heading';

export const BackFoodCard = ({
  setIsFlipped,
  isFlipped,
}) => {
  return (
    <Styled.Container>
      <Styled.TitleWithIcons
        onClick={() => setIsFlipped(!isFlipped)}
      >
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
      <Styled.DescriptionContainer
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <p>{`Abóbora, cabotian (japonesa), c/ quiabo, refogado (c/ óleo, cebola e alho), c/ salsa, c/ sal, << Pumpkin, squash, cabotian, with okra, braised (with oil, onion and garlic, withsalthdiasuhduiashduiashduiahsuik`}</p>
      </Styled.DescriptionContainer>
      <Styled.ButtonsContainer>
        <Styled.CustomPlusCircleFill />
        <input />
        <Styled.CustomDashCircleFill />
        <button onClick={() => alert('fui clicado')}>
          Order
        </button>
      </Styled.ButtonsContainer>
    </Styled.Container>
  );
};

BackFoodCard.propTypes = {
  setIsFlipped: P.func,
  isFlipped: P.bool,
};
