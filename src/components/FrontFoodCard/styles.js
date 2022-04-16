import styled, { css } from 'styled-components';
import {
  PlusCircleFill,
  DashCircleFill,
} from '@styled-icons/bootstrap';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: 2rem;
    padding: 2.5rem;
    width: 28rem;
    height: 25rem;
    background: ${theme.background};
    border: 1.75px solid gray;
    border-radius: 10%;
    flex-direction: column;
    box-shadow: -10px 8px 10px -9px #000;
  `}
`;

export const NutrientsContainer = styled.span`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
    align-items: center;
    font-weight: 600;
    padding: 0.5rem;
    width: 100%;
    height: 4vh;
    color: ${theme.primaryText};
    font-size: ${theme.fonts.sizes.xxsmall};
  `}
`;

export const DescriptionContainer = styled.span`
  ${({ theme }) => css`
    width: 100%;
    height: 15vh;
    margin: 1.5rem 0;
    color: gray;
    text-align: justify;
    font-size: 12px;
  `}
`;

export const CustomPlusCircleFill = styled(PlusCircleFill)`
  ${({ theme }) => css`
    color: ${theme.menuIcon};
    width: 2rem;
    cursor: pointer;
  `}
`;
export const CustomDashCircleFill = styled(DashCircleFill)`
  ${({ theme }) => css`
    color: ${theme.menuIcon};
    width: 2rem;
    cursor: pointer;
  `}
`;

export const ButtonsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 5vh;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;

    input,
    button {
      border-radius: 15%;
      font-weight: bold;
      text-align: center;
    }

    input {
      width: 30%;
      height: 22px;
      margin: 0 -4rem;
      color: ${theme.heading};
    }

    button {
      width: 30%;
      height: 30px;
      background: ${theme.heading};
      color: ${theme.white};
      border: none;
      cursor: pointer;
    }
  `}
`;

export const IconsContainer = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const TitleWithIcons = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `}
`;
