import P from 'prop-types';
import * as Styled from './styles';

export const FoodCardIcon = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

FoodCardIcon.propTypes = {
  children: P.node.isRequired,
};
