import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    text-align: center;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    min-height: 70rem;
    gap: 32px;
    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
    
    }
  `}
`;
