import * as Styled from './styles';

import { Button } from '../Button';
import { Description } from '../Description';
import { Heading } from '../Heading';
import { SectionContainer } from '../SectionContainer';

export const GridTwoColumns = () => {
  return (
    <SectionContainer>
      <Styled.FlexGrid>
        <Heading size="huge">
          Cuidar da sua saúde nunca foi tão fácil
        </Heading>
        <Styled.ImgContainer>
          <img src="https://cdn-icons-png.flaticon.com/512/5854/5854128.png" />
        </Styled.ImgContainer>

        <Description>
          Não comece uma dieta que terminará algum dia.
          Comece um estilo de vida que durará para sempre!
        </Description>
        <br></br>
        <Button />
      </Styled.FlexGrid>
    </SectionContainer>
  );
};
