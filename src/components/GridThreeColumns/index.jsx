import * as Styled from './styles';

import { InfoCard } from '../InfoCard';
import { SectionContainer } from '../SectionContainer';

export const GridThreeColumns = () => {
  return (
    <SectionContainer>
      <Styled.Container id="infos">
        <InfoCard
          coverUrl="data:image/png;base64,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"
          firstText="Base de dados Brasileira"
          secondText="Dados fidedignos mantidos por empresas que realmente se importam com a informação correta."
          key={1}
        />
        <InfoCard
          coverUrl="https://cdn-icons-png.flaticon.com/512/2771/2771460.png"
          firstText="Mais de 5000 alimentos"
          secondText="Todos os alimentos do Brasil em um só lugar!"
          key={2}
        />
        <InfoCard
          coverUrl="https://cdn-icons-png.flaticon.com/512/683/683488.png"
          firstText="Armazene suas refeições"
          secondText="Tenha acesso as suas refeições onde quiser, quando quiser e gratuitamente"
          key={3}
        />
      </Styled.Container>
    </SectionContainer>
  );
};
