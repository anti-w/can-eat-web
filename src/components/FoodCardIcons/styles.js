import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, bgColor }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin: 0 0.3rem;
    ${backgroundColor[bgColor](theme)};
  `}
`;

const backgroundColor = {
  calories: (theme) => css`
    background: ${theme.icons.bgColors.calories};
  `,
  carb: (theme) => css`
    background: ${theme.icons.bgColors.carb};
  `,
  proteins: (theme) => css`
    background: ${theme.icons.bgColors.proteins};
  `,
  fats: (theme) => css`
    background: ${theme.icons.bgColors.fats};
  `,
  trash: (theme) => css`
    background: ${theme.icons.bgColors.trash};
  `,
};
