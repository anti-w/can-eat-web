import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding-top: 4rem;
    width: 100%;
    height: 30%;
  `}
`;
