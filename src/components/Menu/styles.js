import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';

const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.background};

    > ${SectionContainer} {
      display: block;
      margin: 0 2rem;
      padding: 0;
    }

    @media ${theme.media.lteMedium} {
      height: 100vh;
      visibility: hidden;
      opacity: 0;
      ${visible && menuVisible()}

      > ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: auto;
      }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge} 0;
    }
  `}
`;

export const Button = styled.div`
  ${({ theme, visible }) => css`
    z-index: 6;
    position: fixed;
    color: ${({ theme }) => theme.menuIcon};
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: none;
    display: none;
    pointer-events: ${visible ? 'none' : 'all'};
    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;
