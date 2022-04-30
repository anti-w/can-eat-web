import styled, { css } from 'styled-components';

export const FoodsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    margin-top: 3.5rem;
    justify-content: center;
    align-items: center;
    overflow: auto;
  `}
`;
