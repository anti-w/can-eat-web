import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, displayCalculatorModal }) => css`
    height: 100vh;
    ${displayCalculatorModal && hiddenOverflow()}
  `}
`;

const hiddenOverflow = () => css`
  overflow-y: hidden;
`;
