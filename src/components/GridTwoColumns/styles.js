import styled, { css } from 'styled-components';

export const FlexGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    padding: 12.5px 0;
    grid-template-columns: 1.15fr 0.75fr;
    overflow-x: hidden;
    gap: 16px;
    align-items: center;
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
    margin-top: 10rem;
    img {
      width: 36rem;
      height: auto;
    }
    @media ${theme.media.lteMedium} {
      margin-top: 2rem;
      img {
        width: 25rem;
        height: 25rem;
      }
    }
  `}
`;
