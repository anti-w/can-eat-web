import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    border-radius: 50%;
    width: 4.2rem;
    height: 4.2rem;
    background: ${theme.heading};
    bottom: 2.4rem;
    right: 4rem;

    @media ${theme.media.lteMedium} {
      right: 2rem;
    }
  `}
`;

export const CountItensContainer = styled.div`
  ${({ theme }) => css`
    width: 2rem;
    height: 2rem;
    font-weight: bold;
    display: flex;
    font-size: 1.3rem;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: white;
    position: fixed;
    right: 3rem;
    bottom: 6.2rem;
    background: ${theme.heading};

    @media ${theme.media.lteMedium} {
      bottom: 6.6rem;
      right: 1.8rem;
    }
  `}
`;
