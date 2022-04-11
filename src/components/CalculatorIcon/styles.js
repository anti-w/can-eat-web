import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    border-radius: 50%;
    width: 4.2rem;
    height: 4.2rem;
    background: ${theme.heading};
    bottom: 2rem;
    right: 2rem;
  `}
`;
