import React, { useContext, useState } from 'react';
import * as Styled from './styles';
import P from 'prop-types';

import { CalculatorContext } from '../../context/calculatorContext';
import { TittleWithIcons } from '../TittleWithIcons';

export const FrontFoodCard = ({
  setIsFlipped,
  isFlipped,
  data,
}) => {
  const [grams, setGrams] = useState(1);
  const { order, saveMeal, carbsTotal } = useContext(
    CalculatorContext,
  );
  const { nome, grupoAlimentar, nutrientes } = data;

  const {
    Energiakcal: cals,
    Proteinag: proteins,
    Carboidratototalg: carbs,
    Lipidiosg: fats,
  } = nutrientes;

  return (
    <Styled.Container>
      <Styled.TitleWithIcons
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <TittleWithIcons title={nome} />
      </Styled.TitleWithIcons>
      <Styled.NutrientsContainer>
        <p>{cals * grams}cals</p>
        <p>P/G/C</p>
        <p>
          {proteins * grams}/{fats * grams}/{carbs * grams}
        </p>
      </Styled.NutrientsContainer>
      <Styled.DescriptionContainer
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <p>{nome}</p>
      </Styled.DescriptionContainer>
      <Styled.ButtonsContainer>
        <Styled.CustomPlusCircleFill
          onClick={() => setGrams(grams + 1)}
        />
        <input value={grams + 'g'} />
        <Styled.CustomDashCircleFill
          onClick={() => grams >= 1 && setGrams(grams - 1)}
        />

        <button
          onClick={() => {
            order(
              nome,
              carbs * grams,
              proteins * grams,
              cals * grams,
              fats * grams,
              grams,
            );
          }}
        >
          Order
        </button>
      </Styled.ButtonsContainer>
    </Styled.Container>
  );
};

FrontFoodCard.propTypes = {
  setIsFlipped: P.func,
  isFlipped: P.bool,
  data: P.object.isRequired,
};
