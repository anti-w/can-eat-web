import styled, { css } from 'styled-components';
import { ButtonCall } from '../Button/styles';

export const FlexGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    padding: 2.2rem;
    padding-top: 0rem;
    padding-bottom: 2rem;
    grid-template-columns: 1.15fr 0.75fr;
    gap: 16px;
    align-items: center;

    ${ButtonCall} {
      margin: 0;
    }

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 24px;
    }
  `}
`;

export const ImgContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 8rem;
    img {
      width: 35rem;
      height: auto;
    }
    @media ${theme.media.lteMedium} {
      padding: 0;
      img {
        width: 25rem;
        height: 25rem;
      }
    }
  `}
`;
