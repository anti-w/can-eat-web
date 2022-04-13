import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme, size }) => css`
    color: ${theme.heading};
    ${titleSize[size](theme)}
  `};
`;

const titleSize = {
  xsmall: (theme) => css`
    @media ${theme.media.lteMedium} {
      font-size: ${theme.fonts.sizes.small};
    }
  `,

  small: (theme) => css`
    font-size: ${theme.fonts.sizes.medium};
    @media ${theme.media.lteMedium} {
      font-size: ${theme.fonts.sizes.small};
    }
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.large};
    @media ${theme.media.lteMedium} {
      font-size: ${theme.fonts.sizes.small};
    }
  `,

  big: (theme) => css`
    font-size: ${theme.fonts.sizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.fonts.sizes.xhuge};
    ${mediaFont(theme)};
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.fonts.sizes.xlarge};
  }
`;
