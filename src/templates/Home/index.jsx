import { GridTwoColumns } from '../../components/GridTwoColumns';

import { GlobalStyles } from '../../styles/global-styles';
import { useDarkMode } from '../../styles/useDarkMode';

import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../styles/theme';
import { Menu } from '../../components/Menu';
import { GridThreeColumns } from '../../components/GridThreeColumns';

export const linksMock = [
  {
    link: '#calculator',
    children: 'Calcular',
    newTab: false,
  },
  {
    link: '#infos',
    children: 'Infos',
    newTab: false,
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
      <GridThreeColumns />
      <GridTwoColumns />
    </ThemeProvider>
  );
}

export default Home;
