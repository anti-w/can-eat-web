import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

import { EggFill } from '@styled-icons/bootstrap';
import { FireIcon } from '@heroicons/react/solid';
import {
  PizzaSlice,
  BreadSlice,
} from '@styled-icons/fa-solid';

import { Heading } from '../Heading';
import { FoodCardIcon } from '../FoodCardIcons';

export const CalculatorModal = ({
  setDisplayCalculatorModal,
  displayCalculatorModal,
}) => {
  return (
    <Styled.Container
      displayCalculatorModal={displayCalculatorModal}
    >
      <Styled.CalculatorContainer>
        <h1>Teste Modal</h1>

        <button
          onClick={() => setDisplayCalculatorModal(false)}
        >
          Close
        </button>
        <Styled.FoodsContainer>
          <Styled.TitleWithIcons>
            <Heading as="h4" size="xsmall">
              Abóbora
            </Heading>
            <Styled.IconsContainer>
              <FoodCardIcon bgColor="proteins">
                <EggFill color="white" width={13} />
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
        </Styled.FoodsContainer>
      </Styled.CalculatorContainer>
    </Styled.Container>
  );
};

CalculatorModal.propTypes = {
  setDisplayCalculatorModal: P.func.isRequired,
  displayCalculatorModal: P.bool.isRequired,
};
