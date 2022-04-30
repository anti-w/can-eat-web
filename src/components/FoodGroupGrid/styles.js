import styled, { css } from 'styled-components';

export const GroupsContainer = styled.ul`
  ${({ theme }) => css`
    margin-top: 5rem;
    border: 1px solid gray;
    display: grid;
    height: 22rem;
    width: 90%;
    grid-template-columns: repeat(5, 1fr);
    overflow: auto;
    margin-bottom: 1rem;
    background: ${theme.background};

    @media ${theme.media.lteMedium} {
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`;

export const ModalContainer = styled.div`
  ${({ theme, displayCalculatorModal }) => css`
    z-index: 99999;
    background-color: rgba(0, 0, 0, 0.25);
    top: 0;
    position: fixed;
    display: flex;
    padding: 2rem;
    justify-content: center;
    height: 100vh;
    width: 100%;
  `}
`;
