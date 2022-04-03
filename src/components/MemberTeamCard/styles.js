import styled, { css } from 'styled-components';

export const IconsContainer = styled.div`
  ${({ theme }) => css`
    margin-top: 2rem;
    color: ${({ theme }) => theme.menuIcon};
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      border-radius: 50%;
    }

    @media ${theme.media.lteMedium} {
      img {
        width: 12rem;
        height: auto;
      }
    }
  `}
`;
