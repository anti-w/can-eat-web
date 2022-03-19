import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    max-width: 50%;
    margin: 8rem auto 0;
  `}
`;
