import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 32px;
    margin: 4rem 0;
    grid-template-columns: 1fr 1fr 1fr;

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;
