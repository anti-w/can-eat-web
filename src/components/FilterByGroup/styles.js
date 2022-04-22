import styled, { css } from 'styled-components';

export const Container = styled.li`
  ${({ theme }) => css`
    display: grid;
    height: 26rem;
    width: 80%;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 20px;
    overflow: auto;

    @media ${theme.media.lteMedium} {
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`;
