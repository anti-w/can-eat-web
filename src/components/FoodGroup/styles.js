import styled, { css } from 'styled-components';

export const Container = styled.ul`
  ${({ theme }) => css`
    display: flex;
    padding: 0 1rem;
    max-width: 18rem;
    height: 8.2rem;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.primaryText};
    font-size: 1.2rem;
  `}
`;
