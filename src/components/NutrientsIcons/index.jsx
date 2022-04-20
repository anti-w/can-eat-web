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

export const NutrientsIcons = ({ nutrients }) => {
  var greaterNutrient = Math.max(...nutrients);
  return (
    <Styled.IconsContainer>
      <div>
        <FoodCardIcon bgColor="calories">
          <FireIcon color="white" />
        </FoodCardIcon>
        <Styled.NutrientsContainer bgColor="calories">
          {nutrients[0]}
        </Styled.NutrientsContainer>
      </div>
      <div>
        <FoodCardIcon bgColor="proteins">
          <EggFill color="white" />
        </FoodCardIcon>
        <Styled.NutrientsContainer bgColor="proteins">
          {nutrients[1]}
        </Styled.NutrientsContainer>
      </div>
      <div>
        <FoodCardIcon bgColor="fats">
          <PizzaSlice color="white" />
        </FoodCardIcon>
        <Styled.NutrientsContainer bgColor="fats">
          {nutrients[2]}
        </Styled.NutrientsContainer>
      </div>
      <div>
        <FoodCardIcon bgColor="carbs">
          <BreadSlice color="white" />
        </FoodCardIcon>
        <Styled.NutrientsContainer bgColor="carbs">
          {nutrients[3]}
        </Styled.NutrientsContainer>
      </div>
    </Styled.IconsContainer>
  );
};
NutrientsIcons.propTypes = {
  nutrients: P.array.isRequired,
};
