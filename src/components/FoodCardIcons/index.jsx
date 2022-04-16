import P from 'prop-types';
import * as Styled from './styles';

export const FoodCardIcon = ({ bgColor, children }) => {
  return (
    <Styled.Container bgColor={bgColor}>
      {children}
    </Styled.Container>
  );
};

FoodCardIcon.propTypes = {
  children: P.node.isRequired,
  bgColor: P.oneOf([
    'carb',
    'calories',
    'proteins',
    'fats',
    'trash',
  ]),
};
