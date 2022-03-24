import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    display: flex;
    margin: 2rem 0;
    margin-top: 3rem;
    height: 10vh;
    padding: 0 5rem;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.menuIcon};
  `}
`;
