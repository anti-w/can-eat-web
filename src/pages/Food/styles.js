import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, displayCalculatorModal }) => css`
    display: flex;
    overflow: auto;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${displayCalculatorModal && hiddenOverflow()}
  `}
`;

const hiddenOverflow = () => css`
  overflow-y: hidden;
`;
