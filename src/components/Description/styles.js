import styled, { css } from 'styled-components';

export const Container = styled.h4`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.primaryText};
    font-weight: 500;
    font-size: 20px;
  `}
`;
