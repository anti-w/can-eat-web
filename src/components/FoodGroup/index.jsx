import P from 'prop-types';
import * as Styled from './styles';

export const FoodGroup = ({
  name,
  srcImg,
  handleGroupSelect,
}) => {
  return (
    <Styled.Container
      onClick={() => handleGroupSelect(name, srcImg)}
    >
      <Styled.GroupIconContainer>
        <Styled.GroupIcon src={srcImg} />
      </Styled.GroupIconContainer>
      <Styled.Label>{name}</Styled.Label>
    </Styled.Container>
  );
};

FoodGroup.propTypes = {
  srcImg: P.string.isRequired,
  name: P.string.isRequired,
  handleGroupSelect: P.func,
};
