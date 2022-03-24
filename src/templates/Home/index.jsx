import { GlobalStyles } from '../../styles/global-styles';
import { useDarkMode } from '../../styles/useDarkMode';
import { darkTheme, lightTheme } from '../../styles/theme';

import { ThemeProvider } from 'styled-components';

import { GridTwoColumns } from '../../components/GridTwoColumns';
import { Menu } from '../../components/Menu';
import { GridThreeColumns } from '../../components/GridThreeColumns';
import { Footer } from '../../components/Footer';
import { GridTeam } from '../../components/GridTeam';

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
    link: '#team',
    children: 'Equipe',
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
      <GridTeam theme={theme} />
      <Footer />
    </ThemeProvider>
  );
}

export default Home;
