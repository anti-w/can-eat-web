import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
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
