import styled, { css } from 'styled-components';

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
    background: ${theme.background};

    @media ${theme.media.lteMedium} {
      height: 100vh;
      visibility: hidden;
      opacity: 0;      
      ${visible && menuVisible()};       

  `}
`;

export const ButtonsContainer = styled.div`
  ${({ theme }) => css`
    justify-content: center;
    display: flex;

    @media ${theme.media.lteMedium} {
      flex-direction: column;
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 0.3rem 4.2rem;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    h1 {
      color: ${theme.primaryText};
    }
    @media ${theme.media.lteMedium} {
      height: 100vh;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: ${theme.spacings.xxlarge} 0;
    }
  `}
`;

export const Button = styled.div`
  ${({ theme, visible }) => css`
    z-index: 6;
    position: fixed;
    padding: 2rem;
    top: 0;
    color: ${({ theme }) => theme.menuIcon};
    width: 100%;
    height: 5vh;
    pointer-events: ${visible ? 'none' : 'all'};
    h1 {
      width: 100%;
    }
    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `}
`;
