import styled, { css } from 'styled-components';

export const IconsContainer = styled.div`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.menuIcon};
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 8rem;
    width: 42rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      border-radius: 50%;
      height: 14rem;
      margin-bottom: 1.4rem;
    }

    @media ${theme.media.lteMedium} {
      margin: 3rem;
      img {
        width: 12rem;
        height: auto;
      }
    }
  `}
`;
