import styled, { css } from 'styled-components';

export const FlexGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    padding: 12.5px 0;
    grid-template-columns: 1.15fr 1fr;
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
    align-items: center;
    justify-content: center;
    margin-top: 10rem;
    img {
      width: 36rem;
      height: 36rem;
    }
    @media ${theme.media.lteMedium} {
      margin-top: 2rem;
      img {
        width: 27.5rem;
        height: 27.5rem;
      }
    }
  `}
`;
