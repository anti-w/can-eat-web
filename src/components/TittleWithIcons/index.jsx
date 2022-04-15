import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

import { EggFill } from '@styled-icons/bootstrap';
import { FireIcon } from '@heroicons/react/solid';
import {
  PizzaSlice,
  BreadSlice,
} from '@styled-icons/fa-solid';

import { FoodCardIcon } from '../FoodCardIcons';
import { Heading } from '../Heading';

export const TittleWithIcons = ({ title }) => {
  return (
    <>
      <Heading as="h4" size="xsmall">
        {title}
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
    </>
  );
};

TittleWithIcons.propTypes = {
  title: P.string.isRequired,
};
