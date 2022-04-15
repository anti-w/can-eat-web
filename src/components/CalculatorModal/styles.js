import styled, { css } from 'styled-components';
import {
  TitleWithIcons as Header,
  IconsContainer as Icons,
} from '../FrontFoodCard/styles';

export const TitleWithIcons = Header;
export const IconsContainer = Icons;

export const Container = styled.div`
  ${({ theme, displayCalculatorModal }) => css`
    background-color: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: fixed;
    visibility: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    ${displayCalculatorModal && calculatorVisible()}
  `}
`;

const calculatorVisible = () => css`
  visibility: visible;
  opacity: 1;
`;

export const CalculatorContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    border: 1.5px solid gray;
  `}
`;

export const FoodsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;
  `}
`;
