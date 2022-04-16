import * as Styled from './styles';

import { FlipCard } from '../FlipCard';

const fakeData = [
  {
    _id: '623329764da6a2575d2de2c4',
    nome: 'Abacate, polpa, in natura',
    codigo: 'C0001C',
    grupoAlimentar: 'Frutas e derivados',
    nutrientes: {
      Energiakcal: 76,
      Proteinag: 1.15,
      Carboidratototalg: 5.84,
      Lipidiosg: 6.21,
    },
  },
  {
    _id: '523329764da6a2575d2de2c4',
    nome: 'Abacaxi, in natura',
    codigo: 'C1001C',
    grupoAlimentar: 'Frutas e derivados',
    nutrientes: {
      Energiakcal: 36,
      Proteinag: 2.15,
      Carboidratototalg: 1.84,
      Lipidiosg: 3.51,
    },
  },
  {
    _id: '55129764da6a2575d2de2c4',
    nome: 'Nachos empanados',
    codigo: 'N0001C',
    grupoAlimentar: 'Queijos',
    nutrientes: {
      Energiakcal: 766,
      Proteinag: 2.15,
      Carboidratototalg: 52.15,
      Lipidiosg: 12.21,
    },
  },
];

export const ContainerFlexFoodCard = () => {
  return (
    <Styled.Container>
      {fakeData.map((food, i) => (
        <FlipCard key={i} dataForFront={food} />
      ))}
    </Styled.Container>
  );
};
