import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, bgColor }) => css`
    display: flex;
    padding: 0.64rem;
    height: 3rem;
    width: 3rem;
    justify-content: center;
    align-items: center;
    border-radius: 40%;
    ${backgroundColor[bgColor](theme)};
  `}
`;

const backgroundColor = {
  calories: (theme) => css`
    background: ${theme.icons.bgColors.calories};
  `,
  carbs: (theme) => css`
    background: ${theme.icons.bgColors.carbs};
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
