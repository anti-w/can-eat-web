import P from 'prop-types';
import { useState } from 'react';
import * as Styled from './styles';

export const PaginationButtons = ({ page, setPage }) => {
  const [pagesNavigator, setPagesNavigator] = useState([0]);
  console.log('pagination buttons ~>', pagesNavigator);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Styled.Container>
      <button
        onClick={() => {
          if (page > 0) {
            setPage(page - 1);
            scrollToTop();
            pagesNavigator.pop();
          }
        }}
      >
        Voltar
      </button>
      {pagesNavigator.map((page, i) => (
        <h3 key={i}>{page}</h3>
      ))}
      <button
        onClick={() => {
          scrollToTop();
          setPage(page + 1);
          pagesNavigator.push(page + 1);
        }}
      >
        Avançar
      </button>
    </Styled.Container>
  );
};
PaginationButtons.propTypes = {
  page: P.number,
  setPage: P.func,
};
