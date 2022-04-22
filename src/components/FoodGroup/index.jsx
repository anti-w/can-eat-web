import P from 'prop-types';
import * as Styled from './styles';

export const FoodGroup = ({ name, srcImg }) => {
  return (
    <Styled.Container>
      <img src={srcImg} width={36} height={36} />
      <Styled.Label>{name}</Styled.Label>
    </Styled.Container>
  );
};

FoodGroup.propTypes = {
  srcImg: P.string.isRequired,
  name: P.string.isRequired,
};
