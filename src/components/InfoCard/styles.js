import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    border: gray 1px solid;
    margin: 0 3rem;
    padding: 1.5rem 2rem;
    border-radius: 10%;
    width: 30rem;
    height: 30rem;

    img {
      margin-bottom: 2.5rem;
    }

    h2 {
      margin-bottom: 2.5rem;
    }
  `}
`;
