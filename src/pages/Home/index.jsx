import P from 'prop-types';

import { GridTwoColumns } from '../../components/GridTwoColumns';
import { Menu } from '../../components/Menu';
import { GridThreeColumns } from '../../components/GridThreeColumns';
import { Footer } from '../../components/Footer';
import { GridTeam } from '../../components/GridTeam';

export const linksMock = [
  {
    link: 'foods',
    children: 'Alimentos',
    newTab: false,
  },
  {
    link: '#infos',
    children: 'Informações',
    newTab: false,
  },
  {
    link: '#team',
    children: 'Equipe',
    newTab: false,
  },
];

function Home({ theme, toggleTheme }) {
  return (
    <div>
      <Menu
        links={linksMock}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <GridTwoColumns />
      <GridThreeColumns />
      <GridTeam />
      <Footer />
    </div>
  );
}

Home.propTypes = {
  theme: P.string.isRequired,
  toggleTheme: P.func.isRequired,
};

export default Home;
