import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    margin: 2rem 0;
    padding: 0 5rem;
    justify-content: center;
    align-items: center;

    @media ${theme.media.lteMedium} {
      margin-top: 0;

      h1 {
        font-size: 34px;
      }
    }
  `}
`;
