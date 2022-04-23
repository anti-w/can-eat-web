import styled, { css } from 'styled-components';

export const Container = styled.li`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    padding: 0 0.3rem;
    max-width: 18rem;
    height: 8.2rem;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-radius: 8%;
    &:hover {
      font-weight: bold;
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.primaryText};
    font-size: 1.2rem;
    width: 70%;
  `}
`;
