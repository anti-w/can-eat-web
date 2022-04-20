import React, { useContext, useState } from 'react';
import P from 'prop-types';
import * as Styled from './styles';

import { CalculatorFill } from '@styled-icons/bootstrap';

import { CalculatorContext } from '../../context/calculatorContext';

export const CalculatorIcon = ({
  setDisplayCalculatorModal,
}) => {
  const { food } = useContext(CalculatorContext);
  console.log(food);

  return (
    <>
      <Styled.CountItensContainer>
        {food.length}
      </Styled.CountItensContainer>
      <Styled.Container
        as="button"
        onClick={() => setDisplayCalculatorModal(true)}
      >
        <CalculatorFill color="white" width={30} />
      </Styled.Container>
    </>
  );
};

CalculatorIcon.propTypes = {
  setDisplayCalculatorModal: P.func,
};
