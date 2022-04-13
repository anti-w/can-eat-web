import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 1.6rem;
    margin: 3rem;
    justify-content: space-between;
    flex-direction: column;
    border: gray 2px solid;
    border-radius: 10%;
    width: 30rem;
    height: 32rem;

    img {
      align-self: center;
      width: 5rem;
      height: auto;
    }

    h3 {
      height: 10vh;
      width: 100%;
    }

    @media ${theme.media.lteMedium} {
      width: 28rem;
      height: 26rem;
    }
  `}
`;
