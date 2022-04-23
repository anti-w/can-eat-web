import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, displayCalculatorModal }) => css`
    display: flex;
    padding: 1rem;
    padding-top: 5rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    ${displayCalculatorModal && hiddenOverflow()}
  `}
`;

const hiddenOverflow = () => css`
  overflow-y: hidden;
`;
