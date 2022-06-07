import styled, { css } from 'styled-components';
import { Container as FoodGroupContainer } from '../FoodGroup/styles';

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
    color: ${({ theme }) => theme.menuIcon};


    @media ${theme.media.lteMedium} {
      height: 100vh;
      visibility: hidden;
      opacity: 0;      
      ${visible && menuVisible()};       

  `}
`;

export const MenuHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
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
    text-align: center;
    padding: 0 4rem;
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
    background-color: ${theme.background};
    position: fixed;
    display: none;
    padding: 2.4rem;
    margin-bottom: 4rem;
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

export const ButtonIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Filter = styled.div`
  ${FoodGroupContainer} {
    opacity: 1;
    font-weight: bold;
    width: 15rem;

    label {
      font-size: 13px;
      text-align: center;
    }
  }
`;
