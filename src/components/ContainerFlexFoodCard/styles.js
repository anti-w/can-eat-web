import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding-top: 6rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media ${theme.media.lteMedium} {
      flex-direction: column;
    }
  `}
`;
