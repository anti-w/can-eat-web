import P from 'prop-types';
import * as Styled from './styles';

export const Description = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

Description.propTypes = {
  children: P.node.isRequired,
};
