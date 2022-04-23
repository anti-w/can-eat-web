import styled, { css } from 'styled-components';

export const GroupsContainer = styled.ul`
  ${({ theme }) => css`
    display: grid;
    height: 26rem;
    width: 90%;
    grid-template-columns: repeat(5, 1fr);
    overflow: auto;
    margin-bottom: 1rem;

    @media ${theme.media.lteMedium} {
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`;
