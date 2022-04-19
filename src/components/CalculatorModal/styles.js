import styled, { css } from 'styled-components';
import { IconsContainer as Icons } from '../FrontFoodCard/styles';

export const TitleWithIcons = styled.div`
  justify-content: space-between;
  width: 100%;
  padding: 1.4rem;
  border: 1.5px solid gray;
  border-radius: 5%;
  margin: 1rem 0;
`;
export const IconsContainer = Icons;

export const Container = styled.div`
  ${({ theme, displayCalculatorModal }) => css`
    z-index: 99999;
    background-color: rgba(0, 0, 0, 0.25);
    top: 0;
    position: fixed;
    display: none;
    padding: 2rem;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    visibility: hidden;
    ${displayCalculatorModal && calculatorVisible()}
  `}
`;

const calculatorVisible = () => css`
  visibility: visible;
  opacity: 1;
  display: flex;
`;

export const CalculatorContainer = styled.div`
  ${({ theme }) => css`
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const FoodsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 4rem 2.2rem;
    height: 42rem;
    flex-direction: column;
    align-items: center;
    border: 2px solid gray;
    overflow-y: scroll;
  `}
`;
