import { InfoCard } from '../InfoCard';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export const GridThreeColumns = () => {
  return (
    <Styled.Container id="infos">
      <InfoCard
        coverUrl="a"
        firstText="Base de dados Brasileira"
        secondText="Dados fidedignos mantidos por empresas que realmente se importam com a informação correta."
        key={1}
      />
      <InfoCard
        coverUrl="a"
        firstText="Mais de 5000 alimentos"
        secondText="Todos os alimentos do Brasil em um só lugar!"
        key={2}
      />
      <InfoCard
        coverUrl="a"
        firstText="Armazene suas refeições"
        secondText="Tenha acesso as suas refeições onde quiser, quando quiser e gratuitamente"
        key={3}
      />
    </Styled.Container>
  );
};
