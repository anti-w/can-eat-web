import React, { useContext, useState } from 'react';
import * as Styled from './styles';
import P from 'prop-types';

import { CalculatorContext } from '../../context/calculatorContext';
import { NutrientsIcons } from '../NutrientsIcons';
import { Heading } from '../Heading';

export const FrontFoodCard = ({
  setIsFlipped,
  isFlipped,
  data,
}) => {
  const [grams, setGrams] = useState(1);
  const { order } = useContext(CalculatorContext);
  const { nome, grupoAlimentar, nutrientes } = data;

  console.log(data);

  const {
    Energiakcal: cals,
    Proteínag: proteins,
    Carboidratototalg: carbs,
    Lipídiosg: fats,
  } = nutrientes;

  let calsPerGrams = parseFloat((cals * grams).toFixed());
  let proteinsPerGrams = parseFloat(
    (proteins * grams).toFixed(),
  );
  let fatsPerGrams = parseFloat((fats * grams).toFixed());
  let carbsPerGrams = parseFloat((carbs * grams).toFixed());

  return (
    <Styled.Container>
      <Styled.TitleWithDescription>
        <Heading size="xsmall">{nome}</Heading>
        <h4>{grupoAlimentar}</h4>
      </Styled.TitleWithDescription>
      <Styled.ButtonsContainer>
        <h4>{grams * 100 + 'g'}</h4>
        <Styled.IconsContainer>
          <Styled.CustomPlusCircleFill
            onClick={() => setGrams(grams + 1)}
          />
          <Styled.CustomDashCircleFill
            onClick={() =>
              grams >= 1 && setGrams(grams - 1)
            }
          />
          <Styled.CustomBookAdd
            onClick={() =>
              order(
                nome,
                carbsPerGrams,
                proteinsPerGrams,
                calsPerGrams,
                fatsPerGrams,
                grams,
              )
            }
          />
        </Styled.IconsContainer>
      </Styled.ButtonsContainer>
      <NutrientsIcons
        nutrients={[
          calsPerGrams,
          proteinsPerGrams,
          fatsPerGrams,
          carbsPerGrams,
        ]}
      />
    </Styled.Container>
  );
};

FrontFoodCard.propTypes = {
  setIsFlipped: P.func,
  isFlipped: P.bool,
  data: P.object.isRequired,
};
