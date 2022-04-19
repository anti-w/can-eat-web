import styled, { css } from 'styled-components';
import {
  PlusCircleFill,
  DashCircleFill,
} from '@styled-icons/bootstrap';
import { BookAdd } from '@styled-icons/fluentui-system-filled';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    margin: 2rem;
    width: 27rem;
    height: 24rem;
    background: ${theme.background};
    border: 1.75px solid gray;
    border-radius: 10%;
    flex-direction: column;
    box-shadow: -10px 8px 10px -9px #000;

    h4 {
      padding: 0.4rem;
      font-size: 14px;
      color: ${theme.primaryText};
    }
  `}
`;

export const TitleWithDescription = styled.div`
  ${({ theme }) => css`
    height: 4rem;
    h1 {
      font-weight: 500;
    }

    h4 {
      font-weight: 400;
      font-style: italic;
    }
  `}
`;

export const CustomPlusCircleFill = styled(PlusCircleFill)`
  ${({ theme }) => css`
    color: ${theme.primaryText};
    width: 2.2rem;
    cursor: pointer;
  `}
`;
export const CustomDashCircleFill = styled(DashCircleFill)`
  ${({ theme }) => css`
    color: ${theme.primaryText};
    width: 2.2rem;
    cursor: pointer;
  `}
`;

export const CustomBookAdd = styled(BookAdd)`
  ${({ theme }) => css`
    color: ${theme.primaryText};
    width: 2.4rem;
    cursor: pointer;
  `}
`;

export const ButtonsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const IconsContainer = styled.div`
  ${() => css`
    display: flex;
    width: 40%;
    justify-content: space-between;
  `}
`;
