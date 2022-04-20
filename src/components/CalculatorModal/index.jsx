import React, { useContext } from 'react';
import P from 'prop-types';
import * as Styled from './styles';

import { CalculatorContext } from '../../context/calculatorContext';

import { NutrientsIcons } from '../NutrientsIcons';
import { TrashFill } from '@styled-icons/bootstrap';

export const CalculatorModal = ({
  setDisplayCalculatorModal,
  displayCalculatorModal,
}) => {
  const {
    food,
    unorder,
    calsTotal,
    proteinsTotal,
    fatsTotal,
    carbsTotal,
  } = useContext(CalculatorContext);

  return (
    <Styled.ModalContainer
      displayCalculatorModal={displayCalculatorModal}
    >
      <div
        style={{
          display: 'flex',
          height: '80vh',
          alignItems: 'flex-end',
        }}
      >
        <img
          height="280px"
          src="https://res.cloudinary.com/dscztnlqq/image/upload/v1650202813/can-eat/4463938_mj3ciw.png"
        />
      </div>

      <Styled.CalculatorContainer>
        <Styled.CloseButton
          onClick={() => setDisplayCalculatorModal(false)}
        />
        <Styled.FoodsContainer>
          {/* {food.map((foods, i) => (
            <Styled.TitleWithIcons key={i}>
              <Nutrients
            </Styled.TitleWithIcons>
          ))} */}
        </Styled.FoodsContainer>
        <NutrientsIcons
          nutrients={[
            calsTotal,
            proteinsTotal,
            fatsTotal,
            carbsTotal,
          ]}
        />
      </Styled.CalculatorContainer>
    </Styled.ModalContainer>
  );
};

CalculatorModal.propTypes = {
  setDisplayCalculatorModal: P.func.isRequired,
  displayCalculatorModal: P.bool.isRequired,
};
