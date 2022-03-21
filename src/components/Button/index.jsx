import * as Styled from './styles';

export const Button = () => {
  return (
    <Styled.ButtonContainer>
      <Styled.ButtonCall
        onClick={() => alert('fui clicado')}
      >
        Conheça gratuitamente
      </Styled.ButtonCall>
    </Styled.ButtonContainer>
  );
};
