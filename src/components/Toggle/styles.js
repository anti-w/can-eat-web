import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.primaryText};
    background: transparent;
    border: none;
  `}
`;
