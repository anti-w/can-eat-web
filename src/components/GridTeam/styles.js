import styled, { css } from 'styled-components';
import { Container } from '../SectionContainer/styles';

export const Grid = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media ${theme.media.lteMedium} {
      flex-direction: column;
    }
  `}
`;

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    padding-top: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${theme.media.lteMedium} {
      padding-top: 0;
    }
  `}
`;
