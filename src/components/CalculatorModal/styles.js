import styled, { css } from 'styled-components';
import {
  TitleWithIcons as Header,
  IconsContainer as Icons,
} from '../FrontFoodCard/styles';

export const TitleWithIcons = styled(Header)`
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
    background-color: rgba(0, 0, 0, 0.25);
    display: flex;
    padding: 2rem;
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
