import styled, { css } from 'styled-components';

export const Grid = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    display: grid;
    margin-top: -1rem;
    grid-template-columns: 1fr 1fr;
    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    padding-top: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${theme.media.lteMedium} {
      padding-top: 0;
    }
  `}
`;
