import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    margin-top: 4rem;
    padding: 0 2rem;
    padding-bottom: 5rem;
  `}
`;
