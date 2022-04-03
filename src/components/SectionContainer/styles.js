import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    margin: 0 6rem;
    justify-content: center;
    align-items: center;

    @media ${theme.media.lteMedium} {
      margin: 0 1px;
      h1 {
        font-size: 34px;
      }
    }
  `}
`;
