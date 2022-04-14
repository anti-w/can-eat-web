import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 100vh;
    padding: 0;
    text-align: center;
    align-items: center;
    justify-content: center;

    @media ${theme.media.lteMedium} {
      flex-direction: column;
      height: auto;
    }
  `}
`;
