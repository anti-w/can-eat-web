import { useEffect, useState } from 'react';
import * as Styled from './styles';

import { FlipCard } from '../FlipCard';

import { getFoodsPerPages } from '../../services/foods';

export const ContainerFlexFoodCard = () => {
  const [dataForFront, setDataForFront] = useState([]);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await getFoodsPerPages(pages);
      setDataForFront(data);
    })();
  }, [pages]);

  return (
    <Styled.Container>
      {dataForFront.map((food, i) => (
        <FlipCard key={i} dataForFront={food} />
      ))}
      <button onClick={() => setPages(pages + 1)}>
        Avançar
      </button>
      <button
        onClick={() => pages > 0 && setPages(pages - 1)}
      >
        Voltar
      </button>
    </Styled.Container>
  );
};
