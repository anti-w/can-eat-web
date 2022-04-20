import styled, { css } from 'styled-components';

import { IconsContainer } from '../NutrientsIcons/styles';

import { XCircleFill } from '@styled-icons/bootstrap';

export const TitleWithIcons = styled.div`
  justify-content: space-between;
  width: 100%;
  padding: 1.4rem;
  border: 1.5px solid gray;
  border-radius: 5%;
  margin: 1rem 0;
`;

export const ModalContainer = styled.div`
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
    background: ${theme.background};
    margin-left: 3rem;
    border-radius: 10%;
    padding: 2rem;
    display: flex;
    width: 34rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    ${IconsContainer} {
      width: 80%;
    }
  `}
`;

export const CloseButton = styled(XCircleFill)`
  ${({ theme }) => css`
    color: #eee;
    width: 2.4rem;
    cursor: pointer;
  `}
`;

export const FoodsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    height: 28rem;
    flex-direction: column;
    align-items: center;
    border: 1px solid gray;
    overflow-y: scroll;
  `}
`;
