import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: 1.8rem;
    padding: ${theme.spacings.small};
    color: ${theme.primaryText};
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0.75rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.heading};
      transition: all 300ms ease-in-out;
    }
    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;
