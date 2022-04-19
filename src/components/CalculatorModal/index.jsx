import React, { useContext } from 'react';
import P from 'prop-types';
import * as Styled from './styles';

import { CalculatorContext } from '../../context/calculatorContext';

import { NutrientsIcons } from '../NutrientsIcons';
import { TrashFill } from '@styled-icons/bootstrap';
import { FoodCardIcon } from '../FoodCardIcons';

export const CalculatorModal = ({
  setDisplayCalculatorModal,
  displayCalculatorModal,
}) => {
  const { food, unorder, calsTotal } = useContext(
    CalculatorContext,
  );

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
          {/* {food.map((foods, i) => (
            <Styled.TitleWithIcons key={i}>
              <Nutrients
            </Styled.TitleWithIcons>
          ))} */}
        </Styled.FoodsContainer>
        <h1 style={{ color: 'white' }}>{calsTotal}</h1>
      </Styled.CalculatorContainer>
    </Styled.Container>
  );
};

CalculatorModal.propTypes = {
  setDisplayCalculatorModal: P.func.isRequired,
  displayCalculatorModal: P.bool.isRequired,
};
