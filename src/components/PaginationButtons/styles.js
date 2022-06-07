import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    width: 100%;
  `}
`;
