import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${({ theme }) => theme.primaryText};
    background: transparent;
    border: none;
    margin-left: 2rem;
  `}
`;
