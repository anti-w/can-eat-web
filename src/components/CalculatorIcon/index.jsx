import React from 'react';
import * as Styled from './styles';

import { CalculatorFill } from '@styled-icons/bootstrap';
export const CalculatorIcon = () => {
  return (
    <Styled.Container as="button">
      <CalculatorFill color="white" width={30} />
    </Styled.Container>
  );
};
