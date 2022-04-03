import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: gray 1px solid;
    border-radius: 10%;
    margin: 2.5rem;
    width: 30rem;
    height: 33rem;
    background-color: red;

    img {
      align-self: center;
      margin-bottom: 2.5rem;
      width: 5rem;
      height: auto;
    }

    h2 {
      margin-bottom: 2.5rem;
    }

    @media ${theme.media.lteMedium} {
    }
  `}
`;
