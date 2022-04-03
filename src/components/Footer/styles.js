import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    display: flex;
    height: 10vh;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.menuIcon};

    @media ${theme.media.lteMedium} {
      flex-direction: column;
      justify-content: center;
      margin: 6rem;
    }
  `}
`;
