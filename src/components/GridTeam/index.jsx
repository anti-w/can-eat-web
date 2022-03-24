import * as Styled from './styles';

import { MemberTeamCard } from '../MemberTeamCard';
import { SectionContainer } from '../SectionContainer';
import { Heading } from '../Heading';

export const GridTeam = () => {
  return (
    <SectionContainer>
      <Styled.TitleContainer id="team">
        <Heading as="h1" size="big">
          Equipe
        </Heading>
      </Styled.TitleContainer>

      <Styled.Grid>
        <MemberTeamCard
          linkedin="https://www.linkedin.com/in/anti-w/"
          photo="https://avatarfiles.alphacoders.com/860/thumb-86002.png"
          gitHub="https://www.github.com/anti-w/"
          name="Wendel Demétrio"
          role="Developer"
        />
        <MemberTeamCard
          linkedin="https://www.linkedin.com/in/anti-w/"
          photo="https://avatarfiles.alphacoders.com/860/thumb-86002.png"
          gitHub="https://www.github.com/anti-w/"
          name="Lucas Vilela"
          role="UI/UX Designer"
        />
      </Styled.Grid>
    </SectionContainer>
  );
};
