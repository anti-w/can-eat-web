import React, { useContext, useState } from 'react';
import * as Styled from './styles';
import P from 'prop-types';

import { CalculatorContext } from '../../context/calculatorContext';
import { TittleWithIcons } from '../TittleWithIcons';

export const FrontFoodCard = ({
  setIsFlipped,
  isFlipped,
}) => {
  const [grams, setGrams] = useState(100);
  const { order, foods, saveMeal, carbsTotal } = useContext(
    CalculatorContext,
  );

  return (
    <Styled.Container>
      <Styled.TitleWithIcons
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <TittleWithIcons title="Teste" />
      </Styled.TitleWithIcons>
      <Styled.NutrientsContainer>
        <p>{100 * (grams / 100)}cals</p>
        <p>P/G/C</p>
        <p>
          {62 * (grams / 100)}/{55 * (grams / 100)}/
          {102 * (grams / 100)}
        </p>
      </Styled.NutrientsContainer>
      <Styled.DescriptionContainer
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <p>{`Abóbora, cabotian (japonesa), c/ quiabo, refogado (c/ óleo, cebola e alho), c/ salsa, c/ sal, << Pumpkin, squash, cabotian, with okra, braised (with oil, onion and garlic, withsalthdiasuhduiashduiashduiahsuik`}</p>
      </Styled.DescriptionContainer>
      <Styled.ButtonsContainer>
        <Styled.CustomPlusCircleFill
          onClick={() => setGrams(grams + 100)}
        />
        <input value={grams + 'g'} />
        <Styled.CustomDashCircleFill
          onClick={() =>
            grams >= 100 && setGrams(grams - 100)
          }
        />
        <button
          onClick={() => {
            order('Name', 1, 1, 2, 3, 100);
            order('Name2', 50, 50, 2, 3, 100);
            saveMeal('Teste refeição', foods);
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
};
