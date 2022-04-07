import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media ${theme.media.lteMedium} {
      flex-direction: column;
    }
  `}
`;
