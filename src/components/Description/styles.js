import styled, { css } from 'styled-components';

export const Container = styled.h4`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.primaryText};
    font-weight: 500;
    font-size: ${theme.fonts.sizes.medium};
    text-align: center;

    @media ${theme.media.lteMedium} {
      font-size: ${theme.fonts.sizes.small};
    }
  `}
`;
