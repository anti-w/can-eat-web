import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 6rem;
    height: 100vh;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;

    @media ${theme.media.lteMedium} {
      flex-direction: column;
      height: auto;
    }
  `}
`;
