import styled, { css } from 'styled-components';

export const ButtonCall = styled.button`
  ${({ theme }) => css`
    border: none;
    padding: 5px 15px;
    background: ${({ theme }) => theme.buttonCall};
    cursor: pointer;
    color: ${({ theme }) => theme.white};
    max-width: 22.5rem;
    height: 5rem;
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
