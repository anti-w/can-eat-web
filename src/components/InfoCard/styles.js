import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    border: gray 1px solid;
    border-radius: 10%;
    width: 30rem;
    height: 30rem;

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
      width: 15rem;
      height: 22rem;
      margin: 0;
      padding: 0;

      h2 {
        font-size: 14px;
      }

      h4 {
        font-size: 12px;
      }
    }
  `}
`;
