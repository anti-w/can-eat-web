import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    padding: 4.2rem;
    @media ${theme.media.lteMedium} {
      h1 {
        font-size: 34px;
      }
    }
  `}
`;
