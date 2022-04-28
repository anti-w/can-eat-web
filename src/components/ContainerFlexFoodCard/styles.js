import styled, { css } from 'styled-components';

export const FoodsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    padding-top: 3.5rem;
    overflow: scroll;
    justify-content: center;
    align-items: center;

    @media ${theme.media.lteMedium} {
    }
  `}
`;
