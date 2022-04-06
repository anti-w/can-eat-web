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
    background: ${({ theme }) => theme.background};

    @media ${theme.media.lteMedium} {
      height: 100vh;
      visibility: hidden;
      opacity: 0;
      ${visible && menuVisible()}

      
    

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
    justify-content: space-between;
    align-items: center;
    margin-left: 6rem;
    margin-right: 6rem;
    h1 {
      color: ${theme.primaryText};
    }
    @media ${theme.media.lteMedium} {
      height: 100vh;
      flex-direction: column;
      align-items: center;
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
