import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
    scroll-behavior: smooth
}

body {
    font-size: 1.6rem;
    background: ${({ theme }) => theme.background} ;
    font-family: ${({ theme }) =>
      theme.fonts.family.default} ;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
        
}
`;
