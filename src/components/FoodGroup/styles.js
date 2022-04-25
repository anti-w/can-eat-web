import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    opacity: 0.5;
    padding: 0.5rem;
    display: flex;
    max-width: 18rem;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    border-radius: 5%;
    &:hover {
      font-weight: bold;
      opacity: 1;
    }
  `}
`;

export const GroupIconContainer = styled.div`
  display: flex;
  border-radius: 50%;
  padding: 0.5rem;
  background: white;
  justify-content: center;
  align-items: center;
`;
export const GroupIcon = styled.img`
  width: 26px;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.primaryText};
    margin-left: 1rem;
    font-size: 1.1rem;
    width: 75%;
    cursor: pointer;
  `}
`;
