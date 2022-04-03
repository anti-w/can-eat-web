import styled, { css } from 'styled-components';

export const ButtonCall = styled.button`
  ${({ theme }) => css`
    border: none;
    padding: 5px 15px;
    margin: 1rem;
    background: ${({ theme }) => theme.buttonCall};
    cursor: pointer;
    color: ${({ theme }) => theme.white};
    height: 4rem;
    border-radius: 5%;
    font-size: ${({ theme }) => theme.fonts.sizes.small};
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}
`;
