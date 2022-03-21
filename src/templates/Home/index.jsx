import { Toggle } from '../../components/Toggle';
import { GridTwoColumns } from '../../components/GridTwoColumns';

import { GlobalStyles } from '../../styles/global-styles';
import { useDarkMode } from '../../styles/useDarkMode';

import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../styles/theme';
import { Menu } from '../../components/Menu';

export const linksMock = [
  {
    link: 'teste',
    children: 'teste',
    newTab: false,
  },
  {
    link: 'teste2',
    children: 'teste2',
    newTab: true,
  },
  {
    link: 'teste3',
    children: 'teste3',
    newTab: false,
  },
];

function Home() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode =
    theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />

      <Menu
        links={linksMock}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <GridTwoColumns />
      <GridTwoColumns />
    </ThemeProvider>
  );
}

export default Home;
