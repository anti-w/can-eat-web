import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    display: flex;
    border: 1px solid black;
    padding-top: 5rem;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    @media ${theme.media.lteMedium} {
    }
  `}
`;
