import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    background: red;
  `}
`;
