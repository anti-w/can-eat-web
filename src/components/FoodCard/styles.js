import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 1rem;
    width: 30rem;
    height: 24rem;
    background: ${theme.background};
    border: 1px solid ${theme.menuIcon};
    border-radius: 10%;
  `}
`;
export const IconsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
  `}
`;
