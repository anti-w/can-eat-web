import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, displayCalculatorModal }) => css`
    display: flex;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    ${displayCalculatorModal && hiddenOverflow()}
  `}
`;

const hiddenOverflow = () => css`
  overflow-y: hidden;
`;
